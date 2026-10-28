export interface EnquiryPayload {
  id: string;
  referenceId: string;
  fullName: string;
  email: string | null;
  mobile: string;
  companyName?: string | null;
  residenceConfig: string;
  enquiryType: string;
  enquirySubject?: string | null;
  message?: string | null;
  sourcePageUrl: string;
  formType: string;
  ipAddress?: string | null;
  userAgent?: string | null;
  createdAt: string;
}
