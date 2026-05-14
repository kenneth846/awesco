import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import HeroLeadForm from '@/components/HeroLeadForm';

export const metadata: Metadata = {
  title: 'Septic Services | Snohomish | A Wesco Septic',
  description:
    'Full-service septic company serving Snohomish County, King County, and Camano Island since 1989. Pumping, inspections, repairs, drain field repair, and maintenance agreements.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    n: '01', tag: 'Most Requested',
    title: 'Septic Tank Pumping',
    href: '/services/septic-tank-pumping',
    body: 'Routine pumping every 2–3 years keeps your system healthy and prevents costly backups. Every pump includes a complimentary courtesy inspection.',
  },
  {
    n: '02', tag: 'Real Estate',
    title: 'Septic System Inspections',
    href: '/services/septic-inspections',
    body: 'Routine, pre-purchase, and escrow inspections. Written reports delivered promptly — trusted by homeowners and real estate agents throughout the region.',
  },
  {
    n: '03', tag: 'Full Scope',
    title: 'Septic Repairs',
    href: '/services/septic-repairs',
    body: 'From jetting and line repairs to pump replacements and advanced electrical work — we handle the full range of septic system repair.',
  },
  {
    n: '04', tag: 'Restoration',
    title: 'Drain Field Repair',
    href: '/services/septic-drainfield-repair',
    body: 'Soggy ground, standing water, sewage odors outdoors? We diagnose and restore failing drain fields with targeted repairs before recommending replacement.',
  },
  {
    n: '05', tag: 'Stay Ahead',
    title: 'Maintenance Agreements',
    href: '/services/maintenance-agreements',
    body: 'We track your service history, remind you when you\'re due, and show up on schedule. Priority scheduling and discounted rates for agreement customers.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* Hero — two column with lead form on right, same as homepage */}
        <section className="relative overflow-hidden bg-ink-900 text-bone-200">
          {/* Hero photo background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/services-hero.webp"
              alt="Awesco Septic technician pumping a septic tank"
              fill
              priority
              className="object-cover object-center lg:object-right-bottom"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(31,41,55,0.45) 0%, rgba(31,41,55,0.60) 100%)' }}
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{ background: 'linear-gradient(105deg, rgba(31,41,55,0.78) 0%, rgba(31,41,55,0.58) 50%, rgba(31,41,55,0.38) 100%)' }}
            />
          </div>
          <div className="bg-grid-dark absolute inset-0 z-[1] opacity-20" aria-hidden />
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[400px] w-[400px] rotate-12 bg-hi opacity-90 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">

              {/* LEFT: Headline */}
              <div className="flex flex-col justify-center">
                <p className="eyebrow mb-4">/ All Services</p>
                <h1
                  className="font-display uppercase leading-[0.85] tracking-tightest text-bone-200"
                  style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
                >
                  <span className="block animate-riseIn" style={{ animationDelay: '0.05s' }}>EVERYTHING</span>
                  <span className="block animate-riseIn text-hi" style={{ animationDelay: '0.15s' }}>YOUR SYSTEM</span>
                  <span className="block animate-riseIn text-bone-400" style={{ animationDelay: '0.25s' }}>NEEDS.</span>
                </h1>
                <p className="mt-6 max-w-lg animate-riseIn text-base leading-relaxed text-bone-300 sm:text-lg" style={{ animationDelay: '0.35s' }}>
                  Family-owned since 1989. One call handles it all — from routine pumping to 24/7 emergency repairs across Snohomish County, King County, and Camano Island.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 animate-riseIn" style={{ animationDelay: '0.45s' }}>
                  <a href="tel:3606686561" className="inline-flex items-center gap-2 bg-hi px-7 py-4 font-display text-lg uppercase tracking-wider text-ink-900 transition-all hover:-translate-y-0.5 rounded-full">
                    <Phone className="h-5 w-5" />
                    (360) 668-6561
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-bone-400/10 pt-6 font-mono text-[11px] uppercase tracking-wider2 text-bone-400 animate-riseIn" style={{ animationDelay: '0.5s' }}>
                  <span>★★★★★ 4.8 Google / 400+ Reviews</span>
                  <span className="hidden h-3 w-px bg-bone-400/30 sm:block" aria-hidden />
                  <span>Licensed &amp; Insured</span>
                  <span className="hidden h-3 w-px bg-bone-400/30 sm:block" aria-hidden />
                  <span>24/7 Emergency</span>
                </div>
              </div>

              {/* RIGHT: Lead form */}
              <div className="animate-riseIn w-full" style={{ animationDelay: '0.2s' }}>
                <HeroLeadForm slug="services" />
              </div>

            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-bone-100 py-16 text-ink-900 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="grid grid-cols-1 gap-px bg-ink-900 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`group flex flex-col justify-between bg-bone-100 p-8 transition-colors hover:bg-ink-900 hover:text-bone-200 lg:p-10 ${i === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500 group-hover:text-hi">/ {s.n}</span>
                      <span className="border border-ink-500/30 px-2 py-1 font-mono text-[9px] uppercase tracking-wider2 text-ink-700 group-hover:border-hi group-hover:text-hi">{s.tag}</span>
                    </div>
                    <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-ink-900 group-hover:text-bone-200 lg:text-4xl">{s.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink-700 group-hover:text-bone-300">{s.body}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 font-display text-sm uppercase tracking-wider text-ink-900 group-hover:text-hi">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  </div>
                </Link>
              ))}

              {/* Emergency card */}
              <div className="bg-hi p-8 text-ink-900 sm:col-span-2 lg:col-span-3 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider2">/ ER</span>
                  <span className="border border-ink-900/20 px-2 py-1 font-mono text-[9px] uppercase tracking-wider2">24/7 Live</span>
                </div>
                <h2 className="font-display text-3xl uppercase leading-tight tracking-tight lg:text-4xl">Emergency?<br />Call Now.</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-900/75">
                  Backups, alarms, sewage odors. Reduce water use immediately and call us — we dispatch around the clock.
                </p>
                <a href="tel:3606686561" className="mt-8 inline-flex items-center gap-2 font-display text-2xl uppercase tracking-wider hover:underline">
                  360.668.6561
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="bg-ink-900 py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="grid grid-cols-2 gap-px bg-bone-400/10 sm:grid-cols-4">
              {[
                { n: '35+', l: 'Years in the Field' },
                { n: '400+', l: 'Google Reviews' },
                { n: '4.8★', l: 'Customer Rating' },
                { n: '24/7', l: 'Emergency Dispatch' },
              ].map(s => (
                <div key={s.l} className="bg-ink-900 px-6 py-8">
                  <div className="font-display text-5xl leading-none tracking-tightest text-hi">{s.n}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-wider2 text-bone-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
