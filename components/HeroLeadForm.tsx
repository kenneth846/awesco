'use client';

import { useState, useEffect, useRef, useId } from 'react';
import { CheckCircle, Phone } from 'lucide-react';
import {
  trackLeadFormView,
  trackLeadFormStart,
  trackFormSubmitAttempt,
  trackFormSubmitError,
  trackFormSubmitSuccess,
} from '@/src/utils/analytics';
import { getPersistedAttribution } from '@/src/utils/attribution';
import SubmitButton from '@/components/SubmitButton';

const SUPABASE_URL = 'https://ltuvrhgabkajmcrliotv.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0dXZyaGdhYmtham1jcmxpb3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTYxMTQsImV4cCI6MjA4OTUzMjExNH0.z0en3IMEtsALr8Q83d3d_iee39yoywU8lAe5w8pdbIg';

const SERVICES = [
  'Septic Tank Pumping',
  'Septic Inspection',
  'Septic Repair',
  'Drain Field Repair',
  'Maintenance Agreement',
  'Emergency Service',
  'Something Else',
];

interface Props {
  slug?: string;
  defaultService?: string;
}

export default function HeroLeadForm({ slug = 'home', defaultService = '' }: Props) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [started, setStarted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  useEffect(() => { trackLeadFormView(slug, defaultService); }, [slug, defaultService]);

  function onFirstInteraction() {
    if (started) return;
    setStarted(true);
    trackLeadFormStart(slug, defaultService);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError('');
    const fd = new FormData(e.currentTarget);
    const firstName = (fd.get('firstName') as string).trim();
    const lastName  = (fd.get('lastName') as string).trim();
    const phone     = (fd.get('phone') as string).trim();
    const email     = (fd.get('email') as string).trim();
    const address   = (fd.get('address') as string).trim();
    const service   = (fd.get('service') as string).trim();
    const serviceType = service || defaultService || 'General Inquiry';

    trackFormSubmitAttempt(slug, serviceType);
    setSubmitting(true);
    const attribution = getPersistedAttribution();

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/submit-lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          phone, email, address,
          service_needed: serviceType,
          preferred_contact: 'phone',
          landing_page_slug: slug,
          page_url: window.location.href,
          referrer: document.referrer || '',
          gclid: attribution.gclid ?? '',
          gbraid: attribution.gbraid ?? '',
          wbraid: attribution.wbraid ?? '',
          utm_source: attribution.utm_source ?? '',
          utm_medium: attribution.utm_medium ?? '',
          utm_campaign: attribution.utm_campaign ?? '',
          utm_term: attribution.utm_term ?? '',
          utm_content: attribution.utm_content ?? '',
          ad_group: attribution.ad_group ?? '',
          keyword_theme: attribution.keyword_theme ?? '',
          landing_page_path: attribution.landing_page_path ?? '',
          original_landing_url: attribution.original_landing_url ?? '',
          first_visit_timestamp: attribution.first_visit_timestamp ?? '',
          latest_visit_timestamp: attribution.latest_visit_timestamp ?? '',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error ?? 'Submission failed');

      trackFormSubmitSuccess({
        slug, serviceType,
        leadId: data.leadId,
        firstName, lastName, email, phone, address,
        attribution: attribution as Record<string, string>,
      });
      setSent(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again or call us directly.';
      setFormError(msg);
      trackFormSubmitError(slug, msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div ref={formRef} id="lead-form" className="relative border-2 border-hi bg-ink-800">
      {/* Corner ticks */}
      <div className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-hi/60" aria-hidden />
      <div className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-hi/60" aria-hidden />
      <div className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-hi/60" aria-hidden />
      <div className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-hi/60" aria-hidden />

      {/* Header strip — solid hi-vis green */}
      <div className="bg-hi px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider2 text-ink-900/70">
              Free · No Obligation
            </p>
            <h2 className="font-display text-2xl uppercase leading-tight tracking-tight text-ink-900">
              Get a Quote Today
            </h2>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 animate-flicker rounded-full bg-ink-900" />
              <span className="font-mono text-[9px] uppercase tracking-wider2 text-ink-900/80">
                Available Now
              </span>
            </div>
            <a
              href="tel:3606686561"
              className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-ink-900 transition-opacity hover:opacity-70"
            >
              <Phone className="h-3.5 w-3.5" />
              (360) 668-6561
            </a>
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="px-6 py-6">
        {sent ? (
          <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
            <CheckCircle className="h-12 w-12 text-hi" />
            <h3 className="font-display text-3xl uppercase tracking-tight text-hi">
              We&apos;ll Be In Touch!
            </h3>
            <p className="text-sm text-bone-400">
              For urgent issues call us at{' '}
              <a href="tel:3606686561" className="font-bold text-bone-200 hover:text-hi">
                (360) 668-6561
              </a>
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            onFocus={onFirstInteraction}
            className="flex flex-col gap-4"
            noValidate
          >
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={`${uid}-fn`}
                  className="font-mono text-[10px] uppercase tracking-wider2 text-hi"
                >
                  First Name *
                </label>
                <input
                  id={`${uid}-fn`}
                  name="firstName"
                  type="text"
                  required
                  placeholder="Jane"
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={`${uid}-ln`}
                  className="font-mono text-[10px] uppercase tracking-wider2 text-hi"
                >
                  Last Name *
                </label>
                <input
                  id={`${uid}-ln`}
                  name="lastName"
                  type="text"
                  required
                  placeholder="Smith"
                  className="form-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`${uid}-ph`}
                className="font-mono text-[10px] uppercase tracking-wider2 text-hi"
              >
                Phone Number *
              </label>
              <input
                id={`${uid}-ph`}
                name="phone"
                type="tel"
                required
                placeholder="(360) 555-1234"
                className="form-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`${uid}-em`}
                className="font-mono text-[10px] uppercase tracking-wider2 text-hi"
              >
                Email Address *
              </label>
              <input
                id={`${uid}-em`}
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                className="form-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`${uid}-addr`}
                className="font-mono text-[10px] uppercase tracking-wider2 text-hi"
              >
                Service Address *
              </label>
              <input
                id={`${uid}-addr`}
                name="address"
                type="text"
                required
                placeholder="123 Main St, Snohomish, WA"
                className="form-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`${uid}-svc`}
                className="font-mono text-[10px] uppercase tracking-wider2 text-hi"
              >
                Service Needed *
              </label>
              <select
                id={`${uid}-svc`}
                name="service"
                required
                defaultValue={defaultService}
                className="form-input cursor-pointer"
              >
                <option value="" disabled={!defaultService}>Select a service…</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {formError && (
              <div className="border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {formError}
              </div>
            )}

            {/* Submit — solid filled, no clip-path games, always visible */}
            <SubmitButton submitting={submitting} />

            <p className="text-center font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
              No spam · Response within 1 business hour
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
