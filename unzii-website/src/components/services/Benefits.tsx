import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const sectionBg = {
  white: "bg-surface",
  "yellow-light": "bg-brand-yellow-light",
  dark: "bg-brand-secondary",
};

export function Benefits({
  eyebrow = "Benefits",
  heading,
  headingClassName,
  description,
  items,
  variant = "white",
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  headingClassName?: string;
  description?: string;
  items: BenefitItem[];
  variant?: "white" | "yellow-light" | "dark";
}) {
  const dark = variant === "dark";

  return (
    <section className={cn(sectionBg[variant], "py-24 lg:py-32")}>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow inverse={dark} className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2
            className={cn(
              "mt-4 text-3xl font-semibold tracking-tight sm:text-4xl",
              dark ? "text-text-inverse" : "text-brand-secondary",
              headingClassName,
            )}
          >
            {heading}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-4 text-base leading-relaxed",
                dark ? "text-text-inverse-muted" : "text-text-secondary",
              )}
            >
              {description}
            </p>
          )}
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-soft">
                <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface-muted text-brand-steel">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
