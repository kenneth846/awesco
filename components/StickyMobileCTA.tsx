'use client';

import { useEffect, useState } from 'react';
import { Phone, ClipboardList } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { trackClickToCall, trackScheduleServiceClick } from '@/src/utils/analytics';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  function handleQuote() {
    trackScheduleServiceClick('sticky_mobile_cta');

    // 1. If there's a lead form on this page, scroll to it
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // 2. If there's a contact section, scroll to it
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // 3. Navigate to contact page
    window.location.href = '/contact-us';
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-500 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* Hi-vis top border */}
      <div className="h-[2px] w-full bg-hi" />

      <div className="grid grid-cols-2 bg-ink-900">
        {/* Call Now */}
        <a
          href="tel:3606686561"
          onClick={() => trackClickToCall('(360) 668-6561', 'sticky_mobile')}
          className="flex flex-col items-center justify-center gap-1 bg-ink-800 py-3.5 transition-colors active:bg-ink-700"
          style={{ minHeight: 60 }}
        >
          <Phone className="h-5 w-5 text-hi" />
          <span className="font-display text-sm uppercase tracking-wider text-hi leading-none">
            Call Now
          </span>
          <span className="font-mono text-[9px] text-bone-400 leading-none">
            (360) 668-6561
          </span>
        </a>

        {/* Get a Quote */}
        <button
          onClick={handleQuote}
          className="flex flex-col items-center justify-center gap-1 bg-hi py-3.5 transition-all active:brightness-90"
          style={{ minHeight: 60 }}
        >
          <ClipboardList className="h-5 w-5 text-ink-900" />
          <span className="font-display text-sm uppercase tracking-wider text-ink-900 leading-none">
            Get a Quote
          </span>
          <span className="font-mono text-[9px] text-ink-900/60 leading-none">
            Free · No Obligation
          </span>
        </button>
      </div>
    </div>
  );
}
