import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Features({
  eyebrow = "What's Included",
  heading,
  description,
  features,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  features: string[];
}) {
  return (
    <section className="py-24 lg:py-32">
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

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-bg text-brand-supporting">
                  <Check className="size-3" aria-hidden />
                </span>
                <span className="text-sm leading-relaxed text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
