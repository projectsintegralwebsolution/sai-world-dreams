'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Download,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Loader2,
  MapPin,
  Calendar,
  PhoneCall,
  Car,
  Tag,
  Compass,
  Building2,
  Layers,
  Crown,
  Trees,
  ExternalLink,
  ArrowRight,
  User,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/hero-slide-1.webp',
    alt: 'Sai World Dreams Dombivli Grand Architectural Elevation',
  },
  {
    id: 2,
    image: '/images/hero/hero-slide-2.webp',
    alt: 'Sai World Dreams 6-Acre Landscaped Podium & Club',
  },
  {
    id: 3,
    image: '/images/hero/hero-slide-3.webp',
    alt: 'Sai World Dreams 8 Magnificent G+35 Towers',
  },
  {
    id: 4,
    image: '/images/hero/hero-slide-4.webp',
    alt: 'Sai World Dreams High-Street Shopping Boulevard & Hotel',
  },
];

interface HeroSliderProps {
  onOpenEnquiry?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenEnquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Form State for Right-Side Enquiry Panel
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    interestedIn: '2 BHK',
    consent: true,
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      slideIntervalRef.current = setInterval(nextSlide, 7000);
    } else if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }

    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };
  }, [isPlaying, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Client validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setFormError('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      setFormError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    if (!formData.consent) {
      setFormError('Please agree to receive project updates to proceed.');
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
          enquiryType: 'Hero Panel Enquiry',
          consent: true,
          source: 'Hero Right Enquiry Panel',
          sourcePageUrl: typeof window !== 'undefined' ? window.location.href : 'Homepage Hero',
          formType: 'Hero Banner Quick Enquiry',
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || data.error || 'Failed to submit enquiry. Please try again.');
      }

      setReferenceId(data.referenceId || '');
      setFormStatus('success');
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        interestedIn: '2 BHK',
        consent: true,
      });
    } catch (err: any) {
      setFormStatus('error');
      setFormError(err.message || 'Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <div
      className="relative w-full h-[90vh] min-h-[660px] max-h-[820px] overflow-hidden bg-brand-blue-deep select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      role="region"
      aria-label="Sai World Dreams Township Visual Showcase"
    >
      {/* 1. BACKGROUND ARCHITECTURAL RENDERS (Unshadowed, Crystal-Clear & Photorealistic) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={slide.id === 1}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. OVERLAY CONTAINER                                                      */}
      {/* Top alignment starts strictly below the navigation bar (112px on desktop)  */}
      {/* Both panels are aligned on the same horizontal line with matching heights  */}
      {/* Outer gutters: 10px (8–12px) from left and right viewport edges on desktop */}
      {/* Responsive on mobile/tablet (px-2.5 sm:px-3)                               */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full h-full pt-[82px] md:pt-[110px] lg:pt-[112px] pb-3 px-2.5 sm:px-3 lg:px-2.5 flex flex-col justify-between pointer-events-none">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 w-full h-full pointer-events-auto">
          
          {/* ========================================================================= */}
          {/* 3. LEFT PROMOTIONAL PANEL (Redesigned per Reference: Deep Navy, Gold,     */}
          {/*    Stats Grid, 3 Feature Cards w/ Photos & Chevrons, Ivory Price, RERA)   */}
          {/* ========================================================================= */}
          <div className="w-full max-w-[285px] sm:max-w-[295px] lg:w-[280px] xl:w-[295px] shrink-0 h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="bg-gradient-to-b from-[#061226] via-[#091B3A] to-[#040C1A] rounded-2xl border-2 border-[#D4AF37]/90 text-white overflow-hidden transition-all duration-300 h-full flex flex-col justify-between p-2.5 sm:p-3 space-y-1.5 hover:border-[#DFBF7D]"
            >
              {/* Header: NEW-LAUNCH Badge, Project Title, Location, Trust info & Tower Visual */}
              <div className="relative overflow-hidden rounded-t-xl pt-1 pb-1.5 px-1">
                {/* Right-Side Cropped Tower Elevation with gradient fade */}
                <div className="absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden pointer-events-none opacity-90 z-0">
                  <Image
                    src="/images/hero/hero-slide-1.webp"
                    alt="Sai World Dreams Towers Elevation"
                    fill
                    sizes="150px"
                    className="object-cover object-left-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#061226] via-[#061226]/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061226] via-transparent to-transparent" />
                </div>

                {/* Left-Side Content */}
                <div className="relative z-10 space-y-1">
                  {/* NEW-LAUNCH Flag Badge with slow subtle gold shimmer */}
                  <div className="relative overflow-hidden inline-flex items-center gap-1 px-3 py-0.5 rounded-r-full bg-gradient-to-r from-[#DFBF7D] via-[#F5E2B3] to-[#C5A059] text-[#07132B] font-black text-[9.5px] uppercase tracking-widest border-y border-r border-[#9F7E3B]/70">
                    <Sparkles className="w-2.5 h-2.5 text-[#07132B] shrink-0 relative z-10" />
                    <span className="relative z-10">NEW-LAUNCH</span>
                    <div className="absolute inset-0 -translate-x-full animate-shimmer-beam bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                  </div>

                  {/* Project Title with smooth fade-in on slide transition */}
                  <motion.div
                    key={`hero-title-${currentSlide}`}
                    initial={{ opacity: 0.8, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <h1 className="text-[18px] sm:text-[19px] font-black tracking-tight leading-tight pt-0.5">
                      <span className="text-white font-display">SAI WORLD </span>
                      <span className="text-[#DFBF7D] font-display">DREAMS</span>
                    </h1>
                  </motion.div>

                  {/* Location with MapPin */}
                  <p className="text-[10px] sm:text-[10.5px] font-semibold text-gray-200 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#DFBF7D] shrink-0" />
                    <span>At Dombivli (Kalyan-Shil Rd)</span>
                  </p>

                  {/* Approved Trust Info */}
                  <p className="text-[9px] font-medium text-gray-300 tracking-wide">
                    <span className="text-[#DFBF7D]/60">—</span> By Paradise Group • 32+ Years Trust <span className="text-[#DFBF7D]/60">—</span>
                  </p>
                </div>

                {/* Curved Gold Ribbon / Wave Divider */}
                <div className="relative h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#DFBF7D] to-transparent mt-2" />
              </div>

              {/* 3. Project Statistics Cards (Warm Ivory / Cream Surface, 3 Columns, Restrained Highlight) */}
              <div className="bg-gradient-to-b from-[#FFFDF7] via-[#FBF6EC] to-[#F5ECD7] rounded-xl border border-[#DFBF7D]/75 p-1.5 sm:p-2 flex items-center justify-between text-center animate-soft-pulse transition-all duration-300 hover:border-[#DFBF7D]">
                {/* Land Parcel */}
                <div className="flex-1 px-0.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A059] mx-auto mb-0.5" />
                  <strong className="block text-[11.5px] sm:text-[12.5px] font-black text-[#07132B] leading-none">
                    18 Acres
                  </strong>
                  <span className="block text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider text-gray-600 mt-0.5">
                    LAND PARCEL
                  </span>
                </div>

                <div className="w-[1px] h-7 bg-[#DFBF7D]/50" />

                {/* Towers */}
                <div className="flex-1 px-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059] mx-auto mb-0.5" />
                  <strong className="block text-[11.5px] sm:text-[12.5px] font-black text-[#07132B] leading-none">
                    8 Towers
                  </strong>
                  <span className="block text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider text-gray-600 mt-0.5">
                    TOWERS
                  </span>
                </div>

                <div className="w-[1px] h-7 bg-[#DFBF7D]/50" />

                {/* Floors */}
                <div className="flex-1 px-0.5">
                  <Layers className="w-3.5 h-3.5 text-[#C5A059] mx-auto mb-0.5" />
                  <strong className="block text-[11.5px] sm:text-[12.5px] font-black text-[#07132B] leading-none">
                    G + 35 Storey
                  </strong>
                  <span className="block text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider text-gray-600 mt-0.5">
                    FLOORS
                  </span>
                </div>
              </div>

              {/* 4. Three Distinct Promotional Feature Cards (Staggered Fade-in Animation) */}
              <div className="space-y-1.5">
                {/* Card 1: Dombivli's 1st Themed Township */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="bg-gradient-to-r from-[#0C2417] via-[#143522] to-[#0E2719] border border-emerald-500/50 rounded-xl p-1.5 flex items-center justify-between gap-2 group hover:border-emerald-400 hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1B4D31] to-[#0D2618] border border-emerald-400/60 flex items-center justify-center shrink-0">
                    <Building2 className="w-3.5 h-3.5 text-emerald-300" />
                  </div>
                  <div className="flex-1 min-w-0 pr-1">
                    <h2 className="text-[10.5px] font-black text-white leading-tight truncate">
                      Dombivli's 1st Themed Township
                    </h2>
                    <p className="text-[8px] text-emerald-200/90 leading-tight mt-0.5 truncate">
                      A new benchmark in urban living
                    </p>
                  </div>
                  <div className="relative w-16 sm:w-20 h-9 rounded-lg overflow-hidden shrink-0 border border-emerald-400/30">
                    <Image
                      src="/images/amenities/clubhouse-entrance-facade.webp"
                      alt="Dombivli 1st Themed Township"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black/60 border border-white/40 flex items-center justify-center text-white group-hover:bg-[#DFBF7D] group-hover:text-brand-blue-deep transition-colors">
                      <ChevronRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: 60+ World-Class Lifestyle Amenities */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="bg-gradient-to-r from-[#291A0A] via-[#3C270F] to-[#291A0A] border border-amber-500/50 rounded-xl p-1.5 flex items-center justify-between gap-2 group hover:border-amber-400 hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#593714] to-[#2E1A06] border border-amber-400/60 flex items-center justify-center shrink-0">
                    <Crown className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div className="flex-1 min-w-0 pr-1">
                    <h2 className="text-[10.5px] font-black text-white leading-tight truncate">
                      60+ World-Class Lifestyle Amenities
                    </h2>
                    <p className="text-[8px] text-amber-200/90 leading-tight mt-0.5 truncate">
                      Recreation • Wellness • Community
                    </p>
                  </div>
                  <div className="relative w-16 sm:w-20 h-9 rounded-lg overflow-hidden shrink-0 border border-amber-400/30">
                    <Image
                      src="/images/amenities/la-dreams-clubhouse-pool.webp"
                      alt="60+ World-Class Lifestyle Amenities"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black/60 border border-white/40 flex items-center justify-center text-white group-hover:bg-[#DFBF7D] group-hover:text-brand-blue-deep transition-colors">
                      <ChevronRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: 6 Acres of Themed Landscaping */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.3 }}
                  className="bg-gradient-to-r from-[#0A1A33] via-[#10274D] to-[#0A1A33] border border-blue-400/50 rounded-xl p-1.5 flex items-center justify-between gap-2 group hover:border-blue-300 hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#163668] to-[#0B1E38] border border-blue-400/60 flex items-center justify-center shrink-0">
                    <Trees className="w-3.5 h-3.5 text-blue-300" />
                  </div>
                  <div className="flex-1 min-w-0 pr-1">
                    <h2 className="text-[10.5px] font-black text-white leading-tight truncate">
                      6 Acres of Themed Landscaping
                    </h2>
                    <p className="text-[8px] text-blue-200/90 leading-tight mt-0.5 truncate">
                      Green Living for a Better Tomorrow
                    </p>
                  </div>
                  <div className="relative w-16 sm:w-20 h-9 rounded-lg overflow-hidden shrink-0 border border-blue-400/30">
                    <Image
                      src="/images/amenities/pergolas-gazebos.webp"
                      alt="6 Acres of Themed Landscaping"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black/60 border border-white/40 flex items-center justify-center text-white group-hover:bg-[#DFBF7D] group-hover:text-brand-blue-deep transition-colors">
                      <ChevronRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 5. Starting Price Section (Warm Ivory / Champagne Gold Surface, No Clipping, Gentle Pulse) */}
              <div className="bg-gradient-to-b from-[#FFFDF7] via-[#FAF5E8] to-[#F3E8CE] rounded-xl border border-[#DFBF7D]/80 px-2 py-1.5 sm:py-2 text-center relative overflow-hidden animate-gold-pulse">
                <p className="text-[9.5px] sm:text-[10px] font-bold text-gray-800 leading-tight tracking-wide">
                  Luxury 1, 2, 2.5 &amp; 3 BHK Apartments
                </p>
                <p className="text-[8px] sm:text-[8.5px] uppercase font-black text-[#9F7E3B] tracking-widest mt-0.5">
                  STARTING PRICE
                </p>
                <div className="flex items-baseline justify-center gap-1.5 mt-0.5 pb-0.5">
                  <span className="text-[17px] sm:text-[19px] font-black text-[#07132B] font-display tracking-tight leading-tight">
                    ₹ 52.50 Lacs*
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-700 tracking-normal uppercase leading-tight">
                    Onwards
                  </span>
                </div>
                <div className="h-[1.5px] w-20 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full" />
              </div>

              {/* 6. MahaRERA Information Strip (Soft Border Highlight) */}
              <div className="bg-[#FFFDF7] rounded-lg border border-[#DFBF7D]/75 px-2.5 py-1.5 flex items-center justify-between text-[10px] hover:border-[#DFBF7D] transition-all duration-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="font-bold text-gray-800">MahaRERA:</span>
                </div>
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-black text-brand-blue-deep hover:text-brand-gold transition-colors"
                  title="View Official MahaRERA Registration"
                >
                  <span>{SITE_CONFIG.reraNumber}</span>
                  <ExternalLink className="w-3 h-3 text-[#C5A059] shrink-0" />
                </a>
              </div>

              {/* 7. Radiant Metallic Gold Brochure Download CTA Button (Smooth Gold Shine on Hover) */}
              <a
                href="/brochure/Sai-World-Dreams-Brochure.pdf"
                download="Sai-World-Dreams-Dombivli-Brochure.pdf"
                className="relative overflow-hidden w-full flex items-center justify-between py-2.5 px-3 bg-gradient-to-r from-[#DFBF7D] via-[#F5E2B3] to-[#C5A059] hover:from-[#F5E2B3] hover:to-[#DFBF7D] text-[#07132B] font-black text-[10.5px] sm:text-[11px] uppercase tracking-wider rounded-xl border border-[#9F7E3B]/70 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 group cursor-pointer"
              >
                {/* Smooth gold shine effect across button on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                <div className="pr-2 border-r border-[#9F7E3B]/40 flex items-center relative z-10">
                  <Download className="w-3.5 h-3.5 text-[#07132B] group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </div>
                <span className="flex-1 text-center font-black relative z-10">
                  DOWNLOAD OFFICIAL BROCHURE
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#07132B] group-hover:translate-x-1 transition-transform shrink-0 relative z-10" />
              </a>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* CENTER AREA: UNOBSTRUCTED ARCHITECTURAL RENDERS (Wide Open Canvas)        */}
          {/* ========================================================================= */}
          <div className="hidden lg:block flex-1 min-w-0 pointer-events-none" aria-hidden="true">
            {/* The central towers, podium, and sky remain completely open and unobstructed */}
          </div>

          {/* ========================================================================= */}
          {/* 4. RIGHT ENQUIRY PANEL (Premium Translucent Navy & Gold, Same Height)     */}
          {/* ========================================================================= */}
          <div className="w-full max-w-[285px] sm:max-w-[295px] lg:w-[280px] xl:w-[295px] shrink-0 h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="bg-gradient-to-b from-[#07132B]/95 via-[#0A1A38]/95 to-[#061226]/95 backdrop-blur-md rounded-2xl border-2 border-[#DFBF7D]/90 text-white transition-all duration-300 h-full flex flex-col justify-between p-3 sm:p-3.5 hover:border-[#DFBF7D]"
            >
              {formStatus === 'success' ? (
                <div className="my-auto py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    Thank You!
                  </h3>
                  {referenceId && (
                    <div className="inline-block px-3 py-0.5 bg-[#DFBF7D]/15 border border-[#DFBF7D]/40 rounded text-[11px] font-bold text-[#DFBF7D] font-mono">
                      Ref: {referenceId}
                    </div>
                  )}
                  <p className="text-[11px] text-gray-300 leading-relaxed max-w-xs mx-auto">
                    Your request for <strong className="text-[#DFBF7D]">Sai World Dreams</strong> has been received. Our sales advisor will connect with you shortly with pricing and floor plans.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus('idle');
                      setReferenceId('');
                    }}
                    className="text-[10px] font-bold text-[#DFBF7D] hover:underline uppercase tracking-wider pt-2 block mx-auto cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="h-full flex flex-col justify-between">
                  {/* Top Block: Header, Titles, Form Inputs, Consent & CTA Button */}
                  <div className="space-y-2 sm:space-y-2.5">
                    {/* Top Header: Developer Priority Access Pill */}
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="h-[1px] w-5 bg-[#DFBF7D]/40" />
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#DFBF7D]/60 bg-black/50 text-[8.5px] uppercase tracking-widest text-[#DFBF7D] font-bold">
                        <Crown className="w-2.5 h-2.5 text-[#DFBF7D]" />
                        <span>DIRECT DEVELOPER PRIORITY ACCESS</span>
                      </div>
                      <span className="h-[1px] w-5 bg-[#DFBF7D]/40" />
                    </div>

                    {/* Heading & Short Supporting Line */}
                    <div className="text-center">
                      <h2 className="text-2xl sm:text-[25px] font-black tracking-tight text-white font-display leading-none">
                        Enquire <span className="text-[#DFBF7D]">Now</span>
                      </h2>
                      <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#DFBF7D] to-transparent mx-auto mt-1 rounded-full" />
                      <p className="text-[10.5px] sm:text-[11px] text-gray-300 font-medium mt-1">
                        Get project details and a callback
                      </p>
                    </div>

                    {formError && (
                      <div className="p-1.5 bg-red-950/80 border border-red-500/50 text-red-200 text-[10px] rounded text-center">
                        {formError}
                      </div>
                    )}

                    {/* Input Fields: Uniform h-10 heights, consistent gaps */}
                    <div className="space-y-2 pt-0.5">
                      {/* Full Name */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <User className="w-3.5 h-3.5 text-gray-500" />
                        </div>
                        <input
                          id="hero-name"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Full Name *"
                          required
                          className="w-full h-10 pl-9 pr-3 text-xs bg-white text-gray-900 border border-gray-200 rounded-lg focus:border-[#DFBF7D] focus:ring-1 focus:ring-[#DFBF7D] outline-none transition-colors placeholder:text-gray-400 font-medium"
                        />
                      </div>

                      {/* Phone Number with +91 country code in one seamless row */}
                      <div className="flex h-10 bg-white rounded-lg border border-gray-200 overflow-hidden focus-within:border-[#DFBF7D] focus-within:ring-1 focus-within:ring-[#DFBF7D]">
                        <div className="flex items-center gap-1 px-2.5 bg-[#F9F7F2] border-r border-gray-200 text-gray-800 shrink-0 select-none">
                          <span className="text-xs font-bold">+91</span>
                          <ChevronDown className="w-3 h-3 text-gray-500" />
                        </div>
                        <div className="relative flex-1 flex items-center">
                          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                            <Phone className="w-3.5 h-3.5 text-gray-500" />
                          </div>
                          <input
                            id="hero-mobile"
                            name="mobile"
                            type="tel"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Phone Number *"
                            maxLength={10}
                            required
                            className="w-full h-full pl-8 pr-2.5 text-xs bg-white text-gray-900 outline-none placeholder:text-gray-400 font-medium"
                          />
                        </div>
                      </div>

                      {/* Email Address (Optional) */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Mail className="w-3.5 h-3.5 text-gray-500" />
                        </div>
                        <input
                          id="hero-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="E-Mail Address (Optional)"
                          className="w-full h-10 pl-9 pr-3 text-xs bg-white text-gray-900 border border-gray-200 rounded-lg focus:border-[#DFBF7D] focus:ring-1 focus:ring-[#DFBF7D] outline-none transition-colors placeholder:text-gray-400 font-medium"
                        />
                      </div>

                      {/* Preferred Configuration with Building icon, label, and clean dropdown */}
                      <div className="relative h-11 bg-white rounded-lg border border-gray-200 px-3 flex items-center gap-2 focus-within:border-[#DFBF7D] focus-within:ring-1 focus-within:ring-[#DFBF7D]">
                        <Building2 className="w-4 h-4 text-gray-500 shrink-0" />
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <span className="block text-[8px] uppercase font-bold text-gray-400 tracking-wider leading-none">
                            Preferred Configuration
                          </span>
                          <select
                            id="hero-config"
                            name="interestedIn"
                            value={formData.interestedIn}
                            onChange={handleInputChange}
                            className="w-full bg-transparent text-xs font-bold text-gray-900 outline-none cursor-pointer p-0 mt-0.5 leading-tight"
                          >
                            <option value="1 BHK">1 BHK Residence</option>
                            <option value="2 BHK">2 BHK Residence</option>
                            <option value="2.5 BHK">2.5 BHK Residence</option>
                            <option value="3 BHK">3 BHK Residence</option>
                            <option value="Not Decided">Exploring Options</option>
                          </select>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 pointer-events-none shrink-0" />
                      </div>

                      {/* Consent checkbox */}
                      <div className="flex items-start gap-2 pt-0.5">
                        <input
                          id="hero-consent"
                          name="consent"
                          type="checkbox"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-brand-gold focus:ring-brand-gold shrink-0 cursor-pointer accent-[#DFBF7D]"
                        />
                        <label htmlFor="hero-consent" className="text-[9.5px] text-gray-300 leading-tight select-none cursor-pointer font-normal">
                          I agree to be contacted via call, SMS, WhatsApp & email, as per{' '}
                          <Link href="/privacy-policy" className="text-[#DFBF7D] font-bold underline hover:text-white transition-colors">
                            Privacy Policy
                          </Link>.
                        </label>
                      </div>

                      {/* Prominent Navy & Gold Full-Width REQUEST A CALL BACK Button */}
                      <button
                        type="submit"
                        disabled={formStatus === 'loading'}
                        className="w-full h-11 px-4 bg-[#07132B] hover:bg-[#0B1B3D] active:scale-[0.99] disabled:bg-gray-700 text-[#DFBF7D] font-black text-xs uppercase tracking-wider rounded-lg border border-[#DFBF7D]/80 hover:border-[#DFBF7D] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group mt-1"
                      >
                        {formStatus === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#DFBF7D]" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4 text-[#DFBF7D]" />
                            <span>REQUEST A CALL BACK</span>
                            <ArrowRight className="w-4 h-4 text-[#DFBF7D] group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* 3 Real Estate Trust Badges in Compact Evenly Spaced Footer Row */}
                  <div className="pt-2 sm:pt-2.5 mt-auto border-t border-[#DFBF7D]/30 grid grid-cols-3 gap-1 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full border border-[#DFBF7D]/60 bg-black/40 flex items-center justify-center text-[#DFBF7D] mb-1">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold text-gray-200 leading-tight">
                        Instant<br />Callback
                      </span>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-[#DFBF7D]/25" />
                      <div className="w-7 h-7 rounded-full border border-[#DFBF7D]/60 bg-black/40 flex items-center justify-center text-[#DFBF7D] mb-1">
                        <Car className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold text-gray-200 leading-tight">
                        Free<br />Site Visit
                      </span>
                      <div className="absolute right-0 top-1 bottom-1 w-[1px] bg-[#DFBF7D]/25" />
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full border border-[#DFBF7D]/60 bg-black/40 flex items-center justify-center text-[#DFBF7D] mb-1">
                        <Tag className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold text-gray-200 leading-tight">
                        Unmatched<br />Price
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>

      {/* 5. DISCREET SLIDE INDICATORS & CONTROLS (Centered at the Bottom) */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-brand-blue-deep/80 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
        <button
          type="button"
          onClick={prevSlide}
          className="p-1 text-white/70 hover:text-white cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1 mx-1.5">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === idx ? 'w-4 h-1.5 bg-brand-gold' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1 text-brand-gold/80 hover:text-brand-gold cursor-pointer"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="p-1 text-white/70 hover:text-white cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
