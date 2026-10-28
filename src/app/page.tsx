import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Trees,
  ShoppingBag,
  Hotel,
  Briefcase,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  MapPin,
  Clock,
  Eye,
  Award
} from 'lucide-react';
import { HeroSlider } from '@/components/home/HeroSlider';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { AutoEnquiryPopup } from '@/components/home/AutoEnquiryPopup';
import { ApartmentPricingSection } from '@/components/home/ApartmentPricingSection';
import {
  SITE_CONFIG,
  PROJECT_HIGHLIGHTS,
  RESIDENCE_CONFIGS,
  TOWERS_LIST,
  AMENITIES_WORLDS,
  CONNECTIVITY_DATA,
  SCHOOLS_NEARBY,
  HOSPITALS_NEARBY,
  GALLERY_ITEMS
} from '@/lib/constants';

// Elegant Gold Line Icons matching Homepage Project Highlights Reference
const HIGHLIGHT_ICONS = [
  // 1. 18 Acres - Perspective Grid Ground Map with Location Pin
  (
    <svg
      key="map"
      viewBox="0 0 52 52"
      fill="none"
      stroke="#DFBF7D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-11 sm:h-11 mx-auto text-brand-gold-light"
      aria-hidden="true"
    >
      <path d="M7 39 L16 26 L36 26 L45 39 Z" />
      <path d="M11.5 32.5 L40.5 32.5" />
      <path d="M18 39 L22 26" />
      <path d="M26 39 L26 26" />
      <path d="M34 39 L30 26" />
      <path d="M26 8 C21.5 8 18 11.5 18 16 C18 22 26 29 26 29 C26 29 34 22 34 16 C34 11.5 30.5 8 26 8 Z" />
      <circle cx="26" cy="15.5" r="3" />
    </svg>
  ),
  // 2. G+35 Storeys - 3 Angled Modern Architectural Towers
  (
    <svg
      key="towers"
      viewBox="0 0 52 52"
      fill="none"
      stroke="#DFBF7D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-11 sm:h-11 mx-auto text-brand-gold-light"
      aria-hidden="true"
    >
      <path d="M5 43 H47" />
      <path d="M9 43 V24 L18 18 V43" />
      <path d="M12 24.5 H15" />
      <path d="M12 28.5 H15" />
      <path d="M12 32.5 H15" />
      <path d="M12 36.5 H15" />
      <path d="M12 40.5 H15" />
      <path d="M20 43 V13 L27 7 L34 13 V43" />
      <path d="M24 16 H30" />
      <path d="M24 20 H30" />
      <path d="M24 24 H30" />
      <path d="M24 28 H30" />
      <path d="M24 32 H30" />
      <path d="M24 36 H30" />
      <path d="M24 40 H30" />
      <path d="M36 43 V19 L44 25 V43" />
      <path d="M39 26 H42" />
      <path d="M39 30 H42" />
      <path d="M39 34 H42" />
      <path d="M39 38 H42" />
    </svg>
  ),
  // 3. 6 Acres - Lush Trees & Podium Park Bench
  (
    <svg
      key="podium"
      viewBox="0 0 52 52"
      fill="none"
      stroke="#DFBF7D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-11 sm:h-11 mx-auto text-brand-gold-light"
      aria-hidden="true"
    >
      <path d="M5 41 H47" />
      <path d="M13 41 V28" />
      <path d="M8 28 C5 26 5 21 8 19 C7 15 11 13 14 15 C16 12 21 12 22 16 C25 17 25 22 23 25 C25 28 21 30 18 29 C17 30 14 30 13 28 Z" />
      <path d="M38 41 V29" />
      <path d="M38 14 L30 25 H34 L28 34 H48 L42 25 H46 Z" />
      <path d="M22 32 H31" />
      <path d="M21 29 H32" />
      <path d="M23 29 V37" />
      <path d="M30 29 V37" />
      <path d="M21 32 V37" />
      <path d="M32 32 V37" />
    </svg>
  ),
  // 4. Dubai Themed - Burj Al Arab Sail Tower & Palm Trees
  (
    <svg
      key="dubai"
      viewBox="0 0 52 52"
      fill="none"
      stroke="#DFBF7D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-11 sm:h-11 mx-auto text-brand-gold-light"
      aria-hidden="true"
    >
      <path d="M5 42 H47" />
      <path d="M26 8 V42" />
      <path d="M26 8 C19.5 18 19.5 34 26 42" />
      <path d="M26 12 H31" />
      <path d="M26 42 C30 42 32 38 32 32 C32 20 27 12 26 12" />
      <path d="M21 20 H26" />
      <path d="M20 26 H26" />
      <path d="M21 32 H26" />
      <path d="M23 37 H26" />
      <path d="M26 18 H32.5" />
      <path d="M26 8 V4" />
      <path d="M12 42 C12 36 13 32 13 28" />
      <path d="M13 28 C10 26 7 28 6 31" />
      <path d="M13 28 C11 25 12 22 15 23" />
      <path d="M13 28 C14 25 17 26 18 29" />
      <path d="M13 28 C9 29 8 33 9 35" />
      <path d="M40 42 C40 36 39 32 39 28" />
      <path d="M39 28 C42 26 45 28 46 31" />
      <path d="M39 28 C41 25 40 22 37 23" />
      <path d="M39 28 C38 25 35 26 34 29" />
      <path d="M39 28 C43 29 44 33 43 35" />
    </svg>
  ),
  // 5. G+3 Plaza - High-Street Shopping Mall & Retail Bag
  (
    <svg
      key="plaza"
      viewBox="0 0 52 52"
      fill="none"
      stroke="#DFBF7D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-11 sm:h-11 mx-auto text-brand-gold-light"
      aria-hidden="true"
    >
      <path d="M5 42 H47" />
      <path d="M10 24 C14 18 30 18 38 24" />
      <path d="M8 24 H40 V42 H8 Z" />
      <path d="M13 24 V42" />
      <path d="M19 24 V42" />
      <path d="M25 24 V42" />
      <path d="M8 30 H40" />
      <rect x="29.5" y="27" width="9" height="11" rx="1.5" />
      <path d="M32.5 27 V24.5 C32.5 23 35.5 23 35.5 24.5 V27" />
    </svg>
  ),
  // 6. G+33 & G+23 - Business Park & 5-Star Hotel with Arched Stars
  (
    <svg
      key="hotel"
      viewBox="0 0 52 52"
      fill="none"
      stroke="#DFBF7D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-11 sm:h-11 mx-auto text-brand-gold-light"
      aria-hidden="true"
    >
      <path d="M5 43 H47" />
      {/* 5 Luxury Stars Arched over Hotel */}
      <path d="M31 10 L31.5 11.5 L33 11.5 L31.8 12.5 L32.2 14 L31 13 L29.8 14 L30.2 12.5 L29 11.5 L30.5 11.5 Z" strokeWidth="0.8" fill="#DFBF7D" />
      <path d="M35 8 L35.5 9.5 L37 9.5 L35.8 10.5 L36.2 12 L35 11 L33.8 12 L34.2 10.5 L33 9.5 L34.5 9.5 Z" strokeWidth="0.8" fill="#DFBF7D" />
      <path d="M39 7 L39.5 8.5 L41 8.5 L39.8 9.5 L40.2 11 L39 10 L37.8 11 L38.2 9.5 L37 8.5 L38.5 8.5 Z" strokeWidth="0.8" fill="#DFBF7D" />
      <path d="M43 8 L43.5 9.5 L45 9.5 L43.8 10.5 L44.2 12 L43 11 L41.8 12 L42.2 10.5 L41 9.5 L42.5 9.5 Z" strokeWidth="0.8" fill="#DFBF7D" />
      <path d="M47 10 L47.5 11.5 L49 11.5 L47.8 12.5 L48.2 14 L47 13 L45.8 14 L46.2 12.5 L45 11.5 L46.5 11.5 Z" strokeWidth="0.8" fill="#DFBF7D" />
      {/* Business Tower Left */}
      <path d="M10 43 V20 L16 15 L22 20 V43" />
      <path d="M16 15 V10" />
      <path d="M14 24 H18" />
      <path d="M14 29 H18" />
      <path d="M14 34 H18" />
      <path d="M14 39 H18" />
      {/* Hotel Tower Right */}
      <path d="M24 43 V17 H36 V43" />
      <path d="M36 43 V22 H44 V43" />
      <path d="M28 22 H32" />
      <path d="M28 27 H32" />
      <path d="M28 32 H32" />
      <path d="M28 37 H32" />
      <path d="M38 27 H42" />
      <path d="M38 33 H42" />
      <path d="M38 39 H42" />
    </svg>
  ),
];

