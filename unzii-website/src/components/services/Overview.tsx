import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Glow } from "@/components/ui/Glow";
import { cn } from "@/lib/utils";

export function Overview({
  eyebrow,
  heading,
  headingClassName,
  paragraphs,
  panelTitle,
  panelPoints,
  dark = false,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  headingClassName?: string;
  paragraphs: string[];
  panelTitle: string;
  panelPoints: string[];
  dark?: boolean;
}) {
  return (
    <section className={cn("py-24 lg:py-32", dark && "bg-brand-secondary")}>
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow inverse={dark}>{eyebrow}</Eyebrow>
            <h2
              className={cn(
                "mt-4 text-3xl font-semibold tracking-tight sm:text-4xl",
                dark ? "text-text-inverse" : "text-brand-secondary",
                headingClassName,
              )}
            >
              {heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={cn("text-base leading-relaxed", dark ? "text-text-inverse-muted" : "text-text-secondary")}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            {!dark && (
              <>
                <Glow className="-right-8 -top-8 -z-10 h-40 w-40" opacity={22} />
                <Glow className="-bottom-6 -left-6 -z-10 h-28 w-28" opacity={14} />
              </>
            )}
            <div
              className={cn(
                "relative rounded-3xl border p-8",
                dark ? "border-white/15 bg-white/5" : "border-border bg-surface-muted",
              )}
            >
              <h3 className={cn("text-lg font-semibold", dark ? "text-text-inverse" : "text-brand-secondary")}>
                {panelTitle}
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {panelPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                        dark ? "bg-brand-yellow text-brand-secondary" : "bg-brand-secondary text-text-inverse",
                      )}
                    >
                      <Check className="size-3" aria-hidden />
                    </span>
                    <span className={cn("text-sm leading-relaxed", dark ? "text-text-inverse-muted" : "text-text-secondary")}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
