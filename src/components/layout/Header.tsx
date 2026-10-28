'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ChevronRight, Download, MapPin, ShieldCheck } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { ProjectLogo } from '@/components/branding/ProjectLogo';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300" role="banner">
        {/* ========================================================================= */}
        {/* 1. SLIM SECONDARY TOP UTILITY STRIP (Relocates phone number cleanly)       */}
        {/* ========================================================================= */}
        <div className="bg-brand-blue-deep/95 border-b border-white/10 text-[11px] text-gray-300 py-1.5 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-brand-gold shrink-0" />
                <span>Site: <strong className="text-white font-medium">Kalyan-Shil Road, Dombivli</strong></span>
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-brand-gold shrink-0" />
                <span>MahaRERA: <strong className="text-brand-gold font-semibold">{SITE_CONFIG.reraNumber}</strong></span>
              </span>
            </div>

            {/* Clickable verified telephone & brochure links */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+919224136478"
                className="flex items-center gap-1.5 text-gray-200 hover:text-brand-gold transition-colors font-medium"
                title={`Call Sales Office: ${SITE_CONFIG.phoneNumbers[0]}`}
              >
                <Phone className="w-3 h-3 text-brand-gold" />
                <span>Call: {SITE_CONFIG.phoneNumbers[0]}</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={SITE_CONFIG.brochureDownloadUrl}
                download="Sai-World-Dreams-Brochure.pdf"
                className="flex items-center gap-1 text-brand-gold hover:text-brand-gold-light transition-colors font-semibold"
              >
                <Download className="w-3 h-3" />
                <span>Brochure PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. PRIMARY NAVIGATION BAR (Perfect vertical and baseline alignment)        */}
        {/* ========================================================================= */}
        <div
          className={`w-full transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'bg-brand-blue-deep/95 backdrop-blur-md shadow-md border-b border-brand-gold/20 py-2.5'
              : 'bg-brand-blue-deep/85 backdrop-blur-sm border-b border-brand-gold/15 py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              {/* Left: Project & Developer Logo */}
              <div className="shrink-0 flex items-center">
                <ProjectLogo variant="light" showDeveloperBadge={true} />
              </div>

              {/* Center: Desktop Navigation Links (Centred along a single horizontal baseline) */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 h-full" aria-label="Main Navigation">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative flex items-center h-full px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-semibold tracking-wider uppercase transition-colors rounded-sm ${
                        isActive
                          ? 'text-brand-gold font-bold'
                          : 'text-gray-200 hover:text-brand-gold-light'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-brand-gold rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right: Enquire Now Action & Mobile Toggle */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-brand-blue-deep text-xs font-bold uppercase tracking-wider rounded-sm transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Enquire Now</span>
                </button>

                {/* Mobile Hamburger & Quick Call Action */}
                <div className="flex items-center gap-2 lg:hidden">
                  <a
                    href="tel:+919224136478"
                    className="p-1.5 text-gray-200 hover:text-brand-gold"
                    aria-label={`Call Sales: ${SITE_CONFIG.phoneNumbers[0]}`}
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                  </a>

                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="px-2 py-1 bg-brand-gold text-brand-blue-deep text-[11px] font-bold uppercase tracking-wider rounded-sm"
                  >
                    Enquire
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-1.5 text-gray-200 hover:text-brand-gold focus:outline-none"
                    aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                  >
                    {isMobileMenuOpen ? <X className="w-6 h-6 text-brand-gold" /> : <Menu className="w-6 h-6 text-white" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. MOBILE NAVIGATION DRAWER                                               */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-brand-blue-deep border-l border-brand-gold/30 p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out shadow-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <ProjectLogo variant="light" />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-6 space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-3 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors ${
                      isActive
                        ? 'bg-brand-gold/15 text-brand-gold font-bold'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-blue-deep font-bold uppercase tracking-wider text-xs rounded-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Enquire Now</span>
            </button>

            <a
              href={SITE_CONFIG.brochureDownloadUrl}
              download="Sai-World-Dreams-Brochure.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-brand-gold/15 hover:bg-brand-gold/25 text-brand-gold-light border border-brand-gold/40 text-xs font-semibold rounded-sm transition-colors"
            >
              <Download className="w-4 h-4 text-brand-gold" />
              <span>Download PDF Brochure</span>
            </a>

            <a
              href="tel:+919224136478"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-semibold rounded-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call: {SITE_CONFIG.phoneNumbers[0]}</span>
            </a>

            <div className="text-center pt-2">
              <p className="text-[10px] text-gray-400">
                MahaRERA: <span className="text-brand-gold font-semibold">{SITE_CONFIG.reraNumber}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
