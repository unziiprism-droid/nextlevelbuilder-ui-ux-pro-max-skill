import Image from "next/image";
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

            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-lifted">
              <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate rounded-md bg-surface px-3 py-1 text-xs text-text-muted">
                  harvestandhome.co
                </span>
              </div>
              <div className="relative">
                <Image
                  src="/portfolio/harvest-and-home-hero.jpg"
                  alt="Harvest & Home website, designed and built by Unzii"
                  width={1400}
                  height={642}
                  className="h-auto w-full"
                  priority
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-brand-secondary/90 px-3 py-1 text-xs font-medium text-text-inverse backdrop-blur-sm">
                  Concept project — Harvest &amp; Home
                </span>
              </div>
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
