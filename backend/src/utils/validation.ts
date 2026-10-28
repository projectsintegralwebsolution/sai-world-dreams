import validator from 'validator';

export interface EnquiryInput {
  fullName?: unknown;
  email?: unknown;
  mobile?: unknown;
  companyName?: unknown; // Honeypot field
  residenceConfig?: unknown;
  interestedIn?: unknown; // Alias from existing frontend forms
  enquiryType?: unknown;
  enquirySubject?: unknown;
  message?: unknown;
  sourcePageUrl?: unknown;
  source?: unknown; // Alias from existing frontend forms
  formType?: unknown;
  consent?: unknown;
}

export interface ValidatedEnquiryData {
  fullName: string;
  email: string | null;
  mobile: string;
  residenceConfig: string;
  enquiryType: string;
  enquirySubject: string;
  message: string;
  sourcePageUrl: string;
  formType: string;
  consent: boolean;
  isSpamBot: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  data?: ValidatedEnquiryData;
}

export const validateEnquiryInput = (input: EnquiryInput): ValidationResult => {
  const errors: string[] = [];

  // 1. Honeypot check: If companyName is filled, it is an automated bot submission
  if (typeof input.companyName === 'string' && input.companyName.trim().length > 0) {
    return {
      isValid: false,
      errors: ['Spam submission detected.'],
      data: {
        fullName: '',
        email: null,
        mobile: '',
        residenceConfig: '',
        enquiryType: '',
        enquirySubject: '',
        message: '',
        sourcePageUrl: '',
        formType: '',
        consent: false,
        isSpamBot: true,
      },
    };
  }

  // 2. Full Name validation
  const rawName = typeof input.fullName === 'string' ? input.fullName.trim() : '';
  if (!rawName || rawName.length < 2) {
    errors.push('Full name is required and must be at least 2 characters long.');
  } else if (rawName.length > 100) {
    errors.push('Full name cannot exceed 100 characters.');
  }

  // 3. Mobile Number validation
  const rawMobile = typeof input.mobile === 'string' ? input.mobile.trim() : '';
  const digitsOnly = rawMobile.replace(/\D/g, '');
  // Valid Indian mobile (10 digits starting with 6, 7, 8, or 9, with optional +91/0 prefix) or international phone
  const isIndianMobile = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/.test(rawMobile);
  const isValidPhone = isIndianMobile || validator.isMobilePhone(rawMobile, 'any');

  if (!rawMobile || digitsOnly.length < 10 || !isValidPhone) {
    errors.push('Please enter a valid 10-digit mobile number.');
  }

  // Normalize mobile to standard 10-digit format for India or international
  const normalizedMobile = digitsOnly.length >= 10 ? digitsOnly.slice(-10) : digitsOnly;

  // 4. Email validation (Optional for quick callback forms, but if provided, must be valid)
  const rawEmail = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
  let validatedEmail: string | null = null;

  if (rawEmail.length > 0) {
    if (!validator.isEmail(rawEmail)) {
      errors.push('Please enter a valid email address.');
    } else {
      validatedEmail = rawEmail;
    }
  }

  // 5. Residence / Apartment Configuration
  const rawConfig =
    typeof input.residenceConfig === 'string'
      ? input.residenceConfig.trim()
      : typeof input.interestedIn === 'string'
      ? input.interestedIn.trim()
      : 'Not Decided';

  // 6. Enquiry Type
  const rawType =
    typeof input.enquiryType === 'string' && input.enquiryType.trim()
      ? input.enquiryType.trim()
      : 'Project Enquiry';

  // 7. Subject & Message
  const rawSubject =
    typeof input.enquirySubject === 'string' ? input.enquirySubject.trim().slice(0, 200) : '';
  const rawMessage = typeof input.message === 'string' ? input.message.trim().slice(0, 1000) : '';

  // 8. Source Page & Form Type
  const rawSource =
    typeof input.sourcePageUrl === 'string' && input.sourcePageUrl.trim()
      ? input.sourcePageUrl.trim()
      : typeof input.source === 'string' && input.source.trim()
      ? input.source.trim()
      : 'Sai World Dreams Official Website';

  const rawFormType =
    typeof input.formType === 'string' && input.formType.trim()
      ? input.formType.trim()
      : typeof input.source === 'string' && input.source.trim()
      ? input.source.trim()
      : 'Website Enquiry Form';

  // 9. Consent
  const consent =
    input.consent === true ||
    input.consent === 'true' ||
    input.consent === 1 ||
    input.consent === '1';

  if (!consent) {
    errors.push('Please accept the privacy policy consent to proceed.');
  }

  if (errors.length > 0) {
    return {
      isValid: false,
      errors,
    };
  }

  return {
    isValid: true,
    errors: [],
    data: {
      fullName: rawName,
      email: validatedEmail,
      mobile: normalizedMobile,
      residenceConfig: rawConfig,
      enquiryType: rawType,
      enquirySubject: rawSubject,
      message: rawMessage,
      sourcePageUrl: rawSource,
      formType: rawFormType,
      consent: true,
      isSpamBot: false,
    },
  };
};
