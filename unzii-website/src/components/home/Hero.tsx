import { Gauge, Search, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const valueProps = [
  { icon: Gauge, label: "Fast, modern builds" },
  { icon: Search, label: "SEO focused foundations" },
  { icon: TrendingUp, label: "Built to convert" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-surface-muted/30" />

      <Container className="flex flex-col items-center pt-20 pb-24 text-center lg:pt-28 lg:pb-32">
        <Eyebrow>SEO Agency for Startups</Eyebrow>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl lg:text-6xl">
          Websites &amp; SEO Built for Growing Startups
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-base font-medium text-brand-supporting">
          Built for startups, and any growing business that needs to move fast.
        </p>

        <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-text-secondary">
          Unzii partners with startups and growing businesses to create fast websites,
          improve online visibility, and deliver measurable results.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/start-your-project" size="lg" showArrow>
            Start Your Project
          </Button>
          <Button href="#services" variant="secondary" size="lg">
            Explore Services
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {valueProps.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
              <span className="flex size-8 items-center justify-center rounded-full bg-surface-muted text-brand-supporting">
                <Icon className="size-4" aria-hidden />
              </span>
              {label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
