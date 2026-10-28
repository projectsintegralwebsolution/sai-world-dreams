'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { ImageLightbox } from '@/components/common/ImageLightbox';
import { EnquiryModal } from '@/components/common/EnquiryModal';
import { RESIDENCE_CONFIGS, TOWERS_LIST } from '@/lib/constants';
import {
  Maximize2,
  Download,
  Calendar,
  CheckCircle2,
  Building,
  Layers,
  Info
} from 'lucide-react';

const TOWER_FLOOR_PLANS = [
  {
    id: 'tower-castle',
    name: 'Tower 1 — Castle Typical Floor Plan',
    tower: 'Tower 1 (Castle)',
    height: 'G+35 Storeys',
    image: '/images/towers/tower-castle-typical.webp',
    description: 'Typical floor layout showing 2 BHK & 3 BHK units, 7\'9" wide corridors and passenger & fire elevators.',
    configurations: '2 BHK & 3 BHK',
  },
  {
    id: 'tower-vista',
    name: 'Tower 2 — Vista Typical Floor Plan',
    tower: 'Tower 2 (Vista)',
    height: 'G+35 Storeys',
    image: '/images/towers/tower-vista-typical.webp',
    description: 'Typical floor layout featuring 1 BHK, 2 BHK and 2.5 BHK units with hill & central podium views.',
    configurations: '1 BHK, 2 BHK, 2.5 BHK',
  },
  {
    id: 'tower-mist',
    name: 'Tower 3 — Mist Typical Floor Plan',
    tower: 'Tower 3 (Mist)',
    height: 'G+35 Storeys',
    image: '/images/towers/tower-mist-typical.webp',
    description: 'Exclusive 3 BHK floor layout featuring panoramic corner balconies and walk-in wardrobe spaces.',
    configurations: '3 BHK Luxury Suites',
  },
  {
    id: 'tower-spring',
    name: 'Tower 4 — Spring Typical Floor Plan',
    tower: 'Tower 4 (Spring)',
    height: 'G+35 Storeys',
    image: '/images/towers/tower-spring-typical.webp',
    description: 'Grand 3 BHK wing layouts (Type 1, Type 2 & Type 3) oriented towards the central landscape garden.',
    configurations: '3 BHK Multiple Types',
  },
  {
    id: 'tower-breeze',
    name: 'Tower 8 — Breeze Typical Floor Plan',
    tower: 'Tower 8 (Breeze)',
    height: 'G+35 Storeys',
    image: '/images/towers/tower-breeze-typical.webp',
    description: 'Well-ventilated typical floor layout featuring 1 BHK (Type 1 & 2), 1.5 BHK and 2 BHK residences.',
    configurations: '1 BHK, 1.5 BHK, 2 BHK',
  },
];

