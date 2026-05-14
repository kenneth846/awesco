import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import ContactForm from '@/components/ContactForm';
import HeroLeadForm from '@/components/HeroLeadForm';

export const metadata: Metadata = {
  title: 'Contact Us | A Wesco Septic',
  description: 'Contact A Wesco Septic for septic pumping, inspections, repairs, and 24/7 emergency service in Snohomish County, King County, and Camano Island. Call (360) 668-6561.',
  alternates: { canonical: '/contact-us' },
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(360) 668-6561',
    href: 'tel:3606686561',
    sub: '24/7 Emergency Line',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'csr@awescoseptic.com',
    href: 'mailto:csr@awescoseptic.com',
    sub: 'We respond within 1 business hour',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '16607 SR 9 SE, Snohomish, WA 98296',
    href: 'https://maps.google.com/?q=16607+SR+9+SE+Snohomish+WA+98296',
    sub: 'Serving Snohomish, King & Camano Island',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri: 8am–5pm',
    href: null,
    sub: '24/7 Emergency service available',
  },
];

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 pb-16 pt-14 lg:pb-20 lg:pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/canyon-hero.webp"
              alt="Awesco Septic team member at the Grand Canyon"
              fill
              priority
              className="object-cover object-bottom"
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(31,41,55,0.62) 0%, rgba(31,41,55,0.78) 100%)' }} />
            <div className="absolute inset-0 hidden lg:block" style={{ background: 'linear-gradient(105deg, rgba(31,41,55,0.78) 0%, rgba(31,41,55,0.58) 50%, rgba(31,41,55,0.38) 100%)' }} />
          </div>
          <div className="bg-grid-dark absolute inset-0 z-[1] opacity-20" aria-hidden />
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[340px] w-[340px] rotate-12 bg-hi opacity-90 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">
              <div>
                <p className="eyebrow mb-4">/ Get In Touch</p>
                <h1
                  className="font-display uppercase leading-[0.85] tracking-tightest text-bone-200"
                  style={{ fontSize: 'clamp(52px, 8vw, 100px)' }}
                >
                  <span className="block">CONTACT</span>
                  <span className="block text-hi">A WESCO</span>
                  <span className="block text-bone-400">SEPTIC.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-300">
                  For emergencies, call us directly at{' '}
                  <a href="tel:3606686561" className="font-bold text-hi hover:underline">(360) 668-6561</a>
                  {' '}— we answer 24/7. For non-urgent requests, fill out the form here.
                </p>
              </div>
              <div className="w-full self-start">
                <HeroLeadForm slug="contact-us" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact info cards */}
        <section className="bg-ink-800">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-px bg-bone-400/10 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map(item => (
                <div key={item.label} className="bg-ink-800 p-8">
                  <item.icon className="h-6 w-6 text-hi mb-4" />
                  <div className="font-mono text-[10px] uppercase tracking-wider2 text-bone-400 mb-1">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-display text-lg uppercase tracking-tight text-bone-200 hover:text-hi transition-colors block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-display text-lg uppercase tracking-tight text-bone-200">{item.value}</div>
                  )}
                  <div className="mt-1 font-mono text-[10px] text-bone-400">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full contact form */}
        <ContactForm />

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
