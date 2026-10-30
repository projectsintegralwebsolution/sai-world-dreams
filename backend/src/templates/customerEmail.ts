import { escapeHtml } from '../utils/htmlEscape';
import { EnquiryPayload } from '../types/enquiry';

export interface EmailRenderResult {
  subject: string;
  html: string;
  text: string;
}

export const renderCustomerConfirmationEmail = (enquiry: EnquiryPayload): EmailRenderResult => {
  const safeName = escapeHtml(enquiry.fullName);
  const safeEmail = escapeHtml(enquiry.email || 'Not Provided');
  const safeMobile = escapeHtml(enquiry.mobile);
  const safeConfig = escapeHtml(enquiry.residenceConfig || 'Not Specified');
  const safeType = escapeHtml(enquiry.enquiryType || 'Project Enquiry');
  const safeMessage = escapeHtml(enquiry.message || 'No additional message provided.');
  const safeRefId = escapeHtml(enquiry.referenceId);

  const subject = `Thank You for Your Enquiry – Sai World Dreams (Ref: ${enquiry.referenceId})`;

  const text = `
Dear ${enquiry.fullName},

Thank you for contacting Sai World Dreams.

We have successfully received your enquiry regarding ${enquiry.residenceConfig ? `${enquiry.residenceConfig} Residences` : enquiry.enquiryType}.

Our team will review your requirements and get back to you as soon as possible.

Here is a summary of your submitted enquiry:
- Name: ${enquiry.fullName}
- Email: ${enquiry.email || 'Not Provided'}
- Phone: +91 ${enquiry.mobile}
- Residence Configuration: ${enquiry.residenceConfig || 'Not Specified'}
- Enquiry Type: ${enquiry.enquiryType}
- Message: ${enquiry.message || 'No additional message provided.'}
- Enquiry Reference: ${enquiry.referenceId}

Thank you for your interest in Sai World Dreams.

Best regards,
Sai World Dreams Team
Site Address: Kalyan-Shil Road, Dombivli
Sales Contact: +91 9373910844 / +91 9224136478
MahaRERA No: P52000033880 | P52000045371 | P52000046738
  `.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f4f6f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2d3748; line-height: 1.6; }
    .wrapper { width: 100%; max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 16px rgba(7, 19, 43, 0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #07132B 0%, #0B1B3D 100%); padding: 32px 24px; text-align: center; border-bottom: 3px solid #C8A355; }
    .header h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
    .header p { margin: 6px 0 0 0; color: #DFBF7D; font-size: 11px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; }
    .content { padding: 32px 28px; }
    .salutation { font-size: 16px; font-weight: 600; color: #07132B; margin-bottom: 16px; }
    .badge-ref { display: inline-block; background-color: #F8F4EA; border: 1px solid #DFBF7D; color: #9A782E; padding: 6px 14px; border-radius: 6px; font-size: 13px; font-weight: 700; margin-bottom: 20px; }
    .intro { font-size: 14px; color: #4a5568; margin-bottom: 24px; }
    .card { background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .card-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #07132B; margin-bottom: 14px; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; }
    .table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .table td { padding: 8px 0; vertical-align: top; }
    .table .label { width: 42%; color: #718096; font-weight: 600; }
    .table .val { width: 58%; color: #1a202c; font-weight: 500; }
    .closing { font-size: 14px; color: #4a5568; margin-top: 24px; }
    .footer { background-color: #07132B; padding: 24px; text-align: center; color: #a0aec0; font-size: 11px; line-height: 1.8; }
    .footer a { color: #DFBF7D; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Sai World Dreams</h1>
      <p>Dombivli &bull; By Paradise Group</p>
    </div>
    <div class="content">
      <div class="salutation">Dear ${safeName},</div>
      <div class="badge-ref">Reference ID: ${safeRefId}</div>
      <p class="intro">
        Thank you for contacting <strong>Sai World Dreams</strong>. We have successfully received your enquiry regarding <strong>${safeConfig !== 'Not Specified' ? `${safeConfig} Residences` : safeType}</strong>.
      </p>
      <p class="intro">
        Our dedicated sales advisory team will review your requirements and get back to you as soon as possible.
      </p>

      <div class="card">
        <div class="card-title">Enquiry Summary</div>
        <table class="table">
          <tr>
            <td class="label">Customer Name:</td>
            <td class="val">${safeName}</td>
          </tr>
          <tr>
            <td class="label">Email Address:</td>
            <td class="val">${safeEmail}</td>
          </tr>
          <tr>
            <td class="label">Mobile Number:</td>
            <td class="val">+91 ${safeMobile}</td>
          </tr>
          <tr>
            <td class="label">Residence Configuration:</td>
            <td class="val"><strong>${safeConfig}</strong></td>
          </tr>
          <tr>
            <td class="label">Enquiry Type:</td>
            <td class="val">${safeType}</td>
          </tr>
          <tr>
            <td class="label">Your Message:</td>
            <td class="val">${safeMessage}</td>
          </tr>
          <tr>
            <td class="label">Enquiry Reference:</td>
            <td class="val" style="color: #C8A355; font-weight: 700;">${safeRefId}</td>
          </tr>
        </table>
      </div>

      <div class="closing">
        Thank you for your interest in Sai World Dreams.<br><br>
        <strong>Best regards,</strong><br>
        Sai World Dreams Team
      </div>
    </div>
    <div class="footer">
      <strong>Sai World Dreams &bull; Sales Gallery</strong><br>
      Kalyan-Shil Road, Dombivli, Maharashtra, India<br>
      Sales Hotline: <a href="tel:+919373910844">+91 9373910844</a> &bull; <a href="tel:+919224136478">+91 9224136478</a> &bull; Email: <a href="mailto:sheltermauryashelter@gmail.com">sheltermauryashelter@gmail.com</a><br>
      MahaRERA Registration No: <strong>P52000033880 | P52000045371 | P52000046738</strong>
    </div>
  </div>
</body>
</html>
  `.trim();

  return { subject, html, text };
};
