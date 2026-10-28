'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, ArrowRight, Tag, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EnquiryModal } from '@/components/common/EnquiryModal';

export interface PricingPlan {
  id: string;
  type: '1 BHK' | '2 BHK' | '2.5 BHK' | '3 BHK';
  carpetArea: string;
  carpetAreaLabel: string;
  price: string;
  tagline: string;
}

export const PRICING_CONFIGURATIONS: PricingPlan[] = [
  {
    id: '1-bhk',
    type: '1 BHK',
    carpetArea: '450 Sq. ft.',
    carpetAreaLabel: '450 Sq. ft. (Carpet Area)',
    price: '₹ 48 Lakhs*',
    tagline: 'Smart Luxury Living',
  },
  {
    id: '2-bhk',
    type: '2 BHK',
    carpetArea: '711–730 Sq. ft.',
    carpetAreaLabel: '711–730 Sq. ft. (Carpet Area)',
    price: '₹ 76.5 Lakhs*',
    tagline: 'Ideal Family Residence',
  },
  {
    id: '2.5-bhk',
    type: '2.5 BHK',
    carpetArea: '825 Sq. ft.',
    carpetAreaLabel: '825 Sq. ft. (Carpet Area)',
    price: '₹ 88 Lakhs*',
    tagline: 'Executive Versatile Space',
  },
  {
    id: '3-bhk',
    type: '3 BHK',
    carpetArea: '1194–1313 Sq. ft.',
    carpetAreaLabel: '1194–1313 Sq. ft. (Carpet Area)',
    price: '₹ 1.30 Cr*',
    tagline: 'Palatial Grand Suite',
  },
];

