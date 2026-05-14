import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';

const services = [
  {
    n: '01',
    title: 'Septic Tank Pumping',
    href: '/services/septic-tank-pumping',
    blurb: 'Routine pumping every 2–3 years keeps your system healthy and prevents costly backups. Every pump includes a complimentary inspection.',
    tag: 'MOST REQUESTED',
  },
  {
    n: '02',
    title: 'Septic System Inspections',
    href: '/services/septic-inspections',
    blurb: 'Routine, real-estate, and pre-purchase inspections. We catch problems early — and document everything you need for escrow.',
    tag: 'REAL ESTATE',
  },
  {
    n: '03',
    title: 'Septic Repairs',
    href: '/services/septic-repairs',
    blurb: 'Jetting, line repairs, and advanced electrical work. We handle the full range of septic system repairs and maintenance.',
    tag: 'FULL SCOPE',
  },
  {
    n: '04',
    title: 'Drain Field Repair',
    href: '/services/septic-drainfield-repair',
    blurb: 'Soggy ground, standing water, slow drains? We diagnose and restore failing drain fields throughout the region.',
    tag: 'RESTORATION',
  },
  {
    n: '05',
    title: 'Maintenance Agreements',
    href: '/services/maintenance-agreements',
    blurb: 'Stay on schedule, reduce emergencies, and stretch the life of your system with a routine service plan.',
    tag: 'STAY AHEAD',
  },
];

const reviews = [
  { name: 'Ashley B.', text: 'Quick, efficient, and so helpful. Answered every question I had.' },
  { name: 'Jared F.', text: 'A Wesco has been doing our septic work for 9 years. Always on time, always professional.' },
  { name: 'Jess T.', text: 'Explained my whole system and set me on the right maintenance schedule.' },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-bone-100 py-16 text-ink-900 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6">

        {/* Section header */}
        <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ink-900" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-wider2 text-ink-700">
                / SERVICES · WHAT WE DO
              </span>
            </div>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tightest text-ink-900 sm:text-5xl lg:text-7xl">
              Five Things.<br />
              <span className="text-hi-700">Done Right.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-ink-700">
              Septic work isn&rsquo;t glamorous, but it has to be done correctly the first time.
              We&rsquo;ve been doing it across Snohomish, King County, and Camano Island for over 35 years.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-px bg-ink-900 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className={`group relative bg-bone-100 p-8 transition-colors duration-200 hover:bg-ink-900 hover:text-bone-200 lg:p-10 ${
                i === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-wider2 text-ink-500 group-hover:text-hi">
                  / {s.n}
                </span>
                <span className="border border-ink-500/30 px-2 py-1 font-mono text-[9px] uppercase tracking-wider2 text-ink-700 group-hover:border-hi group-hover:text-hi">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-10 font-display text-3xl uppercase leading-tight tracking-tight text-ink-900 group-hover:text-bone-200 lg:text-4xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-700 group-hover:text-bone-300">
                {s.blurb}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-ink-900 group-hover:text-hi">
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </div>
            </Link>
          ))}

          {/* Emergency card */}
          <div className="bg-hi p-8 text-ink-900 lg:p-10">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs tracking-wider2">/ ER</span>
              <span className="border border-ink-900/30 px-2 py-1 font-mono text-[9px] uppercase tracking-wider2">
                LIVE
              </span>
            </div>
            <h3 className="mt-10 font-display text-3xl uppercase leading-tight tracking-tight lg:text-4xl">
              Backup at 2 a.m.?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-900/80">
              We pick up the phone. 24/7 emergency dispatch across all three counties.
            </p>
            <a
              href="tel:3606686561"
              className="mt-8 inline-flex items-center gap-2 font-display text-2xl uppercase tracking-wider hover:underline"
            >
              360.668.6561
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          {/* Reviews card — fills the empty 7th slot */}
          <div className="bg-ink-900 p-8 text-bone-200 lg:col-span-2 lg:p-10">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs tracking-wider2 text-hi">/ REVIEWS</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-hi text-hi" />
                ))}
              </div>
            </div>
            <div className="mt-4 font-display text-4xl uppercase leading-none tracking-tightest text-hi">
              4.8★
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider2 text-bone-400 mt-1">
              400+ Google Reviews
            </div>

            {/* Mini review quotes */}
            <ul className="mt-6 space-y-4 border-t border-bone-400/15 pt-6">
              {reviews.map((r, i) => (
                <li key={i} className="text-sm">
                  <p className="text-bone-300 leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider2 text-hi">— {r.name}</p>
                </li>
              ))}
            </ul>

            <a
              href="https://www.google.com/search?q=A+Wesco+Septic+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-hi hover:underline"
            >
              Read All Reviews
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
