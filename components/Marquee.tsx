const items = [
  '24/7 EMERGENCY SERVICE',
  'SEPTIC TANK PUMPING',
  'FAMILY-OWNED SINCE 1989',
  'SEPTIC INSPECTIONS',
  'LICENSED & INSURED',
  'DRAIN FIELD REPAIR',
  'SNOHOMISH · KING · CAMANO',
  'MAINTENANCE AGREEMENTS',
];

export default function Marquee() {
  // Render twice for seamless infinite loop
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink-900 bg-hi py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {list.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display text-2xl uppercase tracking-wider text-ink-900"
          >
            {item}
            <span className="text-ink-900/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
