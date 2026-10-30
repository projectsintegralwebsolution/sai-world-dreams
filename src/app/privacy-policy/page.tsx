import React from 'react';
import type { Metadata } from 'next';
import { PageBanner } from '@/components/common/PageBanner';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sai World Dreams Dombivli',
  description:
    'Read the official privacy policy for Sai World Dreams, Dombivli by Paradise Group. Learn how customer data, enquiries, and communication preferences are protected.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageBanner
        title="Privacy Policy"
        subtitle="Our Commitment to Data Protection, Transparency and Responsible Communication"
        imageSrc="/images/banners/contact-banner.webp"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        badge="Legal & Governance"
        imageScale={1.12}
        objectPosition="center 30%"
      />

      <section className="py-20 bg-brand-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-brand-gold/30 p-8 sm:p-12 space-y-8 text-gray-700 text-sm leading-relaxed">
            <div>
              <span className="text-xs text-brand-gold-dark font-bold uppercase tracking-wider block mb-1">
                Last Updated: October 2026
              </span>
              <h2 className="text-2xl font-bold text-brand-blue font-display">
                1. Introduction & Overview
              </h2>
              <p className="mt-3">
                This Privacy Policy outlines how <strong>Sai World Dreams</strong> and its parent developer{' '}
                <strong>Paradise Group</strong> ("we", "our", or "us") collect, process, store and safeguard personal 
                information submitted through this official project website ({SITE_CONFIG.url}).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                2. Information We Collect
              </h2>
              <p className="mt-2">
                When you interact with our website or submit an enquiry form, we may collect the following personal data:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-600">
                <li><strong>Identity Information:</strong> Full name and prefix.</li>
                <li><strong>Contact Information:</strong> Phone/mobile number and email address.</li>
                <li><strong>Property Preferences:</strong> Apartment configuration interest (1 BHK, 2 BHK, 2.5 BHK, 3 BHK), preferred tower, or site visit requests.</li>
                <li><strong>Technical Information:</strong> IP address, device type, browser information, and referral URLs collected via essential cookies for security and performance optimization.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                3. Purpose of Data Processing
              </h2>
              <p className="mt-2">
                Your information is collected strictly for legitimate real estate enquiry fulfillment, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-600">
                <li>Delivering project brochures, pricing sheets, payment schedules and architectural floor plans.</li>
                <li>Scheduling and coordinating site visits at Sai World Dreams, Kalyan-Shil Road, Dombivli.</li>
                <li>Responding to customer queries via phone call, SMS, WhatsApp or email as consented.</li>
                <li>Ensuring compliance with Maharashtra Real Estate Regulatory Authority (MahaRERA) mandates.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                4. Data Protection & Security
              </h2>
              <p className="mt-2">
                We implement strict administrative, technical, and physical security measures to safeguard your personal 
                data against unauthorized access, alteration, disclosure, or destruction. We do not sell, rent, or trade 
                your personally identifiable information to third-party telemarketers or external advertisers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                5. Third-Party Services
              </h2>
              <p className="mt-2">
                We may engage trusted third-party service providers (such as hosting infrastructure, CRM systems, and SMS/WhatsApp 
                delivery gateways) strictly to facilitate enquiry communication. All such providers are bound by strict 
                confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue font-display">
                6. Communication Preferences & Opt-Out
              </h2>
              <p className="mt-2">
                You may at any time request the review, update, or deletion of your personal information from our CRM, or unsubscribe 
                from marketing notifications, by contacting us at <strong>{SITE_CONFIG.email}</strong> or calling{' '}
                <strong>{SITE_CONFIG.phoneNumbers[0]}</strong> / <strong>{SITE_CONFIG.phoneNumbers[1]}</strong>.
              </p>
            </div>

            <div className="p-4 bg-brand-ivory-card border border-brand-gold/40 rounded-md">
              <p className="text-xs text-gray-600">
                <strong className="text-brand-blue">Note for Legal Review:</strong> This privacy policy is formulated for property enquiry websites in compliance with Indian information technology regulations and digital privacy standards. Formal corporate legal verification should be conducted before final commercial deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
