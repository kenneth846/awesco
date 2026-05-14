import Image from 'next/image';
const stats = [
  { num: '35+', label: 'YEARS IN THE FIELD' },
  { num: '400+', label: 'GOOGLE REVIEWS' },
  { num: '4.8★', label: 'CUSTOMER RATING' },
  { num: '24/7', label: 'EMERGENCY DISPATCH' },
];

const reasons = [
  {
    h: 'Trusted Since 1989',
    p: 'Over 35 years of doing the job right the first time. Homeowners, businesses, and real estate agents have built their schedules around us.',
  },
  {
    h: 'Expert Septic Care',
    p: 'Decades of hands-on experience on every truck. Routine maintenance, troubleshooting, full inspections — same team, same standards.',
  },
  {
    h: 'Locally Owned',
    p: 'We aren\'t a franchise. We\'re your neighbors, and we care about the health and sustainability of the same community we live in.',
  },
  {
    h: 'Licensed & Insured',
    p: 'Fully licensed and insured. We meet the highest standards of safety and performance — and we treat your property like ours.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink-900 py-14 text-bone-200 sm:py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.webp" alt="" fill className="object-cover object-center" style={{ opacity: 0.12 }} sizes="100vw" />
      </div>
      <div className="bg-grid-dark absolute inset-0 z-[1] opacity-40" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
        {/* Stat strip */}
        <div className="grid grid-cols-2 gap-px bg-bone-400/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900 p-5 sm:p-8">
              <div className="stencil font-display text-4xl text-hi sm:text-5xl lg:text-6xl">{s.num}</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-wider2 text-bone-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-hi" aria-hidden />
              <span className="eyebrow">/ WHY A WESCO</span>
            </div>
            <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl lg:text-6xl">
              We do the job
              <br />
              <span className="text-hi">the right way.</span>
              <br />
              <span className="text-bone-400">Every time.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-bone-300">
              Septic systems are out of sight, but they shouldn&rsquo;t be out of mind. Our team
              brings decades of experience to every job — clean uniforms, clean trucks, clean
              work. Then we leave your yard the way we found it.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="grid grid-cols-1 gap-px bg-bone-400/10 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <li
                  key={r.h}
                  className="group bg-ink-900 p-7 transition-colors hover:bg-ink-800"
                >
                  <div className="font-mono text-[11px] tracking-wider2 text-hi">
                    / 0{i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-2xl uppercase leading-tight tracking-tight text-bone-200">
                    {r.h}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-400 group-hover:text-bone-300">
                    {r.p}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
