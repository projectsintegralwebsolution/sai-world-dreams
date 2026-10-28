import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import {
  SITE_CONFIG,
  PROJECT_HIGHLIGHTS,
  TOWERS_LIST
} from '@/lib/constants';
import {
  Building2,
  Trees,
  ShoppingBag,
  Hotel,
  Briefcase,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About The Project | 18-Acre Township in Dombivli',
  description:
    'Discover Sai World Dreams by Paradise Group — Dombivli’s first mixed-use themed luxury world inspired by Dubai lifestyle. 18 acres, 8 G+35 towers, 6-acre podium, high-street shopping & 5-star hotel.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* 1. PAGE BANNER */}
      <PageBanner
        title="About Sai World Dreams"
        subtitle="An 18-Acre Global Lifestyle Township Inspired by Iconic Dubai Architecture & Family Living"
        imageSrc="/images/banners/about-banner.jpg"
        breadcrumbs={[{ label: 'About the Project' }]}
        badge="Paradise Group Flagship Township"
        imageScale={1.0}
        objectPosition="center 48%"
      />

      {/* 2. THE VISION: DUBAI-INSPIRED MIXED-USE CONCEPT */}
      <section className="py-20 md:py-28 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-dark">
                The Master Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue font-display leading-tight">
                Dombivli’s First Mixed-Use Themed Luxury World
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Creating one internally connected address of living and lifestyle experiences on the lines 
                of world-renowned global landmarks like Dubai Mall and Address Downtown. Sai World Dreams 
                unites high-rise living, international high-street retail, corporate workspaces and fine hospitality 
                into a seamless family ecosystem.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>18-Acre Self-Contained Township:</strong> Master-planned for multi-generational families with dedicated zones for wellness, nature, culture and entertainment.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>8 Residential Towers of G+35 Storeys:</strong> Offering 1, 2, 2.5 and 3 BHK global luxury homes with sweeping views of the skyline and landscaped podium.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>6-Acre Themed Podium:</strong> A vehicle-free green sanctuary elevated above street level with 60+ outdoor recreations and a 600m illuminated jogging pathway.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-2 border-brand-gold/40">
                <Image
                  src="/images/overview/world-dreams-plaza.webp"
                  alt="Sai World Dreams Architectural Concept"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED COMMERCIAL, RETAIL & HOSPITALITY COMPONENTS */}
      <section className="py-20 bg-brand-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-light">
              Mixed-Use Synergy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
              Commercial, Retail & Hospitality Hallmarks
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience the unmatched luxury of world-class shopping, premium dining, corporate business spaces 
              and 5-star hospitality right within your residential premises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* World Dreams Plaza */}
            <div className="bg-white/5 border border-brand-gold/25 rounded-lg overflow-hidden flex flex-col group hover:border-brand-gold/60 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/overview/world-dreams-plaza.webp"
                  alt="World Dreams Plaza"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/90 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-brand-gold text-brand-blue-deep text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  G+3 Storeyed Plaza
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">World Dreams Plaza</h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    A grand high-street shopping plaza featuring a multi-screen cinema multiplex, 
                    international retail brand outlets, multi-cuisine restaurants and luxurious celebration banquets.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs text-brand-gold">
                  Cinema Multiplex • Banquets • Fine Dining
                </div>
              </div>
            </div>

            {/* World Dreams Business Park */}
            <div className="bg-white/5 border border-brand-gold/25 rounded-lg overflow-hidden flex flex-col group hover:border-brand-gold/60 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/overview/business-park-hotel.webp"
                  alt="World Dreams Business Park"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/90 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-brand-gold text-brand-blue-deep text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  G+33 Storey Tower
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">World Dreams Business Park</h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    A state-of-the-art G+33 storey corporate tower designed with intelligent office layouts, 
                    grand reception lobbies, multi-tier security and cutting-edge digital infrastructure.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs text-brand-gold">
                  Grade-A Workspaces • Conference Facilities
                </div>
              </div>
            </div>

            {/* 5-Star World Dreams Hotel */}
            <div className="bg-white/5 border border-brand-gold/25 rounded-lg overflow-hidden flex flex-col group hover:border-brand-gold/60 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/overview/hotel-tower.webp"
                  alt="World Dreams 5-Star Hotel"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/90 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-brand-gold text-brand-blue-deep text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  G+23 Storey 5-Star
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">World Dreams 5-Star Hotel</h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    A prestigious G+23 storey 5-star luxury hotel providing guest hospitality, executive suites, 
                    conferencing halls and gourmet dining for visiting delegates and business travelers.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs text-brand-gold">
                  5-Star Suites • Banquet Facilities • Concierge
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 8 RESIDENTIAL TOWERS OVERVIEW */}
      <section className="py-20 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-dark">
              Skyline Dominance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display">
              8 Tower Master Collection
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every tower at Sai World Dreams is named after nature’s tranquil elements and engineered to G+35 storeys with double-height entrance lobbies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOWERS_LIST.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-lg border border-brand-gold/30 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-brand-blue font-display">
                    {t.name}
                  </h3>
                  <span className="px-2 py-0.5 bg-brand-gold/15 text-brand-blue-deep text-[11px] font-bold rounded">
                    {t.height}
                  </span>
                </div>
                <div className="text-xs text-brand-burgundy font-semibold">
                  Configurations: {t.configurations.join(', ')}
                </div>
                <ul className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM OF ARCHITECTS & CONSULTANTS (FROM BROCHURE) */}
      <section className="py-16 bg-brand-ivory-dark border-y border-brand-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
              World-Class Craftsmanship
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue font-display">
              Principal Architects & Project Consultants
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-white p-4 rounded border border-brand-ivory-border">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Principal Architect</span>
              <p className="text-xs font-bold text-brand-blue mt-1">{SITE_CONFIG.consultants.architect}</p>
            </div>
            <div className="bg-white p-4 rounded border border-brand-ivory-border">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Landscape Architect</span>
              <p className="text-xs font-bold text-brand-blue mt-1">{SITE_CONFIG.consultants.landscape}</p>
            </div>
            <div className="bg-white p-4 rounded border border-brand-ivory-border">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Liasoning Architect</span>
              <p className="text-xs font-bold text-brand-blue mt-1">{SITE_CONFIG.consultants.liasoning}</p>
            </div>
            <div className="bg-white p-4 rounded border border-brand-ivory-border">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">RCC Consultant</span>
              <p className="text-xs font-bold text-brand-blue mt-1">{SITE_CONFIG.consultants.rcc}</p>
            </div>
            <div className="bg-white p-4 rounded border border-brand-ivory-border">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Interior Consultant</span>
              <p className="text-xs font-bold text-brand-blue mt-1">{SITE_CONFIG.consultants.interior}</p>
            </div>
            <div className="bg-white p-4 rounded border border-brand-ivory-border">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">MEP Consultant</span>
              <p className="text-xs font-bold text-brand-blue mt-1">{SITE_CONFIG.consultants.mep}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENQUIRY SECTION */}
      <section className="py-20 bg-brand-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="About Project Page" />
        </div>
      </section>
    </div>
  );
}
