// Blog imagery. The two hero images are real (provided by Unzii);
// the rest are hand-drawn SVG illustrations, colored to fit each
// section's own concept (warning red for red flags, green for
// checklist progress, etc.) rather than locked to the brand palette.

import Image from "next/image";

const SOFT = "#e8edf3";
const GREY = "#8a96a8";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 overflow-hidden rounded-3xl border border-border bg-surface-muted">
      <svg viewBox="0 0 640 320" className="h-auto w-full" role="img" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

export function WebsiteHeroImage() {
  return (
    <div className="relative my-2 aspect-[2/1] overflow-hidden rounded-3xl border border-border">
      <Image
        src="/blog/hero-website-dev.jpg"
        alt="Building a fast, modern website"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

export function SeoHeroImage() {
  return (
    <div className="relative my-2 aspect-[2/1] overflow-hidden rounded-3xl border border-border">
      <Image
        src="/blog/hero-seo-startup.jpg"
        alt="SEO strategy for a growing startup"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

export function SuspectsIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={230}
          y={90 + i * 46}
          width="180"
          height="32"
          rx="8"
          fill={i === 1 ? "#2563eb" : "#ffffff"}
          stroke="#2563eb"
          strokeWidth="2"
        />
      ))}
      <circle cx="252" cy="106" r="6" fill="#2563eb" />
      <circle cx="252" cy="152" r="6" fill="#ffffff" />
      <circle cx="252" cy="198" r="6" fill="#2563eb" />
      <rect x="415" y="140" width="50" height="36" rx="6" fill="none" stroke="#f59e0b" strokeWidth="3" />
      <circle cx="428" cy="152" r="4" fill="#f59e0b" />
      <path d="M 418 172 L 434 156 L 445 166 L 461 148" stroke="#f59e0b" strokeWidth="3" fill="none" />
    </Frame>
  );
}

export function BottleneckIllustration() {
  const colors = ["#8b5cf6", "#3b82f6", "#14b8a6", "#f59e0b", "#ef4444", "#8b5cf6"];
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x={140 + i * 60}
          y={230 - (i % 3) * 26 - (i === 4 ? 60 : 0)}
          width="40"
          height={40 + (i % 3) * 26 + (i === 4 ? 60 : 0)}
          rx="6"
          fill={colors[i]}
          opacity={i === 4 ? 1 : 0.75}
        />
      ))}
      <line x1="110" y1="256" x2="530" y2="256" stroke={GREY} strokeWidth="2" />
    </Frame>
  );
}

export function ChecklistIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle
            cx="230"
            cy={98 + i * 42}
            r="12"
            fill={i < 2 ? "#16a34a" : "#ffffff"}
            stroke={i < 2 ? "#16a34a" : GREY}
            strokeWidth="2.5"
          />
          {i < 2 && (
            <path
              d={`M 224 ${98 + i * 42} l 4 5 l 8 -9`}
              stroke="#ffffff"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <rect
            x="260"
            y={90 + i * 42}
            width={220 - i * 24}
            height="16"
            rx="8"
            fill={i < 2 ? "#16a34a" : GREY}
            opacity={i < 2 ? 0.35 : 0.4}
          />
        </g>
      ))}
    </Frame>
  );
}

export function WarningIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${220 + i * 90} 130)`}>
          <path
            d="M 30 0 L 60 55 L 0 55 Z"
            fill={i === 1 ? "#ef4444" : "#ffffff"}
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <line
            x1="30"
            y1="18"
            x2="30"
            y2="36"
            stroke={i === 1 ? "#ffffff" : "#ef4444"}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="30" cy="46" r="2.5" fill={i === 1 ? "#ffffff" : "#ef4444"} />
        </g>
      ))}
    </Frame>
  );
}

export function TransparencyIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      <rect x="230" y="90" width="180" height="130" rx="14" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
      <line x1="255" y1="125" x2="385" y2="125" stroke="#93c5fd" strokeWidth="6" strokeLinecap="round" />
      <line x1="255" y1="150" x2="360" y2="150" stroke="#93c5fd" strokeWidth="6" strokeLinecap="round" />
      <line x1="255" y1="175" x2="335" y2="175" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" />
      <circle cx="380" cy="185" r="26" fill="none" stroke="#2563eb" strokeWidth="4" />
      <line x1="399" y1="204" x2="418" y2="223" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
    </Frame>
  );
}

export function CommunicationIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      <rect x="200" y="110" width="140" height="70" rx="16" fill="#14b8a6" />
      <path d="M 220 180 L 220 200 L 245 180 Z" fill="#14b8a6" />
      <rect x="330" y="160" width="120" height="60" rx="16" fill="#ffffff" stroke="#f59e0b" strokeWidth="2.5" />
      <path d="M 350 220 L 350 236 L 370 220 Z" fill="#ffffff" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="230" cy="140" r="4" fill="#ffffff" />
      <circle cx="255" cy="140" r="4" fill="#ffffff" />
      <circle cx="280" cy="140" r="4" fill="#ffffff" />
    </Frame>
  );
}

export const illustrations: Record<string, () => React.JSX.Element> = {
  "why-speed-matters-more-than-it-seems": WebsiteHeroImage,
  "the-usual-suspects-and-why-theyre-not-the-whole-story": SuspectsIllustration,
  "what-actually-slows-a-website-down": BottleneckIllustration,
  "fixing-it-in-the-right-order": ChecklistIllustration,
  "why-this-decision-is-different-for-startups": SeoHeroImage,
  "red-flags-to-watch-for": WarningIllustration,
  "transparency-what-it-should-actually-look-like": TransparencyIllustration,
  "communication-the-most-overlooked-factor": CommunicationIllustration,
};
