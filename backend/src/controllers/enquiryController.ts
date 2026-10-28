import { Request, Response } from 'express';
import { enquiryService } from '../services/enquiryService';
import { emailService } from '../services/emailService';

export class EnquiryController {
  /**
   * POST /api/enquiries (and /api/enquiry)
   */
  public async createEnquiry(req: Request, res: Response): Promise<void> {
    try {
      const clientIp =
        (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() ||
        req.socket.remoteAddress ||
        '127.0.0.1';

      const userAgent = (req.headers['user-agent'] as string) || 'Unknown';

      const result = await enquiryService.processEnquiry(req.body, {
        ip: clientIp,
        userAgent,
      });

      res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        referenceId: result.referenceId,
        errors: result.errors,
      });
    } catch (err: any) {
      console.error('[CONTROLLER ERROR]', err.message);
      res.status(500).json({
        success: false,
        message: 'An internal error occurred while submitting your enquiry. Please call us directly.',
      });
    }
  }

  /**
   * GET /api/health
   */
  public async getHealth(_req: Request, res: Response): Promise<void> {
    const isSmtpConnected = await emailService.verifyConnection();
    res.status(200).json({
      status: 'healthy',
      service: 'sai-world-backend',
      timestamp: new Date().toISOString(),
      smtpStatus: isSmtpConnected ? 'connected' : 'standby_or_simulated',
    });
  }
}

export const enquiryController = new EnquiryController();
