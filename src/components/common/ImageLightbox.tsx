'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { X, Download, ChevronLeft, ChevronRight, Plus, Minus, RotateCcw, Move } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  highResImageSrc?: string;
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
  highResImageSrc,
  title,
  caption,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  downloadUrl,
}) => {
  const activeSrc = highResImageSrc || imageSrc;

  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pinchStartDistRef = useRef<number | null>(null);
  const pinchStartZoomRef = useRef<number>(1);

  // Lock body scroll when open
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

  // Reset zoom, pan, and natural size when image or modal visibility changes
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
  }, [activeSrc, isOpen]);

  // Track container dimensions on mount and window resize
  useEffect(() => {
    if (!isOpen) return;

    const updateContainerSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setContainerSize({ width: rect.width, height: rect.height });
        }
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    return () => window.removeEventListener('resize', updateContainerSize);
  }, [isOpen]);

  // Capture image natural dimensions once loaded to guarantee 1:1 aspect ratio fitting
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
    }
  };

  // Base fitted dimensions at 100% zoom inside the viewer viewport
  const baseDims = useMemo(() => {
    if (!naturalSize.width || !naturalSize.height || !containerSize.width || !containerSize.height) {
      return {
        width: containerSize.width || 800,
        height: containerSize.height || 600,
      };
    }
    const ratio = Math.min(
      containerSize.width / naturalSize.width,
      containerSize.height / naturalSize.height
    );
    return {
      width: Math.round(naturalSize.width * ratio),
      height: Math.round(naturalSize.height * ratio),
    };
  }, [naturalSize, containerSize]);

  // Target rendered dimensions at current zoom level
  const currentWidth = Math.round(baseDims.width * zoom);
  const currentHeight = Math.round(baseDims.height * zoom);

  // Maximum pan boundaries based on current rendered size vs viewport container
  const maxPan = useMemo(() => {
    if (!containerSize.width || !containerSize.height) return { maxX: 0, maxY: 0 };
    const maxX = Math.max(0, (currentWidth - containerSize.width) / 2);
    const maxY = Math.max(0, (currentHeight - containerSize.height) / 2);
    return { maxX, maxY };
  }, [currentWidth, currentHeight, containerSize]);

  // Clamp pan when zoom changes or when zooming out
  useEffect(() => {
    if (zoom === 1) {
      setPan({ x: 0, y: 0 });
    } else {
      setPan((prev) => ({
        x: Math.max(-maxPan.maxX, Math.min(maxPan.maxX, prev.x)),
        y: Math.max(-maxPan.maxY, Math.min(maxPan.maxY, prev.y)),
      }));
    }
  }, [zoom, maxPan]);

  // Global mouseup listener to release drag even if released outside window
  useEffect(() => {
    if (!isDragging) return;
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDragging]);

  const handleZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(3, Math.round((prev + 0.25) * 100) / 100));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((prev) => {
      const next = Math.max(1, Math.round((prev - 0.25) * 100) / 100);
      if (next === 1) {
        setPan({ x: 0, y: 0 });
      }
      return next;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Keyboard navigation & zoom shortcuts (+, -, 0, Escape, Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        handleZoomIn();
      }
      if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        handleZoomOut();
      }
      if (e.key === '0') {
        e.preventDefault();
        handleResetZoom();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext, handleZoomIn, handleZoomOut, handleResetZoom]);

  if (!isOpen) return null;

  const clampPan = (newX: number, newY: number) => {
    return {
      x: Math.max(-maxPan.maxX, Math.min(maxPan.maxX, newX)),
      y: Math.max(-maxPan.maxY, Math.min(maxPan.maxY, newY)),
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;
    if (e.button !== 0) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - pan.x,
      y: e.clientY - pan.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || zoom <= 1) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;
    setPan(clampPan(deltaX, deltaY));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoom > 1) {
      handleResetZoom();
    } else {
      setZoom(2);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      pinchStartDistRef.current = dist;
      pinchStartZoomRef.current = zoom;
      setIsDragging(false);
    } else if (e.touches.length === 1 && zoom > 1) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.touches[0].clientX - pan.x,
        y: e.touches[0].clientY - pan.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && pinchStartDistRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / pinchStartDistRef.current;
      const newZoom = Math.min(3, Math.max(1, Math.round(pinchStartZoomRef.current * factor * 100) / 100));
      setZoom(newZoom);
    } else if (e.touches.length === 1 && isDragging && zoom > 1) {
      const deltaX = e.touches[0].clientX - dragStartRef.current.x;
      const deltaY = e.touches[0].clientY - dragStartRef.current.y;
      setPan(clampPan(deltaX, deltaY));
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length < 2) {
      pinchStartDistRef.current = null;
    }
    if (e.touches.length === 0) {
      setIsDragging(false);
    }
  };

  const currentPercent = Math.round(zoom * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Action Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white pointer-events-auto">
        <div className="max-w-[70%] sm:max-w-[80%] pr-4">
          <h4 className="text-sm sm:text-base font-bold font-display text-brand-gold-light truncate sm:whitespace-normal">
            {title}
          </h4>
          {caption && <p className="text-xs text-gray-400 hidden sm:block mt-0.5 line-clamp-2">{caption}</p>}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {(downloadUrl || activeSrc) && (
            <a
              href={downloadUrl || activeSrc}
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

      {/* Main Image Container — Spacious viewport allowing full screen utilization */}
      <div
        ref={containerRef}
        className={`relative max-w-[95vw] sm:max-w-[92vw] w-full h-[76vh] sm:h-[82vh] flex items-center justify-center p-1 sm:p-2 overflow-hidden select-none ${
          zoom > 1
            ? isDragging
              ? 'cursor-grabbing'
              : 'cursor-grab'
            : 'cursor-default'
        }`}
        style={{
          touchAction: zoom > 1 ? 'none' : 'auto',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dynamic Resolution Wrapper: Sized dynamically to preserve 1:1 pixel rendering at any zoom level */}
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: `${currentWidth}px`,
            height: `${currentHeight}px`,
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0)`,
            transition: isDragging
              ? 'none'
              : 'width 0.22s cubic-bezier(0.25, 1, 0.5, 1), height 0.22s cubic-bezier(0.25, 1, 0.5, 1), transform 0.22s cubic-bezier(0.25, 1, 0.5, 1)',
            transformOrigin: 'center center',
          }}
        >
          {/* Direct uncompressed source image rendering */}
          <img
            src={activeSrc}
            alt={title}
            onLoad={handleImageLoad}
            draggable={false}
            className="w-full h-full object-contain pointer-events-none select-none"
            style={{
              imageRendering: 'auto',
            }}
          />
        </div>
      </div>

      {/* Floating Drag Indicator (Visible only when zoomed in) */}
      {zoom > 1 && (
        <div className="absolute top-18 sm:top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-deep/90 backdrop-blur-sm border border-brand-gold/40 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-gold shadow-lg">
            <Move className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
            <span>Drag to pan blueprint</span>
          </span>
        </div>
      )}

      {/* Bottom Center Zoom Controls Bar */}
      <div
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center bg-brand-blue-deep/95 backdrop-blur-md border border-brand-gold/50 rounded-full shadow-2xl px-2.5 py-1.5 text-white select-none gap-1 sm:gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Zoom Out Button (−) */}
        <button
          type="button"
          onClick={handleZoomOut}
          disabled={zoom <= 1}
          aria-label="Zoom Out"
          title={zoom <= 1 ? 'Minimum zoom reached (100%)' : 'Zoom Out by 25% (Press -)'}
          className={`p-1.5 sm:p-2 rounded-full transition-all flex items-center justify-center ${
            zoom <= 1
              ? 'opacity-30 cursor-not-allowed text-gray-400'
              : 'text-white hover:text-brand-gold hover:bg-white/10 active:scale-95'
          }`}
        >
          <Minus className="w-4 h-4" />
        </button>

        {/* Current Zoom Percentage & Reset Action */}
        <button
          type="button"
          onClick={handleResetZoom}
          aria-label="Reset Zoom to 100%"
          title={zoom > 1 ? 'Click to reset zoom to 100% (Press 0)' : 'Current zoom 100%'}
          className={`px-3 py-1 text-xs sm:text-sm font-bold font-mono tracking-wider transition-all rounded-full flex items-center gap-1.5 ${
            zoom > 1
              ? 'text-brand-gold hover:text-brand-gold-light hover:bg-brand-gold/20 cursor-pointer'
              : 'text-brand-gold/90 hover:text-white cursor-default'
          }`}
        >
          <span>{currentPercent}%</span>
          {zoom > 1 && (
            <RotateCcw className="w-3 h-3 opacity-80" />
          )}
        </button>

        {/* Zoom In Button (+) */}
        <button
          type="button"
          onClick={handleZoomIn}
          disabled={zoom >= 3}
          aria-label="Zoom In"
          title={zoom >= 3 ? 'Maximum zoom reached (300%)' : 'Zoom In by 25% (Press +)'}
          className={`p-1.5 sm:p-2 rounded-full transition-all flex items-center justify-center ${
            zoom >= 3
              ? 'opacity-30 cursor-not-allowed text-gray-400'
              : 'text-white hover:text-brand-gold hover:bg-white/10 active:scale-95'
          }`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Caption Bottom (adjusted spacing to avoid overlapping zoom toolbar) */}
      {caption && (
        <div className="absolute bottom-16 left-4 right-4 text-center sm:hidden pointer-events-none">
          <p className="text-[11px] text-gray-300 bg-black/70 px-3 py-1 rounded-full inline-block backdrop-blur-sm line-clamp-1">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
};
