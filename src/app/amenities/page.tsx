'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { ImageLightbox } from '@/components/common/ImageLightbox';
import { AMENITIES_WORLDS, MASTER_PLAN_LEGENDS } from '@/lib/constants';
import {
  CheckCircle2,
  Sparkles,
  HeartPulse,
  Leaf,
  Smile,
  Crown,
  Maximize2,
  Map,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function AmenitiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'nirvana':
        return <HeartPulse className="w-5 h-5 text-brand-gold" />;
      case 'zen':
        return <Leaf className="w-5 h-5 text-brand-gold" />;
      case 'euphoria':
        return <Smile className="w-5 h-5 text-brand-gold" />;
      case 'clubhouse':
        return <Crown className="w-5 h-5 text-brand-gold" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-gold" />;
    }
  };

  const filteredWorlds =
    activeCategory === 'all'
      ? AMENITIES_WORLDS
      : AMENITIES_WORLDS.filter((w) => w.id === activeCategory);

  return (
    <div>
      {/* 1. PAGE BANNER */}
      <PageBanner
        title="World-Class Amenities"
        subtitle="Four Themed Lifestyle Worlds and 60+ Curated Indulgences Spread Across 6 Acres of Landscaped Podium"
        imageSrc="/images/banners/amenities-banner.webp"
        breadcrumbs={[{ label: 'Amenities' }]}
        badge="6-Acre Themed Podium"
        imageScale={1.18}
        objectPosition="center center"
      />

      {/* 2. CATEGORY SELECTOR TABS */}
      <section className="bg-brand-ivory border-b border-brand-gold/30 pt-10 pb-6 sticky top-[68px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-brand-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Amenities
            </button>

            {AMENITIES_WORLDS.map((world) => (
              <button
                key={world.id}
                type="button"
                onClick={() => setActiveCategory(world.id)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeCategory === world.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {getCategoryIcon(world.id)}
                <span>{world.name}</span>
              </button>
            ))}

            <a
              href="#master-plan"
              className="ml-auto px-4 py-2 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-blue-deep rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap border border-brand-gold/40 flex items-center gap-1.5 transition-colors"
            >
              <Map className="w-4 h-4 text-brand-gold-dark" />
              <span>61-Point Master Plan</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. AMENITIES SECTIONS */}
      <section className="py-16 md:py-24 bg-brand-ivory space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {filteredWorlds.map((world) => (
            <div key={world.id} id={world.id} className="scroll-mt-36 space-y-8">
              {/* Category Header Banner */}
              <div className="bg-brand-blue-deep text-white rounded-xl p-8 sm:p-10 border border-brand-gold/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-brand-gold-light">
                    {getCategoryIcon(world.id)}
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                      {world.theme}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display">
                    {world.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-brand-gold-accent font-medium">
                    {world.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light pt-1">
                    {world.description}
                  </p>
                </div>

                <div className="shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
                  <span className="text-3xl font-extrabold text-brand-gold font-display">
                    {world.items.length}
                  </span>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider">Features Included</p>
                </div>
              </div>

              {/* Amenity Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {world.items.map((amenity) => (
                  <div
                    key={amenity.id}
                    className="bg-white rounded-lg border border-brand-gold/30 overflow-hidden flex flex-col group hover:border-brand-gold transition-all duration-300"
                  >
                    {/* Visual with Click-to-Zoom */}
                    <div
                      onClick={() =>
                        setSelectedImage({
                          src: amenity.image,
                          title: amenity.name,
                          caption: amenity.description,
                        })
                      }
                      className="relative aspect-[16/10] overflow-hidden bg-brand-blue-deep cursor-pointer"
                    >
                      <Image
                        src={amenity.image}
                        alt={amenity.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-brand-blue-deep/0 group-hover:bg-brand-blue-deep/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-brand-blue-deep text-brand-gold rounded-full">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                      <span className="absolute bottom-3 right-3 text-[9px] uppercase tracking-wider text-gray-300 bg-black/60 px-2 py-0.5 rounded">
                        Artist's Impression
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-brand-blue font-display">
                          {amenity.name}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-light">
                          {amenity.description}
                        </p>
                      </div>

                      {amenity.features && (
                        <div className="pt-3 border-t border-brand-ivory-border">
                          <ul className="space-y-1">
                            {amenity.features.map((f, i) => (
                              <li key={i} className="text-[11px] text-gray-700 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-brand-gold shrink-0" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MASTER PLAN & 61 LEGENDS (VERBATIM FROM BROCHURE PAGE 25) */}
      <section id="master-plan" className="py-20 md:py-28 bg-brand-blue-deep text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-light">
              Architectural Site Layout
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
              61-Point Themed Master Plan
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Explore the exact spatial distribution of sports courts, wellness plazas, gardens, 
              water features, and club facilities as certified in the official project master blueprint.
            </p>
          </div>

          {/* Master Plan High-Res Blueprint Viewer */}
          <div
            onClick={() =>
              setSelectedImage({
                src: '/images/master-plan/master-plan-full.webp',
                title: 'Sai World Dreams — 61-Point Themed Master Plan',
                caption: 'Official 6-acre podium layout with all 61 designated amenities and vehicular driveways.',
              })
            }
            className="relative aspect-[21/10] w-full rounded-xl overflow-hidden border-2 border-brand-gold/40 cursor-pointer group bg-black"
          >
            <Image
              src="/images/master-plan/master-plan-full.webp"
              alt="Sai World Dreams Full Master Plan"
              fill
              sizes="100vw"
              className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-brand-blue-deep/0 group-hover:bg-brand-blue-deep/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-brand-blue-deep text-brand-gold text-xs font-bold rounded flex items-center gap-2">
                <Maximize2 className="w-4 h-4" />
                <span>Click to View Master Plan in Full Screen</span>
              </span>
            </div>
          </div>

          {/* Numbered Legends Grid (1 to 61) */}
          <div className="bg-white/5 border border-brand-gold/30 rounded-xl p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold font-display text-brand-gold-light">
                Master Plan Legends (01 to 61)
              </h3>
              <span className="text-xs text-gray-400">
                Official Document Reference: Page 25
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {MASTER_PLAN_LEGENDS.map((legend) => (
                <div
                  key={legend.id}
                  className="flex items-center gap-2 p-2 bg-white/5 hover:bg-brand-gold/15 rounded border border-white/10 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-gold text-brand-blue-deep font-bold text-[10px] flex items-center justify-center shrink-0">
                    {String(legend.id).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-gray-200 truncate" title={legend.name}>
                    {legend.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <ImageLightbox
          isOpen={true}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          title={selectedImage.title}
          caption={selectedImage.caption}
          downloadUrl={selectedImage.src}
        />
      )}
    </div>
  );
}