export default function HomePage() {
  const previewGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="space-y-0">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. STATS & HALLMARKS RIBBON - REDESIGNED */}
      <section className="bg-brand-blue-deep border-y border-brand-gold/30 py-9 sm:py-11 lg:py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 sm:gap-y-10 lg:gap-y-0 text-center">
            {PROJECT_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="relative px-3 sm:px-4 py-2 sm:py-3 flex flex-col items-center justify-start text-center group"
              >
                {/* Elegant Gold Line Icon */}
                <div className="mb-3 sm:mb-3.5 transition-transform duration-300 group-hover:scale-105">
                  {HIGHLIGHT_ICONS[idx]}
                </div>

                {/* Primary Gold Typography Headline */}
                <span className="font-serif text-2xl sm:text-[25px] lg:text-[24px] xl:text-[27px] font-normal text-brand-gold-light tracking-tight leading-tight drop-shadow-sm">
                  {item.stat}
                </span>

                {/* Thin Gold Horizontal Accent Line */}
                <div className="w-7 h-[1px] bg-brand-gold/50 mx-auto my-2.5 sm:my-3" />

                {/* Uppercase Supporting Description */}
                <p className="text-[10px] sm:text-[11px] font-bold text-gray-100 uppercase tracking-[0.16em] leading-snug max-w-[170px]">
                  {item.title}
                </p>

                {/* Desktop vertical divider (between cols 1..5) */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute right-0 top-3 bottom-3 w-[1px] bg-brand-gold/30" />
                )}

                {/* Tablet vertical divider (between cols 1-2 & 4-5) */}
                {idx % 3 !== 2 && (
                  <div className="hidden md:block lg:hidden absolute right-0 top-3 bottom-3 w-[1px] bg-brand-gold/30" />
                )}

                {/* Tablet horizontal divider (between rows 1 & 2) */}
                {idx < 3 && (
                  <div className="hidden md:block lg:hidden absolute -bottom-5 left-4 right-4 h-[1px] bg-brand-gold/20" />
                )}

                {/* Mobile vertical divider (between cols 1 & 2 in each row) */}
                {idx % 2 === 0 && (
                  <div className="md:hidden absolute right-0 top-2 bottom-2 w-[1px] bg-brand-gold/30" />
                )}

                {/* Mobile horizontal divider (between rows 1-2 & 2-3) */}
                {idx < 4 && (
                  <div className="md:hidden absolute -bottom-4 left-3 right-3 h-[1px] bg-brand-gold/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT INTRODUCTION: DUBAI-INSPIRED LUXURY */}
      <section className="py-20 md:py-28 bg-brand-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Conceptual Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/15 border border-brand-gold/30 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
                  Dombivli's First Mixed-Use Themed World
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue font-display tracking-tight leading-tight">
                An 18-Acre Global Lifestyle World of the Family
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Conceived on the lines of iconic global destinations like Dubai Mall and Address Downtown, 
                <strong> Sai World Dreams</strong> creates one internally connected address of residences, 
                high-street shopping, business infrastructure and ultra-luxury hospitality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 bg-white rounded-md border border-brand-ivory-border">
                  <Building2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-blue">8 G+35 Towers</h3>
                    <p className="text-xs text-gray-600 mt-0.5">8 majestic residential towers with double-height entrance lobbies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-md border border-brand-ivory-border">
                  <Trees className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-blue">6-Acre Podium</h3>
                    <p className="text-xs text-gray-600 mt-0.5">Themed landscape podium with 600m elevated jogging track.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-md border border-brand-ivory-border">
                  <ShoppingBag className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-blue">World Dreams Plaza</h3>
                    <p className="text-xs text-gray-600 mt-0.5">G+3 high-street plaza with multiplex, dining & banquets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-md border border-brand-ivory-border">
                  <Briefcase className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-blue">Business Park & Hotel</h3>
                    <p className="text-xs text-gray-600 mt-0.5">G+33 storey business offices & G+23 5-star luxury hotel.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white hover:bg-brand-blue-light font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
                >
                  <span>Read Project Story</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </Link>
                <Link
                  href="/amenities"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold/15 hover:bg-brand-gold/25 text-brand-blue-deep font-bold text-xs uppercase tracking-wider rounded-sm border border-brand-gold/40 transition-all"
                >
                  <span>Explore 60+ Amenities</span>
                </Link>
              </div>
            </div>

            {/* Right Column: High Quality Architectural Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-2 border-brand-gold/40">
                <Image
                  src="/images/overview/world-dreams-plaza.webp"
                  alt="World Dreams Plaza Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-light">
                    Artist's Impression
                  </span>
                  <h3 className="text-lg font-bold font-display">World Dreams Plaza</h3>
                  <p className="text-xs text-gray-200">
                    High-street shopping boulevard with multiplex, restaurants and banquets on Kalyan-Shil Road.
                  </p>
                </div>
              </div>

              {/* Floating Quality Seal */}
              <div className="absolute -bottom-10 sm:-bottom-14 left-3 sm:-left-6 bg-brand-blue-deep text-white p-3.5 sm:p-4 rounded-md border border-brand-gold/40 flex items-center gap-3 z-10 shadow-lg">
                <ShieldCheck className="w-9 h-9 sm:w-10 sm:h-10 text-brand-gold shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">MahaRERA Approved</p>
                  <p className="text-xs font-bold text-white">{SITE_CONFIG.reraNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 8 RESIDENTIAL TOWERS OVERVIEW */}
      <section className="py-20 bg-brand-blue-deep text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-light">
              Architectural Grandeur
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
              8 Magnificent G+35 Storey Towers
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Majestically aligned along Kalyan-Shil Road and overlooking the 6-acre central landscaped podium.
            </p>
          </div>

          {/* Tower Skyline Image Banner */}
          <div className="relative aspect-[21/9] w-full rounded-lg overflow-hidden border border-brand-gold/30 mb-12">
            <Image
              src="/images/hero/hero-slide-3.webp"
              alt="Sai World Dreams 8 Residential Towers Elevation"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-6 text-xs text-white bg-black/60 px-3 py-1 rounded backdrop-blur-xs">
              <span className="font-semibold text-brand-gold">Artist's Impression:</span> Castle • Vista • Mist • Spring • Orchard • Meadows • Breeze • Heaven
            </div>
          </div>

          {/* Towers Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {TOWERS_LIST.map((t, idx) => (
              <div
                key={t.id}
                className="bg-white/5 hover:bg-white/10 border border-brand-gold/20 hover:border-brand-gold/60 p-4 rounded text-center transition-all duration-300 group"
              >
                <div className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">
                  Tower {idx + 1}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-gold-light transition-colors font-display">
                  {t.name.split('—')[1]?.trim() || t.name}
                </h3>
                <p className="text-[11px] text-gray-400 mt-1">{t.height}</p>
                <div className="mt-3 pt-2 border-t border-white/10">
                  <span className="text-[10px] text-brand-gold-light font-medium block">
                    {t.configurations.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/residences"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-brand-blue-deep text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
            >
              <span>Explore Configurations & Towers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROJECT OVERVIEW & APARTMENT PRICING */}
      <ApartmentPricingSection />

      {/* 6. RESIDENCE CONFIGURATIONS: 1, 2, 2.5 & 3 BHK */}
      <section className="py-20 md:py-28 bg-brand-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-dark">
              Thoughtfully Designed Homes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display">
              Global Luxury Residences
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Exquisite 1, 2, 2.5 and 3 BHK homes featuring European wooden flooring in master bedrooms, 
              private balconies, granite kitchen platforms with service counters and smart video door security.
            </p>
          </div>

          {/* Residence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESIDENCE_CONFIGS.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-lg border border-brand-gold/30 hover:border-brand-gold overflow-hidden transition-all duration-300 flex flex-col group"
              >
                {/* Floor Plan Thumbnail */}
                <div className="relative aspect-[4/3] bg-brand-ivory-dark overflow-hidden border-b border-brand-ivory-border p-3">
                  <Image
                    src={res.floorPlanImage}
                    alt={`${res.name} Plan`}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-brand-blue-deep/90 text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {res.type}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-brand-blue font-display">
                      {res.name}
                    </h3>
                    <p className="text-xs text-brand-burgundy font-semibold">
                      {res.tagline}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {res.description}
                    </p>

                    <div className="pt-3 border-t border-brand-ivory-border space-y-1.5">
                      <p className="text-[11px] text-gray-500 font-medium">Towers Available:</p>
                      <p className="text-xs font-bold text-brand-blue-deep">
                        {res.towers.join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Link
                      href={`/floor-plans#${res.id}`}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-brand-gold" />
                      <span>View Floor Plan</span>
                    </Link>

                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-1.5 py-2 bg-brand-gold/15 hover:bg-brand-gold/25 text-brand-blue text-xs font-bold uppercase tracking-wider rounded-sm border border-brand-gold/40 transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Enquire Price</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AMENITIES PREVIEW: 4 THEMED WORLDS */}
      <section className="py-20 md:py-28 bg-brand-ivory-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-dark">
              Resort-Style Indulgences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display">
              Four Worlds of Lifestyle & Wellness
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              From an Olympic-length pool with sunken bar and a 600m jogging track to a 3-level high-society clubhouse and peaceful Saibaba temple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES_WORLDS.map((world) => (
              <div
                key={world.id}
                className="bg-white rounded-lg border border-brand-gold/30 hover:border-brand-gold overflow-hidden transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={world.items[0]?.image || '/images/hero/hero-slide-2.webp'}
                    alt={world.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/90 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-brand-gold text-brand-blue-deep text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {world.theme}
                  </span>
                  <h3 className="absolute bottom-3 left-3 right-3 text-white font-bold text-lg font-display">
                    {world.name}
                  </h3>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {world.description}
                    </p>

                    <ul className="space-y-1.5 border-t border-brand-ivory-border pt-3">
                      {world.items.slice(0, 4).map((it) => (
                        <li key={it.id} className="text-xs text-gray-700 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                          <span className="truncate">{it.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/amenities#${world.id}`}
                    className="inline-flex items-center justify-between text-xs font-bold text-brand-blue hover:text-brand-gold transition-colors pt-2 uppercase tracking-wider border-t border-gray-100"
                  >
                    <span>View All {world.items.length} Facilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-blue text-white hover:bg-brand-blue-light font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
            >
              <span>Explore Complete 61-Feature Master Plan</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURAL GALLERY PREVIEW */}
      <section className="py-20 md:py-28 bg-brand-blue-deep text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-light">
                Visual Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
                Architectural Renders & Glimpses
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
            >
              <span>View Full Gallery ({GALLERY_ITEMS.length} Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[16/11] rounded-lg overflow-hidden border border-brand-gold/30 bg-brand-blue-deep"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/95 via-brand-blue-deep/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-300 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOCATION ADVANTAGES & CONNECTIVITY */}
      <section className="py-20 md:py-28 bg-brand-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Connectivity Left */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/15 border border-brand-gold/30 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-brand-gold-dark" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
                  Kalyan-Shil Road, Dombivli
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display">
                An Address of Seamless Connectivity & Growth
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Positioned directly on <strong>Kalyan-Shil Road</strong>, Sai World Dreams puts you within 
                minutes of the upcoming Kalyan-Taloja Metro, Dombivli Railway Station, Airoli-Katai Tunnel Road 
                and top-tier schools and hospitals.
              </p>

              {/* Transit Times Table */}
              <div className="space-y-2.5">
                {CONNECTIVITY_DATA.map((conn, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-white rounded-md border border-brand-ivory-border"
                  >
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                      <span className="text-xs font-bold text-brand-blue">{conn.destination}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-gray-500 hidden sm:inline">{conn.status}</span>
                      <span className="px-2.5 py-0.5 bg-brand-gold/20 text-brand-blue-deep font-bold text-xs rounded-full">
                        {conn.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/location"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-gold transition-colors"
                >
                  <span>Explore Neighbourhood, Schools & Hospitals</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Map Illustration Right */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden border-2 border-brand-gold/40 bg-white">
                <Image
                  src="/images/location/location-advantages-map.jpg"
                  alt="Sai World Dreams Location Advantages and Connectivity Map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-contain p-1.5 sm:p-2"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500 italic">
                  *Travel times are approximate as per project brochure under standard traffic conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DEVELOPER HERITAGE: PARADISE GROUP */}
      <section className="py-20 bg-brand-blue text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-7 h-7 text-brand-gold" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold-light">
                  32+ Years of Real Estate Mastery
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
                Paradise Group — Your World. Our Vision.
              </h2>
              <p className="text-sm text-gray-200 leading-relaxed font-light">
                We began more than three decades ago with a clear aim of providing lavish and appealing spaces 
                for all to dwell. Having successfully delivered more than 125 landmark projects spanning 5 Million 
                Sq. Ft. across Navi Mumbai and Mumbai, Paradise Group is currently developing over 12.5 Million Sq. Ft. 
                with a forward land bank of another 12.5 Million Sq. Ft.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="border-l-2 border-brand-gold pl-3">
                  <span className="text-2xl font-bold text-white font-display">32+</span>
                  <p className="text-xs text-gray-300">Glorious Years</p>
                </div>
                <div className="border-l-2 border-brand-gold pl-3">
                  <span className="text-2xl font-bold text-white font-display">125+</span>
                  <p className="text-xs text-gray-300">Delivered Projects</p>
                </div>
                <div className="border-l-2 border-brand-gold pl-3">
                  <span className="text-2xl font-bold text-white font-display">5M+</span>
                  <p className="text-xs text-gray-300">Sq. Ft. Constructed</p>
                </div>
                <div className="border-l-2 border-brand-gold pl-3">
                  <span className="text-2xl font-bold text-white font-display">12.5M+</span>
                  <p className="text-xs text-gray-300">Sq. Ft. Developing</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-brand-gold/30 rounded-lg p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold-light">
                Presence Across MMR
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Kharghar • Upper Kharghar • Panvel • Ulwe • Taloja • Dombivli • Kalyan NX • Lonavala
              </p>
              <div className="pt-2 border-t border-white/10">
                <p className="text-[11px] text-gray-400">
                  ISO 9001: 2015 Certified Organization dedicated to 'Beauty with Quality'.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LEAD ENQUIRY SECTION */}
      <section id="enquire" className="py-20 md:py-28 bg-brand-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left pitch */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-burgundy/10 border border-brand-burgundy/30 rounded-full">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-burgundy">
                  Book A Site Visit
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display leading-tight">
                Experience Sai World Dreams in Person
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                Our sales gallery and sample experiences are ready to welcome you. Register your details 
                to receive customized payment plans, official floor plan brochures, and arrange an exclusive 
                guided VIP site tour.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Immediate brochure and floor-plan PDF download</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Transparent unit availability and pricing guidance</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Zero brokerage direct developer assistance</span>
                </div>
              </div>

              <div className="p-4 bg-brand-blue-deep text-white rounded-md border border-brand-gold/30">
                <p className="text-xs text-gray-300">Need Immediate Assistance?</p>
                <a
                  href="tel:+919224136478"
                  className="text-lg font-bold text-brand-gold-light mt-0.5 block hover:text-white transition-colors"
                >
                  Call {SITE_CONFIG.phoneNumbers[0]}
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <EnquiryForm source="Homepage Main Enquiry Section" />
            </div>
          </div>
        </div>
      </section>

      {/* Automatic Enquiry Popup (3s initial delay, 2-minute recurring interval) */}
      <AutoEnquiryPopup />
    </div>
  );
}
