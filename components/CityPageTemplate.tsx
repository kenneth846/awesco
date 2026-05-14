'use client';

import Link from 'next/link';
import { ArrowRight, Check, MapPin, Phone } from 'lucide-react';
import { trackClickToCall } from '@/src/utils/analytics';
import type { CityData } from '@/src/data/cities';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import StickyMobileCTA from '@/components/StickyMobileCTA';

interface Props { city: CityData; }

export default function CityPageTemplate({ city }: Props) {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* ── HERO — same as home page, city-aware ─────────────────────────── */}
        <Hero city={{ name: city.name, county: city.county, slug: city.slug }} />

        {/* ── CONTENT — light background ─────────────────────────────────── */}
        <div className="bg-bone-100 text-ink-900">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-24">

            {/* Intro */}
            <section className="max-w-3xl">
              <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl">
                Septic Service in {city.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                {city.intro}
              </p>
            </section>

            {/* About area + Services */}
            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-ink-900" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">About This Area</span>
                </div>
                <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest sm:text-4xl">
                  Why We&rsquo;re Here
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">
                  {city.name} is part of our service network throughout {city.county}. Many properties in this area rely on private septic systems, and we&rsquo;re committed to keeping them running smoothly with professional, dependable service.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-hi-700" />
                    <span className="text-sm leading-relaxed text-ink-800 sm:text-base">Located in {city.county}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-hi-700" />
                    <span className="text-sm leading-relaxed text-ink-800 sm:text-base">Fast response times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-hi-700" />
                    <span className="text-sm leading-relaxed text-ink-800 sm:text-base">24/7 emergency service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-hi-700" />
                    <span className="text-sm leading-relaxed text-ink-800 sm:text-base">Trusted for 30+ years</span>
                  </li>
                </ul>
              </section>

              <section>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-ink-900" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">Our Services</span>
                </div>
                <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest sm:text-4xl">
                  What We Offer
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">
                  Complete septic system solutions for {city.name} homeowners and businesses:
                </p>
                <ul className="mt-6 space-y-3">
                  {city.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-hi-700" />
                      <span className="text-sm leading-relaxed text-ink-800 sm:text-base">{service}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Nearby areas */}
            <section className="mt-16 border-t border-ink-900/10 pt-16">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ink-900" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">Service Area</span>
              </div>
              <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest sm:text-4xl">
                We Also Serve
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700 sm:text-lg">
                {city.nearbyNote}
              </p>
            </section>

            {/* Why Choose Us */}
            <section className="mt-16 border-t border-ink-900/10 pt-16">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ink-900" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">Why Choose A Wesco</span>
              </div>
              <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest sm:text-4xl">
                The A Wesco Difference
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { n: '01', title: '30+ Years Experience', body: 'Serving the greater Seattle area since 1989 with expertise and reliability.' },
                  { n: '02', title: 'Licensed & Insured', body: 'Full licensing and insurance for complete peace of mind on every job.' },
                  { n: '03', title: '24/7 Emergency Response', body: 'We\'re available around the clock for urgent septic emergencies.' },
                  { n: '04', title: 'Transparent Pricing', body: 'No hidden fees or surprise charges — clear pricing upfront.' },
                  { n: '05', title: 'Expert Technicians', body: 'Trained professionals who explain your system and answer your questions.' },
                  { n: '06', title: 'Local Knowledge', body: `Deep understanding of ${city.county} soil conditions and local codes.` },
                ].map(({ n, title, body }) => (
                  <div key={n} className="bg-bone-100 p-6 hover:bg-bone-200 transition-colors">
                    <div className="mb-3 font-mono text-[10px] uppercase tracking-wider2 text-hi-700">/ {n}</div>
                    <h3 className="font-display text-xl uppercase leading-tight tracking-tight">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing CTA */}
            <div className="mt-10 flex flex-col gap-6 border border-ink-900/15 bg-bone-200 p-6 sm:p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-2xl uppercase leading-tight tracking-tight sm:text-3xl">
                  Ready to Schedule Service?
                </p>
                <p className="mt-2 text-ink-700">Call us anytime — we&rsquo;re here 24/7 for your septic needs.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:3606686561"
                  onClick={() => trackClickToCall('(360) 668-6561', `city-closing-cta-${city.slug}`)}
                  className="inline-flex items-center gap-2 bg-ink-900 px-6 py-4 font-display text-lg uppercase tracking-wider text-hi transition-all hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  (360) 668-6561
                </a>
                <Link
                  href="#lead-form"
                  className="inline-flex items-center gap-2 border border-ink-900/30 px-6 py-4 font-display text-lg uppercase tracking-wider text-ink-900 hover:border-hi-700 hover:text-hi-700 transition-colors"
                >
                  Schedule Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
