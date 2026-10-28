import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { SITE_CONFIG } from '@/lib/constants';
import {
  MapPin,
  Building2,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Official Sai World Dreams Sales Office',
  description:
    'Connect with the official sales team of Sai World Dreams, Dombivli by Paradise Group. Site Address: Kalyan-Shil Road, Dombivli. Call: +91 9224136478 / Email: shelterproperties78@gmail.com.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

  return (
    <div>
      {/* 1. PAGE BANNER */}
      <PageBanner
        title="Contact Official Sales Team"
        subtitle="Schedule a Site Visit, Inquire About Residences or Connect Directly with Paradise Group Representatives"
        imageSrc="/images/banners/contact-banner.webp"
        breadcrumbs={[{ label: 'Contact Us' }]}
        badge="Direct Developer Office"
        imageScale={1.12}
        objectPosition="center 30%"
      />

      {/* 2. CONTACT DETAILS & FORM DUAL PANEL */}
      <section className="py-20 md:py-28 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-dark">
                  Direct Assistance
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue font-display mt-1">
                  We're Here to Guide Your Dream Home Journey
                </h2>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Connect with our dedicated relationship managers for personalized walkthroughs, 
                  bespoke payment schedules and verified floor-plan details.
                </p>
              </div>

              {/* Site Address Card */}
              <div className="bg-white p-6 rounded-lg border border-brand-gold/30 space-y-2">
                <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Site & Sales Gallery Address</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed pl-6">
                  {SITE_CONFIG.siteAddress}
                </p>
              </div>

              {/* Corporate Office Card */}
              <div className="bg-white p-6 rounded-lg border border-brand-gold/30 space-y-2">
                <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                  <Building2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Corporate Head Office</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed pl-6">
                  {SITE_CONFIG.corporateOffice}
                </p>
              </div>

              {/* Phone & Email Card */}
              <div className="bg-white p-6 rounded-lg border border-brand-gold/30 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                    <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Official Mobile Number</span>
                  </div>
                  <div className="pl-6 text-xs text-gray-700 space-y-1">
                    <a
                      href="tel:+919224136478"
                      className="block font-bold text-brand-blue hover:text-brand-gold transition-colors text-sm"
                    >
                      {SITE_CONFIG.phoneNumbers[0]}
                    </a>
                  </div>
                </div>

                <div className="space-y-1 pt-3 border-t border-brand-ivory-border">
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                    <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Email Inquiries</span>
                  </div>
                  <div className="pl-6 text-xs text-gray-700">
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-brand-blue font-semibold hover:text-brand-gold transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              {/* RERA Badge */}
              <div className="bg-brand-blue-deep text-white p-4 rounded-md border border-brand-gold/30 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-brand-gold shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Government RERA Registration</p>
                  <p className="text-xs font-bold text-brand-gold-light">{SITE_CONFIG.reraNumber}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm source="Contact Us Page" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP SECTION */}
      <section className="py-16 bg-brand-ivory-dark border-t border-brand-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark">
                Google Navigation
              </span>
              <h3 className="text-2xl font-bold text-brand-blue font-display">
                Directions to Sai World Dreams Sales Gallery
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Sai+World+Dreams+Dombivli+Kalyan+Shil+Road"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white hover:bg-brand-blue-light text-xs font-bold uppercase tracking-wider rounded-sm transition-colors self-start"
            >
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative aspect-[21/9] min-h-[350px] w-full rounded-xl overflow-hidden border-2 border-brand-gold/30">
            <iframe
              title="Sai World Dreams Dombivli Location"
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
    </div>
  );
}
