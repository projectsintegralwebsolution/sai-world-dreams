'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { EnquiryForm } from '@/components/forms/EnquiryForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterestedIn?: string;
  source?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultInterestedIn = 'Not Decided',
  source = 'Modal Enquiry CTA',
}) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-blue-deep/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card - 680px-720px wide on desktop, compact & responsive height */}
      <div className="relative w-full max-w-[680px] md:max-w-[720px] max-h-[calc(100dvh-24px)] sm:max-h-[calc(100dvh-32px)] bg-white rounded-xl border border-brand-gold/40 z-10 my-auto flex flex-col shadow-2xl overflow-hidden animate-fadeIn">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 text-gray-400 hover:text-brand-blue hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
          aria-label="Close Enquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto overscroll-contain flex-1">
          <EnquiryForm
            defaultInterestedIn={defaultInterestedIn}
            source={source}
            onSuccess={onClose}
            compact={true}
            className="border-0 shadow-none px-5 py-4 sm:px-7 sm:py-5"
          />
        </div>
      </div>
    </div>
  );
};
