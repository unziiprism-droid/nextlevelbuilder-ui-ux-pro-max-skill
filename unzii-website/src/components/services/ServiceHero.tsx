import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

export function ServiceHero({
  eyebrow,
  badge,
  heading,
  description,
  primaryLabel = "Start Your Project",
  primaryHref = "/start-your-project",
  secondaryLabel,
  secondaryHref,
  background = "bg-surface-muted/30",
  heroImage,
  dark = false,
}: {
  eyebrow: string;
  badge?: string;
  heading: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  background?: string;
  heroImage?: string;
  dark?: boolean;
}) {
  const inverse = !!heroImage || dark;

  return (
    <section className="relative overflow-hidden">
      {heroImage ? (
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image src={heroImage} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-brand-secondary/70" />
        </div>
      ) : dark ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-brand-secondary">
          <div
            className="absolute -top-20 right-[10%] h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--color-brand-primary)" }}
          />
        </div>
      ) : (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -top-20 right-[10%] h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--color-brand-primary)" }}
          />
          <div className={cn("absolute inset-0", background)} />
        </div>
      )}

      <Container className="flex flex-col items-center pt-20 pb-20 text-center lg:pt-28 lg:pb-24">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
          {badge && (
            <span className="rounded-full bg-brand-bg px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-steel">
              {badge}
            </span>
          )}
        </div>

        <h1
          className={cn(
            "mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl",
            inverse ? "text-text-inverse" : "text-brand-secondary",
          )}
        >
          {heading}
        </h1>

        <p
          className={cn(
            "mt-6 max-w-2xl text-balance text-lg leading-relaxed",
            inverse ? "text-text-inverse-muted" : "text-text-secondary",
          )}
        >
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={primaryHref} size="lg" showArrow variant={inverse ? "inverse" : "primary"}>
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              href={secondaryHref}
              variant="secondary"
              size="lg"
              className={inverse ? "border-white/40 text-text-inverse hover:bg-white/10" : undefined}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
