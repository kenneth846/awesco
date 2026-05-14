'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  'Septic Tank Pumping',
  'Septic Inspection',
  'Septic Repair',
  'Septic Drain Field Repair',
  'Maintenance Agreement',
  'Something Else',
];

interface Props {
  defaultCity?: string;
}

export default function ContactForm({ defaultCity }: Props) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production this wires to your backend / CRM.
    // For now just show confirmation so the prototype feels real.
    setSent(true);
  }

  return (
    <section id="contact" className="relative bg-ink-800 py-24 text-bone-200 lg:py-32">
      <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left: header */}
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-hi" aria-hidden />
              <span className="eyebrow">/ CONTACT · GET IN TOUCH</span>
            </div>
            <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest sm:text-6xl">
              Send a
              <br />
              <span className="text-hi">message.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-bone-400">
              Fill out the form and we&rsquo;ll get back to you promptly. For emergencies, call us
              directly — 24/7.
            </p>

            <div className="mt-10 space-y-4 font-mono text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-wider2 text-hi">PHONE</div>
                <a href="tel:3606686561" className="text-bone-200 hover:text-hi">
                  (360) 668-6561
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider2 text-hi">EMAIL</div>
                <a href="mailto:csr@awescoseptic.com" className="text-bone-200 hover:text-hi">
                  csr@awescoseptic.com
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider2 text-hi">OFFICE</div>
                <span className="text-bone-300">
                  16607 SR 9 SE<br />
                  Snohomish, WA 98296
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 lg:col-start-6">
            {sent ? (
              <div className="flex h-full min-h-[340px] flex-col items-center justify-center gap-6 border border-hi/30 bg-ink-900 p-12 text-center">
                <CheckCircle className="h-12 w-12 text-hi" />
                <h3 className="font-display text-4xl uppercase tracking-tight text-hi">
                  Message received.
                </h3>
                <p className="max-w-sm text-bone-400">
                  We&rsquo;ll be in touch shortly. For urgent matters call{' '}
                  <a href="tel:3606686561" className="text-bone-200 hover:text-hi">
                    (360) 668-6561
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                noValidate
              >
                {/* Name row */}
                <div className="flex flex-col gap-1.5">
                  <label className="eyebrow" htmlFor="firstName">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="border border-bone-400/20 bg-ink-900 px-4 py-3 font-body text-sm text-bone-200 placeholder-bone-400/40 transition-colors focus:border-hi focus:outline-none"
                    placeholder="Jane"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="eyebrow" htmlFor="lastName">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="border border-bone-400/20 bg-ink-900 px-4 py-3 font-body text-sm text-bone-200 placeholder-bone-400/40 transition-colors focus:border-hi focus:outline-none"
                    placeholder="Smith"
                  />
                </div>

                {/* Phone + Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="eyebrow" htmlFor="phone">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="border border-bone-400/20 bg-ink-900 px-4 py-3 font-body text-sm text-bone-200 placeholder-bone-400/40 transition-colors focus:border-hi focus:outline-none"
                    placeholder="(360) 555-1234"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="eyebrow" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border border-bone-400/20 bg-ink-900 px-4 py-3 font-body text-sm text-bone-200 placeholder-bone-400/40 transition-colors focus:border-hi focus:outline-none"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="eyebrow" htmlFor="address">
                    Service Address *
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    className="border border-bone-400/20 bg-ink-900 px-4 py-3 font-body text-sm text-bone-200 placeholder-bone-400/40 transition-colors focus:border-hi focus:outline-none"
                    placeholder="123 Main St, Snohomish, WA"
                  />
                </div>

                {/* Service select */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="eyebrow" htmlFor="service">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="border border-bone-400/20 bg-ink-900 px-4 py-3 font-body text-sm text-bone-200 transition-colors focus:border-hi focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="eyebrow" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="border border-bone-400/20 bg-ink-900 px-4 py-3 font-body text-sm text-bone-200 placeholder-bone-400/40 transition-colors focus:border-hi focus:outline-none"
                    placeholder="Tell us a bit about your system or issue…"
                  />
                </div>

                {/* Consent */}
                <div className="flex gap-3 sm:col-span-2">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 border border-bone-400/30 bg-ink-900 accent-hi"
                  />
                  <label htmlFor="consent" className="text-xs leading-relaxed text-bone-400">
                    I consent to receive messages from A Wesco Septic, including appointment
                    reminders and service updates. Message frequency may vary and message/data
                    rates may apply.
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-hi w-full sm:w-auto">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
