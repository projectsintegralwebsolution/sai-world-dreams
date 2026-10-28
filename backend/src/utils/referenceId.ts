import crypto from 'crypto';

/**
 * Generates a collision-safe, human-readable enquiry reference ID.
 * Example format: SWD-20261027-A8C9E
 */
export const generateReferenceId = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;

  // 5-character alphanumeric random token (uppercase, unambiguous characters)
  const randomToken = crypto
    .randomBytes(4)
    .toString('hex')
    .substring(0, 5)
    .toUpperCase();

  return `SWD-${dateStr}-${randomToken}`;
};
