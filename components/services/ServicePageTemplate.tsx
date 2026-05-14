'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plus, Minus, Check, Phone } from 'lucide-react';
import { trackClickToCall } from '@/src/utils/analytics';
import type { ServiceData } from '@/src/data/services';
import Image from 'next/image';
import OtherServices from './OtherServices';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import ServiceLeadForm from './ServiceLeadForm';

interface Props { service: ServiceData; }

function FAQAccordion({ faqs }: { faqs: ServiceData['faqs'] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-t border-bone-400/15">
      {faqs.map((f, i) => (
        <li key={i} className="border-b border-bone-400/15">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-hi"
            aria-expanded={open === i}
          >
            <span className="flex items-start gap-4">
              <span className="mt-0.5 shrink-0 font-mono text-[10px] tracking-wider2 text-hi">
                /{String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-lg uppercase leading-tight tracking-tight sm:text-xl">
                {f.q}
              </span>
            </span>
            <span className="mt-1 shrink-0">
              {open === i ? <Minus className="h-4 w-4 text-hi" /> : <Plus className="h-4 w-4" />}
            </span>
          </button>
          {open === i && (
            <p className="pb-5 pl-10 pr-4 text-sm leading-relaxed text-bone-300 sm:text-base">
              {f.a}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function ServicePageTemplate({ service }: Props) {
  const titleLines = service.heroTitle.split('\n');

  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink-900 text-bone-200">
          {/* Optional hero photo background */}
          {service.heroImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={service.heroImage}
                alt={service.heroTitle.replace('\n', ' ')}
                fill
                priority
                className="object-cover object-[center_30%] sm:object-center"
                sizes="100vw"
              />
              {/* Mobile: lighter overlay so the photo is actually visible */}
              <div
                className="absolute inset-0 lg:hidden"
                style={{ background: 'linear-gradient(180deg, rgba(31,41,55,0.35) 0%, rgba(31,41,55,0.55) 100%)' }}
              />
              {/* Desktop: side-gradient keeps text on left legible */}
              <div
                className="absolute inset-0 hidden lg:block"
                style={{ background: 'linear-gradient(105deg, rgba(31,41,55,0.65) 0%, rgba(31,41,55,0.45) 50%, rgba(31,41,55,0.28) 100%)' }}
              />
            </div>
          )}
          <div className="bg-grid-dark absolute inset-0 z-[1] opacity-25" aria-hidden />
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          {/* Swoosh — desktop only */}
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[380px] w-[380px] rotate-12 bg-hi opacity-90 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-8 sm:px-6 sm:py-12 lg:py-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider2 text-bone-400 sm:mb-8 sm:gap-2">
              <Link href="/" className="hover:text-hi transition-colors">Home</Link>
              <span className="opacity-40">›</span>
              <Link href="/services" className="hover:text-hi transition-colors">Services</Link>
              <span className="opacity-40">›</span>
              <span className="text-hi">{titleLines[0]}</span>
            </nav>

            {/* Mobile: stacked. Desktop: two-column with form */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">

              {/* Headline */}
              <div className="flex flex-col justify-center">
                <p className="eyebrow mb-3 text-[10px] sm:mb-4 sm:text-[11px]">{service.eyebrow}</p>
                <h1
                  className="font-display uppercase leading-[0.88] tracking-tightest text-bone-200"
                  style={{ fontSize: 'clamp(40px, 10vw, 100px)' }}
                >
                  {titleLines.map((line, i) => (
                    <span
                      key={i}
                      className={`block animate-riseIn ${i === 1 ? 'text-hi' : i === 2 ? 'text-bone-400' : ''}`}
                      style={{ animationDelay: `${0.05 + i * 0.1}s` }}
                    >
                      {line}
                    </span>
                  ))}
                </h1>

                <p
                  className="mt-4 max-w-lg animate-riseIn text-sm leading-relaxed text-bone-300 sm:mt-6 sm:text-base lg:text-lg"
                  style={{ animationDelay: '0.35s' }}
                >
                  {service.heroSubtitle}
                </p>

                {/* Trust strip */}
                <div className="mt-5 flex flex-col gap-1 border-t border-bone-400/10 pt-4 font-mono text-[10px] uppercase tracking-wider2 text-bone-400 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:pt-6 sm:text-[11px]">
                  <span>★★★★★ 4.8 Google / 400+ Reviews</span>
                  <span>Licensed &amp; Insured</span>
                  <a
                    href="tel:3606686561"
                    onClick={() => trackClickToCall('(360) 668-6561', `hero-${service.slug}`)}
                    className="flex items-center gap-1.5 hover:text-hi transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    24/7 Emergency
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="w-full self-start animate-riseIn" style={{ animationDelay: '0.2s' }}>
                <ServiceLeadForm slug={service.slug} defaultService={service.defaultService} />
              </div>

            </div>

          </div>
        </section>

        {/* ── CONTENT — light background ─────────────────────────────────── */}
        <div className="bg-bone-100 text-ink-900">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-24">

            {/* Intro */}
            <section className="max-w-3xl">
              <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl">
                {service.intro.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                {service.intro.body}
              </p>
            </section>

            {/* Why it matters + benefits side by side */}
            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Checklist */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-ink-900" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">Key Information</span>
                </div>
                <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest sm:text-4xl">
                  {service.whyMatters.heading}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">{service.whyMatters.body}</p>
                <ul className="mt-6 space-y-3">
                  {service.whyMatters.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-hi-700" />
                      <span className="text-sm leading-relaxed text-ink-800 sm:text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Benefits */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-ink-900" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">What To Expect</span>
                </div>
                <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest sm:text-4xl">
                  What You Get
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-px bg-ink-900/10 sm:grid-cols-2">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="bg-bone-100 p-6 transition-colors hover:bg-bone-200">
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-wider2 text-hi-700">/ 0{i + 1}</div>
                      <h3 className="font-display text-xl uppercase leading-tight tracking-tight">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700">{b.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Process steps */}
            <section className="mt-16">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ink-900" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">Our Process</span>
              </div>
              <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest sm:text-4xl">
                How It Works
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
                {service.process.map((step, i) => (
                  <div key={i} className="bg-bone-100 p-6 hover:bg-bone-200 transition-colors">
                    <div className="font-display text-6xl leading-none text-ink-900/08 mb-4">{step.n}</div>
                    <h3 className="font-display text-xl uppercase leading-tight tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ — dark block */}
            <section className="mt-16 bg-ink-900 p-8 text-bone-200 sm:p-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-hi" aria-hidden />
                <span className="eyebrow">/ Frequently Asked</span>
              </div>
              <h2 className="mb-8 font-display text-3xl uppercase leading-tight tracking-tightest sm:text-4xl">
                Common Questions
              </h2>
              <FAQAccordion faqs={service.faqs} />
            </section>

            {/* Closing CTA */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border border-ink-900/15 bg-bone-200 p-6 sm:p-8">
              <p className="font-display text-2xl uppercase leading-tight tracking-tight sm:text-3xl">
                {service.closingCTA}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:3606686561"
                  onClick={() => trackClickToCall('(360) 668-6561', `closing-cta-${service.slug}`)}
                  className="inline-flex items-center gap-2 bg-ink-900 px-6 py-4 font-display text-lg uppercase tracking-wider text-hi transition-all hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  (360) 668-6561
                </a>
                <Link href="#lead-form" className="inline-flex items-center gap-2 border border-ink-900/30 px-6 py-4 font-display text-lg uppercase tracking-wider text-ink-900 hover:border-hi-700 hover:text-hi-700 transition-colors">
                  Schedule Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Other services ─────────────────────────────────────────────── */}
        <OtherServices currentSlug={service.slug} />

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
