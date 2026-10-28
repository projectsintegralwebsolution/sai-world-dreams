'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Zod Schema with Indian mobile number validation
export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(80, { message: 'Name cannot exceed 80 characters' })
    .regex(/^[a-zA-Z\s.]+$/, { message: 'Please enter a valid full name' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' }),
  mobile: z
    .string()
    .min(1, { message: 'Mobile number is required' })
    .regex(/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/, {
      message: 'Please enter a valid 10-digit Indian mobile number',
    }),
  interestedIn: z.enum(['1 BHK', '2 BHK', '2.5 BHK', '3 BHK', 'Not Decided'], {
    errorMap: () => ({ message: 'Please select an option' }),
  }),
  message: z.string().max(500, { message: 'Message cannot exceed 500 characters' }).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy to proceed' }),
  }),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  defaultInterestedIn?: string;
  source?: string;
  onSuccess?: () => void;
  className?: string;
  compact?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultInterestedIn = 'Not Decided',
  source = 'Website Enquiry',
  onSuccess,
  className = '',
  compact = false,
}) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      interestedIn: (defaultInterestedIn as any) || 'Not Decided',
      message: '',
      consent: true,
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/enquiries`
        : '/api/enquiries';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          residenceConfig: data.interestedIn,
          enquiryType: 'Project Enquiry',
          source,
          sourcePageUrl: typeof window !== 'undefined' ? window.location.href : source,
          formType: compact ? 'Compact Enquiry Modal' : 'Standard Enquiry Form',
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || result.error || 'Failed to submit enquiry. Please try again.');
      }

      setReferenceId(result.referenceId || '');
      setSubmitStatus('success');
      reset();
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 3000);
      }
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please check your connection or call us directly.');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-brand-ivory-light border border-brand-gold/40 rounded-lg p-8 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-bold text-brand-blue font-display">Thank You!</h3>
        {referenceId && (
          <div className="inline-block px-3.5 py-1 bg-amber-50 border border-brand-gold/40 rounded text-xs font-bold text-brand-gold-dark font-mono">
            Reference ID: {referenceId}
          </div>
        )}
        <p className="text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
          Your enquiry for <strong>Sai World Dreams, Dombivli</strong> has been received successfully. Our sales team will get in touch with you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitStatus('idle');
            setReferenceId('');
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold-dark hover:underline pt-2 uppercase tracking-wider cursor-pointer"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-brand-ivory-light border border-brand-gold/30 rounded-lg p-6 sm:p-8 ${className}`}
      noValidate
    >
      <div className={`${compact ? 'mb-3 pb-2.5 sm:mb-3.5 sm:pb-3' : 'mb-6 pb-4'} border-b border-brand-ivory-border`}>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gold-dark block mb-0.5">
          Priority Access & Brochure
        </span>
        <h3 className={`${compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'} font-bold text-brand-blue font-display`}>
          Request a Call Back
        </h3>
        <p className="text-xs text-gray-600 mt-0.5">
          Register your interest to receive detailed pricing, floor plans & payment plans.
        </p>
      </div>

      {submitStatus === 'error' && (
        <div className={`${compact ? 'mb-3 p-2.5' : 'mb-5 p-3.5'} bg-red-50 border border-red-200 rounded-md flex items-start gap-2 text-xs text-red-700`}>
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className={compact ? 'space-y-2.5 sm:space-y-3' : 'space-y-4'}>
        {compact ? (
          <>
            {/* Modal 2-Column Row 1: Full Name & Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Rajesh Sharma"
                  {...register('fullName')}
                  className={`w-full px-3 py-2 sm:px-3.5 sm:py-2 text-sm bg-white border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                    errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-gold'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-medium text-gray-500">
                    +91
                  </span>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="9876543210"
                    {...register('mobile')}
                    className={`w-full pl-11 pr-3 py-2 sm:pl-12 sm:pr-3.5 sm:py-2 text-sm bg-white border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                      errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-gold'
                    }`}
                  />
                </div>
                {errors.mobile && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.mobile.message}</p>
                )}
              </div>
            </div>

            {/* Modal 2-Column Row 2: Email Address & Interested In */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register('email')}
                  className={`w-full px-3 py-2 sm:px-3.5 sm:py-2 text-sm bg-white border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                    errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-gold'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="interestedIn" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
                  Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="interestedIn"
                  {...register('interestedIn')}
                  className={`w-full px-3 py-2 sm:px-3.5 sm:py-2 text-sm bg-white border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                    errors.interestedIn ? 'border-red-500' : 'border-gray-300 focus:border-brand-gold'
                  }`}
                >
                  <option value="Not Decided">Select Configuration (or Not Decided)</option>
                  <option value="1 BHK">1 BHK Luxury Home</option>
                  <option value="2 BHK">2 BHK Luxury Home</option>
                  <option value="2.5 BHK">2.5 BHK Luxury Home</option>
                  <option value="3 BHK">3 BHK Luxury Home</option>
                </select>
                {errors.interestedIn && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.interestedIn.message}</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Standard full-width in-page form */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rajesh Sharma"
                {...register('fullName')}
                className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                  errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-gold'
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-600 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Mobile Number & Email in 2 columns on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-medium text-gray-500">
                    +91
                  </span>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="9876543210"
                    {...register('mobile')}
                    className={`w-full pl-12 pr-3.5 py-2.5 text-sm bg-white border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                      errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-gold'
                    }`}
                  />
                </div>
                {errors.mobile && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.mobile.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register('email')}
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                    errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-gold'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Interested Configuration */}
            <div>
              <label htmlFor="interestedIn" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
                Interested In <span className="text-red-500">*</span>
              </label>
              <select
                id="interestedIn"
                {...register('interestedIn')}
                className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                  errors.interestedIn ? 'border-red-500' : 'border-gray-300 focus:border-brand-gold'
                }`}
              >
                <option value="Not Decided">Select Configuration (or Not Decided)</option>
                <option value="1 BHK">1 BHK Luxury Home</option>
                <option value="2 BHK">2 BHK Luxury Home</option>
                <option value="2.5 BHK">2.5 BHK Luxury Home</option>
                <option value="3 BHK">3 BHK Luxury Home</option>
              </select>
              {errors.interestedIn && (
                <p className="text-[11px] text-red-600 mt-1">{errors.interestedIn.message}</p>
              )}
            </div>
          </>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1">
            Message / Specific Requirements (Optional)
          </label>
          <textarea
            id="message"
            rows={compact ? 2 : 3}
            placeholder="Mention preferred tower, floor preference, or preferred visit date..."
            {...register('message')}
            className={`w-full px-3.5 ${compact ? 'py-1.5 h-14 sm:h-16' : 'py-2'} text-sm bg-white border border-gray-300 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold resize-none`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-600 mt-0.5">{errors.message.message}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              {...register('consent')}
              className="mt-0.5 rounded text-brand-gold focus:ring-brand-gold shrink-0"
            />
            <span className="text-[11px] text-gray-600 leading-tight">
              I authorize Sai World Dreams & Paradise Group representatives to contact me via Call, SMS, WhatsApp or Email. Read our{' '}
              <Link href="/privacy-policy" className="text-brand-gold-dark underline font-medium hover:text-brand-blue">
                Privacy Policy
              </Link>.
            </span>
          </label>
          {errors.consent && (
            <p className="text-[11px] text-red-600 mt-0.5">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className={`w-full ${compact ? 'py-2.5 sm:py-3 text-xs sm:text-sm' : 'py-3.5 text-xs sm:text-sm'} px-6 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-brand-blue-deep font-bold uppercase tracking-wider rounded-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow`}
        >
          {submitStatus === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>
      </div>

      <div className={`${compact ? 'mt-2.5 pt-2' : 'mt-4 pt-3'} border-t border-brand-ivory-border/70 text-center`}>
        <p className="text-[10px] text-gray-500">
          Your information is encrypted & 100% confidential. No spam guaranteed.
        </p>
      </div>
    </form>
  );
};
