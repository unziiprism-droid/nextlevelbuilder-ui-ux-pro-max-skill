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

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-surface-muted/30" />

        <Container className="grid items-center gap-16 pt-20 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28 lg:pb-32">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Eyebrow>Web Development Agency</Eyebrow>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl lg:text-6xl">
              Websites &amp; Digital Products, <span className="text-brand-primary">Engineered Right</span>
            </h1>

            <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-text-secondary">
              Unzii builds fast, modern websites and full-stack applications for businesses that
              need their next release to hold up.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button href="/start-your-project" size="lg" showArrow>
                Start Your Project
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                See Our Work
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-3xl"
              style={{ background: "var(--color-brand-primary)" }}
            />

            <div className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-surface p-8 shadow-lifted">
              <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
                <g stroke="var(--color-brand-primary)" strokeWidth="1.5" opacity="0.6">
                  <line x1="60" y1="60" x2="180" y2="40" />
                  <line x1="180" y1="40" x2="320" y2="70" />
                  <line x1="60" y1="60" x2="90" y2="160" />
                  <line x1="180" y1="40" x2="220" y2="140" />
                  <line x1="320" y1="70" x2="340" y2="180" />
                  <line x1="90" y1="160" x2="220" y2="140" />
                  <line x1="220" y1="140" x2="340" y2="180" />
                  <line x1="90" y1="160" x2="50" y2="260" />
                  <line x1="220" y1="140" x2="170" y2="240" />
                  <line x1="340" y1="180" x2="300" y2="270" />
                  <line x1="340" y1="180" x2="380" y2="240" />
                  <line x1="50" y1="260" x2="170" y2="240" />
                  <line x1="170" y1="240" x2="300" y2="270" />
                  <line x1="300" y1="270" x2="380" y2="240" />
                  <line x1="50" y1="260" x2="120" y2="350" />
                  <line x1="170" y1="240" x2="260" y2="360" />
                  <line x1="300" y1="270" x2="260" y2="360" />
                  <line x1="220" y1="140" x2="200" y2="190" />
                  <line x1="170" y1="240" x2="200" y2="190" />
                  <line x1="200" y1="190" x2="180" y2="40" />
                </g>
                <g fill="var(--color-brand-steel)">
                  <circle cx="200" cy="190" r="7" />
                  <circle cx="220" cy="140" r="5" />
                  <circle cx="170" cy="240" r="5" />
                </g>
                <g fill="var(--color-brand-primary)">
                  <circle cx="60" cy="60" r="4" />
                  <circle cx="180" cy="40" r="4" />
                  <circle cx="320" cy="70" r="4" />
                  <circle cx="90" cy="160" r="4" />
                  <circle cx="340" cy="180" r="4" />
                  <circle cx="50" cy="260" r="4" />
                  <circle cx="300" cy="270" r="4" />
                  <circle cx="380" cy="240" r="4" />
                  <circle cx="120" cy="350" r="4" />
                  <circle cx="260" cy="360" r="4" />
                </g>
              </svg>
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
