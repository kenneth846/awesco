import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceAreaChecker from '@/components/ServiceAreaChecker';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import ServiceAreas from '@/components/ServiceAreas';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export const metadata: Metadata = {
  title: 'Septic Tank Services | Snohomish | A Wesco Septic',
  description:
    'A Wesco Septic, Inc. — second-generation family-owned septic services in Snohomish County, King County, and Camano Island since 1989. Septic tank pumping, inspections, repairs, drain field repair, and 24/7 emergency service.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0"> {/* space for sticky mobile bar */}
        <Hero />
        <Marquee />
        <Services />
        <ServiceAreaChecker />
        <WhyUs />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
      {/* Mobile-only sticky CTA bar — slides up 600ms after load */}
      <StickyMobileCTA />
    </>
  );
}
