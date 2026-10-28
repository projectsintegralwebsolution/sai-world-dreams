'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  downloadUrl?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  downloadUrl,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Action Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white">
        <div>
          <h4 className="text-sm sm:text-base font-bold font-display text-brand-gold-light">{title}</h4>
          {caption && <p className="text-xs text-gray-400 hidden sm:block">{caption}</p>}
        </div>

        <div className="flex items-center gap-2">
          {downloadUrl && (
            <a
              href={downloadUrl}
              download
              className="p-2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Download High-Res Plan"
            >
              <Download className="w-5 h-5" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Prev Navigation Button */}
      {hasPrev && onPrev && (
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white bg-white/10 hover:bg-brand-gold hover:text-brand-blue rounded-full transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation Button */}
      {hasNext && onNext && (
        <button
          type="button"
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white bg-white/10 hover:bg-brand-gold hover:text-brand-blue rounded-full transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full h-full flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Mobile Caption Bottom */}
      {caption && (
        <div className="absolute bottom-4 left-4 right-4 text-center sm:hidden">
          <p className="text-xs text-gray-300 bg-black/60 px-3 py-1.5 rounded-full inline-block">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
};
