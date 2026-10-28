import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectLogoProps {
  variant?: 'light' | 'dark' | 'footer';
  className?: string;
  showDeveloperBadge?: boolean;
}

export const ProjectLogo: React.FC<ProjectLogoProps> = ({
  variant = 'light',
  className = '',
  showDeveloperBadge = false,
}) => {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Sai World Dreams Home">
      {/* Official Emblem Icon */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 100 80"
          className="w-10 h-10 md:w-11 md:h-11 transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Three Stars */}
          <path d="M50 4L51.8 9.5H57.5L52.9 12.9L54.7 18.4L50 15L45.3 18.4L47.1 12.9L42.5 9.5H48.2L50 4Z" fill="#C5A059" />
          <path d="M34 11L35.4 15.2H39.8L36.2 17.8L37.6 22L34 19.4L30.4 22L31.8 17.8L28.2 15.2H32.6L34 11Z" fill="#C5A059" />
          <path d="M66 11L67.4 15.2H71.8L68.2 17.8L69.6 22L66 19.4L62.4 22L63.8 17.8L60.2 15.2H64.6L66 11Z" fill="#C5A059" />

          {/* Arch Canopy */}
          <path
            d="M20 54C28 42 72 42 80 54"
            stroke="#C5A059"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Three Vertical Pillar Spires */}
          <line x1="36" y1="26" x2="36" y2="72" stroke={isLight ? "#FFFFFF" : "#0B1B3D"} strokeWidth="2.2" strokeLinecap="round" />
          <line x1="50" y1="20" x2="50" y2="72" stroke={isLight ? "#FFFFFF" : "#0B1B3D"} strokeWidth="2.8" strokeLinecap="round" />
          <line x1="64" y1="26" x2="64" y2="72" stroke={isLight ? "#FFFFFF" : "#0B1B3D"} strokeWidth="2.2" strokeLinecap="round" />

          {/* Base Foundation Bar */}
          <line x1="28" y1="72" x2="72" y2="72" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className={`text-[10px] tracking-[0.35em] uppercase font-bold leading-none ${isLight ? 'text-brand-gold-light' : 'text-brand-gold-dark'}`}>
          SAI
        </span>
        <span className={`text-base md:text-lg font-extrabold tracking-[0.16em] uppercase leading-tight font-display ${isLight ? 'text-white' : 'text-brand-blue'}`}>
          WORLD DREAMS
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[1px] w-3 bg-brand-gold/60"></span>
          <span className={`text-[8.5px] tracking-[0.25em] uppercase font-semibold ${isLight ? 'text-gray-300' : 'text-gray-600'}`}>
            DOMBIVLI
          </span>
          <span className="h-[1px] w-3 bg-brand-gold/60"></span>
        </div>
      </div>

      {showDeveloperBadge && (
        <div className="hidden lg:flex flex-col border-l border-white/20 pl-3 ml-2">
          <span className="text-[8px] uppercase tracking-wider text-brand-gold-accent font-medium">By Paradise Group</span>
          <span className="text-[9px] text-gray-300 font-semibold">32+ Years of Trust</span>
        </div>
      )}
    </Link>
  );
};
