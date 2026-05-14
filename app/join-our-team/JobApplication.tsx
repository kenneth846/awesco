'use client';

import { useState, useRef, useId, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Upload, CheckCircle, Phone, ArrowRight,
  Truck, Wrench, Clock, Users, X, FileText
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const POSITIONS = [
  'Septic Technician',
  'CDL Driver / Operator',
  'Service Technician (Non-CDL)',
  'Field Apprentice',
  'Office / Customer Service',
  'Other',
];

const EXPERIENCE_OPTIONS = [
  'No experience — willing to train',
  '1–2 years',
  '3–5 years',
  '5–10 years',
  '10+ years',
];

const PERKS = [
  { icon: Truck, title: 'Modern Equipment', body: 'New trucks, well-maintained gear — you won\'t spend your day fighting bad equipment.' },
  { icon: Users, title: 'Family Culture', body: 'Second-generation family business. We treat our crew the same way we treat our customers.' },
  { icon: Wrench, title: 'Learn the Trade', body: 'We train from the ground up. No septic experience required for entry-level positions.' },
  { icon: Clock, title: 'Stable Work', body: 'Septic services are essential year-round. We\'ve been busy for 35+ years and that\'s not changing.' },
];

export default function JoinOurTeamPage() {
  const uid = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  const ALLOWED = ['application/pdf', 'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
  const MAX_MB = 5;

  function validateFile(file: File): string | null {
    if (!ALLOWED.includes(file.type)) return 'Please upload a PDF, Word (.doc/.docx), or .txt file.';
    if (file.size > MAX_MB * 1024 * 1024) return `File must be under ${MAX_MB}MB.`;
    return null;
  }

  function handleFileSelect(file: File) {
    const err = validateFile(file);
    if (err) { setFileError(err); setResumeFile(null); return; }
    setFileError('');
    setResumeFile(file);
  }

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    if (resumeFile) fd.append('resume', resumeFile, resumeFile.name);

    try {
      const res = await fetch('/api/submit-application', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error ?? 'Submission failed.');
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink-900 pb-12 pt-10 text-bone-200 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-20">
          <div className="absolute inset-0 z-0">
            <Image src="/hero-bg.webp" alt="Awesco Septic fleet" fill priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(31,41,55,0.72) 0%, rgba(31,41,55,0.85) 100%)' }}
            />
            <div className="absolute inset-0 hidden lg:block"
              style={{ background: 'linear-gradient(105deg, rgba(31,41,55,0.88) 0%, rgba(31,41,55,0.68) 55%, rgba(31,41,55,0.45) 100%)' }}
            />
          </div>
          <div className="bg-grid-dark absolute inset-0 z-[1] opacity-20" aria-hidden />
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[380px] w-[380px] rotate-12 bg-hi opacity-90 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
            <nav className="mb-5 flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
              <Link href="/" className="hover:text-hi transition-colors">Home</Link>
              <span className="opacity-40">›</span>
              <span className="text-hi">Join Our Team</span>
            </nav>
            <p className="eyebrow mb-3">/ Careers at A Wesco Septic</p>
            <h1
              className="font-display uppercase leading-[0.88] tracking-tightest text-bone-200"
              style={{ fontSize: 'clamp(42px, 10vw, 100px)' }}
            >
              <span className="block">WORK WITH</span>
              <span className="block text-hi">THE BEST</span>
              <span className="block text-bone-400">CREW.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-bone-300 sm:text-base lg:text-lg">
              A Wesco Septic has been a cornerstone of the Snohomish community since 1989.
              We&rsquo;re always looking for hardworking, reliable people to join our team —
              whether you&rsquo;re an experienced technician or starting from scratch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-hi px-6 py-3.5 font-display text-lg uppercase tracking-wider text-ink-900 transition-all hover:-translate-y-0.5 sm:px-7 sm:py-4 sm:text-xl"
                onClick={e => { e.preventDefault(); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:3606686561"
                className="inline-flex items-center gap-2 rounded-full border border-bone-200/40 px-6 py-3.5 font-display text-lg uppercase tracking-wider text-bone-200 transition-all hover:border-hi hover:text-hi sm:px-7 sm:py-4 sm:text-xl"
              >
                <Phone className="h-4 w-4" />
                Call Us First
              </a>
            </div>
          </div>
        </section>

        {/* ── WHY WORK HERE ───────────────────────────────────────────────── */}
        <section className="bg-bone-100 py-14 text-ink-900 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-ink-900" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500 sm:text-[11px]">
                  / Why A Wesco
                </span>
              </div>
              <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl">
                A Place Worth<br />
                <span className="text-hi-700">Showing Up To.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
              {PERKS.map((p, i) => (
                <div key={i} className="bg-bone-100 p-6 transition-colors hover:bg-bone-200 sm:p-8">
                  <p.icon className="mb-4 h-7 w-7 text-hi-700" />
                  <h3 className="font-display text-xl uppercase leading-tight tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="mt-10 grid grid-cols-2 gap-px bg-ink-900/10 sm:grid-cols-4">
              {[
                { n: '1989', l: 'Founded' },
                { n: '35+', l: 'Years in Business' },
                { n: '3', l: 'Counties Served' },
                { n: '24/7', l: 'We Operate' },
              ].map(s => (
                <div key={s.l} className="bg-ink-900 px-6 py-8">
                  <div className="font-display text-4xl leading-none tracking-tightest text-hi sm:text-5xl">{s.n}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-wider2 text-bone-400 sm:text-[11px]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLICATION FORM ────────────────────────────────────────────── */}
        <section id="apply" className="bg-ink-800 py-14 sm:py-20">
          <div className="mx-auto max-w-[900px] px-5 sm:px-6">

            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div className="flex flex-col items-center gap-6 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-hi bg-hi/10">
                  <CheckCircle className="h-10 w-10 text-hi" />
                </div>
                <h2 className="font-display text-4xl uppercase leading-tight tracking-tightest text-bone-200 sm:text-5xl">
                  Application Received!
                </h2>
                <p className="max-w-md text-base leading-relaxed text-bone-300">
                  Thanks for your interest in joining the A Wesco Septic team. We&rsquo;ll
                  review your application and be in touch soon. If you have questions,
                  call us at{' '}
                  <a href="tel:3606686561" className="font-bold text-hi hover:underline">
                    (360) 668-6561
                  </a>.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-bone-400/30 px-6 py-3.5 font-display text-lg uppercase tracking-wider text-bone-200 hover:border-hi hover:text-hi transition-all"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-hi" aria-hidden />
                    <span className="eyebrow">/ Apply Today</span>
                  </div>
                  <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest text-bone-200 sm:text-5xl">
                    Send Us Your<br />
                    <span className="text-hi">Application.</span>
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-bone-300 sm:text-base">
                    Fill out the form below and attach your resume if you have one.
                    No resume? No problem — just tell us about yourself in the message box.
                    We&rsquo;ll get back to you within one business day.
                  </p>
                </div>

                {/* Form card */}
                <div className="relative border-2 border-hi bg-ink-900">
                  {/* Corner ticks */}
                  <div className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-hi/50" aria-hidden />
                  <div className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-hi/50" aria-hidden />
                  <div className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-hi/50" aria-hidden />
                  <div className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-hi/50" aria-hidden />

                  {/* Form header */}
                  <div className="bg-hi px-6 py-4 sm:px-8">
                    <p className="font-mono text-[10px] uppercase tracking-wider2 text-ink-900/70">
                      Free · No Obligation
                    </p>
                    <h3 className="font-display text-2xl uppercase leading-tight tracking-tight text-ink-900 sm:text-3xl">
                      Job Application
                    </h3>
                    <p className="mt-1 font-mono text-[11px] text-ink-900/70">
                      Goes directly to <span className="font-bold">csr@awescoseptic.com</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 sm:p-8" noValidate>

                    {/* Name row */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={`${uid}-fn`} className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                          First Name *
                        </label>
                        <input id={`${uid}-fn`} name="firstName" type="text" required
                          placeholder="Jane" className="form-input" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={`${uid}-ln`} className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                          Last Name *
                        </label>
                        <input id={`${uid}-ln`} name="lastName" type="text" required
                          placeholder="Smith" className="form-input" />
                      </div>
                    </div>

                    {/* Contact row */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={`${uid}-ph`} className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                          Phone Number *
                        </label>
                        <input id={`${uid}-ph`} name="phone" type="tel" required
                          placeholder="(360) 555-1234" className="form-input" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={`${uid}-em`} className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                          Email Address *
                        </label>
                        <input id={`${uid}-em`} name="email" type="email" required
                          placeholder="jane@example.com" className="form-input" />
                      </div>
                    </div>

                    {/* Position + experience */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={`${uid}-pos`} className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                          Position of Interest
                        </label>
                        <select id={`${uid}-pos`} name="position" defaultValue="" className="form-input">
                          <option value="">Select a position…</option>
                          {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={`${uid}-exp`} className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                          Years of Experience
                        </label>
                        <select id={`${uid}-exp`} name="experience" defaultValue="" className="form-input">
                          <option value="">Select…</option>
                          {EXPERIENCE_OPTIONS.map(e => <option key={e} value={e}>{e}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Cover letter / message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor={`${uid}-msg`} className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                        Tell Us About Yourself
                      </label>
                      <textarea
                        id={`${uid}-msg`}
                        name="message"
                        rows={5}
                        placeholder="A bit about your background, why you're interested, availability, CDL status — whatever feels relevant."
                        className="form-input resize-none"
                        style={{ borderRadius: 10 }}
                      />
                    </div>

                    {/* Resume upload */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                        Resume / CV
                        <span className="ml-2 font-mono text-[9px] normal-case text-bone-400">
                          PDF, Word, or TXT · Max 5MB · Optional
                        </span>
                      </label>

                      {resumeFile ? (
                        /* File selected state */
                        <div className="flex items-center justify-between gap-4 border-2 border-hi bg-hi/5 px-5 py-4" style={{ borderRadius: 10 }}>
                          <div className="flex items-center gap-3 min-w-0">
                            <FileText className="h-5 w-5 shrink-0 text-hi" />
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium text-bone-200">{resumeFile.name}</p>
                              <p className="font-mono text-[10px] text-bone-400">
                                {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => { setResumeFile(null); setFileError(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                            className="shrink-0 rounded-full p-1.5 text-bone-400 transition-colors hover:bg-ink-700 hover:text-bone-200"
                            aria-label="Remove resume"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        /* Drop zone */
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                          onDragLeave={() => setDragOver(false)}
                          onDrop={onDrop}
                          role="button"
                          tabIndex={0}
                          onKeyDown={e => e.key === 'Enter' && fileInputRef.current?.click()}
                          aria-label="Upload resume — click or drag and drop"
                          className={`flex cursor-pointer flex-col items-center justify-center gap-3 border-2 border-dashed px-6 py-8 text-center transition-all ${
                            dragOver
                              ? 'border-hi bg-hi/10'
                              : 'border-bone-400/25 hover:border-hi/50 hover:bg-ink-800'
                          }`}
                          style={{ borderRadius: 10 }}
                        >
                          <Upload className={`h-8 w-8 ${dragOver ? 'text-hi' : 'text-bone-400'}`} />
                          <div>
                            <p className="text-sm font-medium text-bone-200">
                              Drop your resume here, or{' '}
                              <span className="text-hi underline underline-offset-2">click to browse</span>
                            </p>
                            <p className="mt-1 font-mono text-[10px] text-bone-400">
                              PDF · Word (.doc, .docx) · TXT · Max 5MB
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Hidden file input */}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
                        className="sr-only"
                        onChange={e => {
                          const file = e.target.files?.[0];
                          if (file) handleFileSelect(file);
                        }}
                        aria-hidden="true"
                        tabIndex={-1}
                      />

                      {fileError && (
                        <p className="font-mono text-[11px] text-red-400">{fileError}</p>
                      )}
                    </div>

                    {error && (
                      <div className="border border-red-500/40 bg-red-500/10 px-5 py-4 text-sm text-red-400" style={{ borderRadius: 10 }}>
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        backgroundColor: '#39FF14',
                        color: '#1F2937',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        width: '100%',
                        fontFamily: 'var(--font-display), "Bebas Neue", system-ui',
                        fontSize: 22,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        padding: '16px 24px',
                        border: 'none',
                        borderRadius: 10,
                        cursor: submitting ? 'not-allowed' : 'pointer',
                        opacity: submitting ? 0.6 : 1,
                        minHeight: 58,
                        transition: 'background-color 0.15s, transform 0.1s',
                      }}
                      onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2DD60E'; }}
                      onMouseLeave={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#39FF14'; }}
                    >
                      {submitting ? 'Sending Application…' : (
                        <>
                          Submit Application
                          <ArrowRight style={{ width: 20, height: 20, flexShrink: 0 }} />
                        </>
                      )}
                    </button>

                    <p className="text-center font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
                      Goes directly to our team · We respond within 1 business day
                    </p>
                  </form>
                </div>

                {/* Prefer to call? */}
                <div className="mt-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-6">
                  <p className="font-mono text-[11px] uppercase tracking-wider2 text-bone-400">
                    Prefer to talk to someone?
                  </p>
                  <a
                    href="tel:3606686561"
                    className="inline-flex items-center gap-2 font-display text-xl uppercase tracking-wider text-hi hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    (360) 668-6561
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
