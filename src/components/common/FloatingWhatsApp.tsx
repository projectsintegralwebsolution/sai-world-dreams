'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Formulate the WhatsApp direct URL with pre-filled message
  const encodedMessage = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip */}
      <div
        className={`absolute right-16 px-3 py-1.5 bg-brand-blue-deep/95 text-white text-xs font-medium rounded-md shadow-lg border border-brand-gold/30 whitespace-nowrap transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat on WhatsApp
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-brand-blue-deep" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sai World Dreams on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.658.742 5.146 2.03 7.272L2.09 29.91l6.83-1.898A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.642c-2.316 0-4.492-.662-6.33-1.808l-.454-.282-4.484 1.246 1.244-4.364-.298-.474A11.597 11.597 0 014.358 16c0-6.42 5.222-11.642 11.642-11.642 6.42 0 11.642 5.222 11.642 11.642 0 6.42-5.222 11.642-11.642 11.642zm6.394-8.73c-.35-.176-2.072-1.022-2.394-1.14-.322-.118-.556-.176-.79.176-.234.35-.908 1.14-1.112 1.374-.204.234-.41.264-.76.088-.35-.176-1.48-.546-2.82-1.74-1.042-.93-1.746-2.078-1.95-2.428-.204-.35-.022-.54.154-.714.158-.158.35-.41.526-.614.176-.204.234-.35.35-.584.118-.234.058-.44-.03-.614-.088-.176-.79-1.9-1.082-2.604-.284-.684-.572-.59-.79-.602-.204-.01-.44-.012-.674-.012-.234 0-.614.088-.936.44-.322.35-1.23 1.202-1.23 2.932 0 1.73 1.26 3.402 1.436 3.636.176.234 2.48 3.788 6.008 5.312.84.364 1.496.582 2.008.744.844.268 1.612.23 2.22.14.678-.102 2.072-.848 2.364-1.666.292-.818.292-1.52.204-1.666-.088-.146-.322-.234-.672-.41z" />
        </svg>
      </a>
    </div>
  );
};
