import Link from 'next/link';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

const serviceLinks = [
  { label: 'Septic Tank Pumping', href: '/services/septic-tank-pumping' },
  { label: 'Septic Inspections', href: '/services/septic-inspections' },
  { label: 'Septic Repairs', href: '/services/septic-repairs' },
  { label: 'Drain Field Repair', href: '/services/septic-drainfield-repair' },
  { label: 'Maintenance Agreements', href: '/services/maintenance-agreements' },
];

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'As-Built Drawings', href: '/as-built' },
  { label: 'Blog', href: '/blog' },
  { label: 'Join Our Team', href: '/join-our-team' },
  { label: 'Contact Us', href: '/contact-us' },
];

const countyLinks = [
  { label: 'Snohomish County Septic', href: '/service-area/snohomish-washington' },
  { label: 'King County Septic', href: '/service-area/bellevue' },
  { label: 'Camano Island Septic', href: '/service-area/camano-island-washington' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-bone-200">
      {/* Hi-vis stripe top edge */}
      <div className="h-1 w-full bg-hi" />

      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo className="h-10 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-bone-400">
              Second-generation, family-owned septic services for Snohomish County, King County,
              and Camano Island since 1989.
            </p>

            <ul className="mt-8 space-y-3 font-mono text-sm">
              <li>
                <a
                  href="tel:3606686561"
                  className="flex items-center gap-3 text-bone-300 transition-colors hover:text-hi"
                >
                  <Phone className="h-4 w-4 shrink-0 text-hi" />
                  (360) 668-6561
                </a>
              </li>
              <li>
                <a
                  href="mailto:csr@awescoseptic.com"
                  className="flex items-center gap-3 text-bone-300 transition-colors hover:text-hi"
                >
                  <Mail className="h-4 w-4 shrink-0 text-hi" />
                  csr@awescoseptic.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=16607+SR+9+SE+Snohomish+WA+98296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-bone-300 transition-colors hover:text-hi"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-hi" />
                  <span>
                    16607 SR 9 SE<br />
                    Snohomish, WA 98296
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-display text-sm uppercase tracking-wider2 text-hi">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-bone-400 transition-colors hover:text-bone-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-display text-sm uppercase tracking-wider2 text-hi">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-bone-400 transition-colors hover:text-bone-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-5 font-display text-sm uppercase tracking-wider2 text-hi">
              Service Areas
            </h3>
            <ul className="mb-4 space-y-2.5">
              {countyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-bone-400 transition-colors hover:text-bone-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#service-areas"
              className="mt-2 font-mono text-xs uppercase tracking-wider2 text-hi hover:underline"
            >
              View all 36 cities →
            </Link>

            {/* 24/7 badge */}
            <div className="mt-8 inline-block border border-hi/30 bg-ink-800 px-4 py-3">
              <div className="font-mono text-[9px] uppercase tracking-wider2 text-bone-400">
                Emergency Line
              </div>
              <div className="mt-1 font-display text-2xl text-hi">24/7</div>
              <a href="tel:3606686561" className="mt-1 block font-mono text-sm text-bone-200 hover:text-hi">
                (360) 668-6561
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="seam mt-14" role="separator" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider2 text-bone-400">
          <span>© {year} A Wesco Septic, Inc. All Rights Reserved.</span>
          <Link href="/privacy-policy" className="hover:text-bone-200">
            Privacy Policy &amp; Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
