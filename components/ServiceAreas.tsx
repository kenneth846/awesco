import Link from 'next/link';
import ServiceAreaChecker from './ServiceAreaChecker';

const cities = [
  { name: 'Snohomish', slug: 'snohomish-washington' },
  { name: 'Everett', slug: 'everett-washington' },
  { name: 'Lake Stevens', slug: 'lake-stevens-washington' },
  { name: 'Marysville', slug: 'marysville-washington' },
  { name: 'Monroe', slug: 'monroe-washington' },
  { name: 'Mukilteo', slug: 'mukilteo-washington' },
  { name: 'Arlington', slug: 'arlington-washington' },
  { name: 'Granite Falls', slug: 'granite-falls-washington' },
  { name: 'Stanwood', slug: 'stanwood-washington' },
  { name: 'Sultan', slug: 'sultan-washington' },
  { name: 'Gold Bar', slug: 'goldbar-washington' },
  { name: 'Tulalip', slug: 'tulalip-washington' },
  { name: 'Mill Creek', slug: 'mill-creek-washington' },
  { name: 'Bothell', slug: 'bothell-washington' },
  { name: 'Edmonds', slug: 'edmonds-washington' },
  { name: 'Lynnwood', slug: 'lynnwood-washington' },
  { name: 'Mountlake Terrace', slug: 'mountlake-terrace-washington' },
  { name: 'Shoreline', slug: 'shoreline-washington' },
  { name: 'Bellevue', slug: 'bellevue' },
  { name: 'Kirkland', slug: 'kirkland-washington' },
  { name: 'Kenmore', slug: 'kenmore-washington' },
  { name: 'Redmond', slug: 'redmond-washington' },
  { name: 'Sammamish', slug: 'sammamish-washington' },
  { name: 'Mercer Island', slug: 'mercer-island-washington' },
  { name: 'Issaquah', slug: 'issaquah-washington' },
  { name: 'Carnation', slug: 'carnation-washington' },
  { name: 'Duvall', slug: 'duvall-washington' },
  { name: 'Fall City', slug: 'fall-city-washington' },
  { name: 'Preston', slug: 'preston-washington' },
  { name: 'Renton', slug: 'renton-washington' },
  { name: 'Seattle', slug: 'seattle-washington' },
  { name: 'SeaTac', slug: 'seatac-washington' },
  { name: 'Burien', slug: 'burien-washington' },
  { name: 'Tukwila', slug: 'tukwila-washington' },
  { name: 'Woodinville', slug: 'woodinville-washington' },
  { name: 'Camano Island', slug: 'camano-island-washington' },
];

