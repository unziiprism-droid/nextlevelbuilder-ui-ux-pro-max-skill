// Hand-drawn SVG illustrations for blog posts, in the same brand
// palette as the rest of the site. Kept abstract/geometric (echoing
// the logo's diamond motif) rather than photographic, since there is
// no real photography to draw on yet.

const NAVY = "#101827";
const SLATE = "#334a68";
const GREY = "#8a96a8";
const SOFT = "#e8edf3";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 overflow-hidden rounded-3xl border border-border bg-surface-muted">
      <svg viewBox="0 0 640 320" className="h-auto w-full" role="img" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

function Diamond({ x, y, size, fill }: { x: number; y: number; size: number; fill: string }) {
  const half = size / 2;
  return (
    <rect
      x={x - half}
      y={y - half}
      width={size}
      height={size}
      fill={fill}
      transform={`rotate(45 ${x} ${y})`}
      rx={size * 0.14}
    />
  );
}

export function SpeedIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      <circle cx="320" cy="180" r="120" fill="none" stroke={GREY} strokeWidth="2" opacity="0.5" />
      <path
        d="M 210 220 A 120 120 0 0 1 430 220"
        fill="none"
        stroke={SLATE}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 210 220 A 120 120 0 0 1 360 104"
        fill="none"
        stroke={NAVY}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <line x1="320" y1="220" x2="380" y2="140" stroke={NAVY} strokeWidth="6" strokeLinecap="round" />
      <circle cx="320" cy="220" r="10" fill={NAVY} />
      <Diamond x={150} y={90} size={20} fill={GREY} />
      <Diamond x={500} y={90} size={16} fill={SLATE} />
      <Diamond x={530} y={240} size={24} fill={GREY} />
    </Frame>
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
          fill={i === 1 ? NAVY : "#ffffff"}
          stroke={SLATE}
          strokeWidth="2"
        />
      ))}
      <circle cx="252" cy="106" r="6" fill={SLATE} />
      <circle cx="252" cy="152" r="6" fill="#ffffff" />
      <circle cx="252" cy="198" r="6" fill={SLATE} />
      <Diamond x={440} y={106} size={18} fill={GREY} />
      <Diamond x={440} y={198} size={18} fill={GREY} />
      <rect x="415" y="140" width="50" height="36" rx="6" fill="none" stroke={NAVY} strokeWidth="3" />
      <circle cx="428" cy="152" r="4" fill={NAVY} />
      <path d="M 418 172 L 434 156 L 445 166 L 461 148" stroke={NAVY} strokeWidth="3" fill="none" />
    </Frame>
  );
}

export function BottleneckIllustration() {
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
          fill={i === 4 ? NAVY : SLATE}
          opacity={i === 4 ? 1 : 0.55 + (i % 3) * 0.1}
        />
      ))}
      <line x1="110" y1="256" x2="530" y2="256" stroke={GREY} strokeWidth="2" />
      <Diamond x={500} y={90} size={20} fill={GREY} />
      <Diamond x={150} y={90} size={16} fill={SLATE} />
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
            fill={i < 2 ? NAVY : "#ffffff"}
            stroke={NAVY}
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
          <rect x="260" y={90 + i * 42} width={220 - i * 24} height="16" rx="8" fill={i < 2 ? SLATE : GREY} opacity={i < 2 ? 1 : 0.5} />
        </g>
      ))}
      <Diamond x={520} y={200} size={26} fill={SLATE} />
      <Diamond x={480} y={250} size={16} fill={GREY} />
    </Frame>
  );
}

export function DecisionIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      <circle cx="320" cy="130" r="14" fill={NAVY} />
      <line x1="320" y1="144" x2="220" y2="230" stroke={SLATE} strokeWidth="4" strokeLinecap="round" />
      <line x1="320" y1="144" x2="420" y2="230" stroke={GREY} strokeWidth="4" strokeLinecap="round" />
      <Diamond x={220} y={240} size={22} fill={SLATE} />
      <Diamond x={420} y={240} size={22} fill={GREY} />
      <Diamond x={320} y={90} size={16} fill={NAVY} />
    </Frame>
  );
}

export function WarningIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${220 + i * 90} 130)`}>
          <path d="M 30 0 L 60 55 L 0 55 Z" fill={i === 1 ? NAVY : "#ffffff"} stroke={SLATE} strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="30" y1="18" x2="30" y2="36" stroke={i === 1 ? "#ffffff" : SLATE} strokeWidth="3" strokeLinecap="round" />
          <circle cx="30" cy="46" r="2.5" fill={i === 1 ? "#ffffff" : SLATE} />
        </g>
      ))}
      <Diamond x={320} y={230} size={18} fill={GREY} />
    </Frame>
  );
}

export function TransparencyIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      <rect x="230" y="90" width="180" height="130" rx="14" fill="#ffffff" stroke={SLATE} strokeWidth="2.5" />
      <line x1="255" y1="125" x2="385" y2="125" stroke={GREY} strokeWidth="6" strokeLinecap="round" />
      <line x1="255" y1="150" x2="360" y2="150" stroke={GREY} strokeWidth="6" strokeLinecap="round" />
      <line x1="255" y1="175" x2="335" y2="175" stroke={NAVY} strokeWidth="6" strokeLinecap="round" />
      <circle cx="380" cy="185" r="26" fill="none" stroke={NAVY} strokeWidth="4" />
      <line x1="399" y1="204" x2="418" y2="223" stroke={NAVY} strokeWidth="5" strokeLinecap="round" />
      <Diamond x={470} y={100} size={18} fill={GREY} />
    </Frame>
  );
}

export function CommunicationIllustration() {
  return (
    <Frame>
      <rect width="640" height="320" fill={SOFT} />
      <rect x="200" y="110" width="140" height="70" rx="16" fill={NAVY} />
      <path d="M 220 180 L 220 200 L 245 180 Z" fill={NAVY} />
      <rect x="330" y="160" width="120" height="60" rx="16" fill="#ffffff" stroke={SLATE} strokeWidth="2.5" />
      <path d="M 350 220 L 350 236 L 370 220 Z" fill="#ffffff" stroke={SLATE} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="230" cy="140" r="4" fill="#ffffff" />
      <circle cx="255" cy="140" r="4" fill="#ffffff" />
      <circle cx="280" cy="140" r="4" fill="#ffffff" />
      <Diamond x={500} y={120} size={18} fill={GREY} />
    </Frame>
  );
}

export const illustrations: Record<string, () => React.JSX.Element> = {
  "why-speed-matters-more-than-it-seems": SpeedIllustration,
  "the-usual-suspects-and-why-theyre-not-the-whole-story": SuspectsIllustration,
  "what-actually-slows-a-website-down": BottleneckIllustration,
  "fixing-it-in-the-right-order": ChecklistIllustration,
  "why-this-decision-is-different-for-startups": DecisionIllustration,
  "red-flags-to-watch-for": WarningIllustration,
  "transparency-what-it-should-actually-look-like": TransparencyIllustration,
  "communication-the-most-overlooked-factor": CommunicationIllustration,
};
