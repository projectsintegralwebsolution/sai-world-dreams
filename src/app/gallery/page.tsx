'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PageBanner } from '@/components/common/PageBanner';
import { ImageLightbox } from '@/components/common/ImageLightbox';
import { GALLERY_ITEMS } from '@/lib/constants';
import { GalleryItem } from '@/lib/types';
import { Maximize2, Filter } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Showcase' },
  { id: 'architecture', label: 'Exterior & Architecture' },
  { id: 'residences', label: 'Residences & Floor Plans' },
  { id: 'podium', label: 'Landscaped Spaces' },
  { id: 'amenities', label: 'Amenities & Sports' },
  { id: 'clubhouse', label: 'La Dreams Clubhouse' },
  { id: 'commercial', label: 'Retail & Commercial' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeImage: GalleryItem | null =
    activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const handlePrev = () => {
    if (activeImageIndex !== null && activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeImageIndex !== null && activeImageIndex < filteredItems.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  return (
    <div>
      {/* 1. PAGE BANNER */}
      <PageBanner
        title="Project Gallery"
        subtitle="Explore Architectural Perspectives, Landscape Renderings, Clubhouse Interiors and Technical Plans"
        imageSrc="/images/banners/gallery-banner.webp"
        breadcrumbs={[{ label: 'Gallery' }]}
        badge="Official Visual Library"
        imageScale={1.06}
        objectPosition="center center"
      />

      {/* 2. FILTER CONTROLS */}
      <section className="bg-brand-ivory border-b border-brand-gold/30 pt-10 pb-6 sticky top-[68px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveImageIndex(null);
                }}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MASONRY / EDITORIAL GRID */}
      <section className="py-16 md:py-24 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative aspect-[16/11] rounded-lg overflow-hidden bg-brand-blue-deep border border-brand-gold/30 hover:border-brand-gold cursor-pointer transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/95 via-brand-blue-deep/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Badge: Artist Impression vs Actual Plan */}
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wider font-semibold text-white bg-black/60 px-2 py-0.5 rounded">
                  {item.isArtistImpression ? "Artist's Impression" : 'Official Floor Plan'}
                </span>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-3 bg-brand-blue-deep/90 text-brand-gold rounded-full">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Bottom Title & Details */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold-light">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL WITH FULL KEYBOARD & ARROW NAVIGATION */}
      {activeImage && (
        <ImageLightbox
          isOpen={true}
          onClose={() => setActiveImageIndex(null)}
          imageSrc={activeImage.image}
          title={activeImage.title}
          caption={`${activeImage.isArtistImpression ? "[Artist's Impression] " : "[Technical Plan] "}${activeImage.caption}`}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={activeImageIndex !== null && activeImageIndex > 0}
          hasNext={activeImageIndex !== null && activeImageIndex < filteredItems.length - 1}
          downloadUrl={activeImage.image}
        />
      )}
    </div>
  );
}
