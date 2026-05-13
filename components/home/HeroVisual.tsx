"use client";

/**
 * Abstract digital visual for the homepage hero.
 * Visualizes Lev's "brug tussen traditionele organisaties en digitale toekomst":
 * Three domain nodes (HR · Inkoop · Marketing) connected via converging
 * lines that pulse along cobalt paths to a single focal point.
 *
 * Pure SVG + CSS animations, no Motion/JS overhead.
 */
export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[480px]">
      <svg
        viewBox="0 0 480 480"
        className="w-full h-full"
        fill="none"
        aria-hidden
      >
        {/* Grid backdrop */}
        <defs>
          <pattern id="hv-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" stroke="currentColor" strokeWidth="0.5" className="text-ink/8" />
          </pattern>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2A82AC" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2A82AC" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hv-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A82AC" stopOpacity="0" />
            <stop offset="50%" stopColor="#2A82AC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2A82AC" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="480" height="480" fill="url(#hv-grid)" />

        {/* Central glow */}
        <circle cx="240" cy="240" r="180" fill="url(#hv-glow)" />

        {/* Three domain nodes, corners of triangle pointing down */}
        {/* HR top-left */}
        <g transform="translate(80,100)">
          <rect x="0" y="0" width="100" height="40" stroke="#2D1F14" strokeWidth="1" fill="#F6F0E5" />
          <text x="50" y="25" textAnchor="middle" className="font-mono" fontSize="11" fill="#2D1F14" letterSpacing="2">
            HR
          </text>
        </g>

        {/* Inkoop top-right */}
        <g transform="translate(300,100)">
          <rect x="0" y="0" width="100" height="40" stroke="#2D1F14" strokeWidth="1" fill="#F6F0E5" />
          <text x="50" y="25" textAnchor="middle" className="font-mono" fontSize="11" fill="#2D1F14" letterSpacing="2">
            INKOOP
          </text>
        </g>

        {/* Marketing right-middle */}
        <g transform="translate(190,40)">
          <rect x="0" y="0" width="100" height="40" stroke="#2D1F14" strokeWidth="1" fill="#F6F0E5" />
          <text x="50" y="25" textAnchor="middle" className="font-mono" fontSize="11" fill="#2D1F14" letterSpacing="2">
            MARKETING
          </text>
        </g>

        {/* Convergence point (bottom center) */}
        <g transform="translate(220,360)">
          <rect x="0" y="0" width="40" height="40" fill="#2D1F14" />
          <text x="20" y="24" textAnchor="middle" className="font-mono" fontSize="10" fill="#F6F0E5" letterSpacing="2">
            ↓
          </text>
        </g>

        {/* Connecting lines from each domain to convergence point */}
        <line x1="130" y1="140" x2="240" y2="360" stroke="#2D1F14" strokeWidth="0.6" strokeDasharray="2,3" opacity="0.4" />
        <line x1="350" y1="140" x2="240" y2="360" stroke="#2D1F14" strokeWidth="0.6" strokeDasharray="2,3" opacity="0.4" />
        <line x1="240" y1="80" x2="240" y2="360" stroke="#2D1F14" strokeWidth="0.6" strokeDasharray="2,3" opacity="0.4" />

        {/* Animated cobalt pulses traveling along each line */}
        <circle r="3" fill="#2A82AC">
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M130 140 L240 360" />
        </circle>
        <circle r="3" fill="#2A82AC">
          <animateMotion dur="3.6s" begin="1.2s" repeatCount="indefinite" path="M350 140 L240 360" />
        </circle>
        <circle r="3" fill="#2A82AC">
          <animateMotion dur="3.6s" begin="2.4s" repeatCount="indefinite" path="M240 80 L240 360" />
        </circle>

        {/* Result label */}
        <g transform="translate(115,415)">
          <text x="0" y="0" className="font-mono" fontSize="10" fill="#6B7280" letterSpacing="2">
            GRIP OP GROEI
          </text>
          <line x1="0" y1="6" x2="250" y2="6" stroke="#2A82AC" strokeWidth="1" />
        </g>

        {/* Corner registration marks */}
        <g stroke="#2D1F14" strokeWidth="1" fill="none" opacity="0.3">
          <path d="M10 10 h12 M10 10 v12" />
          <path d="M470 10 h-12 M470 10 v12" />
          <path d="M10 470 h12 M10 470 v-12" />
          <path d="M470 470 h-12 M470 470 v-12" />
        </g>

        {/* Tiny coordinate labels */}
        <text x="10" y="478" className="font-mono" fontSize="7" fill="#6B7280" letterSpacing="1.5">
          DCF · 01
        </text>
        <text x="412" y="478" className="font-mono" fontSize="7" fill="#6B7280" letterSpacing="1.5">
          v.2026
        </text>
      </svg>
    </div>
  );
}
