interface Props {
  className?: string;
}

/**
 * Stylized 2026 Ford E450 service van rendered to match the new
 * fleet wrap: charcoal body with hi-vis green diagonal panels,
 * "AWESCO SEPTIC" wordmark and bright green AW arrow on the door.
 * Driver-side profile view.
 */
export default function TruckIllustration({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 260"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="A Wesco Septic 2026 Ford E450 service van"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#374151" />
          <stop offset="1" stopColor="#273344" />
        </linearGradient>
        <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4B5563" />
          <stop offset="1" stopColor="#2E3D50" />
        </linearGradient>
        <clipPath id="bodyClip">
          {/* Defines van body silhouette so green panels stay inside */}
          <path d="M 60 80 L 90 50 L 200 50 L 215 80 L 530 80 L 540 95 L 550 100 L 555 130 L 555 200 L 540 200 L 535 220 L 470 220 L 465 200 L 145 200 L 140 220 L 75 220 L 70 200 L 50 200 L 50 130 L 60 110 Z" />
        </clipPath>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="300" cy="240" rx="260" ry="6" fill="#000" opacity="0.5" />

      {/* Van body (charcoal) */}
      <path
        d="M 60 80 L 90 50 L 200 50 L 215 80 L 530 80 L 540 95 L 550 100 L 555 130 L 555 200 L 540 200 L 535 220 L 470 220 L 465 200 L 145 200 L 140 220 L 75 220 L 70 200 L 50 200 L 50 130 L 60 110 Z"
        fill="url(#bodyGrad)"
      />

      {/* Hi-vis green diagonal panel on rear box (matches truck wrap) */}
      <g clipPath="url(#bodyClip)">
        <path
          d="M 230 50 L 530 50 L 530 200 L 230 200 Z"
          fill="#39FF14"
        />
        {/* Diagonal cut where green meets black at front of box */}
        <path
          d="M 215 50 L 290 50 L 240 200 L 215 200 Z"
          fill="#273344"
        />
        {/* Top section of box stays dark */}
        <path
          d="M 215 50 L 530 50 L 530 95 L 215 95 Z"
          fill="#2E3D50"
        />
      </g>

      {/* Windshield */}
      <path d="M 95 60 L 198 60 L 210 82 L 95 82 Z" fill="url(#windowGrad)" opacity="0.85" />
      <path d="M 95 60 L 198 60 L 210 82 L 95 82 Z" fill="none" stroke="#1F2937" strokeWidth="2" />

      {/* Driver door window */}
      <rect x="70" y="92" width="60" height="38" fill="url(#windowGrad)" opacity="0.7" />
      <rect x="70" y="92" width="60" height="38" fill="none" stroke="#1F2937" strokeWidth="1.5" />

      {/* Door seam */}
      <line x1="135" y1="90" x2="135" y2="195" stroke="#1F2937" strokeWidth="1.5" />

      {/* AW arrow logo on door */}
      <g transform="translate(160, 130)">
        <text
          x="0"
          y="20"
          fontFamily="Bebas Neue, sans-serif"
          fontSize="32"
          fill="#39FF14"
          fontWeight="700"
        >
          A
        </text>
        <text
          x="14"
          y="40"
          fontFamily="Bebas Neue, sans-serif"
          fontSize="32"
          fill="#39FF14"
          fontWeight="700"
        >
          W
        </text>
        <path d="M 38 28 L 60 28 L 60 24 L 70 32 L 60 40 L 60 36 L 38 36 Z" fill="#39FF14" />
      </g>

      {/* AWESCO SEPTIC wordmark on box */}
      <g transform="translate(310, 110)">
        <text
          x="0"
          y="0"
          fontFamily="Bebas Neue, sans-serif"
          fontSize="28"
          fill="#1F2937"
          fontWeight="700"
          letterSpacing="1"
        >
          AWESCO
        </text>
        <path d="M 110 -8 L 138 -8 L 138 -12 L 150 -4 L 138 4 L 138 0 L 110 0 Z" fill="#1F2937" />
        <rect x="0" y="8" width="100" height="20" fill="#1F2937" />
        <text
          x="50"
          y="24"
          textAnchor="middle"
          fontFamily="Bebas Neue, sans-serif"
          fontSize="16"
          fill="#39FF14"
          fontWeight="700"
          letterSpacing="2"
        >
          SEPTIC
        </text>
      </g>

      {/* Phone number on box */}
      <text
        x="310"
        y="180"
        fontFamily="Bebas Neue, sans-serif"
        fontSize="22"
        fill="#1F2937"
        fontWeight="700"
        letterSpacing="1"
      >
        360-668-6561
      </text>

      {/* Compartment doors on side of service body */}
      <rect x="240" y="155" width="32" height="34" fill="none" stroke="#1F2937" strokeWidth="1.5" opacity="0.6" />
      <rect x="280" y="155" width="32" height="34" fill="none" stroke="#1F2937" strokeWidth="1.5" opacity="0.6" />

      {/* Headlight */}
      <ellipse cx="65" cy="120" rx="10" ry="14" fill="#F5F5F2" opacity="0.8" />

      {/* Wheels */}
      <g>
        <circle cx="110" cy="210" r="28" fill="#1F2937" />
        <circle cx="110" cy="210" r="20" fill="#2E3D50" />
        <circle cx="110" cy="210" r="8" fill="#4B5563" />
        <circle cx="500" cy="210" r="28" fill="#1F2937" />
        <circle cx="500" cy="210" r="20" fill="#2E3D50" />
        <circle cx="500" cy="210" r="8" fill="#4B5563" />
      </g>

      {/* Front bumper */}
      <rect x="50" y="180" width="20" height="20" fill="#4B5563" />

      {/* Rear roof spoiler indicator */}
      <rect x="525" y="78" width="15" height="3" fill="#1F2937" />
    </svg>
  );
}