export const ApartmentPricingSection: React.FC = () => {
  const [selectedBhk, setSelectedBhk] = useState<string>('1 BHK');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenBreakup = (bhk: string) => {
    setSelectedBhk(bhk);
    setIsModalOpen(true);
  };

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 lg:py-24 bg-brand-blue-deep text-white relative overflow-hidden border-b border-brand-gold/25"
    >
      {/* Background Ambient Luxury Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-light/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-gold/15 border border-brand-gold/30 rounded-full">
            <Tag className="w-3.5 h-3.5 text-brand-gold-light" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold-light">
              Transparent Pricing & Configurations
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-display tracking-tight text-white leading-tight">
            Project Overview & Apartment Pricing
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            Discover thoughtfully proportioned residences crafted with European wooden flooring, sundeck balconies, 
            and transparent starting prices by Paradise Group.
          </p>
        </div>

        {/* Master Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ========================================================================= */}
          {/* 1. PROJECT OVERVIEW CARD (Matches media_1793183528530_ebab7abd.png)       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-brand-blue-dark/95 sm:bg-black/40 backdrop-blur-md rounded-xl border border-brand-gold/40 p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-2xl relative h-full group hover:border-brand-gold transition-colors duration-300">
              {/* Top Accent Glow */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

              <div>
                {/* Top Location Pill Badge (Positioned top-right as in reference screenshot) */}
                <div className="flex justify-end mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-blue-deep font-bold text-xs rounded-sm shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue-deep fill-brand-blue-deep/20" />
                    <span className="tracking-wide">Dombivli</span>
                  </div>
                </div>

                {/* Project Name & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold font-display text-white tracking-tight leading-tight">
                    Sai World Dreams
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide">
                    at Dombivli East, By Paradise Group
                  </p>
                </div>

                {/* Apartment Types Headline */}
                <div className="mt-5 sm:mt-6">
                  <p className="text-lg sm:text-xl font-bold text-brand-gold-light font-display leading-snug">
                    Premium 1, 2, 2.5 & 3 BHK Homes
                  </p>
                </div>

                {/* Starting Price Banner */}
                <div className="mt-3.5 p-3.5 sm:p-4 bg-brand-blue-deep/70 rounded-lg border border-brand-gold/30">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="text-xs uppercase tracking-wider text-gray-300 font-medium">
                      Starting Price
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-gold-light font-display">
                      ₹ 48 Lakhs*
                    </span>
                  </div>
                </div>

                {/* Google Rating Row (Authentic multi-color Google 'G' icon + 5 stars + review count) */}
                <div className="flex items-center gap-2.5 mt-5 pt-4 border-t border-brand-gold/20 flex-wrap">
                  <div className="w-6 h-6 rounded-full bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-full h-full" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-sm font-bold text-brand-gold-light">4.9</span>
                  <span className="text-xs text-gray-300">Stars (101 Reviews)</span>
                </div>

                {/* Project Highlights List */}
                <div className="mt-6 pt-5 border-t border-brand-gold/20">
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold-light mb-3.5">
                    Key Project Highlights
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-[13px] text-gray-200">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 shrink-0 shadow-xs" />
                      <span>
                        <strong className="text-white font-semibold">Possession</strong> – Ready To Move & Under Construction
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 shrink-0 shadow-xs" />
                      <span>
                        <strong className="text-white font-semibold">Land Parcel</strong> – 18 Acres Integrated Township
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 shrink-0 shadow-xs" />
                      <span>
                        <strong className="text-white font-semibold">G+35 Storey</strong> High-Rise Landmark Towers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 shrink-0 shadow-xs" />
                      <span>
                        <strong className="text-white font-semibold">Spot Booking Offers</strong> Available for Limited Units
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 shrink-0 shadow-xs" />
                      <span>
                        <strong className="text-white font-semibold">Vastu Compliant</strong> Thoughtfully Planned Homes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Callout & Quick Action */}
              <div className="mt-8 pt-5 border-t border-brand-gold/20 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenBreakup('1 BHK')}
                  className="w-full py-3 px-4 bg-brand-gold/15 hover:bg-brand-gold/25 border border-brand-gold/50 text-brand-gold-light text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Request All-Configuration Cost Sheet</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. APARTMENT PRICING CARDS (Matches media_1793183532605_705a09bc.png)     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full">
              {PRICING_CONFIGURATIONS.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-brand-blue-dark/95 sm:bg-black/40 backdrop-blur-md rounded-xl border border-brand-gold/30 hover:border-brand-gold p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-brand-gold/5 relative overflow-hidden"
                >
                  {/* Subtle top gold accent bar on card hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header Row: Apartment Type & Tagline */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] uppercase font-bold tracking-widest text-brand-gold">
                        Apartment
                      </span>
                      <span className="text-[10px] font-medium text-gray-400 px-2 py-0.5 bg-white/5 rounded border border-white/5">
                        {plan.tagline}
                      </span>
                    </div>

                    {/* Configuration Title */}
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-brand-gold-light transition-colors">
                      {plan.type}
                    </h4>

                    {/* Carpet Area Row (Formatted clearly per reference: '450 Sq. ft. (Carpet Area)') */}
                    <div className="mt-4 p-3 bg-white/5 rounded-md border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-gray-300 font-medium">Carpet Area</span>
                      <span className="text-sm font-bold text-white font-sans tracking-wide">
                        {plan.carpetAreaLabel}
                      </span>
                    </div>

                    {/* Price Callout */}
                    <div className="mt-5 mb-5 text-center py-3.5 px-4 bg-brand-blue-deep/60 rounded-lg border border-brand-gold/25 group-hover:border-brand-gold/50 transition-colors">
                      <span className="text-[10px] uppercase font-bold tracking-[0.16em] text-gray-400 block mb-1">
                        Starting Price
                      </span>
                      <div className="text-2xl sm:text-[28px] font-extrabold text-brand-gold-light font-display tracking-tight">
                        {plan.price}
                      </div>
                    </div>
                  </div>

                  {/* Gold "Price Breakup" Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenBreakup(plan.type)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark hover:from-white hover:to-brand-gold text-brand-blue-deep font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] group/btn"
                      aria-label={`Open Price Breakup form for ${plan.type}`}
                    >
                      <span>Price Breakup</span>
                      <ArrowRight className="w-4 h-4 shrink-0 text-brand-blue-deep group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer & Footer Note */}
        <div className="mt-10 sm:mt-12 text-center space-y-2">
          <p className="text-xs text-gray-400 italic">
            *Prices mentioned are starting base prices excluding government charges, stamp duty, registration & GST. 
            Final price depends on floor level, tower preference, and unit availability.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-300 pt-1">
            <span>Want to review room dimensions and layout drawings?</span>
            <Link
              href="/floor-plans"
              className="text-brand-gold-light hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Explore Architectural Floor Plans →
            </Link>
          </div>
        </div>
      </div>

      {/* Dedicated Price Breakup Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultInterestedIn={selectedBhk}
        source={`Pricing Section - Price Breakup ${selectedBhk}`}
        title={`Price Breakup — ${selectedBhk}`}
        badge="Official Cost Sheet & Breakdown"
        subtitle={`Register your details to receive the complete price breakup, payment schedule, and current spot booking offers for ${selectedBhk}.`}
        submitButtonText={`Get ${selectedBhk} Price Breakup`}
      />
    </section>
  );
};
