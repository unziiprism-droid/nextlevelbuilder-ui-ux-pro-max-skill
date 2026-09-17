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

        <Container className="flex flex-col items-center pt-20 pb-24 text-center lg:items-start lg:pt-28 lg:pb-32 lg:text-left">
          <div className="animate-fade-up">
            <Eyebrow>Web Development Agency</Eyebrow>
          </div>

          <h1
            className="animate-fade-up mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.08s" }}
          >
            Websites &amp; Digital Products, <span className="text-brand-primary">Engineered Right</span>
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-2xl text-balance text-lg leading-relaxed text-text-secondary"
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
        </Container>
      </section>

      <div className="border-t border-border bg-brand-yellow py-14">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-secondary">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-secondary/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
