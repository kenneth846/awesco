import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, FileText, MapPin, ArrowRight, Check } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'As-Built Septic Drawings | A Wesco Septic',
  description: 'Need your as-built septic drawing for a home sale, permit, or repair? A Wesco Septic can help locate your system records in Snohomish County, King County, and Camano Island.',
  alternates: { canonical: '/as-built' },
};

const faqs = [
  {
    q: 'What is an as-built septic drawing?',
    a: 'An as-built (or record) drawing is a document that shows the location, layout, and dimensions of your septic system as it was actually installed. It shows tank location, drain field, and distances from structures.',
  },
  {
    q: 'Why do I need one?',
    a: 'As-builts are commonly required for home sales, refinancing, permits for additions or outbuildings, and when locating your system for pumping, repairs, or inspections.',
  },
  {
    q: 'Where can I find my as-built?',
    a: 'As-built records are typically filed with your county health department. In Snohomish County, records are held by Snohomish County Environmental Health. We can help you locate your records or obtain them from the county.',
  },
  {
    q: 'What if my county doesn\'t have a record?',
    a: 'Older systems, especially those installed before the 1970s, may not have filed as-builts. In those cases, we can locate your system in the field and create a drawing for you.',
  },
  {
    q: 'Can you locate my septic system if I don\'t know where it is?',
    a: 'Yes. We have equipment and experience to locate septic tanks and system components. Once located, we can document the position and produce a drawing.',
  },
];

export default function AsBuiltPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20">
          {/* Blueprint-style as-built drawing as background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/asbuilt-hero.webp"
              alt="Example as-built septic drawing"
              fill
              priority
              className="opacity-75 object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(31,41,55,0.30) 0%, rgba(31,41,55,0.48) 100%)' }}
            />
          </div>
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[340px] w-[340px] rotate-12 bg-hi opacity-90 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
            <p className="eyebrow mb-4">/ As-Built Drawings</p>
            <h1
              className="font-display uppercase leading-[0.85] tracking-tightest text-bone-200"
              style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}
            >
              <span className="block">AS-BUILT</span>
              <span className="block text-hi">SEPTIC</span>
              <span className="block text-bone-400">RECORDS.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-300">
              Need to find your septic system records for a home sale, permit, or repair?
              We can help you locate your as-built drawing or create one if it doesn&rsquo;t exist.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:3606686561" className="inline-flex items-center gap-2 bg-hi px-7 py-4 font-display text-lg uppercase tracking-wider text-ink-900 hover:-translate-y-0.5 transition-all">
                <Phone className="h-5 w-5" />
                (360) 668-6561
              </a>
            </div>
          </div>
        </section>

        {/* Info section */}
        <section className="bg-bone-100 py-20 text-ink-900 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-ink-900" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">What We Can Help With</span>
                </div>
                <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl">
                  Know Where<br />
                  <span className="text-hi-700">Your System Is.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-700">
                  Many homeowners don&rsquo;t know where their septic system components are located
                  until they need to find them — often at the worst possible time. Having your as-built
                  drawing on hand saves time, money, and stress.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Locate your existing as-built records from county files',
                    'Field-locate your septic system if no records exist',
                    'Create a new as-built drawing based on field measurements',
                    'Provide documentation for home sales and permits',
                    'Answer questions about your system layout and components',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-hi-700" />
                      <span className="text-sm leading-relaxed text-ink-800 sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* County resource links */}
                <div className="mt-10 border border-ink-900/10 bg-bone-200 p-6">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-wider2 text-ink-500">County Resources</div>
                  <div className="space-y-3">
                    <a href="https://snohomishcountywa.gov/2188/Environmental-Health" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-ink-900 hover:text-hi-700 transition-colors">
                      <MapPin className="h-4 w-4 text-hi-700 shrink-0" />
                      Snohomish County Environmental Health
                    </a>
                    <a href="https://kingcounty.gov/depts/health/environmental-health/onsite-sewage.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-ink-900 hover:text-hi-700 transition-colors">
                      <MapPin className="h-4 w-4 text-hi-700 shrink-0" />
                      King County Environmental Health — Onsite Sewage
                    </a>
                    <a href="https://www.islandcountywa.gov/Health/EH/Pages/OnSite-Sewage.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-ink-900 hover:text-hi-700 transition-colors">
                      <MapPin className="h-4 w-4 text-hi-700 shrink-0" />
                      Island County Environmental Health (Camano Island)
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="lg:col-span-5 lg:col-start-8">
                <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest mb-6">Common Questions</h2>
                <div className="space-y-0 border-t border-ink-900/10">
                  {faqs.map((f, i) => (
                    <div key={i} className="border-b border-ink-900/10 py-5">
                      <h3 className="font-display text-base uppercase tracking-tight text-ink-900 flex items-start gap-3">
                        <span className="font-mono text-[10px] text-hi-700 mt-1 shrink-0">/0{i + 1}</span>
                        {f.q}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700 pl-8">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
