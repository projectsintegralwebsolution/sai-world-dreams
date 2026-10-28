import crypto from 'crypto';
import { EnquiryInput, validateEnquiryInput, ValidatedEnquiryData } from '../utils/validation';
import { generateReferenceId } from '../utils/referenceId';
import { EnquiryPayload } from '../types/enquiry';
import { emailService } from './emailService';

export interface ProcessEnquiryResult {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: string[];
  statusCode: number;
}

export class EnquiryService {
  /**
   * Processes a newly submitted enquiry without database dependencies.
   * 1. Validates and normalizes input data.
   * 2. Generates a collision-safe enquiry reference ID.
   * 3. Asynchronously triggers the three independent notification emails:
   *    - Customer confirmation (if valid email provided)
   *    - Sai World Dreams owner / management notification
   *    - Integral Web Solution developer notification (princekumarjha80@gmail.com)
   * 4. Returns immediate success response with reference ID to the client.
   */
  public async processEnquiry(
    input: EnquiryInput,
    clientMetadata: { ip?: string; userAgent?: string } = {}
  ): Promise<ProcessEnquiryResult> {
    // 1. Validate input
    const validation = validateEnquiryInput(input);
    if (!validation.isValid || !validation.data) {
      if (validation.data?.isSpamBot) {
        // Silently accept bots to waste their time without triggering email notifications
        return {
          success: true,
          message: 'Your enquiry has been received successfully.',
          referenceId: generateReferenceId(),
          statusCode: 200,
        };
      }
      return {
        success: false,
        message: validation.errors[0] || 'Please check your submitted details and try again.',
        errors: validation.errors,
        statusCode: 400,
      };
    }

    const data: ValidatedEnquiryData = validation.data;
    const enquiryId = `ENQ-${Date.now()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const referenceId = generateReferenceId();

    // 2. Build stateless EnquiryPayload
    const enquiryPayload: EnquiryPayload = {
      id: enquiryId,
      referenceId,
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      residenceConfig: data.residenceConfig,
      enquiryType: data.enquiryType,
      enquirySubject: data.enquirySubject,
      message: data.message,
      sourcePageUrl: data.sourcePageUrl,
      formType: data.formType,
      ipAddress: clientMetadata.ip || null,
      userAgent: clientMetadata.userAgent || null,
      createdAt: new Date().toISOString(),
    };

    // 3. Initiate Three-Way Email Notifications asynchronously
    // Background dispatch ensures the client HTTP request completes quickly without waiting for slow SMTP latency
    this.dispatchEmailsInBackground(enquiryPayload);

    return {
      success: true,
      message: 'Your enquiry has been submitted successfully.',
      referenceId: enquiryPayload.referenceId,
      statusCode: 201,
    };
  }

  /**
   * Dispatches the 3 notification emails asynchronously and logs delivery outcomes.
   */
  private async dispatchEmailsInBackground(enquiry: EnquiryPayload): Promise<void> {
    try {
      const results = await emailService.dispatchAllNotifications(enquiry);

      console.log(
        `[ENQUIRY DISPATCHED] Ref: ${enquiry.referenceId} | Customer: ${results.customerStatus} | Owner: ${results.ownerStatus} | Developer: ${results.developerStatus}`
      );
    } catch (err: any) {
      console.error(`[DISPATCH ERROR] Unexpected failure for enquiry ${enquiry.referenceId}:`, err.message);
    }
  }
}

// Export singleton instance
export const enquiryService = new EnquiryService();