export default function FloorPlansPage() {
  const [activeTab, setActiveTab] = useState<'units' | 'towers'>('units');
  const [selectedPlan, setSelectedPlan] = useState<{
    imageSrc: string;
    title: string;
    caption: string;
  } | null>(null);

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<string>('Not Decided');

  const openEnquiry = (config: string) => {
    setModalConfig(config);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div>
      {/* 1. PAGE BANNER */}
      <PageBanner
        title="Official Floor Plans"
        subtitle="Explore Precise Unit Layouts and Tower Floor Plans Sourced Directly from the Official Project Brochure"
        imageSrc="/images/banners/floor-plans-banner.webp"
        breadcrumbs={[{ label: 'Floor Plans' }]}
        badge="Architectural Blueprints"
        imageScale={1.18}
        objectPosition="42% 35%"
      />

      {/* 2. TAB CONTROLS */}
      <section className="bg-brand-ivory border-b border-brand-gold/30 pt-10 pb-6 sticky top-[68px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="inline-flex p-1 bg-brand-ivory-dark border border-brand-gold/40 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab('units')}
                className={`px-6 py-2.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'units'
                    ? 'bg-brand-blue text-white'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                Individual Unit Plans (1, 2, 2.5, 3 BHK)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('towers')}
                className={`px-6 py-2.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'towers'
                    ? 'bg-brand-blue text-white'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                Tower Typical Plans (Castle, Vista, Mist...)
              </button>
            </div>

            <p className="text-xs text-gray-500 italic hidden md:block">
              Click on any floor plan to open high-resolution zoom view
            </p>
          </div>
        </div>
      </section>

      {/* 3. CONTENT SECTION */}
      <section className="py-16 md:py-24 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'units' ? (
            /* TAB 1: INDIVIDUAL UNIT PLANS */
            <div className="space-y-16">
              {RESIDENCE_CONFIGS.map((res) => (
                <div
                  key={res.id}
                  id={res.id}
                  className="bg-white rounded-xl border border-brand-gold/30 overflow-hidden p-6 sm:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Interactive Zoomable Image */}
                    <div className="lg:col-span-7">
                      <div
                        onClick={() =>
                          setSelectedPlan({
                            imageSrc: res.floorPlanImage,
                            title: `${res.name} — Technical Floor Plan`,
                            caption: `Official brochure blueprint for ${res.name}. Features ${res.features.join(', ')}.`,
                          })
                        }
                        className="relative aspect-[4/3] bg-brand-ivory-dark rounded-lg overflow-hidden border border-brand-ivory-border cursor-pointer group"
                      >
                        <Image
                          src={res.floorPlanImage}
                          alt={`${res.name} Floor Plan`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 650px"
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-brand-blue-deep/0 group-hover:bg-brand-blue-deep/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-brand-blue-deep/90 text-brand-gold text-xs font-bold rounded flex items-center gap-2">
                            <Maximize2 className="w-4 h-4" />
                            <span>Click to Zoom High-Res</span>
                          </span>
                        </div>
                        <div className="absolute top-4 left-4 bg-brand-blue text-brand-gold text-xs font-bold px-3 py-1 rounded">
                          {res.type}
                        </div>
                      </div>
                    </div>

                    {/* Details & CTAs */}
                    <div className="lg:col-span-5 space-y-5">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-burgundy">
                          {res.tagline}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue font-display mt-1">
                          {res.name}
                        </h2>
                      </div>

                      <p className="text-sm text-gray-700 leading-relaxed font-light">
                        {res.description}
                      </p>

                      {/* Technical Room Dimensions Table from Brochure */}
                      <div className="bg-brand-ivory-card border border-brand-ivory-border rounded-md p-4 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-brand-blue">
                          <Info className="w-4 h-4 text-brand-gold" />
                          <span>Exact Brochure Dimensions</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                          {res.specs.livingDining && (
                            <div>
                              <span className="text-gray-500 block">Living/Dining:</span>
                              <strong className="text-brand-blue">{res.specs.livingDining}</strong>
                            </div>
                          )}
                          {res.specs.masterBedroom && (
                            <div>
                              <span className="text-gray-500 block">Master Bed:</span>
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

                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          Configuration Highlights:
                        </p>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                          {res.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => openEnquiry(res.type)}
                          className="flex-1 py-3 px-6 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-brand-blue-deep font-bold text-xs uppercase tracking-wider rounded-sm transition-all text-center"
                        >
                          Enquire for {res.type}
                        </button>

                        <a
                          href={res.floorPlanImage}
                          download={`Sai-World-Dreams-${res.type}-FloorPlan.jpg`}
                          className="py-3 px-4 bg-white hover:bg-gray-50 text-brand-blue border border-gray-300 rounded-sm font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                          title="Download Image"
                        >
                          <Download className="w-4 h-4 text-brand-gold" />
                          <span className="hidden sm:inline">Save</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* TAB 2: TOWER TYPICAL FLOOR PLANS */
            <div className="space-y-12">
              <div className="bg-brand-blue-deep text-white p-6 rounded-lg border border-brand-gold/30">
                <h3 className="text-lg font-bold font-display text-brand-gold-light">
                  Tower Floor Layout Architecture
                </h3>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  These blueprints represent the typical floor architecture across towers 1 through 8, 
                  including elevator lobbies, refuge areas, fire evacuation stairs and corridor widths.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TOWER_FLOOR_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className="bg-white rounded-lg border border-brand-gold/30 overflow-hidden flex flex-col"
                  >
                    <div
                      onClick={() =>
                        setSelectedPlan({
                          imageSrc: plan.image,
                          title: plan.name,
                          caption: plan.description,
                        })
                      }
                      className="relative aspect-[16/10] bg-brand-ivory-dark cursor-pointer group overflow-hidden border-b border-brand-ivory-border"
                    >
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-brand-blue-deep/0 group-hover:bg-brand-blue-deep/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-1.5 bg-brand-blue-deep text-brand-gold text-xs font-bold rounded flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Full Layout</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-dark">
                            {plan.height}
                          </span>
                          <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {plan.configurations}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-brand-blue font-display mt-1">
                          {plan.name}
                        </h4>
                        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => openEnquiry(plan.tower)}
                          className="flex-1 py-2.5 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors text-center"
                        >
                          Enquire Availability
                        </button>
                        <a
                          href={plan.image}
                          download={`${plan.id}.webp`}
                          className="p-2.5 bg-gray-100 hover:bg-gray-200 text-brand-blue rounded-sm transition-colors"
                          title="Download Layout"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedPlan && (
        <ImageLightbox
          isOpen={true}
          onClose={() => setSelectedPlan(null)}
          imageSrc={selectedPlan.imageSrc}
          title={selectedPlan.title}
          caption={selectedPlan.caption}
          downloadUrl={selectedPlan.imageSrc}
        />
      )}

      {/* Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultInterestedIn={modalConfig}
        source={`Floor Plans - ${modalConfig}`}
      />
    </div>
  );
}
