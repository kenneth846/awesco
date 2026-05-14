import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb { label: string; href?: string; }

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  crumbs: Crumb[];
}

export default function ServiceHero({ eyebrow, title, subtitle, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-14 pt-12 lg:pb-20 lg:pt-16">
      {/* Grid texture */}
      <div className="bg-grid-dark absolute inset-0 opacity-40" aria-hidden />
      {/* Hi-vis accent bar — top edge */}
      <div className="absolute left-0 top-0 h-1 w-full bg-hi" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 opacity-40" />}
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-hi">{c.label}</Link>
              ) : (
                <span className="text-hi">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-3xl">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h1 className="font-display text-5xl uppercase leading-[0.88] tracking-tightest text-bone-200 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-300 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
