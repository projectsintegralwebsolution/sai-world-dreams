/**
 * Safely escapes HTML special characters from user input
 * to prevent XSS and HTML injection inside HTML email templates.
 */
export const escapeHtml = (str?: string | null): string => {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};
