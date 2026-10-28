import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import {
  SITE_CONFIG,
  CONNECTIVITY_DATA,
  SCHOOLS_NEARBY,
  HOSPITALS_NEARBY
} from '@/lib/constants';
import {
  MapPin,
  Clock,
  GraduationCap,
  Hospital,
  Train,
  Car,
  Plane,
  Building,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Location & Connectivity | Kalyan-Shil Road, Dombivli',
  description:
    'Sai World Dreams is ideally positioned on Kalyan-Shil Road, Dombivli. 0 min to Kalyan-Shil Road, 2 mins to upcoming Kalyan-Taloja Metro, 12 mins to Dombivli Station, close to premier schools & hospitals.',
  alternates: {
    canonical: '/location',
  },
};

export default function LocationPage() {
  return (
    <div>
      {/* 1. PAGE BANNER */}
      <PageBanner
        title="Location & Strategic Connectivity"
        subtitle="Situated Directly on Kalyan-Shil Road, Dombivli — The Rapidly Expanding Growth Corridor of MMR"
        imageSrc="/images/banners/location-banner.webp"
        breadcrumbs={[{ label: 'Location' }]}
        badge="Zero Minute from Kalyan-Shil Road"
        imageScale={1.08}
        objectPosition="center 85%"
      />

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-dark">
                The Growth Epicenter
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display leading-tight">
                Dombivli — A Significant Suburb of Mumbai, A Well-Connected Dream
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-light">
                Dombivli is recognized as one of the prominent social and educational centers of Thane and 
                Mumbai. With its rich cosmopolitan culture, excellent rail and road infrastructure, and close 
                proximity to the Maharashtra Industrial Development Corporation (MIDC) and IT hubs, Dombivli 
                offers a thriving ecosystem for family living.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 p-3 bg-white rounded border border-brand-ivory-border">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-xs text-gray-700 font-medium">Part of Dombivli-Kalyan Municipal Corp.</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded border border-brand-ivory-border">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-xs text-gray-700 font-medium">One of Maharashtra's first 100% literate towns</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded border border-brand-ivory-border">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-xs text-gray-700 font-medium">Fast connectivity to Thane, Navi Mumbai & BKC</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded border border-brand-ivory-border">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-xs text-gray-700 font-medium">Adjacent to Airoli-Katai Tunnel & Metro Route</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-brand-gold/40 bg-white">
                <Image
                  src="/images/location/connectivity-map.webp"
                  alt="Sai World Dreams Strategic Location Blueprint"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-2"
                />
              </div>
              <p className="text-[11px] text-gray-500 text-center mt-2 italic">
                Official Connectivity Diagram from Sai World Dreams Brochure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSIT & INFRASTRUCTURE MATRIX */}
      <section className="py-20 bg-brand-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-light">
              Travel Timelines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
              Unrivalled Commute Conveniences
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              *Travel times are based on the official project brochure under standard transit conditions. 
              Upcoming infrastructure is explicitly highlighted as under planning/construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONNECTIVITY_DATA.map((conn, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-brand-gold/25 rounded-lg p-6 space-y-4 hover:border-brand-gold/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-brand-gold-light font-display">
                    {conn.time}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-gold/20 text-brand-gold">
                    {conn.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    {conn.destination}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Direct access via Kalyan-Shilphata arterial road network.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOCIAL INFRASTRUCTURE: SCHOOLS & HOSPITALS */}
      <section className="py-20 md:py-28 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Schools Column */}
            <div className="bg-white rounded-xl border border-brand-gold/30 p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-ivory-border pb-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold-dark">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Proximity to Education
                  </span>
                  <h3 className="text-xl font-bold text-brand-blue font-display">
                    Reputed Schools Nearby
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {SCHOOLS_NEARBY.map((school, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 bg-brand-ivory-card rounded border border-brand-ivory-border hover:border-brand-gold/40 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-brand-blue">
                      {school.name}
                    </span>
                    <span className="px-2.5 py-1 bg-brand-blue-deep text-brand-gold font-bold text-xs rounded">
                      {school.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospitals Column */}
            <div className="bg-white rounded-xl border border-brand-gold/30 p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-ivory-border pb-4">
                <div className="w-10 h-10 rounded-full bg-brand-burgundy/20 flex items-center justify-center text-brand-burgundy">
                  <Hospital className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Healthcare Security
                  </span>
                  <h3 className="text-xl font-bold text-brand-blue font-display">
                    Multi-Speciality Hospitals
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {HOSPITALS_NEARBY.map((hosp, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 bg-brand-ivory-card rounded border border-brand-ivory-border hover:border-brand-gold/40 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-brand-blue">
                      {hosp.name}
                    </span>
                    <span className="px-2.5 py-1 bg-brand-burgundy text-white font-bold text-xs rounded">
                      {hosp.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE GOOGLE MAPS EMBED */}
      <section className="py-16 bg-brand-ivory-dark border-t border-brand-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark">
                Interactive Coordinates
              </span>
              <h3 className="text-2xl font-bold text-brand-blue font-display">
                Locate Sai World Dreams on Map
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Sai+World+Dreams+Dombivli+Kalyan+Shil+Road"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white hover:bg-brand-blue-light text-xs font-bold uppercase tracking-wider rounded-sm transition-colors self-start"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative aspect-[21/9] min-h-[350px] w-full rounded-xl overflow-hidden border-2 border-brand-gold/30">
            <iframe
              title="Sai World Dreams Dombivli Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.897368487926!2d73.0913!3d19.2089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795861e6f1c4b%3A0x6b8660e51fa23!2sSai%20World%20Dreams!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 6. ENQUIRY SECTION */}
      <section className="py-20 bg-brand-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Location Page" />
        </div>
      </section>
    </div>
  );
}
