'use client';

import { ArrowRight } from 'lucide-react';

interface Props {
  submitting?: boolean;
  label?: string;
  loadingLabel?: string;
}

/**
 * The green form submit button.
 *
 * Background + color are set as INLINE STYLES — the highest specificity
 * in CSS, beating Tailwind preflight, any global resets, or browser defaults.
 * Never invisible. Never transparent. Always #39FF14 on #1F2937.
 */
export default function SubmitButton({
  submitting = false,
  label = 'Request My Free Quote',
  loadingLabel = 'Sending…',
}: Props) {
  return (
    <button
      type="submit"
      disabled={submitting}
      style={{
        // Inline styles — nothing in CSS can override these
        backgroundColor: '#39FF14',
        color: '#1F2937',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        fontFamily: 'var(--font-display), "Bebas Neue", system-ui, sans-serif',
        fontSize: '22px',
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        padding: '16px 24px',
        minHeight: '58px',
        border: 'none',
        borderRadius: '0',
        cursor: submitting ? 'not-allowed' : 'pointer',
        opacity: submitting ? 0.6 : 1,
        transition: 'background-color 0.15s, transform 0.1s',
        // Ensure nothing can make this transparent
        backgroundImage: 'none',
        outline: 'none',
      }}
      onMouseEnter={e => {
        if (!submitting) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2DD60E';
      }}
      onMouseLeave={e => {
        if (!submitting) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#39FF14';
      }}
    >
      {submitting ? loadingLabel : (
        <>
          {label}
          <ArrowRight style={{ width: 20, height: 20, flexShrink: 0 }} />
        </>
      )}
    </button>
  );
}
