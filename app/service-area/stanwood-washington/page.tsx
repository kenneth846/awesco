import type { Metadata } from 'next';
import { CITIES } from '@/src/data/cities';
import CityPageTemplate from '@/components/CityPageTemplate';

const city = CITIES['stanwood-washington'];

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  openGraph: {
    title: city.metaTitle,
    description: city.metaDescription,
    type: 'website',
  },
};

export default function Page() {
  return <CityPageTemplate city={city} />;
}
