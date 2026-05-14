'use client';

import { useState, useRef } from 'react';
import { MapPin, CheckCircle, XCircle, Phone, ArrowRight } from 'lucide-react';

// All zip codes Awesco services — sourced from Google Ads geo data
const SERVICED_ZIPS = new Set([
  '98004','98005','98006','98007','98008','98011','98012','98014',
  '98019','98020','98021','98024','98026','98027','98028','98029',
  '98033','98034','98036','98037','98039','98043','98052','98053',
  '98072','98074','98075','98077','98087','98133','98155','98177',
  '98201','98203','98204','98207','98208','98223','98241','98251',
  '98252','98258','98270','98271','98272','98275','98282','98290',
  '98292','98294','98296',
]);

// Zip → city name for nicer messaging
const ZIP_CITIES: Record<string, string> = {
  '98004':'Bellevue','98005':'Bellevue','98006':'Bellevue','98007':'Bellevue',
  '98008':'Bellevue','98011':'Bothell','98012':'Bothell','98014':'Carnation',
  '98019':'Duvall','98020':'Edmonds','98021':'Bothell','98024':'Fall City',
  '98026':'Edmonds','98027':'Issaquah','98028':'Kenmore','98029':'Issaquah',
  '98033':'Kirkland','98034':'Kirkland','98036':'Lynnwood','98037':'Lynnwood',
  '98039':'Mercer Island','98043':'Mountlake Terrace','98052':'Redmond',
  '98053':'Redmond','98072':'Woodinville','98074':'Sammamish','98075':'Sammamish',
  '98077':'Woodinville','98087':'Lynnwood','98133':'Seattle (Shoreline area)',
  '98155':'Shoreline','98177':'Shoreline','98201':'Everett','98203':'Everett',
  '98204':'Everett','98207':'Everett','98208':'Everett','98223':'Arlington',
  '98241':'Granite Falls','98251':'Gold Bar','98252':'Granite Falls',
  '98258':'Lake Stevens','98270':'Marysville','98271':'Marysville',
  '98272':'Monroe','98275':'Mukilteo','98282':'Camano Island / Stanwood',
  '98290':'Snohomish','98292':'Stanwood','98294':'Sultan','98296':'Snohomish (HQ)',
};

type Result = 'yes' | 'no' | null;

function extractZip(input: string): string | null {
  const cleaned = input.trim();
  // Direct 5-digit zip
  const zipMatch = cleaned.match(/\b(\d{5})\b/);
  if (zipMatch) return zipMatch[1];
  return null;
}

