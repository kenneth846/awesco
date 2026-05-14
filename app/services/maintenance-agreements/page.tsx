import type { Metadata } from 'next';
import { SERVICES } from '@/src/data/services';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

const service = SERVICES['maintenance-agreements'];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: service.canonicalPath },
};

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
