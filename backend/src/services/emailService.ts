import nodemailer, { Transporter } from 'nodemailer';
import validator from 'validator';
import { config } from '../config/env';
import { EnquiryPayload } from '../types/enquiry';
import { renderCustomerConfirmationEmail } from '../templates/customerEmail';
import { renderOwnerNotificationEmail } from '../templates/ownerEmail';
import { renderDeveloperNotificationEmail } from '../templates/developerEmail';

export interface DispatchResults {
  customerStatus: 'sent' | 'failed' | 'skipped';
  customerError: string | null;
  ownerStatus: 'sent' | 'failed';
  ownerError: string | null;
  developerStatus: 'sent' | 'failed';
  developerError: string | null;
}

export class EmailService {
  private transporter: Transporter | null = null;
  private isConfigured: boolean = false;

  constructor() {
    this.initTransporter();
  }

  private initTransporter(): void {
    const { host, port, secure, user, pass } = config.smtp;

    if (host && user && pass) {
      try {
        this.transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: {
            user,
            pass,
          },
          pool: true,
          maxConnections: 5,
          maxMessages: 100,
          connectionTimeout: 10000, // 10 seconds timeout
          greetingTimeout: 10000,
          socketTimeout: 15000,
        });
        this.isConfigured = true;
      } catch (err: any) {
        console.error('[EMAIL SERVICE] Failed to initialize Nodemailer transporter:', err.message);
        this.transporter = null;
        this.isConfigured = false;
      }
    } else {
      this.isConfigured = false;
    }
  }

  /**
   * Dispatches the 3-way email notification system for a given enquiry.
   * Tracks and returns delivery status independently for each recipient.
   */
  public async dispatchAllNotifications(enquiry: EnquiryPayload): Promise<DispatchResults> {
    const results: DispatchResults = {
      customerStatus: 'skipped',
      customerError: null,
      ownerStatus: 'failed',
      ownerError: null,
      developerStatus: 'failed',
      developerError: null,
    };

    // 1. Customer Confirmation Email
    if (enquiry.email && validator.isEmail(enquiry.email)) {
      try {
        await this.sendCustomerConfirmation(enquiry);
        results.customerStatus = 'sent';
      } catch (err: any) {
        results.customerStatus = 'failed';
        results.customerError = err.message || 'Failed to send customer confirmation email';
        console.error(`[EMAIL ERROR] Customer confirmation failed for ${enquiry.referenceId}:`, err.message);
      }
    } else {
      results.customerStatus = 'skipped';
      results.customerError = 'No valid customer email address provided';
    }

    // 2. Sai World Dreams Owner / Management Notification
    try {
      await this.sendOwnerNotification(enquiry);
      results.ownerStatus = 'sent';
    } catch (err: any) {
      results.ownerStatus = 'failed';
      results.ownerError = err.message || 'Failed to send owner notification email';
      console.error(`[EMAIL ERROR] Owner notification failed for ${enquiry.referenceId}:`, err.message);
    }

    // 3. Integral Web Solution Developer Notification
    try {
      await this.sendDeveloperNotification(enquiry);
      results.developerStatus = 'sent';
    } catch (err: any) {
      results.developerStatus = 'failed';
      results.developerError = err.message || 'Failed to send developer notification email';
      console.error(`[EMAIL ERROR] Developer notification failed for ${enquiry.referenceId}:`, err.message);
    }

    return results;
  }

  /**
   * Email 1: Customer Confirmation
   */
  public async sendCustomerConfirmation(enquiry: EnquiryPayload): Promise<void> {
    if (!enquiry.email || !validator.isEmail(enquiry.email)) {
      throw new Error('Invalid customer email address');
    }

    const { subject, html, text } = renderCustomerConfirmationEmail(enquiry);

    if (!this.isConfigured || !this.transporter) {
      console.log(`[EMAIL SIMULATED] Customer confirmation would be sent to: ${enquiry.email} (Ref: ${enquiry.referenceId})`);
      return;
    }

    await this.transporter.sendMail({
      from: config.smtp.from,
      to: enquiry.email,
      subject,
      text,
      html,
    });
  }

  /**
   * Email 2: Owner/Management Notification
   */
  public async sendOwnerNotification(enquiry: EnquiryPayload): Promise<void> {
    const ownerEmail = config.saiWorldEmail;
    if (!ownerEmail || !validator.isEmail(ownerEmail)) {
      throw new Error(`Invalid owner recipient email address: ${ownerEmail}`);
    }

    const { subject, html, text } = renderOwnerNotificationEmail(enquiry);

    if (!this.isConfigured || !this.transporter) {
      console.log(`[EMAIL SIMULATED] Owner notification would be sent to: ${ownerEmail} (Ref: ${enquiry.referenceId})`);
      return;
    }

    const replyTo = enquiry.email && validator.isEmail(enquiry.email) ? enquiry.email : undefined;

    await this.transporter.sendMail({
      from: config.smtp.from,
      to: ownerEmail,
      replyTo,
      subject,
      text,
      html,
    });
  }

  /**
   * Email 3: Integral Web Solution Notification (princekumarjha80@gmail.com)
   */
  public async sendDeveloperNotification(enquiry: EnquiryPayload): Promise<void> {
    const developerEmail = config.integralWebSolutionEmail;
    if (!developerEmail || !validator.isEmail(developerEmail)) {
      throw new Error(`Invalid developer recipient email address: ${developerEmail}`);
    }

    const { subject, html, text } = renderDeveloperNotificationEmail(enquiry);

    if (!this.isConfigured || !this.transporter) {
      console.log(`[EMAIL SIMULATED] Developer notification would be sent to: ${developerEmail} (Ref: ${enquiry.referenceId})`);
      return;
    }

    const replyTo = enquiry.email && validator.isEmail(enquiry.email) ? enquiry.email : undefined;

    await this.transporter.sendMail({
      from: config.smtp.from,
      to: developerEmail,
      replyTo,
      subject,
      text,
      html,
    });
  }

  /**
   * Verifies SMTP connection health
   */
  public async verifyConnection(): Promise<boolean> {
    if (!this.isConfigured || !this.transporter) {
      return false;
    }
    try {
      await this.transporter.verify();
      return true;
    } catch {
      return false;
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();
