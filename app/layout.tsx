import type { Metadata } from 'next';
import './globals.css';
import AttributionCapture from '@/components/AttributionCapture';

// ─── FONT LOADING ────────────────────────────────────────────────────────────
// Fonts are loaded via Google Fonts CSS link in <head> below.
//
// TO UPGRADE (recommended for production): replace with next/font/google which
// self-hosts fonts at build time — zero runtime requests, no fallback flash:
//
//   import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google';
//   const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' });
//   const dmSans    = DM_Sans({ weight: ['400','500','600','700'], subsets: ['latin'], variable: '--font-body', display: 'swap' });
//   const mono      = JetBrains_Mono({ weight: ['400','500','700'], subsets: ['latin'], variable: '--font-mono', display: 'swap' });
//
// Then add className={`${bebasNeue.variable} ${dmSans.variable} ${mono.variable}`} to <html>.
// Vercel and your local dev machine both support this — just swap it in.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.awescoseptic.com'),
  title: {
    default: 'Septic Tank Services | Snohomish | A Wesco Septic',
    template: '%s | A Wesco Septic',
  },
  description:
    'A Wesco Septic, Inc. — second-generation family-owned septic services in Snohomish County, King County, and Camano Island since 1989. Septic tank pumping, inspections, repairs, drain field repair, and 24/7 emergency service.',
  keywords: [
    'septic tank pumping','septic inspection','septic repair','drain field repair',
    'septic maintenance','Snohomish County septic','King County septic',
    'Camano Island septic','A Wesco Septic','septic services Washington',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://www.awescoseptic.com',
    siteName: 'A Wesco Septic',
    title: 'Septic Tank Services | Snohomish | A Wesco Septic',
    description: 'Family-owned septic pumping, inspections, repairs, and 24/7 emergency service across Snohomish County, King County, and Camano Island since 1989.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PlumbingService',
  '@id': 'https://www.awescoseptic.com/#business',
  name: 'A Wesco Septic, Inc.',
  alternateName: 'A Wesco Septic Service',
  description: 'Second-generation family-owned septic services providing septic tank pumping, inspections, repairs, drain field repair, and maintenance agreements throughout Snohomish County, King County, and Camano Island since 1989.',
  url: 'https://www.awescoseptic.com',
  telephone: '+1-360-668-6561',
  email: 'csr@awescoseptic.com',
  foundingDate: '1989',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16607 SR 9 SE',
    addressLocality: 'Snohomish',
    addressRegion: 'WA',
    postalCode: '98296',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 47.8323, longitude: -122.0568 },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Snohomish County, WA' },
    { '@type': 'AdministrativeArea', name: 'King County, WA' },
    { '@type': 'AdministrativeArea', name: 'Camano Island, WA' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Septic Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Septic Tank Pumping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Septic System Inspections' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Septic Repairs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Septic Drain Field Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance Agreements' } },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '400' },
};

const GTM_ID = 'GTM-T8H4WLLN';
const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GTM */}
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />

        {/* Google Fonts — Bebas Neue (display) · DM Sans (body) · JetBrains Mono (labels) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* CSS variables so Tailwind font-display/font-body/font-mono classes work */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-display: 'Bebas Neue';
            --font-body:    'DM Sans';
            --font-mono:    'JetBrains Mono';
          }
        `}} />

        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-ink-900">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AttributionCapture />
        {children}
      </body>
    </html>
  );
}
