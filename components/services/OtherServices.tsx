import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ALL_SERVICES = [
  { title: 'Septic Tank Pumping', href: '/services/septic-tank-pumping', tag: 'Most Requested' },
  { title: 'Septic Inspections', href: '/services/septic-inspections', tag: 'Real Estate' },
  { title: 'Septic Repairs', href: '/services/septic-repairs', tag: 'Full Scope' },
  { title: 'Drain Field Repair', href: '/services/septic-drainfield-repair', tag: 'Restoration' },
  { title: 'Maintenance Agreements', href: '/services/maintenance-agreements', tag: 'Stay Ahead' },
];

export default function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = ALL_SERVICES.filter(s => s.href !== `/services/${currentSlug}`);
  return (
    <section className="border-t border-bone-400/10 bg-ink-900 py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-hi" aria-hidden />
          <span className="eyebrow">/ OTHER SERVICES</span>
        </div>
        <div className="grid grid-cols-1 gap-px bg-bone-400/10 sm:grid-cols-2 lg:grid-cols-4">
          {others.map(s => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col justify-between bg-ink-900 p-6 transition-colors hover:bg-ink-800"
            >
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider2 text-bone-400 group-hover:text-hi">
                  {s.tag}
                </span>
                <h3 className="mt-3 font-display text-xl uppercase leading-tight tracking-tight text-bone-200 group-hover:text-hi">
                  {s.title}
                </h3>
              </div>
              <ArrowUpRight className="mt-6 h-4 w-4 text-bone-400 transition-transform group-hover:rotate-12 group-hover:text-hi" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
