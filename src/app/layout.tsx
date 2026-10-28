import type { Metadata } from 'next';
import './globals.css';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Sai World Dreams Dombivli | Luxury 1, 2, 2.5 & 3 BHK Flats by Paradise Group',
    template: '%s | Sai World Dreams, Dombivli',
  },
  description:
    'Sai World Dreams, Dombivli — An 18-Acre Global Lifestyle Township by Paradise Group on Kalyan-Shil Road. Offering 1, 2, 2.5 & 3 BHK luxury residences, 8 G+35 towers, 6-acre themed podium, high-street shopping boulevard and 5-star hotel. MahaRERA P51700035191.',
  keywords: [
    'Sai World Dreams Dombivli',
    'Residential project in Dombivli',
    '1 BHK flats in Dombivli',
    '2 BHK flats in Dombivli',
    '2.5 BHK flats in Dombivli',
    '3 BHK flats in Dombivli',
    'Luxury apartments in Dombivli',
    'Residential amenities in Dombivli',
    'Kalyan Shil Road projects',
    'Paradise Group Dombivli',
    'Sai World Dreams floor plans',
    'Sai World Dreams price',
  ],
  authors: [{ name: 'Paradise Group' }],
  creator: 'Paradise Group',
  publisher: 'Paradise Group',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sai World Dreams Dombivli | 18-Acre Global Lifestyle Township',
    description:
      'Discover Dubai-inspired luxury living at Sai World Dreams, Dombivli. 8 G+35 storey towers, 6-acre podium, high-street shopping, business park & hotel. MahaRERA P51700035191.',
    url: SITE_CONFIG.url,
    siteName: 'Sai World Dreams Dombivli',
    images: [
      {
        url: '/images/hero/hero-slide-2.webp',
        width: 1200,
        height: 630,
        alt: 'Sai World Dreams Dombivli 18-Acre Township Render',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai World Dreams Dombivli | Luxury Residences by Paradise Group',
    description:
      'Experience 1, 2, 2.5 & 3 BHK luxury homes with 60+ world-class amenities at Sai World Dreams, Dombivli. MahaRERA P51700035191.',
    images: ['/images/hero/hero-slide-2.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Place',
        '@id': `${SITE_CONFIG.url}/#place`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.subheadline,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kalyan Shil Road',
          addressLocality: 'Dombivli',
          addressRegion: 'Maharashtra',
          postalCode: '421204',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '19.2094',
          longitude: '73.0939',
        },
        telephone: '+91 9224136478',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.developer,
        url: 'https://www.paradisegroup.co.in',
        logo: `${SITE_CONFIG.url}/images/branding/paradise-group-logo.webp`,
        description: 'Paradise Group - 32+ Years of Real Estate Excellence across Navi Mumbai & Mumbai.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91 9224136478',
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi', 'mr'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        publisher: {
          '@id': `${SITE_CONFIG.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-ivory text-brand-charcoal antialiased selection:bg-brand-gold/30 selection:text-brand-blue-deep">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
