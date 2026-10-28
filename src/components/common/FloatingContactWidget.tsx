'use client';

import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface FloatingContactWidgetProps {
  onOpenEnquiry?: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({ onOpenEnquiry }) => {
  // Formulate the WhatsApp direct URL with pre-filled message
  const encodedMessage = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  const primaryPhone = SITE_CONFIG.phoneNumbers[0];
  const telHref = 'tel:+919224136478';

  return (
    <aside
      className="fixed right-0 bottom-24 sm:bottom-28 z-40 flex flex-col items-end gap-1.5 select-none pointer-events-auto"
      aria-label="Quick Contact & Enquiry Actions"
    >
      {/* ========================================================================= */}
      {/* 1. CALL BUTTON (Closed by default, opens to left on hover)                */}
      {/* ========================================================================= */}
      <a
        href={telHref}
        className="group flex items-center shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
        aria-label={`Call Sales Team: ${primaryPhone}`}
        title={`Call: ${primaryPhone}`}
      >
        {/* Slide-out telephone label on hover (hidden by default, opens on hover) */}
        <div className="max-w-0 opacity-0 px-0 group-hover:max-w-[190px] group-hover:opacity-100 group-hover:px-3 h-11 sm:h-12 bg-brand-blue-deep border-y border-l border-brand-gold/40 rounded-l-md flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden">
          <span className="text-xs font-semibold text-white whitespace-nowrap">
            {primaryPhone}
          </span>
        </div>

        {/* Icon button square (docked to right edge) */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-brand-blue-deep text-brand-gold group-hover:text-brand-gold-light group-hover:bg-brand-blue border border-r-0 border-brand-gold/40 rounded-l-md group-hover:rounded-l-none transition-all duration-300 shrink-0">
          <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </a>

      {/* ========================================================================= */}
      {/* 2. ENQUIRY BUTTON (Closed by default, opens white Enquiry tab on hover)   */}
      {/* ========================================================================= */}
      <button
        type="button"
        onClick={onOpenEnquiry}
        className="group flex items-center shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
        aria-label="Open Project Enquiry Form"
        title="Open Enquiry Form"
      >
        {/* White Tab with "Enquiry" text (hidden by default, slides open on hover) */}
        <div className="max-w-0 opacity-0 px-0 group-hover:max-w-[130px] group-hover:opacity-100 group-hover:px-3.5 h-11 sm:h-12 bg-white border-y border-l border-brand-gold/50 rounded-l-md flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden shadow-sm">
          <span className="text-xs sm:text-[13px] font-bold text-brand-blue tracking-wide whitespace-nowrap">
            Enquiry
          </span>
        </div>

        {/* Dark Navy Square with Envelope Icon (docked to right edge) */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-brand-blue-deep text-white group-hover:bg-brand-blue border border-r-0 border-brand-gold/50 rounded-l-md group-hover:rounded-l-none transition-all duration-300 shrink-0">
          <Mail className="w-5 h-5 text-brand-gold-light group-hover:text-brand-gold transition-transform duration-300 group-hover:scale-110" />
        </div>
      </button>

      {/* ========================================================================= */}
      {/* 3. WHATSAPP BUTTON (Closed by default, opens to left on hover)             */}
      {/* ========================================================================= */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
        aria-label="Chat on WhatsApp with Sai World Dreams Sales Office"
        title="Chat on WhatsApp"
      >
        {/* Slide-out WhatsApp label on hover (hidden by default, opens on hover) */}
        <div className="max-w-0 opacity-0 px-0 group-hover:max-w-[170px] group-hover:opacity-100 group-hover:px-3 h-11 sm:h-12 bg-brand-blue-deep border-y border-l border-brand-gold/40 rounded-l-md flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden">
          <span className="text-xs font-semibold text-emerald-400 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>

        {/* Official WhatsApp SVG Icon inside dark navy box (docked to right edge) */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-brand-blue-deep group-hover:bg-brand-blue border border-r-0 border-brand-gold/40 rounded-l-md group-hover:rounded-l-none transition-all duration-300 shrink-0">
          <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
            <svg
              viewBox="0 0 32 32"
              className="w-4 h-4 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.658.742 5.146 2.03 7.272L2.09 29.91l6.83-1.898A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.642c-2.316 0-4.492-.662-6.33-1.808l-.454-.282-4.484 1.246 1.244-4.364-.298-.474A11.597 11.597 0 014.358 16c0-6.42 5.222-11.642 11.642-11.642 6.42 0 11.642 5.222 11.642 11.642 0 6.42-5.222 11.642-11.642 11.642zm6.394-8.73c-.35-.176-2.072-1.022-2.394-1.14-.322-.118-.556-.176-.79.176-.234.35-.908 1.14-1.112 1.374-.204.234-.41.264-.76.088-.35-.176-1.48-.546-2.82-1.74-1.042-.93-1.746-2.078-1.95-2.428-.204-.35-.022-.54.154-.714.158-.158.35-.41.526-.614.176-.204.234-.35.35-.584.118-.234.058-.44-.03-.614-.088-.176-.79-1.9-1.082-2.604-.284-.684-.572-.59-.79-.602-.204-.01-.44-.012-.674-.012-.234 0-.614.088-.936.44-.322.35-1.23 1.202-1.23 2.932 0 1.73 1.26 3.402 1.436 3.636.176.234 2.48 3.788 6.008 5.312.84.364 1.496.582 2.008.744.844.268 1.612.23 2.22.14.678-.102 2.072-.848 2.364-1.666.292-.818.292-1.52.204-1.666-.088-.146-.322-.234-.672-.41z" />
            </svg>
          </div>
        </div>
      </a>
    </aside>
  );
};