export default function ServiceAreaChecker() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<Result>(null);
  const [checkedZip, setCheckedZip] = useState('');
  const [checkedCity, setCheckedCity] = useState('');
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function check() {
    const zip = extractZip(value);
    if (!zip) {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      inputRef.current?.focus();
      return;
    }
    const serves = SERVICED_ZIPS.has(zip);
    setCheckedZip(zip);
    setCheckedCity(ZIP_CITIES[zip] || '');
    setResult(serves ? 'yes' : 'no');
  }

  function reset() {
    setValue('');
    setResult(null);
    setCheckedZip('');
    setCheckedCity('');
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  return (
    <section className="relative bg-ink-800 py-14 sm:py-20" id="service-area-check">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-hi" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-hi sm:text-[11px]">
                / Service Area Check
              </span>
            </div>
            <h2 className="font-display text-3xl uppercase leading-[0.9] tracking-tightest text-bone-200 sm:text-4xl lg:text-5xl">
              Do We Service<br />
              <span className="text-hi">Your Area?</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-bone-400 sm:text-right">
            Enter your zip code to find out instantly. We serve Snohomish County,
            King County, and Camano Island.
          </p>
        </div>

        {/* Checker card */}
        <div className="relative border border-hi/20 bg-ink-900">
          {/* Corner ticks */}
          <div className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-hi/40" aria-hidden />
          <div className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-hi/40" aria-hidden />
          <div className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-hi/40" aria-hidden />
          <div className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-hi/40" aria-hidden />

          <div className="p-6 sm:p-8">

            {result === null && (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3">
                <div className="flex flex-1 flex-col gap-2">
                  <label
                    htmlFor="zip-check"
                    className="font-mono text-[10px] uppercase tracking-wider2 text-hi"
                  >
                    Your Zip Code *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-bone-400" />
                    <input
                      ref={inputRef}
                      id="zip-check"
                      type="text"
                      inputMode="numeric"
                      maxLength={5}
                      value={value}
                      onChange={e => {
                        setValue(e.target.value.replace(/\D/g, '').slice(0, 5));
                        setResult(null);
                      }}
                      onKeyDown={e => e.key === 'Enter' && check()}
                      placeholder="e.g. 98290"
                      className={`form-input pl-10 transition-all ${shaking ? 'animate-shake border-red-500' : ''}`}
                      style={{ fontSize: 16 }}
                      aria-label="Enter your zip code to check service availability"
                    />
                  </div>
                </div>
                <button
                  onClick={check}
                  disabled={value.length < 5}
                  style={{
                    backgroundColor: value.length >= 5 ? '#39FF14' : undefined,
                    color: value.length >= 5 ? '#1F2937' : undefined,
                    opacity: value.length >= 5 ? 1 : 0.45,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-display), "Bebas Neue", system-ui',
                    fontSize: 20,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    padding: '13px 28px',
                    border: 'none',
                    borderRadius: 10,
                    cursor: value.length >= 5 ? 'pointer' : 'not-allowed',
                    minHeight: 54,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transition: 'background-color 0.15s',
                  }}
                >
                  Check My Zip
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </button>
              </div>
            )}

            {/* YES — we service your area */}
            {result === 'yes' && (
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex flex-col items-center gap-2 sm:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-hi bg-hi/10 sm:h-20 sm:w-20">
                    <CheckCircle className="h-8 w-8 text-hi sm:h-10 sm:w-10" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                      ✓ Yes! We service this area
                    </div>
                    <h3 className="mt-1 font-display text-2xl uppercase leading-tight tracking-tightest text-bone-200 sm:text-3xl">
                      {checkedCity || `ZIP ${checkedZip}`}
                      {checkedCity && (
                        <span className="ml-2 font-mono text-base font-normal text-bone-400">
                          {checkedZip}
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone-300">
                      Great news — A Wesco Septic serves your area. We&rsquo;re a
                      second-generation family-owned company based in Snohomish, WA
                      with 35+ years of experience. Give us a call or request a free quote below.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
                    <a
                      href="tel:3606686561"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-hi px-6 py-3.5 font-display text-lg uppercase tracking-wider text-ink-900 transition-all hover:-translate-y-0.5 sm:text-xl"
                    >
                      <Phone className="h-4 w-4" />
                      (360) 668-6561
                    </a>
                    <a
                      href="#lead-form"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-hi/40 px-6 py-3.5 font-display text-lg uppercase tracking-wider text-bone-200 transition-all hover:border-hi hover:text-hi sm:text-xl"
                      onClick={e => {
                        e.preventDefault();
                        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get a Free Quote
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <button
                    onClick={reset}
                    className="self-start font-mono text-[10px] uppercase tracking-wider2 text-bone-400 underline underline-offset-4 hover:text-bone-200"
                  >
                    Check another zip
                  </button>
                </div>
              </div>
            )}

            {/* NO — outside service area */}
            {result === 'no' && (
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex flex-col items-center gap-2 sm:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-bone-400/30 bg-ink-800 sm:h-20 sm:w-20">
                    <XCircle className="h-8 w-8 text-bone-400 sm:h-10 sm:w-10" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
                      ZIP {checkedZip} — Outside our current service area
                    </div>
                    <h3 className="mt-1 font-display text-2xl uppercase leading-tight tracking-tightest text-bone-200 sm:text-3xl">
                      Not Sure? Call Us Anyway.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone-300">
                      We primarily serve Snohomish County, King County, and Camano Island.
                      If you&rsquo;re just outside our listed area, give us a call — we may
                      still be able to help, especially for larger jobs or if you&rsquo;re
                      close to our service boundary.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:3606686561"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-700 px-6 py-3.5 font-display text-lg uppercase tracking-wider text-bone-200 transition-all hover:bg-ink-600 sm:text-xl"
                    >
                      <Phone className="h-4 w-4" />
                      Call Anyway
                    </a>
                  </div>
                  <button
                    onClick={reset}
                    className="self-start font-mono text-[10px] uppercase tracking-wider2 text-bone-400 underline underline-offset-4 hover:text-bone-200"
                  >
                    Try a different zip
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Coverage summary strip */}
          {result === null && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hi/10 px-6 py-4 sm:px-8">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-hi" />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
                  Snohomish County
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-hi" />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
                  King County
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-hi" />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
                  Camano Island
                </span>
              </div>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
                51 zip codes served
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
