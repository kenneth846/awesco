// ─── A Wesco Septic — Analytics & Tracking ───────────────────────────────────
// GTM Container : GTM-T8H4WLLN
// Supabase URL  : https://ltuvrhgabkajmcrliotv.supabase.co
// All events pushed to window.dataLayer for GTM to consume.
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(event: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

// ── Page tracking ─────────────────────────────────────────────────────────────
export function trackPageView(path: string, title: string, referrer?: string): void {
  push({
    event: 'virtual_page_view',
    page_location: window.location.href,
    page_path: path,
    page_title: title,
    page_referrer: referrer,
  });
}

// ── Phone clicks ──────────────────────────────────────────────────────────────
export function trackClickToCall(phoneNumber: string, location = 'unknown'): void {
  push({ event: 'click_to_call', phone_number: phoneNumber, location });
}

// ── Lead form lifecycle ───────────────────────────────────────────────────────
export function trackLeadFormView(slug: string, serviceType?: string): void {
  push({ event: 'lead_form_view', landing_page_slug: slug, service_type: serviceType });
}

export function trackLeadFormStart(slug: string, serviceType?: string): void {
  push({ event: 'lead_form_start', landing_page_slug: slug, service_type: serviceType });
}

export function trackFormSubmitAttempt(slug: string, serviceType: string): void {
  push({ event: 'lead_form_submit_attempt', landing_page_slug: slug, service_type: serviceType });
}

export function trackFormSubmitError(slug: string, error: string): void {
  push({ event: 'lead_form_submit_error', landing_page_slug: slug, error_message: error });
}

// ── Normalise phone to E.164 for enhanced conversions ─────────────────────────
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return phone;
}

export function generateLeadEventId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// ── Success — fires the conversion with full enhanced-conversion user_data ─────
export function trackFormSubmitSuccess(opts: {
  slug: string;
  serviceType: string;
  leadId?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  preferred_contact?: string;
  attribution?: Record<string, string>;
}): void {
  const leadEventId = generateLeadEventId();

  push({
    event: 'lead_form_submit_success',
    lead_event_id: leadEventId,
    lead_id: opts.leadId,
    service_type: opts.serviceType,
    landing_page_slug: opts.slug,
    page_location: window.location.href,
    page_path: window.location.pathname,
    form_completion_method: 'form',
    preferred_contact: opts.preferred_contact ?? 'phone',
    // Attribution fields for Google Ads
    gclid: opts.attribution?.gclid || undefined,
    gbraid: opts.attribution?.gbraid || undefined,
    wbraid: opts.attribution?.wbraid || undefined,
    utm_source: opts.attribution?.utm_source || undefined,
    utm_medium: opts.attribution?.utm_medium || undefined,
    utm_campaign: opts.attribution?.utm_campaign || undefined,
    utm_term: opts.attribution?.utm_term || undefined,
    utm_content: opts.attribution?.utm_content || undefined,
    ad_group: opts.attribution?.ad_group || undefined,
    keyword_theme: opts.attribution?.keyword_theme || undefined,
    // Enhanced conversions — Google Ads hashes this server-side
    user_data: {
      email: opts.email.trim().toLowerCase(),
      phone_number: normalizePhone(opts.phone),
      address: {
        first_name: opts.firstName,
        last_name: opts.lastName,
        street: opts.address?.trim() || undefined,
        region: 'WA',
        country: 'US',
      },
    },
  });

  // Dedup guard — prevents double-fire if user refreshes
  try {
    sessionStorage.setItem('awesco_lead_conversion_fired', leadEventId);
  } catch { /* storage blocked */ }
}

export function trackThankYouView(): void {
  const path = window.location.pathname;
  const key = `awesco_thank_you_view_fired_${path}`;
  try {
    const last = sessionStorage.getItem(key);
    const current = sessionStorage.getItem('awesco_lead_conversion_fired');
    if (last && last === current) return;
    if (current) sessionStorage.setItem(key, current);
  } catch { /* storage blocked */ }
  push({ event: 'thank_you_view', page_location: window.location.href, page_path: window.location.pathname });
}

export function trackScheduleServiceClick(location: string): void {
  push({ event: 'schedule_service_click', location });
}
