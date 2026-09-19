import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glow } from "@/components/ui/Glow";
import { cn } from "@/lib/utils";

export function ServiceHero({
  eyebrow,
  eyebrowLogo,
  badge,
  heading,
  headingClassName,
  description,
  primaryLabel = "Start Your Project",
  primaryHref = "/start-your-project",
  secondaryLabel,
  secondaryHref,
  background = "bg-surface-muted/30",
  heroImage,
  variant = "light",
}: {
  eyebrow: string;
  eyebrowLogo?: { src: string; alt: string; width: number; height: number };
  badge?: string;
  heading: React.ReactNode;
  headingClassName?: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  background?: string;
  heroImage?: string;
  variant?: "light" | "dark" | "yellow";
}) {
  const inverse = !!heroImage || variant === "dark";
  const yellow = variant === "yellow";

  return (
    <section className="relative overflow-hidden">
      {heroImage ? (
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image src={heroImage} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-brand-secondary/70" />
        </div>
      ) : variant === "dark" ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-brand-secondary" />
      ) : yellow ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-brand-yellow">
          <Glow className="-top-24 right-[6%] h-96 w-96" color="white" opacity={40} />
          <Glow className="-bottom-24 left-[4%] h-72 w-72" color="var(--color-brand-secondary)" opacity={10} />
          <Glow className="top-1/3 right-[30%] h-40 w-40" color="white" opacity={25} />
        </div>
      ) : (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className={cn("absolute inset-0", background)} />
          <Glow className="-top-20 right-[8%] h-80 w-80" opacity={30} />
          <Glow className="top-1/2 -left-16 h-56 w-56" opacity={16} />
          <Glow className="-bottom-10 right-[26%] h-40 w-40" opacity={20} />
        </div>
      )}

      <Container className="flex flex-col items-center pt-20 pb-20 text-center lg:pt-28 lg:pb-24">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          {eyebrowLogo ? (
            <Image
              src={eyebrowLogo.src}
              alt={eyebrowLogo.alt}
              width={eyebrowLogo.width}
              height={eyebrowLogo.height}
              className="h-8 w-auto sm:h-9"
              priority
            />
          ) : (
            <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
          )}
          {badge && (
            <span className="rounded-full border border-border bg-brand-bg px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-steel">
              {badge}
            </span>
          )}
        </div>

        <h1
          className={cn(
            "mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl",
            inverse ? "text-text-inverse" : "text-brand-secondary",
            headingClassName,
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
          <Button
            href={primaryHref}
            size="lg"
            showArrow
            variant={variant === "dark" ? "primary" : inverse || yellow ? "inverse" : "primary"}
          >
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
