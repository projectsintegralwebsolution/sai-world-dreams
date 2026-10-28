import React from 'react';
import type { Metadata } from 'next';
import { PageBanner } from '@/components/common/PageBanner';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sai World Dreams Dombivli',
  description:
    'Review the official terms and conditions, MahaRERA disclosures, and architectural disclaimers for Sai World Dreams, Dombivli by Paradise Group.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div>
      <PageBanner
        title="Terms & Conditions"
        subtitle="Legal Terms, Disclaimer on Architectural Visuals, RERA Information and Conditions of Website Use"
        imageSrc="/images/banners/contact-banner.webp"
        breadcrumbs={[{ label: 'Terms and Conditions' }]}
        badge="Statutory Disclosures"
        imageScale={1.12}
        objectPosition="center 30%"
      />

      <section className="py-20 bg-brand-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-brand-gold/30 p-8 sm:p-12 space-y-8 text-gray-700 text-sm leading-relaxed">
            <div>
              <span className="text-xs text-brand-gold-dark font-bold uppercase tracking-wider block mb-1">
                Effective Date: October 2026
              </span>
              <h2 className="text-2xl font-bold text-brand-blue font-display">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing and using this website ({SITE_CONFIG.url}), you acknowledge that you have read, 
                understood, and agree to be bound by the following Terms and Conditions, as well as our Privacy Policy. 
                If you do not agree with any part of these terms, please refrain from using this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                2. MahaRERA Statutory Information
              </h2>
              <p className="mt-2">
                <strong>Project Name:</strong> Sai World Dreams<br />
                <strong>MahaRERA Registration Number:</strong> {SITE_CONFIG.reraNumber}<br />
                <strong>Official Portal:</strong>{' '}
                <a
                  href={SITE_CONFIG.reraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold-dark underline font-medium"
                >
                  {SITE_CONFIG.reraUrl}
                </a><br />
                <strong>Project Financed By:</strong> {SITE_CONFIG.financedBy}
              </p>
              <p className="mt-2 text-xs text-gray-600">
                All relevant details, including project approvals, title documents, building layouts and sanction plans, 
                are officially filed with the Maharashtra Real Estate Regulatory Authority and can be verified by the public 
                under registered projects.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                3. Brochure & Architectural Disclaimers
              </h2>
              <div className="bg-brand-ivory-card border-l-4 border-brand-gold p-4 mt-2 space-y-2">
                <p className="font-semibold text-brand-blue text-xs uppercase tracking-wider">
                  Verbatim Disclaimer from Project Brochure:
                </p>
                <p className="text-xs text-gray-700 italic">
                  "All the specification, design, facilities, dimensions, etc. are subject to the approval of the respective 
                  authorities & developers and would be changed if necessary. The discretion remains with the developers."
                </p>
              </div>
              <p className="mt-3">
                Visual renderings, computer-generated graphics, artistic elevations, walkthroughs and lifestyle illustrations 
                shown on this website are indicative artistic representations intended to convey the general design intent. 
                They do not constitute a legal warranty, guarantee or binding agreement between the developer and the customer.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                4. Floor Plans & Technical Dimensions
              </h2>
              <p className="mt-2">
                All dimensions specified in floor plans are approximate and subject to minor architectural variations during 
                structural construction and MEP integration as permitted by statutory guidelines. Furniture, fixtures, decorative 
                lighting and interior styling depicted in 3D visuals are for illustrative representation only and are not part 
                of the standard apartment handover package unless specifically documented in the registered Agreement for Sale.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                5. Website Use & Intellectual Property
              </h2>
              <p className="mt-2">
                All logos, trademarks, brand names ("Sai World Dreams", "Paradise Group", "La Dreams Club"), architectural graphics, 
                website text, and design layouts are the proprietary intellectual property of Paradise Group and protected 
                by applicable copyright and trademark laws. Unauthorized copying, scraping, modification or commercial republication 
                is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                6. Governing Law & Jurisdiction
              </h2>
              <p className="mt-2">
                Any claims or disputes arising out of or related to the use of this website or the information contained herein 
                shall be governed by the laws of India, with exclusive jurisdiction in the courts of Navi Mumbai / Mumbai, Maharashtra.
              </p>
            </div>

            <div className="p-4 bg-brand-ivory-card border border-brand-gold/40 rounded-md">
              <p className="text-xs text-gray-600">
                <strong className="text-brand-blue">Note for Corporate Compliance:</strong> These terms reflect standard real estate statutory disclosures for Maharashtra under RERA. Formal corporate legal review is advised prior to final commercial transaction execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
