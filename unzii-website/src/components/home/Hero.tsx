import { Code2, Layers, Rocket, HeadphonesIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const valueProps = [
  {
    icon: Code2,
    title: "Custom Websites",
    description: "Modern, responsive builds that convert.",
  },
  {
    icon: Layers,
    title: "Full-Stack Applications",
    description: "Websites today, full products as you grow.",
  },
  {
    icon: Rocket,
    title: "Engineered for Speed",
    description: "Fast, clean code, no bloat.",
  },
  {
    icon: HeadphonesIcon,
    title: "Direct Support",
    description: "A real line to the person building it.",
  },
];

// Coordinates are percentages of the hero section's own box, shared by
// both the connecting <line> layer (viewBox 0 0 100 100) and the node
// dots below, so the network spans the full section instead of a
// boxed-off graphic on one side.
const networkNodes = [
  { x: 58, y: 12, size: 6, hub: false, opacity: 0.85 },
  { x: 71, y: 8, size: 5, hub: false, opacity: 0.7 },
  { x: 86, y: 16, size: 6, hub: false, opacity: 0.85 },
  { x: 93, y: 30, size: 5, hub: false, opacity: 0.7 },
  { x: 80, y: 38, size: 10, hub: true, opacity: 1 },
  { x: 64, y: 33, size: 5, hub: false, opacity: 0.7 },
  { x: 54, y: 48, size: 6, hub: false, opacity: 0.85 },
  { x: 69, y: 54, size: 9, hub: true, opacity: 1 },
  { x: 83, y: 60, size: 5, hub: false, opacity: 0.7 },
  { x: 91, y: 74, size: 6, hub: false, opacity: 0.85 },
  { x: 75, y: 80, size: 9, hub: true, opacity: 1 },
  { x: 59, y: 88, size: 5, hub: false, opacity: 0.7 },
  { x: 10, y: 18, size: 4, hub: false, opacity: 0.15 },
  { x: 22, y: 42, size: 4, hub: false, opacity: 0.15 },
  { x: 14, y: 68, size: 4, hub: false, opacity: 0.12 },
  { x: 28, y: 88, size: 4, hub: false, opacity: 0.15 },
] as const;

const networkLines: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [4, 7],
  [6, 7],
  [7, 8],
  [3, 8],
  [8, 9],
  [7, 10],
  [9, 10],
  [10, 11],
  [6, 11],
];

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden lg:min-h-[620px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-surface-muted/30" />

        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <g stroke="var(--color-brand-primary)" strokeWidth="0.15">
              {networkLines.map(([a, b], i) => (
                <line
                  key={`${a}-${b}`}
                  className="animate-line-glow"
                  x1={networkNodes[a].x}
                  y1={networkNodes[a].y}
                  x2={networkNodes[b].x}
                  y2={networkNodes[b].y}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </g>
          </svg>

          {networkNodes.map((node, i) => (
            <span
              key={i}
              className={`absolute rounded-full ${
                node.hub ? "animate-pulse-node bg-brand-steel" : "animate-float-dot bg-brand-primary"
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: node.size,
                height: node.size,
                opacity: node.opacity,
                animationDelay: `${i * 0.35}s`,
                animationDuration: node.hub ? undefined : `${4 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        <Container className="relative py-20 lg:py-28">
          <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <div className="animate-fade-up">
              <Eyebrow>Web Development Agency</Eyebrow>
            </div>

            <h1
              className="animate-fade-up mt-6 text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.08s" }}
            >
              Websites &amp; Digital Products, <span className="text-brand-primary">Engineered Right</span>
            </h1>

            <p
              className="animate-fade-up mt-5 text-balance text-lg leading-relaxed text-text-secondary"
              style={{ animationDelay: "0.16s" }}
            >
              Unzii builds fast, modern websites and full-stack applications for businesses that
              need their next release to hold up.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
              style={{ animationDelay: "0.24s" }}
            >
              <Button href="/start-your-project" size="lg" showArrow>
                Start Your Project
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                See Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-t border-border bg-brand-secondary py-14">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-text-inverse">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-inverse">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-inverse-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
