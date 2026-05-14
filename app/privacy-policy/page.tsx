import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | A Wesco Septic',
  description: 'Privacy policy and terms for awescoseptic.com.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="relative bg-ink-900 pb-12 pt-14">
          <div className="absolute left-0 top-0 h-1 w-full bg-hi" aria-hidden />
          <div className="mx-auto max-w-[900px] px-6">
            <p className="eyebrow mb-4">/ Legal</p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest text-bone-200 sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wider2 text-bone-400">
              Last Updated: May 1, 2026
            </p>
          </div>
        </section>

        <section className="bg-bone-100 py-16 text-ink-900">
          <div className="mx-auto max-w-[900px] px-6 prose prose-sm sm:prose-base max-w-none">
            <div className="space-y-8 text-sm leading-relaxed text-ink-700 sm:text-base">
              <div>
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink-900 mb-3">1. Information We Collect</h2>
                <p>When you submit a form on awescoseptic.com, we collect the information you provide — including your name, phone number, email address, service address, and the nature of your service request. We may also automatically collect your IP address, browser type, and pages visited through standard web analytics tools.</p>
              </div>
              <div>
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink-900 mb-3">2. How We Use Your Information</h2>
                <p>We use the information you provide to respond to your service requests, schedule appointments, send appointment reminders, and communicate about your septic system. We do not sell your personal information to third parties.</p>
              </div>
              <div>
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink-900 mb-3">3. Google Analytics & Advertising</h2>
                <p>We use Google Tag Manager and Google Analytics to understand how visitors use our website. We may also use Google Ads conversion tracking. These tools may use cookies to collect data. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.</p>
              </div>
              <div>
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink-900 mb-3">4. Cookies</h2>
                <p>Our website uses cookies for analytics and advertising purposes. You can control cookie settings through your browser preferences. Disabling cookies may affect some functionality of the site.</p>
              </div>
              <div>
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink-900 mb-3">5. Data Retention</h2>
                <p>We retain your contact information and service history for as long as you are a customer of A Wesco Septic. You may request deletion of your data at any time by contacting us at csr@awescoseptic.com.</p>
              </div>
              <div>
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink-900 mb-3">6. Contact Us</h2>
                <p>If you have questions about this privacy policy, contact us at:</p>
                <p className="mt-2">
                  <strong>A Wesco Septic, Inc.</strong><br />
                  16607 SR 9 SE, Snohomish, WA 98296<br />
                  <a href="tel:3606686561" className="text-hi-700 hover:underline">(360) 668-6561</a><br />
                  <a href="mailto:csr@awescoseptic.com" className="text-hi-700 hover:underline">csr@awescoseptic.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
