import { CITIES } from './cities';

export interface ServiceAreaMapCity {
  slug: string;
  name: string;
  county: string;
  /** Geographic city/service-area center used for future map work. */
  lat: number;
  lng: number;
  /** Current SVG placement, aligned to the existing county-boundary artwork. */
  x: number;
  y: number;
  label?: string;
  labelDx?: number;
  labelDy?: number;
  labelAnchor?: 'start' | 'middle' | 'end';
  featured?: boolean;
}

function city(
  slug: string,
  lat: number,
  lng: number,
  x: number,
  y: number,
  options: Partial<Pick<ServiceAreaMapCity, 'label' | 'labelDx' | 'labelDy' | 'labelAnchor' | 'featured'>> = {}
): ServiceAreaMapCity {
  const cityData = CITIES[slug];

  if (!cityData) {
    throw new Error(`Missing service area content for ${slug}`);
  }

  return {
    slug,
    name: cityData.name,
    county: cityData.county,
    lat,
    lng,
    x,
    y,
    labelDx: 6,
    labelDy: 3,
    labelAnchor: 'start',
    ...options,
  };
}

export const SERVICE_AREA_MAP_CITIES: ServiceAreaMapCity[] = [
  city('snohomish-washington', 47.9129, -122.0982, 244, 261, { featured: true, labelDx: 14, labelDy: -4 }),
  city('everett-washington', 47.9790, -122.2021, 185, 228, { featured: true, labelDx: 7, labelDy: 4 }),
  city('lake-stevens-washington', 48.0151, -122.0637, 242, 220, { label: 'Lake Stevens', labelDx: 7, labelDy: -4 }),
  city('marysville-washington', 48.0518, -122.1771, 185, 209, { labelDx: -7, labelDy: -5, labelAnchor: 'end' }),
  city('monroe-washington', 47.8554, -121.9710, 305, 276, { featured: true, labelDx: 7, labelDy: 4 }),
  city('mukilteo-washington', 47.9445, -122.3046, 141, 249, { labelDx: -7, labelDy: 4, labelAnchor: 'end' }),
  city('arlington-washington', 48.1987, -122.1251, 182, 167, { featured: true, labelDx: 7, labelDy: 4 }),
  city('granite-falls-washington', 48.0840, -121.9687, 276, 195, { label: 'Granite Falls', labelDx: 7, labelDy: -4 }),
  city('stanwood-washington', 48.2412, -122.3715, 72, 143, { labelDx: 7, labelDy: 4 }),
  city('sultan-washington', 47.8626, -121.8165, 374, 272, { labelDx: 7, labelDy: -4 }),
  city('goldbar-washington', 47.8568, -121.6971, 430, 273, { label: 'Gold Bar', labelDx: -7, labelDy: 4, labelAnchor: 'end' }),
  city('tulalip-washington', 48.0684, -122.2915, 131, 204, { labelDx: -7, labelDy: -4, labelAnchor: 'end' }),
  city('mill-creek-washington', 47.8601, -122.2043, 197, 278, { label: 'Mill Creek', labelDx: 7, labelDy: 10 }),
  city('bothell-washington', 47.7623, -122.2054, 210, 313, { labelDx: 8, labelDy: 13 }),
  city('edmonds-washington', 47.8107, -122.3774, 125, 297, { labelDx: -7, labelDy: -5, labelAnchor: 'end' }),
  city('lynnwood-washington', 47.8209, -122.3151, 152, 293, { labelDx: -7, labelDy: 9, labelAnchor: 'end' }),
  city('mountlake-terrace-washington', 47.7882, -122.3087, 159, 305, { label: 'M. Terrace', labelDx: -7, labelDy: 12, labelAnchor: 'end' }),
  city('shoreline-washington', 47.7557, -122.3415, 148, 317, { labelDx: -7, labelDy: 4, labelAnchor: 'end' }),
  city('bellevue', 47.6101, -122.2015, 237, 349, { featured: true, labelDx: -7, labelDy: 4, labelAnchor: 'end' }),
  city('kirkland-washington', 47.6769, -122.2060, 229, 329, { featured: true, labelDx: 7, labelDy: -5 }),
  city('kenmore-washington', 47.7573, -122.2440, 193, 315, { labelDx: -7, labelDy: -5, labelAnchor: 'end' }),
  city('redmond-washington', 47.6740, -122.1215, 268, 336, { featured: true, labelDx: 7, labelDy: 4 }),
  city('sammamish-washington', 47.6163, -122.0356, 306, 363, { labelDx: 7, labelDy: -4 }),
  city('mercer-island-washington', 47.5707, -122.2221, 227, 381, { label: 'Mercer Is.', labelDx: 7, labelDy: 12 }),
  city('issaquah-washington', 47.5301, -122.0326, 308, 392, { featured: true, labelDx: 7, labelDy: 4 }),
  city('carnation-washington', 47.6479, -121.9140, 357, 350, { labelDx: 7, labelDy: -4 }),
  city('duvall-washington', 47.7423, -121.9857, 313, 317, { labelDx: 7, labelDy: -4 }),
  city('fall-city-washington', 47.5673, -121.8887, 379, 378, { label: 'Fall City', labelDx: 7, labelDy: -4 }),
  city('preston-washington', 47.5248, -121.9279, 367, 394, { labelDx: 7, labelDy: 12 }),
  city('renton-washington', 47.4829, -122.2171, 237, 445, { featured: true, labelDx: 7, labelDy: 4 }),
  city('seattle-washington', 47.6062, -122.3321, 163, 370, { featured: true, labelDx: 7, labelDy: 4 }),
  city('seatac-washington', 47.4502, -122.3088, 203, 426, { label: 'SeaTac', labelDx: -7, labelDy: 13, labelAnchor: 'end' }),
  city('burien-washington', 47.4704, -122.3468, 183, 419, { labelDx: -7, labelDy: 4, labelAnchor: 'end' }),
  city('tukwila-washington', 47.4748, -122.2721, 216, 416, { labelDx: 7, labelDy: -5 }),
  city('woodinville-washington', 47.7543, -122.1635, 230, 315, { labelDx: 7, labelDy: -5 }),
  city('camano-island-washington', 48.1740, -122.5282, 96, 148, { label: 'Camano Island', featured: true, labelDx: -7, labelDy: 4, labelAnchor: 'end' }),
];
