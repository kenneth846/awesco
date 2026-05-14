import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-hi py-12 text-ink-900 sm:py-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'repeating-linear-gradient(135deg, #1F2937 0, #1F2937 12px, transparent 12px, transparent 24px)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6">
        {/* Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center">

          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-ink-900" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-900/70 sm:text-[11px]">
                / READY WHEN YOU ARE
              </span>
            </div>
            <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl lg:text-7xl">
              Your system<br />
              won&rsquo;t wait.<br />
              Neither do we.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-900/80 sm:mt-6 sm:text-base">
              Whether it&rsquo;s a scheduled pump-out or a 2 a.m. emergency, the Wesco team is
              on it. Family-owned, community-focused, and in your driveway faster than you expect.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:col-start-8 lg:items-end">
            <a
              href="tel:3606686561"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink-900 px-6 py-4 font-display text-2xl uppercase tracking-wider text-hi transition-all hover:-translate-y-0.5 sm:text-3xl lg:w-auto lg:px-8 lg:py-5"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              360.668.6561
            </a>
            <Link
              href="/contact-us"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink-900 px-6 py-3.5 font-display text-lg uppercase tracking-wider text-ink-900 transition-all hover:bg-ink-900 hover:text-hi sm:text-xl lg:w-auto lg:px-8 lg:py-4"
            >
              Schedule Online
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <span className="text-center font-mono text-[10px] uppercase tracking-wider2 text-ink-900/60 sm:text-[11px] lg:text-right">
              24/7 EMERGENCY · ALL THREE COUNTIES
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
