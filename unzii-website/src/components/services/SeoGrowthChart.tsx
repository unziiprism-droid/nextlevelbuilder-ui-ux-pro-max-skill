import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  { x: 40, y: 210 },
  { x: 140, y: 198 },
  { x: 240, y: 178 },
  { x: 340, y: 140 },
  { x: 440, y: 90 },
  { x: 540, y: 40 },
];

const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const areaPath = `${linePath} L ${points[points.length - 1].x} 240 L ${points[0].x} 240 Z`;

const labels = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"];

export function SeoGrowthChart() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>Why it takes time</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
              SEO compounds, it doesn&apos;t spike
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
              Paid ads stop the moment you stop paying. SEO works differently: technical
              fixes, content, and links keep earning you traffic long after the work is
              done, and the gains build on each other month over month.
            </p>
            <p className="mt-4 max-w-md text-sm text-text-muted">
              Illustrative example, not a guarantee. Every site starts from a different
              baseline.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-surface-muted p-6 sm:p-8">
              <svg viewBox="0 0 580 260" className="h-auto w-full" role="img" aria-hidden>
                <defs>
                  <linearGradient id="seoGrowthFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-brand-supporting)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--color-brand-supporting)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[60, 120, 180].map((y) => (
                  <line key={y} x1="20" y1={y} x2="560" y2={y} stroke="var(--color-border)" strokeWidth="1" />
                ))}
                <path d={areaPath} fill="url(#seoGrowthFill)" />
                <path
                  d={linePath}
                  fill="none"
                  stroke="var(--color-brand-secondary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {points.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={i === points.length - 1 ? 6 : 4}
                    fill={i === points.length - 1 ? "var(--color-brand-secondary)" : "var(--color-surface)"}
                    stroke="var(--color-brand-secondary)"
                    strokeWidth="2.5"
                  />
                ))}
                {points.map((p, i) => (
                  <text
                    key={i}
                    x={p.x}
                    y="252"
                    textAnchor="middle"
                    className="fill-text-muted"
                    fontSize="12"
                  >
                    {labels[i]}
                  </text>
                ))}
              </svg>
              <p className="mt-2 text-center text-xs font-medium uppercase tracking-wide text-text-muted">
                Organic traffic, illustrative growth curve
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
