import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, Check } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Us | A Wesco Septic',
  description: 'A Wesco Septic, Inc. is a second-generation, family-owned septic service company serving Snohomish County, King County, and Camano Island since 1989.',
  alternates: { canonical: '/about-us' },
};

const values = [
  { n: '01', title: 'Honest Communication', body: 'We tell you what we find, what it means, and what it will cost — before we do anything. No upsells, no surprises.' },
  { n: '02', title: 'Respect for Your Property', body: 'We treat your yard, your home, and your time with care. We leave your property the way we found it.' },
  { n: '03', title: 'Family-Owned Accountability', body: 'Our name is on every truck. When something goes wrong, you\'re talking to the people who own the company — not a call center.' },
  { n: '04', title: 'Community First', body: 'We live and work in the same communities we serve. The health of our neighbors\' systems matters to us personally.' },
];

const stats = [
  { n: '1989', l: 'Founded' },
  { n: '35+', l: 'Years Serving the Region' },
  { n: '4.8★', l: 'Google Rating' },
  { n: '400+', l: 'Customer Reviews' },
];

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20">
          {/* Team photo background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-hero.webp"
              alt="The A Wesco Septic team"
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            {/* Gradient — heavy on left for text, fades right */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(100deg, rgba(31,41,55,0.78) 0%, rgba(31,41,55,0.62) 55%, rgba(31,41,55,0.40) 100%)',
              }}
            />
          </div>
          <div className="bg-grid-dark absolute inset-0 z-[1] opacity-25" aria-hidden />
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[380px] w-[380px] rotate-12 bg-hi opacity-80 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
            <p className="eyebrow mb-4">/ About A Wesco Septic</p>
            <h1
              className="font-display uppercase leading-[0.85] tracking-tightest text-bone-200"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
            >
              <span className="block">FAMILY</span>
              <span className="block text-hi">OWNED.</span>
              <span className="block text-bone-400">SINCE 1989.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-300 sm:text-lg">
              A Wesco Septic, Inc. is a second-generation, family-owned septic service company. 
              For over 35 years we&rsquo;ve been keeping the systems running for homeowners, 
              businesses, and real estate professionals throughout Snohomish County, 
              King County, and Camano Island.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:3606686561" className="inline-flex items-center gap-2 bg-hi px-7 py-4 font-display text-lg uppercase tracking-wider text-ink-900 transition-all hover:-translate-y-0.5 rounded-full">
                <Phone className="h-5 w-5" />
                (360) 668-6561
              </a>
              <Link href="/contact-us" className="inline-flex items-center gap-2 border border-bone-400/30 px-7 py-4 font-display text-lg uppercase tracking-wider text-bone-200 hover:border-hi hover:text-hi transition-all rounded-full">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-ink-800">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-2 gap-px bg-bone-400/10 lg:grid-cols-4">
              {stats.map(s => (
                <div key={s.l} className="bg-ink-800 px-8 py-10">
                  <div className="font-display text-5xl leading-none tracking-tightest text-hi">{s.n}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-wider2 text-bone-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-bone-100 py-20 text-ink-900 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-ink-900" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">Our Story</span>
                </div>
                <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest sm:text-6xl">
                  35+ Years.<br />
                  <span className="text-hi-700">One Family.</span>
                </h2>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-ink-700 lg:col-span-6 lg:col-start-7 lg:text-lg">
                <p>
                  A Wesco Septic was founded in 1989 with a simple premise: do the work right, 
                  treat customers fairly, and take care of the community you live in. That philosophy 
                  has carried us through more than three decades and two generations of family ownership.
                </p>
                <p>
                  Today, we operate a fleet of modern vacuum trucks and employ a team of experienced, 
                  licensed technicians who share that same commitment to quality. We&rsquo;ve grown 
                  significantly since 1989 — but the core of who we are hasn&rsquo;t changed.
                </p>
                <p>
                  Homeowners trust us with their most critical household systems. Real estate agents 
                  trust us to deliver accurate, timely inspection reports for their clients. We take 
                  both responsibilities seriously, and we&rsquo;re proud of the reputation we&rsquo;ve 
                  built — one job at a time.
                </p>
                <div className="pt-4">
                  <ul className="space-y-2">
                    {[
                      'Licensed and insured in Washington State',
                      'Serving Snohomish County, King County, and Camano Island',
                      '24/7 emergency dispatch — we pick up the phone',
                      'Experienced technicians on every truck',
                      'Second-generation family ownership',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-hi-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-ink-900 py-20 text-bone-200 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="mb-12 flex items-center gap-3">
              <span className="h-px w-8 bg-hi" aria-hidden />
              <span className="eyebrow">/ How We Work</span>
            </div>
            <h2 className="mb-12 font-display text-5xl uppercase leading-[0.9] tracking-tightest sm:text-6xl">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 gap-px bg-bone-400/10 sm:grid-cols-2">
              {values.map(v => (
                <div key={v.n} className="bg-ink-900 p-8 transition-colors hover:bg-ink-800 lg:p-10">
                  <div className="mb-4 font-mono text-[10px] uppercase tracking-wider2 text-hi">/ {v.n}</div>
                  <h3 className="font-display text-2xl uppercase leading-tight tracking-tight text-bone-200">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-400">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
