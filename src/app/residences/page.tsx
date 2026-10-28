import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import {
  RESIDENCE_CONFIGS,
  TOWERS_LIST,
  LUXURY_SPECIFICATIONS
} from '@/lib/constants';
import {
  Eye,
  Calendar,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  Maximize2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Residences | 1, 2, 2.5 & 3 BHK Luxury Apartments Dombivli',
  description:
    'Explore 1, 2, 2.5 and 3 BHK luxury residences at Sai World Dreams, Dombivli. Designed with European wooden flooring, sundeck balconies, granite service platforms and smart video security.',
  alternates: {
    canonical: '/residences',
  },
};

export default function ResidencesPage() {
  return (
    <div>
      {/* 1. PAGE BANNER */}
      <PageBanner
        title="Global Luxury Residences"
        subtitle="Thoughtfully Conceived 1, 2, 2.5 & 3 BHK Homes Crafted for High-End Living & Timeless Elegance"
        imageSrc="/images/banners/residences-banner.webp"
        breadcrumbs={[{ label: 'Residences' }]}
        badge="8 Magnificent G+35 Towers"
        imageScale={1.06}
        objectPosition="center 40%"
      />

      {/* 2. CONFIGURATIONS DETAILED SHOWCASE */}
      <section className="py-20 md:py-28 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-dark">
              Spacious Layouts
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display">
              Apartment Configurations & Architectural Plans
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every residence at Sai World Dreams is planned to optimize natural sunlight, 
              cross-ventilation and uninterrupted views of the central landscaped podium.
            </p>
          </div>

          {/* Residence Detailed Cards */}
          <div className="space-y-16">
            {RESIDENCE_CONFIGS.map((res, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={res.id}
                  id={res.id}
                  className="bg-white rounded-xl border border-brand-gold/30 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10"
                >
                  {/* Floor Plan Visual (Left or Right based on alternating layout) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[4/3] bg-brand-ivory-dark rounded-lg overflow-hidden border border-brand-ivory-border p-4 group">
                      <Image
                        src={res.floorPlanImage}
                        alt={`${res.name} Architectural Layout`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-brand-blue-deep text-brand-gold font-bold text-xs px-3 py-1 rounded">
                        {res.type}
                      </div>
                      <Link
                        href={`/floor-plans#${res.id}`}
                        className="absolute bottom-4 right-4 bg-brand-gold hover:bg-brand-gold-light text-brand-blue-deep font-bold text-xs uppercase px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Zoom Floor Plan</span>
                      </Link>
                    </div>
                  </div>

                  {/* Specification & Details (Right or Left) */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-brand-burgundy">
                        {res.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue font-display">
                        {res.name}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed font-light">
                      {res.description}
                    </p>

                    {/* Official Room Dimensions from Brochure */}
                    <div className="bg-brand-ivory-card border border-brand-ivory-border rounded-md p-4 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                        Brochure Room Dimensions:
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {res.specs.livingDining && (
                          <div>
                            <span className="text-gray-500 block">Living/Dining:</span>
                            <strong className="text-brand-blue">{res.specs.livingDining}</strong>
                          </div>
                        )}
                        {res.specs.masterBedroom && (
                          <div>
                            <span className="text-gray-500 block">Master Bedroom:</span>
                            <strong className="text-brand-blue">{res.specs.masterBedroom}</strong>
                          </div>
                        )}
                        {res.specs.balcony && (
                          <div>
                            <span className="text-gray-500 block">Balcony:</span>
                            <strong className="text-brand-blue">{res.specs.balcony}</strong>
                          </div>
                        )}
                        {res.specs.kitchen && (
                          <div>
                            <span className="text-gray-500 block">Kitchen:</span>
                            <strong className="text-brand-blue">{res.specs.kitchen}</strong>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                        Included Luxury Amenities:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {res.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/floor-plans#${res.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                      >
                        <Eye className="w-4 h-4 text-brand-gold" />
                        <span>Explore Technical Plan</span>
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-brand-blue-deep font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Enquire Availability</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LUXURY SPECIFICATIONS GRID (VERBATIM FROM BROCHURE PAGE 24) */}
      <section className="py-20 bg-brand-blue-deep text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-light">
              Uncompromising Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
              Luxury Apartment & Tower Specifications
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Every detail has been curated with European finishes, designer fittings and intelligent security systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LUXURY_SPECIFICATIONS.map((specGroup, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-brand-gold/25 rounded-lg p-6 space-y-4 hover:border-brand-gold/60 transition-colors"
              >
                <div className="flex items-center gap-2.5 border-b border-brand-gold/20 pb-3">
                  <Sparkles className="w-5 h-5 text-brand-gold" />
                  <h3 className="text-base font-bold text-white font-display">
                    {specGroup.category}
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-300">
                  {specGroup.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENQUIRY SECTION */}
      <section className="py-20 bg-brand-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Residences Page" />
        </div>
      </section>
    </div>
  );
}
