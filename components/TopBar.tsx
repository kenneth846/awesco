import { Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="relative z-50 border-b border-bone-400/10 bg-ink-900">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex h-1.5 w-1.5 animate-flicker rounded-full bg-hi" />
          {/* Short version on mobile, full on sm+ */}
          <span className="font-mono text-[10px] uppercase tracking-wider2 text-bone-400 sm:hidden">
            24/7 EMERGENCY
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-wider2 text-bone-400 sm:inline sm:text-[11px]">
            ON CALL · 24/7 EMERGENCY DISPATCH
          </span>
        </div>
        <a
          href="tel:3606686561"
          className="flex items-center gap-1.5 text-bone-200 transition-colors hover:text-hi"
          aria-label="Call A Wesco Septic"
        >
          <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="font-mono text-[10px] font-bold tracking-wider sm:text-[11px]">
            (360) 668-6561
          </span>
        </a>
      </div>
    </div>
  );
}
