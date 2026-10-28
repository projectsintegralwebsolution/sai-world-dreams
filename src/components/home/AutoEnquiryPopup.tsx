'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  User,
  Phone,
  Mail,
  Building2,
  ChevronDown,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Tag,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const AutoEnquiryPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    interestedIn: '2 BHK',
    consent: true,
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isOpenRef = useRef(false);
  const isTypingRef = useRef(false);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Schedule popup helper
  const schedulePopup = useCallback((delayMs: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('swd_enquiry_submitted') === 'true') return;

    timerRef.current = setTimeout(() => {
      // Check if submitted while timer was waiting
      if (sessionStorage.getItem('swd_enquiry_submitted') === 'true') return;

      // Don't open if already open
      if (isOpenRef.current) return;

      // Check if another dialog/modal is open on the page
      const otherModal = document.querySelector('[role="dialog"]:not(#auto-enquiry-popup)');
      if (otherModal) {
        // Defer check by 15 seconds
        schedulePopup(15000);
        return;
      }

      // Check if user is actively typing in fields
      if (isTypingRef.current) {
        schedulePopup(30000);
        return;
      }

      setIsOpen(true);
    }, delayMs);
  }, []);

  // 1. Initial popup: trigger after 3 seconds on homepage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('swd_enquiry_submitted') === 'true') return;

    schedulePopup(3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [schedulePopup]);

  // 2. Close handler: closes modal and sets repeat timer for 120 seconds (2 minutes)
  const handleClose = () => {
    setIsOpen(false);
    isTypingRef.current = false;

    // Repeat every 2 minutes (120,000 ms) unless already submitted
    if (typeof window !== 'undefined' && sessionStorage.getItem('swd_enquiry_submitted') !== 'true') {
      schedulePopup(120000);
    }
  };

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    isTypingRef.current = true;
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setFormError('Please enter your full name (at least 2 letters).');
      return;
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      setFormError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!formData.consent) {
      setFormError('Please accept the consent checkbox to proceed.');
      return;
    }

    setFormStatus('loading');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/enquiries`
        : '/api/enquiries';

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          mobile: cleanMobile.slice(-10),
          email: formData.email.trim(),
          residenceConfig: formData.interestedIn,
          enquiryType: 'Instant Popup Enquiry',
          consent: true,
          source: 'Auto Homepage Popup',
          sourcePageUrl: typeof window !== 'undefined' ? window.location.href : 'Homepage',
          formType: 'Automatic Enquiry Popup',
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || data.error || 'Failed to submit enquiry.');
      }

      setReferenceId(data.referenceId || '');
      setFormStatus('success');

      // Stop future popups for the remainder of this session
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('swd_enquiry_submitted', 'true');
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    } catch (err: any) {
      setFormStatus('error');
      setFormError(err.message || 'Something went wrong. Please call us directly.');
    }
  };

  return (
    <div
      id="auto-enquiry-popup"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto motion-safe:animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[350px] sm:max-w-[480px] md:max-w-[550px] lg:max-w-[625px] bg-white rounded-xl sm:rounded-2xl border-[1.5px] border-brand-gold/60 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close (×) Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-40 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/85 border border-white/70 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          aria-label="Close Enquiry Dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Dual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 items-stretch">
          {/* Left Column: Premium Enquiry Form */}
          <div className="sm:col-span-7 p-3.5 sm:p-4 md:p-5 flex flex-col justify-between">
            {/* Logo & Brand Header */}
            <div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm bg-brand-blue-deep border border-brand-gold/60 flex items-center justify-center text-brand-gold font-bold text-xs shadow-xs shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 block leading-none">
                    Sai
                  </span>
                  <span className="text-[11px] sm:text-xs font-extrabold text-brand-blue-deep tracking-wider block font-display">
                    WORLD DREAMS
                  </span>
                  <span className="text-[8px] font-bold tracking-[0.28em] text-brand-gold-dark block leading-none">
                    DOMBIVLI
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <h3
                  id="popup-title"
                  className="text-sm sm:text-base md:text-lg font-extrabold text-brand-blue-deep font-display tracking-tight leading-tight"
                >
                  EXPRESS YOUR INTEREST
                </h3>
                <p className="text-[10px] sm:text-[11px] text-gray-600 font-medium mt-0.5">
                  Get Exclusive Details, Floor Plans &amp; Best Offers
                </p>
              </div>

              {/* 3 Value Proposition Badges */}
              <div className="grid grid-cols-3 gap-1 sm:gap-1.5 my-2">
                <div className="px-1.5 py-1 bg-amber-50/80 border border-amber-300/60 rounded flex items-center gap-1 text-[7.5px] sm:text-[8.5px] font-bold text-gray-800">
                  <ShieldCheck className="w-3 h-3 text-brand-gold-dark shrink-0" />
                  <span className="leading-tight">Direct Developer Access</span>
                </div>
                <div className="px-1.5 py-1 bg-amber-50/80 border border-amber-300/60 rounded flex items-center gap-1 text-[7.5px] sm:text-[8.5px] font-bold text-gray-800">
                  <Tag className="w-3 h-3 text-brand-gold-dark shrink-0" />
                  <span className="leading-tight">Latest Price &amp; Offers</span>
                </div>
                <div className="px-1.5 py-1 bg-amber-50/80 border border-amber-300/60 rounded flex items-center gap-1 text-[7.5px] sm:text-[8.5px] font-bold text-gray-800">
                  <Calendar className="w-3 h-3 text-brand-gold-dark shrink-0" />
                  <span className="leading-tight">Priority Site Visit</span>
                </div>
              </div>
            </div>

            {/* Form Fields Body or Success Card */}
            {formStatus === 'success' ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-brand-blue-deep font-display">
                  Enquiry Submitted!
                </h4>
                {referenceId && (
                  <div className="inline-block px-3 py-0.5 bg-amber-50 border border-brand-gold/40 rounded text-[11px] font-bold text-brand-gold-dark font-mono">
                    Ref: {referenceId}
                  </div>
                )}
                <p className="text-[11px] text-gray-700 max-w-xs mx-auto leading-relaxed">
                  Thank you for your interest in Sai World Dreams. Our direct sales representative will connect with you shortly with pricing and floor plans.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-1.5 sm:space-y-2 mt-0.5">
                {formError && (
                  <div className="p-1.5 bg-red-50 border border-red-200 text-red-700 text-[10px] rounded">
                    {formError}
                  </div>
                )}

                {/* Full Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <input
                    id="popup-fullname"
                    name="fullName"
                    type="text"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => {
                      isTypingRef.current = true;
                    }}
                    required
                    className="w-full pl-8 pr-2.5 py-1.5 sm:py-2 text-[11px] sm:text-xs bg-white border border-gray-300 rounded-md focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all placeholder:text-gray-400 font-medium"
                  />
                </div>

                {/* Mobile Number with +91 */}
                <div className="relative flex rounded-md border border-gray-300 overflow-hidden focus-within:border-brand-gold focus-within:ring-1 focus-within:ring-brand-gold transition-all">
                  <div className="flex items-center gap-1 pl-2.5 pr-2 bg-gray-50 border-r border-gray-300 text-[11px] font-semibold text-gray-700 select-none shrink-0">
                    <Phone className="w-3 h-3 text-gray-500" />
                    <span>+91</span>
                  </div>
                  <input
                    id="popup-phone"
                    name="mobile"
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onFocus={() => {
                      isTypingRef.current = true;
                    }}
                    maxLength={10}
                    required
                    className="w-full px-2.5 py-1.5 sm:py-2 text-[11px] sm:text-xs bg-white outline-none placeholder:text-gray-400 font-medium"
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <input
                    id="popup-email"
                    name="email"
                    type="email"
                    placeholder="E-Mail Address (Optional)"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => {
                      isTypingRef.current = true;
                    }}
                    className="w-full pl-8 pr-2.5 py-1.5 sm:py-2 text-[11px] sm:text-xs bg-white border border-gray-300 rounded-md focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all placeholder:text-gray-400 font-medium"
                  />
                </div>

                {/* Preferred Configuration Dropdown */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <select
                    id="popup-config"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-7 py-1.5 sm:py-2 text-[11px] sm:text-xs bg-white border border-gray-300 rounded-md focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all appearance-none font-medium text-gray-800"
                  >
                    <option value="1 BHK">1 BHK Residence</option>
                    <option value="2 BHK">2 BHK Residence</option>
                    <option value="2.5 BHK">2.5 BHK Residence</option>
                    <option value="3 BHK">3 BHK Residence</option>
                    <option value="Not Decided">Exploring Options / Not Decided</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-gray-400">
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-1.5 pt-0.5">
                  <input
                    id="popup-consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-0.5 h-3 w-3 rounded border-gray-300 text-brand-gold focus:ring-brand-gold cursor-pointer"
                  />
                  <label
                    htmlFor="popup-consent"
                    className="text-[9px] text-gray-600 leading-tight select-none cursor-pointer"
                  >
                    I agree to receive updates via Call/WhatsApp as per{' '}
                    <Link
                      href="/privacy-policy"
                      className="text-brand-blue font-semibold underline hover:text-brand-gold"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full py-2 sm:py-2.5 px-3 bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark hover:brightness-105 active:scale-[0.99] text-brand-blue-deep font-extrabold text-[11px] sm:text-xs uppercase tracking-wider rounded-md shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-blue-deep" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-3 h-3" />
                      <span>REQUEST CALL BACK</span>
                      <ArrowRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Architectural Visual Tower Showcase */}
          <div className="hidden sm:flex sm:col-span-5 relative bg-brand-blue-deep flex-col justify-end overflow-hidden min-h-[310px] md:min-h-[330px]">
            <Image
              src="/images/overview/sai-world-dreams-popup-towers.jpg"
              alt="Sai World Dreams Residential Towers and Commercial Podium"
              fill
              unoptimized
              priority
              className="object-cover"
              style={{ objectPosition: '60% center' }}
            />
            {/* Soft blurred vertical fade connecting form to image */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-brand-blue-deep/60 to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
