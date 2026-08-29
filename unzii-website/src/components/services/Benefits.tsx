import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Benefits({
  eyebrow = "Benefits",
  heading,
  description,
  items,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: BenefitItem[];
}) {
  return (
    <section className="bg-surface-muted py-24 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {description}
            </p>
          )}
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-brand-steel">
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
