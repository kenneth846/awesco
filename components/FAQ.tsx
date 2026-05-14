'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How do I know if my septic tank needs pumping?',
    a: 'If you\'re noticing slow drains, gurgling toilets, sewage odors, or it\'s been years since your last pump, you may be due. The safest approach is to pump on a schedule and not wait for symptoms.',
  },
  {
    q: 'How often should a septic tank be pumped?',
    a: 'Most households fall into a routine schedule based on tank size, household size, and water usage. If you\'re not sure of your last pump date, it\'s smart to start with an inspection or pump-out and then set a schedule from there.',
  },
  {
    q: 'Do you offer real estate / escrow septic inspections?',
    a: 'Yes. We perform septic inspections including home sale / escrow situations and can walk you through what to expect, what we check, and what information you\'ll need for a smooth process.',
  },
  {
    q: 'What are the signs of a drain field problem?',
    a: 'Common signs include soggy ground, standing water near the drain field, sewage odors outside, slow drains throughout the home, or symptoms that get worse after heavy rain.',
  },
  {
    q: 'My septic alarm is beeping — what should I do first?',
    a: 'Reduce water use immediately (no laundry, shorter showers, pause dishwashing), then call for service. An alarm usually means high water in a pump chamber or a system issue that needs attention before it becomes a backup.',
  },
  {
    q: 'Do you provide emergency service?',
    a: 'Yes — if you\'re dealing with a backup, strong sewage odors, alarm conditions, or standing wastewater, call us right away and reduce water use until we arrive.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Snohomish County, King County, and Camano Island. If you\'re unsure whether you\'re in our service area, call and we\'ll confirm quickly.',
  },
  {
    q: 'Do you offer maintenance plans or memberships?',
    a: 'Yes. We offer options designed to keep you on a routine schedule, reduce emergencies, and help you stay ahead of inspections and maintenance needs.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-900 py-16 text-bone-200 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-hi" aria-hidden />
              <span className="eyebrow">/ FAQ · STRAIGHT ANSWERS</span>
            </div>
            <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest sm:text-6xl">
              Common
              <br />
              <span className="text-hi">questions.</span>
              <br />
              <span className="text-bone-400">Honest</span>
              <br />
              <span className="text-bone-400">answers.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-bone-400">
              Don&rsquo;t see your question? Call (360) 668-6561 — we&rsquo;re happy to walk you through it.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-bone-400/15">
              {faqs.map((f, i) => (
                <li key={i} className="border-b border-bone-400/15">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-hi"
                    aria-expanded={open === i}
                  >
                    <span className="flex items-start gap-4">
                      <span className="font-mono text-xs tracking-wider2 text-hi">
                        / 0{i + 1}
                      </span>
                      <span className="font-display text-xl uppercase leading-tight tracking-tight sm:text-2xl">
                        {f.q}
                      </span>
                    </span>
                    <span className="shrink-0">
                      {open === i ? (
                        <Minus className="h-5 w-5 text-hi" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  {open === i && (
                    <div className="pb-6 pl-12 pr-12">
                      <p className="text-sm leading-relaxed text-bone-300 sm:text-base">{f.a}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
