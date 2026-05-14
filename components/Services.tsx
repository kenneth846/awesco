import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';

const services = [
  {
    n: '01',
    title: 'Septic Tank Pumping',
    href: '/services/septic-tank-pumping',
    blurb: 'Routine pumping every 2–3 years keeps your system healthy and prevents costly backups. Every pump includes a complimentary inspection.',
    tag: 'MOST REQUESTED',
    image: '/hero-bg.webp',
    imageAlt: 'A Wesco septic pumping trucks ready for service',
    imagePosition: 'object-center',
  },
  {
    n: '02',
    title: 'Septic System Inspections',
    href: '/services/septic-inspections',
    blurb: 'Routine, real-estate, and pre-purchase inspections. We catch problems early — and document everything you need for escrow.',
    tag: 'REAL ESTATE',
    image: '/service-septic-inspections.webp',
    imageAlt: 'Technician documenting a septic system inspection',
    imagePosition: 'object-center',
  },
  {
    n: '03',
    title: 'Septic Repairs',
    href: '/services/septic-repairs',
    blurb: 'Jetting, line repairs, and advanced electrical work. We handle the full range of septic system repairs and maintenance.',
    tag: 'FULL SCOPE',
    image: '/service-septic-repairs.webp',
    imageAlt: 'Septic repair work in a residential yard',
    imagePosition: 'object-center',
  },
  {
    n: '04',
    title: 'Drain Field Repair',
    href: '/services/septic-drainfield-repair',
    blurb: 'Soggy ground, standing water, slow drains? We diagnose and restore failing drain fields throughout the region.',
    tag: 'RESTORATION',
    image: '/service-drain-field.jpg',
    imageAlt: 'Drain field installation with pipe and gravel',
    imagePosition: 'object-center',
  },
  {
    n: '05',
    title: 'Maintenance Agreements',
    href: '/services/maintenance-agreements',
    blurb: 'Stay on schedule, reduce emergencies, and stretch the life of your system with a routine service plan.',
    tag: 'STAY AHEAD',
    image: '/service-maintenance-agreement.webp',
    imageAlt: 'A Wesco maintenance agreement graphic',
    imagePosition: 'object-center',
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
              className={`group relative isolate flex min-h-[330px] flex-col justify-between overflow-hidden bg-ink-900 p-8 text-bone-200 transition-transform duration-300 hover:-translate-y-0.5 lg:p-10 ${
                i === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                className={`${s.imagePosition} object-cover transition-transform duration-700 group-hover:scale-105`}
                sizes={i === 0 ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
              />
              <div className="absolute inset-0 bg-ink-900/55 transition-colors duration-300 group-hover:bg-ink-900/45" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/55 to-ink-900/25" aria-hidden />

              <div className="relative z-10 flex items-start justify-between">
                <span className="font-mono text-xs tracking-wider2 text-hi">
                  / {s.n}
                </span>
                <span className="border border-bone-200/30 bg-ink-900/25 px-2 py-1 font-mono text-[9px] uppercase tracking-wider2 text-bone-200 backdrop-blur-sm transition-colors group-hover:border-hi group-hover:text-hi">
                  {s.tag}
                </span>
              </div>

              <div className="relative z-10 mt-14">
                <h3 className="font-display text-3xl uppercase leading-tight tracking-tight text-bone-100 lg:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-bone-200/90">
                  {s.blurb}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-hi">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </div>
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
