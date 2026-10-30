import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ExternalLink,
  ShieldCheck,
  Home,
  Dumbbell,
  Trees,
  Sparkles,
  Crown,
  Download,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS, RESIDENCE_CONFIGS, AMENITIES_WORLDS } from '@/lib/constants';
import { ProjectLogo } from '@/components/branding/ProjectLogo';

const getAmenityIcon = (id: string) => {
  switch (id) {
    case 'nirvana':
      return Dumbbell;
    case 'zen':
      return Trees;
    case 'euphoria':
      return Sparkles;
    case 'clubhouse':
      return Crown;
    default:
      return Sparkles;
  }
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-deep text-white border-t-2 border-brand-gold/30 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Developer Legacy */}
          <div className="lg:col-span-2 space-y-5">
            <ProjectLogo variant="light" />
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              An 18-Acre Global Lifestyle Township in Dombivli inspired by Dubai luxury living. 
              Featuring 8 magnificent G+35 storey residential towers, a 6-acre themed podium, 
              high-street shopping plaza, business complex and 5-star hotel.
            </p>

            {/* Paradise Group Badge */}
            <div className="bg-white/5 border border-brand-gold/30 rounded p-4 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-xs border border-brand-gold/40">
                  32+
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-brand-gold-light">
                    Paradise Group
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    32+ Years of Trust • 125+ Completed Projects
                  </p>
                </div>
              </div>
            </div>

            {/* IndusInd Bank Partner */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="text-brand-gold font-medium">Project Financed By:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.financedBy}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-light border-b border-brand-gold/20 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-brand-gold/60 text-xs">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/floor-plans"
                  className="text-gray-300 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-brand-gold/60 text-xs">›</span>
                  <span>Floor Plans</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-brand-gold/60 text-xs">›</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-brand-gold/60 text-xs">›</span>
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Residences & Amenities */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-light border-b border-brand-gold/20 pb-2 inline-block">
              Residences & Club
            </h3>
            <div className="space-y-3.5">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Apartment Types
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {RESIDENCE_CONFIGS.map((c) => (
                    <li key={c.id}>
                      <Link
                        href={`/residences#${c.id}`}
                        className="group flex items-start gap-2.5 text-gray-300 hover:text-brand-gold transition-colors duration-200"
                      >
                        <Home className="w-3.5 h-3.5 text-brand-gold/80 shrink-0 mt-0.5 group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all duration-200" />
                        <span className="leading-snug">{c.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Amenities Worlds
                </p>
                <ul className="space-y-2 text-xs text-gray-300">
                  {AMENITIES_WORLDS.map((w) => {
                    const AmenityIcon = getAmenityIcon(w.id);
                    return (
                      <li key={w.id}>
                        <Link
                          href={`/amenities#${w.id}`}
                          className="group flex items-start gap-2.5 text-gray-300 hover:text-brand-gold transition-colors duration-200"
                        >
                          <AmenityIcon className="w-3.5 h-3.5 text-brand-gold/80 shrink-0 mt-0.5 group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all duration-200" />
                          <span className="leading-snug">
                            {w.name} ({w.theme})
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Official Contacts & Addresses */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-light border-b border-brand-gold/20 pb-2 inline-block">
              Official Contact
            </h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Site Address:</strong>
                  <span>{SITE_CONFIG.siteAddress}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Corporate Office:</strong>
                  <span>{SITE_CONFIG.corporateOffice}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block text-white font-medium">Sales Helpline:</strong>
                  <div className="flex flex-col gap-0.5">
                    <a
                      href={`tel:${SITE_CONFIG.phoneNumbers[0].replace(/\s+/g, '')}`}
                      className="hover:text-brand-gold transition-colors block text-gray-200 font-medium"
                      title={`Call ${SITE_CONFIG.phoneNumbers[0]}`}
                    >
                      {SITE_CONFIG.phoneNumbers[0]}
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.phoneNumbers[1].replace(/\s+/g, '')}`}
                      className="hover:text-brand-gold transition-colors block text-gray-200 font-medium"
                      title={`Call ${SITE_CONFIG.phoneNumbers[1]}`}
                    >
                      {SITE_CONFIG.phoneNumbers[1]}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-brand-gold transition-colors text-white break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LEGAL INFORMATION & MAHARERA STATUTORY COMPLIANCE                         */}
        {/* ========================================================================= */}
        <div id="legal-information" className="py-10 border-b border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
              <h3 className="text-sm sm:text-base font-bold font-display uppercase tracking-wider text-white">
                Legal Information
              </h3>
            </div>
            <p className="text-xs text-gray-300">
              Project Registered under Government of India RERA Act, 2016
            </p>
          </div>

          {/* Project RERA Banner */}
          <div className="bg-brand-blue/60 border border-brand-gold/30 rounded-lg p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] uppercase font-bold tracking-wider text-brand-gold">
                  Project MahaRERA Registration Numbers:
                </span>
                <span className="px-2.5 py-0.5 bg-brand-gold/20 text-brand-gold-light text-xs font-bold rounded font-mono">
                  P52000033880
                </span>
                <span className="text-gray-400">•</span>
                <span className="px-2.5 py-0.5 bg-brand-gold/20 text-brand-gold-light text-xs font-bold rounded font-mono">
                  P52000045371
                </span>
                <span className="text-gray-400">•</span>
                <span className="px-2.5 py-0.5 bg-brand-gold/20 text-brand-gold-light text-xs font-bold rounded font-mono">
                  P52000046738
                </span>
              </div>
              <p className="text-xs text-gray-300">
                Registration details can be viewed on the official MahaRERA website:{' '}
                <a
                  href="https://maharera.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>maharera.maharashtra.gov.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>{' '}
                <span className="text-gray-400">|</span>{' '}
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-gold inline-flex items-center gap-1 text-[11px]"
                >
                  <span>maharera.mahaonline.gov.in</span>
                </a>
              </p>
            </div>
            <div className="text-xs text-gray-300 md:text-right shrink-0">
              Project Financed By: <strong className="text-white font-semibold">{SITE_CONFIG.financedBy}</strong>
            </div>
          </div>

          {/* LEGAL INFORMATION CHECKMARK CARD & INDIVIDUAL AGENT CERTIFICATE CARD */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            {/* 1. Government RERA Authorised Advertiser Details Card */}
            <div className="bg-white/5 border border-brand-gold/40 hover:border-brand-gold rounded-lg p-5 flex flex-col justify-center transition-colors shadow-lg">
              <ul className="space-y-3 text-xs sm:text-sm text-gray-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-gold font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <strong className="text-white font-semibold">Project Registration:</strong>{' '}
                    <span>Project Registered under Government of India RERA Act 2016.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-gold font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <strong className="text-white font-semibold">Official Website:</strong>{' '}
                    <a
                      href="https://maharera.maharashtra.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gold hover:underline break-all font-medium"
                    >
                      https://maharera.maharashtra.gov.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-gold font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <strong className="text-white font-semibold">Government RERA Authorised Advertiser:</strong>{' '}
                    <span className="text-gray-100 font-medium">Rahul Kumar Maurya Property Adviser</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-gold font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <strong className="text-white font-semibold">MAHA RERA Agent Registration No.:</strong>{' '}
                    <span className="font-mono text-brand-gold-light font-semibold">A011332602985</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. MahaRERA Authorised Real Estate Agent (Individual - Rahul Kumar Maurya) */}
            <div className="bg-white/5 border border-brand-gold/40 hover:border-brand-gold rounded-lg p-5 flex flex-col justify-between space-y-3.5 transition-colors relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-gold/10 rounded-full blur-xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/25 px-2.5 py-1 rounded border border-brand-gold/50">
                    MahaRERA Registered Agent (Individual)
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white font-display mt-2">
                  Rahul Kumar Maurya
                </h4>
                <div className="mt-3 space-y-2 text-xs text-gray-300">
                  <p className="flex items-start gap-1.5">
                    <span className="text-gray-400 min-w-[145px]">MahaRERA Agent No.:</span>
                    <strong className="text-brand-gold-light font-mono font-bold text-sm">A011332602985</strong>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="text-gray-400 min-w-[145px]">Agent Type:</span>
                    <span className="text-white font-semibold">Individual</span>
                  </p>
                </div>
              </div>

              {/* View & Download Certificate Actions */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2.5">
                <a
                  href="/documents/rahul-kumar-maurya-rera-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-brand-blue-deep text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm"
                  title="View Rahul Kumar Maurya MahaRERA Certificate in new browser tab"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View RERA Agent Certificate</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
                <a
                  href="/documents/rahul-kumar-maurya-rera-certificate.pdf"
                  download="Rahul-Kumar-Maurya-RERA-Certificate.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-sm transition-colors border border-white/20"
                  title="Download Certificate PDF"
                >
                  <Download className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Download RERA Certificate</span>
                </a>
              </div>
            </div>
          </div>

          {/* Statutory Disclaimer & Advisory */}
          <div className="p-4 bg-black/35 rounded-lg border border-white/10 space-y-2">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-gray-300">
              Disclaimer
            </h5>
            <p className="text-[11px] text-gray-400 leading-relaxed text-justify">
              This website serves as an informational platform and is not an official site. We are an authorized marketing partner for this project, and the content provided is by the respective owners for informational purposes only, not constituting any offer of services. Prices, availability, and information are subject to change without prior notice. Images are representational and artists&apos; impressions that may differ from actual properties. Data collected may be shared with RERA-registered developers, and you may receive updates via calls, SMS, or emails based on the details registered with us. Content is protected by copyright, unauthorized use is prohibited. Registration details can be viewed on the official MahaRERA website:{' '}
              <a
                href="https://maharera.maharashtra.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:underline"
              >
                maharera.maharashtra.gov.in
              </a>.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Exact Developer Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {currentYear} {SITE_CONFIG.name}. All Rights Reserved.
          </div>

          {/* EXACT DEVELOPER CREDIT AS REQUIRED BY SPECIFICATION */}
          <div className="flex items-center gap-1.5 font-medium">
            <span>Developed by</span>{' '}
            <a
              href="https://integralwebsolution.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-gold-light hover:underline font-semibold transition-colors inline-flex items-center gap-1"
            >
              <span>Integral Web Solution</span>
              <ExternalLink className="w-3 h-3 text-brand-gold" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
