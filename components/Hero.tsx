import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import HeroLeadForm from './HeroLeadForm';

interface HeroProps {
  city?: {
    name: string;
    county: string;
    slug: string;
  };
}

export default function Hero({ city }: HeroProps = {}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-bone-200">

      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Mobile: heavier uniform overlay so image shows but text is legible */}
        {/* Desktop: left-heavy gradient for text, lighter right for form */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(31,41,55,0.60) 0%, rgba(31,41,55,0.65) 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: 'linear-gradient(105deg, rgba(31,41,55,0.58) 0%, rgba(31,41,55,0.58) 50%, rgba(31,41,55,0.38) 100%)',
          }}
        />
      </div>

      {/* Grid texture */}
      <div className="bg-grid-dark absolute inset-0 z-[1] opacity-20" aria-hidden />

      {/* Swoosh — DESKTOP ONLY, hidden on mobile so it doesn't block the photo */}
      <div
        className="absolute -right-32 -top-32 z-[1] hidden h-[440px] w-[440px] rotate-12 bg-hi opacity-90 lg:block"
        style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-10 sm:px-6 sm:py-14 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">

          {/* LEFT: Headline */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="h-px w-6 bg-hi sm:w-8" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-hi sm:text-[11px]">
                {city ? `${city.name} · ${city.county}` : 'Snohomish · King · Camano Island'}
              </span>
              <span className="font-mono text-[10px] text-bone-400 sm:text-[11px]">Est. 1989</span>
            </div>

            <h1
              className="font-display uppercase leading-[0.88] tracking-tightest text-bone-200"
              style={{ fontSize: 'clamp(46px, 11vw, 110px)' }}
            >
              {city ? (
                <>
                  <span className="block animate-riseIn" style={{ animationDelay: '0.05s' }}>
                    SEPTIC
                  </span>
                  <span className="block animate-riseIn text-hi" style={{ animationDelay: '0.15s' }}>
                    SERVICES
                  </span>
                  <span className="block animate-riseIn text-bone-300" style={{ animationDelay: '0.25s' }}>
                    {city.name.toUpperCase()}
                  </span>
                </>
              ) : (
                <>
                  <span className="block animate-riseIn" style={{ animationDelay: '0.05s' }}>
                    EXPERT
                  </span>
                  <span className="block animate-riseIn text-hi" style={{ animationDelay: '0.15s' }}>
                    SEPTIC CARE
                  </span>
                  <span className="block animate-riseIn text-bone-300" style={{ animationDelay: '0.25s' }}>
                    SINCE&nbsp;1989.
                  </span>
                </>
              )}
            </h1>

            <p
              className="mt-4 max-w-lg animate-riseIn text-sm leading-relaxed text-bone-300 sm:mt-6 sm:text-base lg:text-lg"
              style={{ animationDelay: '0.35s' }}
            >
              {city
                ? `Professional septic pumping, inspections, repairs, and drain field services in ${city.name}, WA. Family-owned since 1989 — we pick up the phone at 2\u00a0a.m. when it isn\u2019t.`
                : 'Second-generation, family-owned. From routine pumping to drain field repair \u2014 and we pick up the phone at 2\u00a0a.m. when it isn\u2019t.'}
            </p>

            {/* CTAs */}
            <div
              className="mt-6 flex flex-wrap items-center gap-3 animate-riseIn sm:mt-8 sm:gap-4"
              style={{ animationDelay: '0.45s' }}
            >
              <a
                href="tel:3606686561"
                className="inline-flex items-center gap-2 rounded-full bg-hi px-6 py-3 font-display text-base uppercase tracking-wider text-ink-900 transition-all hover:-translate-y-0.5 sm:px-7 sm:py-4 sm:text-lg"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                (360) 668-6561
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-bone-200/50 px-6 py-3 font-display text-base uppercase tracking-wider text-bone-200 transition-all hover:border-hi hover:text-hi sm:px-7 sm:py-4 sm:text-lg"
              >
                Our Services
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Trust strip */}
            <div
              className="mt-6 flex flex-col gap-1 border-t border-bone-400/20 pt-5 font-mono text-[10px] uppercase tracking-wider2 text-bone-400 animate-riseIn sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1 sm:text-[11px]"
              style={{ animationDelay: '0.55s' }}
            >
              <span>★★★★★ 4.8 Google / 400+ Reviews</span>
              <span>Licensed &amp; Insured</span>
              <span>2nd Generation Family‑Owned</span>
            </div>
          </div>

          {/* RIGHT: Lead form */}
          <div className="w-full self-start animate-riseIn" style={{ animationDelay: '0.2s' }}>
            <HeroLeadForm slug={city ? city.slug : 'home'} />
          </div>

        </div>
      </div>
    </section>
  );
}