export default function ServiceAreas() {
  return (
    <>
      {/* Zip code checker */}
      <ServiceAreaChecker />

      {/* Map + city links */}
      <section id="service-areas" className="bg-bone-100 py-14 text-ink-900 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6">

          <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: heading + city grid */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ink-900" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500 sm:text-[11px]">
                  / Service Areas · 36 Communities
                </span>
              </div>
              <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl lg:text-6xl">
                Where We<br />
                <span className="text-hi-700">Show Up.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-700 sm:text-base">
                Snohomish County, King County, and Camano Island. Family-owned and based
                in Snohomish since 1989 — we know these roads and these systems.
              </p>

              {/* City grid */}
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-0 sm:grid-cols-3">
                {cities.map(city => (
                  <Link
                    key={city.slug}
                    href={`/service-area/${city.slug}`}
                    className="group flex items-center justify-between border-b border-ink-900/10 py-2.5 text-sm font-medium text-ink-800 transition-colors hover:text-hi-700"
                  >
                    <span>{city.name}</span>
                    <span className="opacity-0 transition-opacity group-hover:opacity-100 text-hi-700">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: real SVG map from GeoJSON */}
            <div className="flex items-start">
              <div className="w-full rounded-lg bg-ink-900 p-3 sm:p-4">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-hi">
                    Service Territory
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider2 text-hi">
                    <span className="h-1.5 w-1.5 animate-flicker rounded-full bg-hi" />
                    Live
                  </span>
                </div>

                <svg
                  viewBox="0 0 500 560"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full rounded-md bg-ink-800"
                  aria-label="Map showing Awesco Septic service territory covering Snohomish County, King County, and Camano Island in Washington State"
                  role="img"
                >
                  {/* Grid texture */}
                  <defs>
                    <pattern id="mapgrid" width="22" height="22" patternUnits="userSpaceOnUse">
                      <path d="M22 0H0V22" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="500" height="560" fill="url(#mapgrid)"/>

                  {/* Water suggestion */}
                  <rect x="0" y="0" width="90" height="560" fill="rgba(55,138,221,0.07)"/>
                  <rect x="0" y="0" width="30" height="560" fill="rgba(55,138,221,0.05)"/>

                  {/* ISLAND COUNTY (Camano Island) — real GeoJSON coordinates */}
                  <path
                    d="M91.1,34.7 L87.6,32.3 L75.0,36.7 L71.5,33.7 L57.3,33.7 L54.4,44.7 L50.1,49.4 L28.3,49.7 L27.4,92.2 L29.9,101.2 L35.8,110.7 L64.1,137.2 L74.7,140.9 L77.3,148.2 L79.3,179.8 L82.5,192.1 L92.2,204.7 L110.0,214.3 L115.2,230.2 L124.7,245.2 L125.5,251.2 L130.2,241.6 L141.5,227.3 L143.8,218.3 L147.0,212.5 L148.1,199.2 L143.0,181.9 L145.7,170.7 L145.6,166.2 L142.6,155.6 L131.9,136.7 L129.1,129.5 L128.2,123.7 L128.7,114.3 L133.7,98.6 L123.3,80.1 L111.5,72.5 L101.0,60.1 L93.1,46.3 L91.6,39.7 L92.7,36.5 L91.1,34.7Z"
                    fill="rgba(57,255,20,0.20)"
                    stroke="#39FF14"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  {/* SNOHOMISH COUNTY — real GeoJSON coordinates */}
                  <path
                    d="M180.8,76.7 L119.0,76.6 L125.3,83.0 L133.7,98.8 L128.7,114.3 L128.3,125.1 L131.5,135.9 L141.4,153.0 L144.4,160.9 L145.7,170.2 L143.0,182.5 L148.2,200.8 L147.0,212.5 L143.6,218.8 L142.1,226.0 L130.2,241.6 L125.8,250.1 L122.7,262.0 L123.6,269.7 L223.8,270.6 L419.6,268.9 L419.3,267.3 L427.3,258.6 L430.5,251.0 L428.3,248.8 L420.4,250.2 L416.2,245.4 L411.9,244.6 L413.3,240.1 L410.8,233.1 L408.9,231.9 L407.0,229.6 L405.8,225.0 L407.9,219.6 L406.1,217.3 L408.1,215.2 L407.6,211.8 L410.0,207.7 L409.4,203.2 L413.0,198.1 L413.3,194.1 L415.8,193.5 L419.9,187.6 L419.9,184.8 L417.5,181.9 L417.2,179.5 L413.1,176.0 L411.9,172.1 L416.8,170.6 L420.3,165.6 L422.7,165.7 L424.6,163.2 L428.1,164.2 L439.6,158.1 L442.8,159.4 L446.5,153.8 L450.5,152.1 L452.5,146.8 L456.2,147.0 L458.2,145.0 L454.1,137.4 L454.3,134.0 L456.3,130.7 L461.3,128.9 L461.6,127.1 L467.1,126.5 L464.5,116.4 L458.2,112.5 L457.0,109.5 L454.2,108.6 L455.4,102.5 L452.4,99.7 L450.3,93.8 L446.4,89.5 L443.6,83.2 L445.8,80.8 L446.0,77.2 L180.8,76.7Z"
                    fill="rgba(57,255,20,0.17)"
                    stroke="#39FF14"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  {/* KING COUNTY — real GeoJSON coordinates */}
                  <path
                    d="M197.2,270.4 L123.6,269.7 L125.9,277.0 L126.0,282.5 L123.8,293.7 L121.7,296.9 L118.8,307.6 L120.3,319.4 L119.9,325.8 L121.9,332.7 L119.9,345.5 L122.3,352.2 L122.1,356.8 L114.2,364.8 L112.5,372.1 L105.4,387.1 L104.3,401.1 L100.8,411.3 L103.4,418.5 L100.4,428.9 L102.7,436.0 L106.6,439.5 L113.3,440.7 L118.0,439.4 L123.8,434.6 L146.8,460.8 L146.8,463.0 L189.6,463.0 L196.1,472.8 L200.7,486.2 L207.7,489.5 L211.3,495.0 L219.1,493.2 L223.9,498.0 L228.8,500.5 L232.7,501.2 L234.6,506.6 L238.1,503.7 L244.0,500.7 L252.1,501.9 L257.8,505.4 L267.6,494.3 L272.8,496.7 L279.6,497.5 L285.0,502.4 L292.8,502.9 L297.8,499.1 L305.1,501.6 L313.0,513.2 L332.0,513.1 L336.4,515.3 L340.5,521.5 L347.2,527.2 L353.9,524.9 L361.8,525.6 L357.9,509.3 L364.5,505.9 L371.1,509.3 L375.5,508.9 L379.6,503.3 L375.0,494.3 L377.7,488.7 L376.5,481.4 L372.7,478.0 L364.4,475.2 L365.9,471.5 L370.1,466.8 L371.8,463.0 L369.8,454.1 L365.6,452.5 L362.7,452.7 L352.9,449.6 L349.3,445.3 L346.4,443.5 L349.7,434.3 L348.0,430.9 L342.2,427.2 L343.3,420.0 L348.1,420.5 L347.5,415.3 L350.7,413.8 L349.0,410.3 L351.5,407.8 L350.5,402.3 L359.9,397.2 L361.2,389.8 L364.7,385.9 L368.2,385.8 L370.3,381.6 L376.3,380.6 L380.8,372.1 L383.7,364.3 L387.5,364.1 L389.0,360.4 L393.7,355.9 L395.0,348.5 L397.7,346.9 L406.0,348.7 L408.2,343.7 L407.7,339.3 L412.2,337.4 L419.5,338.9 L421.4,335.8 L419.4,331.0 L421.0,328.7 L418.2,325.3 L416.3,318.8 L418.7,312.2 L417.4,307.4 L419.1,304.1 L425.1,300.4 L428.6,297.8 L431.5,295.1 L430.7,292.0 L426.7,288.0 L428.6,284.0 L426.2,281.4 L425.2,277.0 L421.5,277.1 L422.2,273.8 L419.6,268.9 L197.2,270.4Z"
                    fill="rgba(57,255,20,0.13)"
                    stroke="#39FF14"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  {/* Labels */}
                  <text x="96" y="148" fontFamily="monospace" fontSize="8" fill="rgba(57,255,20,0.65)" textAnchor="middle" transform="rotate(-12,96,148)">CAMANO</text>
                  <text x="96" y="158" fontFamily="monospace" fontSize="7" fill="rgba(57,255,20,0.45)" textAnchor="middle" transform="rotate(-12,96,158)">ISLAND</text>

                  <text x="295" y="167" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="rgba(57,255,20,0.35)" textAnchor="middle" letterSpacing="2">SNOHOMISH</text>
                  <text x="295" y="179" fontFamily="monospace" fontSize="8" fill="rgba(57,255,20,0.25)" textAnchor="middle" letterSpacing="3">COUNTY</text>

                  <text x="260" y="385" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="rgba(57,255,20,0.28)" textAnchor="middle" letterSpacing="2">KING</text>
                  <text x="260" y="397" fontFamily="monospace" fontSize="8" fill="rgba(57,255,20,0.20)" textAnchor="middle" letterSpacing="3">COUNTY</text>

                  {/* HQ marker */}
                  <circle cx="244" cy="261" r="10" fill="rgba(57,255,20,0.10)" stroke="#39FF14" strokeWidth="0.8"/>
                  <circle cx="244" cy="261" r="5" fill="rgba(57,255,20,0.25)" stroke="#39FF14" strokeWidth="1.2"/>
                  <circle cx="244" cy="261" r="3" fill="#39FF14"/>
                  <text x="258" y="257" fontFamily="monospace" fontSize="8" fill="#F5F5F2" fontWeight="bold">HQ</text>
                  <text x="258" y="267" fontFamily="monospace" fontSize="7" fill="#888">Snohomish</text>

                  {/* Key cities */}
                  <circle cx="185" cy="228" r="2.5" fill="#39FF14" opacity="0.85"/>
                  <text x="192" y="232" fontFamily="monospace" fontSize="8.5" fill="#C9C9C2">Everett</text>
                  <circle cx="229" cy="329" r="2.5" fill="#39FF14" opacity="0.7"/>
                  <text x="236" y="333" fontFamily="monospace" fontSize="8" fill="#888">Kirkland</text>
                  <circle cx="163" cy="370" r="2.5" fill="#39FF14" opacity="0.8"/>
                  <text x="170" y="374" fontFamily="monospace" fontSize="8.5" fill="#C9C9C2">Seattle</text>
                  <circle cx="237" cy="445" r="2.5" fill="#39FF14" opacity="0.7"/>
                  <text x="244" y="449" fontFamily="monospace" fontSize="8" fill="#888">Renton</text>
                  <circle cx="182" cy="167" r="2" fill="#39FF14" opacity="0.65"/>
                  <text x="189" y="171" fontFamily="monospace" fontSize="7.5" fill="#888">Arlington</text>
                  <circle cx="268" cy="336" r="2" fill="#39FF14" opacity="0.65"/>
                  <text x="275" y="340" fontFamily="monospace" fontSize="7.5" fill="#888">Redmond</text>
                  <circle cx="308" cy="392" r="2" fill="#39FF14" opacity="0.65"/>
                  <text x="315" y="396" fontFamily="monospace" fontSize="7.5" fill="#888">Issaquah</text>
                  <circle cx="237" cy="349" r="2" fill="#39FF14" opacity="0.65"/>
                  <text x="185" y="353" fontFamily="monospace" fontSize="7.5" fill="#888">Bellevue</text>

                  {/* Scale */}
                  <line x1="360" y1="542" x2="460" y2="542" stroke="#374151" strokeWidth="1"/>
                  <line x1="360" y1="537" x2="360" y2="547" stroke="#374151" strokeWidth="1"/>
                  <line x1="460" y1="537" x2="460" y2="547" stroke="#374151" strokeWidth="1"/>
                  <text x="410" y="554" fontFamily="monospace" fontSize="8" fill="#374151" textAnchor="middle">~25 mi</text>
                  <text x="486" y="48" fontFamily="monospace" fontSize="9" fill="#374151" textAnchor="middle">N</text>
                  <polygon points="486,52 482,66 486,62 490,66" fill="#374151"/>
                </svg>

                <p className="mt-2 px-1 font-mono text-[9px] uppercase tracking-wider2 text-bone-400">
                  16607 SR 9 SE · Snohomish, WA 98296
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
