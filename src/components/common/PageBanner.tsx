import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  objectPosition?: string;
  imageScale?: number | string;
  className?: string;
  isHomePage?: boolean;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  imageSrc,
  breadcrumbs,
  badge = 'Sai World Dreams, Dombivli',
  objectPosition = 'center center',
  imageScale = 1.05,
  className = '',
  isHomePage = false,
}) => {
  const scaleStyle =
    typeof imageScale === 'number'
      ? `scale(${imageScale})`
      : typeof imageScale === 'string' && !imageScale.startsWith('scale-')
      ? `scale(${imageScale})`
      : undefined;

  const scaleClass =
    typeof imageScale === 'string' && imageScale.startsWith('scale-')
      ? imageScale
      : '';

  return (
    <section
      className={`relative w-full overflow-hidden inner-page-banner flex items-center pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 bg-brand-blue-deep ${className}`}
    >
      {/* Background Architectural Image (Edge-to-Edge) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: objectPosition,
            ...(scaleStyle ? { transform: scaleStyle } : {}),
          }}
          className={`w-full h-full object-cover transition-transform duration-1000 ${scaleClass}`}
        />
        {/* Uniform 20% Dark Overlay (rgba(0, 0, 0, 0.2)) */}
        {!isHomePage && (
          <div
            className="absolute inset-0 bg-black/20 pointer-events-none"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Banner Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Project Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 border border-brand-gold/70 rounded-full mb-3.5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold-light">
                {badge}
              </span>
            </div>
          )}

          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display mb-3 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            {title}
          </h1>

          {/* Subtitle / Description */}
          {subtitle && (
            <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-2xl font-medium mb-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              {subtitle}
            </p>
          )}

          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumbs"
            className="inline-flex items-center flex-wrap gap-2 text-xs text-gray-200 bg-black/60 px-3.5 py-1.5 rounded-md backdrop-blur-sm border border-white/10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-brand-gold transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-brand-gold" />
              <span>Home</span>
            </Link>

            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  {isLast || !crumb.href ? (
                    <span className="text-brand-gold font-semibold" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-brand-gold transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Decorative Gold Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80 z-10" />
    </section>
  );
};
