'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'As-Built', href: '/as-built' },
  { label: 'About', href: '/about-us' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-bone-400/10 bg-ink-900/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
        <Link href="/" aria-label="A Wesco Septic — home" className="flex-shrink-0">
          <Logo className="h-9 w-auto sm:h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[15px] uppercase tracking-wider text-bone-200 transition-colors hover:text-hi"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-hi px-6 py-3 font-display text-sm uppercase tracking-wider text-ink-900 transition-all hover:-translate-y-0.5">
            Schedule Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile right side — phone link + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:3606686561"
            className="flex items-center gap-1.5 rounded-full bg-hi px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-ink-900"
            aria-label="Call A Wesco Septic"
          >
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>
          <button
            className="rounded-lg border border-bone-400/20 p-2 text-bone-200 transition-colors hover:border-hi hover:text-hi"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="border-t border-bone-400/10 bg-ink-800 lg:hidden"
          aria-label="Mobile primary"
        >
          <ul className="mx-auto flex max-w-[1400px] flex-col divide-y divide-bone-400/10 px-5">
            {navItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-lg uppercase tracking-wider text-bone-200 hover:text-hi"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 opacity-40" />
                </Link>
              </li>
            ))}
            <li className="py-4">
              <a
                href="tel:3606686561"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-hi py-4 font-display text-xl uppercase tracking-wider text-ink-900"
              >
                <Phone className="h-5 w-5" />
                (360) 668-6561
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
