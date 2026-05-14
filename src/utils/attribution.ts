// ─── Attribution persistence ──────────────────────────────────────────────────
// Stores first-touch and latest-touch attribution in localStorage for 90 days.
// Mirrors the logic from the old landing-page project exactly.
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'awesco_attribution';
const EXPIRY_DAYS = 90;

export interface AttributionData {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  ad_group?: string;
  keyword_theme?: string;
  landing_page_path?: string;
  original_landing_url?: string;
  referrer?: string;
  first_visit_timestamp?: string;
  latest_visit_timestamp?: string;
}

interface Stored {
  first_touch: Partial<AttributionData>;
  latest_touch: Partial<AttributionData>;
  expiry: number;
}

function read(): Stored | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: Stored = JSON.parse(raw);
    if (Date.now() > parsed.expiry) { localStorage.removeItem(STORAGE_KEY); return null; }
    return parsed;
  } catch { return null; }
}

function write(data: Stored): void {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { /* quota exceeded */ }
}

function fromUrl(): Partial<AttributionData> {
  if (typeof window === 'undefined') return {};
  const p = new URLSearchParams(window.location.search);
  const now = new Date().toISOString();
  return {
    gclid: p.get('gclid') || undefined,
    gbraid: p.get('gbraid') || undefined,
    wbraid: p.get('wbraid') || undefined,
    utm_source: p.get('utm_source') || undefined,
    utm_medium: p.get('utm_medium') || undefined,
    utm_campaign: p.get('utm_campaign') || undefined,
    utm_term: p.get('utm_term') || undefined,
    utm_content: p.get('utm_content') || undefined,
    ad_group: p.get('ad_group') || undefined,
    keyword_theme: p.get('keyword_theme') || undefined,
    landing_page_path: window.location.pathname,
    original_landing_url: window.location.href,
    referrer: document.referrer || undefined,
    latest_visit_timestamp: now,
  };
}

function hasAdParams(a: Partial<AttributionData>): boolean {
  return !!(a.gclid || a.gbraid || a.wbraid || a.utm_source || a.utm_medium || a.utm_campaign);
}

export function captureAndPersistAttribution(): void {
  const current = fromUrl();
  const stored = read();
  const expiry = Date.now() + EXPIRY_DAYS * 86_400_000;

  if (!stored) {
    write({ first_touch: { ...current, first_visit_timestamp: current.latest_visit_timestamp }, latest_touch: current, expiry });
    return;
  }

  if (hasAdParams(current)) {
    stored.latest_touch = current;
    stored.expiry = expiry;
  } else {
    stored.latest_touch = { ...stored.latest_touch, latest_visit_timestamp: current.latest_visit_timestamp };
  }
  write(stored);
}

export function getPersistedAttribution(): Partial<AttributionData> {
  const current = fromUrl();
  const stored = read();
  if (hasAdParams(current)) return current;
  if (!stored) return current;
  return { ...stored.first_touch, ...stored.latest_touch, ...current };
}
