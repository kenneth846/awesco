import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ashley Burke',
    date: 'April 2025',
    body: 'Derek was quick and efficient! I appreciate how thoughtful he was in answering my questions and how patient he was with my dog. Thank you, Derek!',
    crew: 'DEREK',
  },
  {
    name: 'Mulready',
    date: 'April 2025',
    body: 'Great service from the team of Derek and David and the team of Larry and Blake. The septic tank pump and alarm had failed and needed to be replaced. They worked together efficiently as a team. Very impressed by the professionalism and teamwork of both teams.',
    crew: 'DEREK · DAVID · LARRY · BLAKE',
  },
  {
    name: 'Malacha Kitchens',
    date: 'April 2025',
    body: 'What great service, on time, so professional. Very happy with my service. It\'s probably been 15 years since I used this company. Highly recommend.',
    crew: 'CREW 02',
  },
  {
    name: 'Jared F.',
    date: 'March 2025',
    body: 'A Wesco Septic has been doing our septic work for the past 9 years. We recently had a great experience with Calvin & Jenson — communicated well, showed up on time, worked quickly, and left my yard in good condition.',
    crew: 'CALVIN · JENSON',
  },
  {
    name: 'Jess Tate',
    date: 'March 2025',
    body: 'Derrick and Daniel were extremely helpful in explaining my system and how it functions to me, and got me set on the right maintenance schedule to keep our system running great.',
    crew: 'DERRICK · DANIEL',
  },
  {
    name: 'Max Iszler',
    date: 'March 2025',
    body: 'Wonderful experience. Qualified workers and got the job done fast and high quality. Met the owners son personally and he was very courteous. Would recommend.',
    crew: 'CREW 01',
  },
];

export default function Reviews() {
  return (
    <section className="relative bg-bone-100 py-16 text-ink-900 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ink-900" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-wider2">
                / FROM REAL CLIENTS
              </span>
            </div>
            <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest sm:text-6xl lg:text-7xl">
              4.8 ★ on Google.
              <br />
              <span className="text-hi-700">400+ reviews.</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=A+Wesco+Septic+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost border-ink-900/30 text-ink-900 hover:border-hi-700 hover:text-hi-700"
          >
            Read All Reviews →
          </a>
        </div>

        {/* Review cards in a brick-style layout */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="group relative flex flex-col border border-ink-900/10 bg-bone-100 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-ink-900 hover:shadow-hard"
            >
              <Quote className="h-7 w-7 text-hi-700" />
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-hi-700 text-hi-700" />
                ))}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-800">{r.body}</p>
              <div className="mt-6 flex items-end justify-between border-t border-ink-900/10 pt-4">
                <div>
                  <div className="font-display text-base uppercase tracking-wider text-ink-900">
                    {r.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider2 text-ink-500">
                    {r.date}
                  </div>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider2 text-hi-700">
                  / {r.crew}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
