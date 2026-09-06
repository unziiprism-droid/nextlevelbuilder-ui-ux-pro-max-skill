import { Gauge, Search, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const valueProps = [
  { icon: Gauge, label: "Fast, modern builds" },
  { icon: Search, label: "Clean, semantic code" },
  { icon: TrendingUp, label: "Built to convert" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-surface-muted/30" />

      <Container className="grid items-center gap-16 pt-20 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Eyebrow>Website Development Agency</Eyebrow>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl lg:text-6xl">
            Fast Websites for Businesses <span className="text-brand-primary">Ready to Scale</span>
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base font-medium text-brand-primary">
            Built for startups, and any growing business that needs to move fast.
          </p>

          <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-text-secondary">
            Unzii partners with startups and growing businesses to build fast websites
            and full-stack web applications that deliver measurable results.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/start-your-project" size="lg" showArrow>
              Start Your Project
            </Button>
            <Button href="#pricing" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-start">
            {valueProps.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
                <span className="flex size-8 items-center justify-center rounded-full bg-surface-muted text-brand-steel">
                  <Icon className="size-4" aria-hidden />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-3xl"
            style={{ background: "var(--color-brand-primary)" }}
          />

          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-lifted">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface-subtle px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ef4444]" />
              <span className="size-2.5 rounded-full bg-[#f59e0b]" />
              <span className="size-2.5 rounded-full bg-[#22c55e]" />
              <div className="ml-3 flex-1 truncate rounded-full bg-surface-muted px-3 py-1 text-[11px] text-text-muted">
                yourbusiness.com
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-text-muted">Organic Traffic</p>
                  <p className="mt-1 text-2xl font-semibold text-brand-secondary">+142%</p>
                </div>
                <span className="rounded-full bg-status-live/10 px-2.5 py-1 text-[11px] font-semibold text-status-live">
                  ↑ Growing
                </span>
              </div>

              <svg viewBox="0 0 300 100" className="mt-4 h-24 w-full" aria-hidden>
                <polyline
                  points="0,90 40,80 80,85 120,60 160,65 200,35 240,40 300,10"
                  fill="none"
                  stroke="var(--color-brand-steel)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-surface-muted p-3">
                  <p className="text-[11px] text-text-muted">Google Ranking</p>
                  <p className="mt-1 text-sm font-semibold text-brand-secondary">Page 1</p>
                </div>
                <div className="rounded-xl bg-surface-muted p-3">
                  <p className="text-[11px] text-text-muted">Load Time</p>
                  <p className="mt-1 text-sm font-semibold text-brand-secondary">0.8s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
