import { escapeHtml } from '../utils/htmlEscape';
import { EnquiryPayload } from '../types/enquiry';
import { EmailRenderResult } from './customerEmail';

export const renderDeveloperNotificationEmail = (enquiry: EnquiryPayload): EmailRenderResult => {
  const safeName = escapeHtml(enquiry.fullName);
  const safeEmail = escapeHtml(enquiry.email || 'Not Provided');
  const safeMobile = escapeHtml(enquiry.mobile);
  const safeConfig = escapeHtml(enquiry.residenceConfig || 'Not Specified');
  const safeType = escapeHtml(enquiry.enquiryType || 'General Lead');
  const safeSubject = escapeHtml(enquiry.enquirySubject || 'Website Lead');
  const safeMessage = escapeHtml(enquiry.message || 'No additional message provided.');
  const safeSource = escapeHtml(enquiry.sourcePageUrl || 'Sai World Dreams Website');
  const safeFormType = escapeHtml(enquiry.formType || 'Website Enquiry Form');
  const safeRefId = escapeHtml(enquiry.referenceId);
  const safeIp = escapeHtml(enquiry.ipAddress || 'Unknown');
  const safeUserAgent = escapeHtml(enquiry.userAgent || 'Unknown');
  const safeDate = escapeHtml(new Date(enquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

  const subject = `New Sai World Dreams Website Enquiry – ${enquiry.enquiryType || 'Lead'} [Ref: ${enquiry.referenceId}]`;

  const text = `
NEW SAI WORLD DREAMS WEBSITE ENQUIRY
Origin: Sai World Dreams Official Website (Dombivli)
Notification for: Integral Web Solution Team
Reference ID: ${enquiry.referenceId}
Submission Time: ${safeDate} IST

CUSTOMER DETAILS:
- Full Name: ${enquiry.fullName}
- Mobile: +91 ${enquiry.mobile}
- Email: ${enquiry.email || 'Not Provided'}
- Configuration: ${enquiry.residenceConfig || 'Not Specified'}

ENQUIRY DETAILS:
- Enquiry Type: ${enquiry.enquiryType}
- Subject: ${enquiry.enquirySubject || 'N/A'}
- Customer Message: ${enquiry.message || 'No additional message.'}
- Source Page URL: ${enquiry.sourcePageUrl || 'N/A'}
- Form Type: ${enquiry.formType || 'Website Form'}
- Client IP: ${enquiry.ipAddress || 'Unknown'}
- User Agent: ${enquiry.userAgent || 'Unknown'}

Direct Action:
Reply-To is configured to ${enquiry.email || 'customer'}.
  `.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6; }
    .wrapper { width: 100%; max-width: 650px; margin: 25px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #cbd5e1; }
    .header { background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 22px 28px; border-bottom: 3px solid #38BDF8; color: #ffffff; }
    .origin-badge { display: inline-block; background-color: #0284C7; color: #ffffff; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; padding: 3px 8px; border-radius: 4px; margin-bottom: 6px; }
    .header h2 { margin: 0; font-size: 20px; font-weight: 700; color: #F8FAFC; }
    .content { padding: 26px 28px; }
    .box { background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 16px; margin-bottom: 18px; }
    .box-title { font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; }
    .table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .table td { padding: 7px 4px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
    .table .label { width: 34%; color: #64748b; font-weight: 600; }
    .table .val { width: 66%; color: #0f172a; font-weight: 600; }
    .footer { background-color: #F8FAFC; padding: 14px 28px; font-size: 11px; color: #64748B; text-align: center; border-top: 1px solid #E2E8F0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="origin-badge">WEBSITE LEAD NOTIFICATION &bull; INTEGRAL WEB SOLUTION</div>
      <h2>Sai World Dreams &mdash; Web Enquiry</h2>
    </div>
    <div class="content">
      <div class="box">
        <div class="box-title">Lead Identification</div>
        <table class="table">
          <tr>
            <td class="label">Reference ID:</td>
            <td class="val" style="color: #0284C7; font-family: monospace; font-size: 13px;">${safeRefId}</td>
          </tr>
          <tr>
            <td class="label">Customer Name:</td>
            <td class="val">${safeName}</td>
          </tr>
          <tr>
            <td class="label">Mobile Number:</td>
            <td class="val"><a href="tel:+91${safeMobile}" style="color: #0F172A; text-decoration: none; font-weight: 800;">+91 ${safeMobile}</a></td>
          </tr>
          <tr>
            <td class="label">Email Address:</td>
            <td class="val">${enquiry.email ? `<a href="mailto:${safeEmail}" style="color: #0284C7;">${safeEmail}</a>` : '<em>Not Provided</em>'}</td>
          </tr>
          <tr>
            <td class="label">Configuration:</td>
            <td class="val" style="color: #059669; font-weight: 700;">${safeConfig}</td>
          </tr>
        </table>
      </div>

      <div class="box">
        <div class="box-title">Enquiry Specifics &amp; Technical Metadata</div>
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
            <td class="label">Message:</td>
            <td class="val" style="font-weight: 500; white-space: pre-wrap;">${safeMessage}</td>
          </tr>
          <tr>
            <td class="label">Source Page:</td>
            <td class="val">${safeSource}</td>
          </tr>
          <tr>
            <td class="label">Form Type:</td>
            <td class="val">${safeFormType}</td>
          </tr>
          <tr>
            <td class="label">Submission Timestamp:</td>
            <td class="val">${safeDate} IST</td>
          </tr>
          <tr>
            <td class="label">Client IP Address:</td>
            <td class="val" style="font-family: monospace; font-size: 12px;">${safeIp}</td>
          </tr>
          <tr>
            <td class="label">User Agent:</td>
            <td class="val" style="font-size: 11px; color: #475569; word-break: break-all;">${safeUserAgent}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="footer">
      Integral Web Solution Dispatch Service &bull; Automated Lead Router &bull; Sai World Dreams Dombivli
    </div>
  </div>
</body>
</html>
  `.trim();

  return { subject, html, text };
};
