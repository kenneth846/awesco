import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Check, ArrowRight, Star, Calendar, Shield, TrendingDown } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Septic Maintenance Memberships | A Wesco Septic',
  description: 'A Wesco Septic membership plans keep your septic system on schedule with automatic reminders, priority service, and discounted rates. Snohomish, King County, Camano Island.',
  alternates: { canonical: '/memberships' },
};

const perks = [
  { icon: Calendar, title: 'Automatic Scheduling', body: 'We track your service history and reach out when you\'re due. No calendar reminders needed on your end.' },
  { icon: Star, title: 'Priority Service', body: 'Members get priority scheduling — both for routine service and emergency calls throughout the year.' },
  { icon: TrendingDown, title: 'Discounted Rates', body: 'Members receive preferred pricing on all scheduled services and discounts on any additional repairs needed.' },
  { icon: Shield, title: 'System History Tracking', body: 'We keep a complete record of every service visit — useful for real estate disclosures and warranty questions.' },
];

const included = [
  'Scheduled routine pump-outs on your custom interval (typically every 2–3 years)',
  'Complimentary system inspection with every service visit',
  'Priority scheduling for both routine and emergency service calls',
  'Automatic service reminders — we contact you when you\'re due',
  'Complete service history maintained on file',
  'Discounted rates on routine service visits',
  'Preferred pricing on any additional repairs needed between visits',
];

export default function MembershipsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20">
          {/* Business card / brand image background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/memberships-hero.webp"
              alt="Awesco Septic branding"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(31,41,55,0.62) 0%, rgba(31,41,55,0.78) 100%)' }}
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{ background: 'linear-gradient(105deg, rgba(31,41,55,0.80) 0%, rgba(31,41,55,0.60) 50%, rgba(31,41,55,0.40) 100%)' }}
            />
          </div>
          <div className="bg-grid-dark absolute inset-0 z-[1] opacity-20" aria-hidden />
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[340px] w-[340px] rotate-12 bg-hi opacity-90 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
            <p className="eyebrow mb-4">/ Memberships & Service Plans</p>
            <h1
              className="font-display uppercase leading-[0.85] tracking-tightest text-bone-200"
              style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}
            >
              <span className="block">SET IT.</span>
              <span className="block text-hi">FORGET IT.</span>
              <span className="block text-bone-400">PROTECT IT.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-300">
              A Wesco membership means your septic system is always on schedule — without you having to
              think about it. We track your history, remind you when you&rsquo;re due, and show up when
              it&rsquo;s time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:3606686561" className="inline-flex items-center gap-2 bg-hi px-7 py-4 font-display text-lg uppercase tracking-wider text-ink-900 hover:-translate-y-0.5 transition-all">
                <Phone className="h-5 w-5" />
                Call to Enroll
              </a>
              <a href="#contact-form" className="inline-flex items-center gap-2 border border-bone-400/30 px-7 py-4 font-display text-lg uppercase tracking-wider text-bone-200 hover:border-hi hover:text-hi transition-all rounded-full">
                Request Info
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="bg-bone-100 py-20 text-ink-900 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ink-900" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">Membership Benefits</span>
              </div>
              <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest sm:text-6xl">
                Why Members<br />
                <span className="text-hi-700">Love It.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map((p, i) => (
                <div key={i} className="bg-bone-100 p-8 hover:bg-bone-200 transition-colors">
                  <p.icon className="h-8 w-8 text-hi-700 mb-4" />
                  <h3 className="font-display text-xl uppercase leading-tight tracking-tight mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-700">{p.body}</p>
                </div>
              ))}
            </div>

            {/* What's included list */}
            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest mb-6">
                  What&rsquo;s<br /><span className="text-hi-700">Included.</span>
                </h2>
                <ul className="space-y-3">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-hi-700" />
                      <span className="text-sm leading-relaxed text-ink-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-2 border-hi bg-ink-900 p-8 text-bone-200 self-start">
                <div className="font-mono text-[10px] uppercase tracking-wider2 text-hi mb-2">Ready to Enroll?</div>
                <h3 className="font-display text-3xl uppercase leading-tight tracking-tight mb-4">
                  Call us to set up your plan.
                </h3>
                <p className="text-sm leading-relaxed text-bone-400 mb-6">
                  Every membership is customized to your system, household size, and usage. We&rsquo;ll 
                  assess your needs and build a plan that fits. There&rsquo;s no one-size-fits-all — 
                  because no two septic systems are alike.
                </p>
                <a
                  href="tel:3606686561"
                  className="flex items-center gap-2 bg-hi px-6 py-4 font-display text-xl uppercase tracking-wider text-ink-900 hover:-translate-y-0.5 transition-all w-full justify-center"
                >
                  <Phone className="h-5 w-5" />
                  (360) 668-6561
                </a>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
                  Mon–Fri 8am–5pm · 24/7 Emergency
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="contact-form">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
