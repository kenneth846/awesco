import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex min-h-[70vh] items-center bg-ink-900 text-bone-200">
        <div className="bg-grid-dark absolute inset-0 opacity-30 pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 text-center">
          <div className="font-display text-[160px] leading-none tracking-tightest text-hi opacity-10 select-none" aria-hidden>
            404
          </div>
          <div className="-mt-16 relative">
            <p className="eyebrow justify-center mb-4">/ Page Not Found</p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest sm:text-7xl">
              This Page<br />
              <span className="text-hi">Doesn&rsquo;t Exist.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-bone-300 max-w-md mx-auto">
              The page you&rsquo;re looking for isn&rsquo;t here. Head back home or give us a call — 
              we answer 24/7.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-hi px-7 py-4 font-display text-lg uppercase tracking-wider text-ink-900 hover:-translate-y-0.5 transition-all"
              >
                Back to Home
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:3606686561"
                className="inline-flex items-center gap-2 border border-bone-400/30 px-7 py-4 font-display text-lg uppercase tracking-wider text-bone-200 hover:border-hi hover:text-hi transition-all rounded-full"
              >
                <Phone className="h-5 w-5" />
                (360) 668-6561
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
