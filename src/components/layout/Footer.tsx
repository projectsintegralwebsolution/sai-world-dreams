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
  Crown
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
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div>
                  <a
                    href="tel:+919224136478"
                    className="hover:text-brand-gold transition-colors block text-white font-medium"
                  >
                    {SITE_CONFIG.phoneNumbers[0]}
                  </a>
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

        {/* MahaRERA & Statutory Disclaimer Section */}
        <div className="py-8 border-b border-white/10 space-y-4">
          <div className="bg-brand-blue/50 border border-brand-gold/25 rounded-md p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-brand-gold shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  MahaRERA Registration No. <span className="text-brand-gold">{SITE_CONFIG.reraNumber}</span>
                </p>
                <p className="text-[11px] text-gray-300">
                  Available on website:{' '}
                  <a
                    href={SITE_CONFIG.reraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline inline-flex items-center gap-1"
                  >
                    <span>{SITE_CONFIG.reraUrl}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  under registered projects.
                </p>
              </div>
            </div>
            <div className="text-xs text-gray-400 md:text-right">
              Project Financed By: <strong className="text-white font-semibold">{SITE_CONFIG.financedBy}</strong>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 leading-relaxed text-justify">
            <strong>Disclaimer:</strong> All the specification, design, facilities, dimensions, etc. are subject to the approval of the respective authorities & developers and would be changed if necessary. The discretion remains with the developers. Rendered images, artists’ impressions and representations are indicative and intended for illustrative purposes only.
          </p>
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
