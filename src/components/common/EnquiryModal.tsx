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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-blue-deep/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-lg border border-brand-gold/40 z-10 my-8 overflow-hidden animate-fadeIn">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-gray-500 hover:text-brand-blue hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close Enquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <EnquiryForm
          defaultInterestedIn={defaultInterestedIn}
          source={source}
          onSuccess={onClose}
          compact={true}
          className="border-0 shadow-none p-6 sm:p-8"
        />
      </div>
    </div>
  );
};
