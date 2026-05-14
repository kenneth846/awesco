'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureAndPersistAttribution } from '@/src/utils/attribution';
import { trackPageView } from '@/src/utils/analytics';

/**
 * Mounted in the root layout — invisible, runs two things on every navigation:
 * 1. Captures UTM / GCLID params to localStorage (90-day first-touch + latest-touch)
 * 2. Fires a virtual_page_view to the GTM dataLayer (replaces WordPress pageview)
 */
export default function AttributionCapture() {
  const pathname = usePathname();

  useEffect(() => {
    captureAndPersistAttribution();
    trackPageView(pathname, document.title, document.referrer);
  }, [pathname]);

  return null;
}
