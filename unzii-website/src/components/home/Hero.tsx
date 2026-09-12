import type { CSSProperties } from "react";
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

function floatStyle(y: string, duration: string, delay = "0s"): CSSProperties {
  return {
    "--float-y": y,
    "--float-duration": duration,
    "--float-delay": delay,
  } as CSSProperties;
}

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-surface-muted/30" />

        <Container className="grid items-center gap-16 pt-20 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28 lg:pb-32">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="animate-fade-up">
              <Eyebrow>Web Development Agency</Eyebrow>
            </div>

            <h1
              className="animate-fade-up mt-6 max-w-xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.08s" }}
            >
              Websites &amp; Digital Products, <span className="text-brand-primary">Engineered Right</span>
            </h1>

            <p
              className="animate-fade-up mt-5 max-w-xl text-balance text-lg leading-relaxed text-text-secondary"
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

          <div
            className="animate-fade-up relative mx-auto h-[360px] w-full max-w-sm sm:h-[400px] sm:max-w-md lg:h-[440px] lg:max-w-none"
            style={{ animationDelay: "0.2s" }}
          >
            <div
              aria-hidden
              className="animate-pulse-blob absolute inset-10 -z-10 rounded-full blur-3xl"
              style={{ background: "var(--color-brand-primary)" }}
            />

            <div
              className="animate-float absolute top-0 left-0 w-[76%] overflow-hidden rounded-2xl border border-border bg-surface shadow-lifted"
              style={floatStyle("-12px", "6s")}
            >
              <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="space-y-2.5 p-5">
                <div className="h-3 w-2/3 rounded-full bg-brand-secondary/15" />
                <div className="h-2.5 w-5/6 rounded-full bg-border" />
                <div className="h-2.5 w-3/4 rounded-full bg-border" />
                <div className="mt-3 h-16 rounded-xl bg-surface-muted" />
              </div>
            </div>

            <div
              className="animate-float absolute -bottom-3 left-2 w-[54%] rounded-2xl border border-border bg-surface p-4 shadow-lifted sm:left-4"
              style={floatStyle("11px", "5.5s", "0.3s")}
            >
              <p className="text-[11px] font-medium tracking-wide text-text-muted uppercase">Brand Palette</p>
              <div className="mt-2 flex gap-1.5">
                <span className="size-6 rounded-full bg-brand-secondary" />
                <span className="size-6 rounded-full bg-brand-steel" />
                <span className="size-6 rounded-full bg-brand-primary" />
                <span className="size-6 rounded-full border border-border bg-surface-muted" />
              </div>
            </div>

            <div
              className="animate-float absolute top-16 right-0 w-[32%] overflow-hidden rounded-2xl border border-border bg-surface shadow-lifted"
              style={floatStyle("-14px", "7s", "0.6s")}
            >
              <div className="flex justify-center border-b border-border bg-surface-muted py-2">
                <span className="h-1.5 w-8 rounded-full bg-border" />
              </div>
              <div className="space-y-2 p-3">
                <div className="h-12 rounded-lg bg-surface-muted" />
                <div className="h-1.5 w-4/5 rounded-full bg-border" />
                <div className="h-1.5 w-3/5 rounded-full bg-border" />
                <div className="mt-2 h-6 rounded-lg bg-brand-steel/90" />
              </div>
            </div>

            <div
              className="animate-float absolute -top-6 right-2 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lifted sm:right-6"
              style={floatStyle("9px", "4.5s", "0.9s")}
            >
              <span className="text-lg font-semibold text-brand-secondary">Aa</span>
              <span className="text-lg font-light text-text-muted">Aa</span>
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
