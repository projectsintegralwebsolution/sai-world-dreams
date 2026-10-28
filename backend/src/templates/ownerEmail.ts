import { escapeHtml } from '../utils/htmlEscape';
import { EnquiryPayload } from '../types/enquiry';
import { EmailRenderResult } from './customerEmail';

export const renderOwnerNotificationEmail = (enquiry: EnquiryPayload): EmailRenderResult => {
  const safeName = escapeHtml(enquiry.fullName);
  const safeEmail = escapeHtml(enquiry.email || 'Not Provided');
  const safeMobile = escapeHtml(enquiry.mobile);
  const safeConfig = escapeHtml(enquiry.residenceConfig || 'Not Specified');
  const safeType = escapeHtml(enquiry.enquiryType || 'General Lead');
  const safeSubject = escapeHtml(enquiry.enquirySubject || 'Website Lead');
  const safeMessage = escapeHtml(enquiry.message || 'No additional message provided.');
  const safeSource = escapeHtml(enquiry.sourcePageUrl || 'Sai World Dreams Official Website');
  const safeFormType = escapeHtml(enquiry.formType || 'Direct Form');
  const safeRefId = escapeHtml(enquiry.referenceId);
  const safeIp = escapeHtml(enquiry.ipAddress || 'Unknown');
  const safeDate = escapeHtml(new Date(enquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

  const subject = `New Website Enquiry – ${enquiry.enquiryType || 'Project Lead'} [Ref: ${enquiry.referenceId}]`;

  const text = `
NEW SAI WORLD DREAMS WEBSITE ENQUIRY
Reference ID: ${enquiry.referenceId}
Submitted At: ${safeDate} IST

CUSTOMER DETAILS:
- Full Name: ${enquiry.fullName}
- Mobile: +91 ${enquiry.mobile}
- Email: ${enquiry.email || 'Not Provided'}
- Configuration: ${enquiry.residenceConfig || 'Not Specified'}

ENQUIRY DETAILS:
- Enquiry Type: ${enquiry.enquiryType}
- Subject: ${enquiry.enquirySubject || 'N/A'}
- Customer Message: ${enquiry.message || 'No additional message.'}
- Source Page: ${enquiry.sourcePageUrl || 'Website'}
- Form Type: ${enquiry.formType || 'General Form'}
- IP Address: ${enquiry.ipAddress || 'Unknown'}

Direct Action:
Reply to this email to respond directly to ${enquiry.fullName}${enquiry.email ? ` at ${enquiry.email}` : ''}.
Call Customer: +91 ${enquiry.mobile}
  `.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f0f4f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1a202c; line-height: 1.6; }
    .wrapper { width: 100%; max-width: 650px; margin: 25px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.08); border: 1px solid #cbd5e1; }
    .header { background-color: #07132B; padding: 24px 28px; border-bottom: 3px solid #C8A355; color: #ffffff; }
    .header-badge { display: inline-block; background-color: #C8A355; color: #07132B; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; padding: 3px 10px; border-radius: 4px; margin-bottom: 8px; }
    .header h2 { margin: 0; font-size: 22px; font-weight: 800; }
    .content { padding: 28px; }
    .lead-box { background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 18px; margin-bottom: 20px; }
    .lead-box-title { font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; }
    .table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .table td { padding: 8px 6px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
    .table .label { width: 35%; color: #64748b; font-weight: 600; }
    .table .val { width: 65%; color: #0f172a; font-weight: 600; }
    .highlight-phone { font-size: 16px; color: #07132B; font-weight: 800; }
    .btn-bar { margin: 24px 0 10px 0; display: flex; gap: 12px; }
    .btn { display: inline-block; background-color: #07132B; color: #DFBF7D; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-size: 13px; font-weight: 700; text-align: center; }
    .btn-gold { background-color: #C8A355; color: #07132B; }
    .footer { background-color: #F1F5F9; padding: 16px 28px; font-size: 11px; color: #64748B; text-align: center; border-top: 1px solid #E2E8F0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="header-badge">NEW INCOMING LEAD</div>
      <h2>Sai World Dreams — Enquiry Alert</h2>
    </div>
    <div class="content">
      <div class="lead-box">
        <div class="lead-box-title">Customer Identification</div>
        <table class="table">
          <tr>
            <td class="label">Reference ID:</td>
            <td class="val" style="color: #C8A355; font-size: 14px;">${safeRefId}</td>
          </tr>
          <tr>
            <td class="label">Customer Name:</td>
            <td class="val">${safeName}</td>
          </tr>
          <tr>
            <td class="label">Mobile Number:</td>
            <td class="val"><a href="tel:+91${safeMobile}" class="highlight-phone" style="color: #07132B; text-decoration: none;">+91 ${safeMobile}</a></td>
          </tr>
          <tr>
            <td class="label">Email Address:</td>
            <td class="val">${enquiry.email ? `<a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a>` : '<em>Not Provided</em>'}</td>
          </tr>
          <tr>
            <td class="label">Configuration:</td>
            <td class="val" style="color: #047857; font-weight: 800;">${safeConfig}</td>
          </tr>
        </table>
      </div>

      <div class="lead-box">
        <div class="lead-box-title">Enquiry &amp; Context</div>
        <table class="table">
          <tr>
            <td class="label">Enquiry Type:</td>
            <td class="val">${safeType}</td>
          </tr>
          <tr>
            <td class="label">Subject:</td>
            <td class="val">${safeSubject}</td>
          </tr>
          <tr>
            <td class="label">Customer Message:</td>
            <td class="val" style="font-weight: 500; white-space: pre-wrap;">${safeMessage}</td>
          </tr>
          <tr>
            <td class="label">Source Page / Component:</td>
            <td class="val">${safeSource} (${safeFormType})</td>
          </tr>
          <tr>
            <td class="label">Submitted At:</td>
            <td class="val">${safeDate} IST</td>
          </tr>
          <tr>
            <td class="label">Client IP Address:</td>
            <td class="val" style="font-family: monospace; font-size: 12px;">${safeIp}</td>
          </tr>
        </table>
      </div>

      <div class="btn-bar">
        <a href="tel:+91${safeMobile}" class="btn btn-gold">Call Customer Now (+91 ${safeMobile})</a>
        ${enquiry.email ? `<a href="mailto:${safeEmail}?subject=Re: Enquiry for Sai World Dreams [Ref: ${safeRefId}]" class="btn">Reply by Email</a>` : ''}
      </div>
    </div>
    <div class="footer">
      Official Management Lead Notification &bull; Sai World Dreams Dombivli &bull; Automated CRM Dispatch
    </div>
  </div>
</body>
</html>
  `.trim();

  return { subject, html, text };
};
