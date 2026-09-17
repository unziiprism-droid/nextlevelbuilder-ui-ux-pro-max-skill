import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Overview({
  eyebrow,
  heading,
  paragraphs,
  panelTitle,
  panelPoints,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  panelTitle: string;
  panelPoints: string[];
}) {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
              {heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-surface-muted p-8">
              <h3 className="text-lg font-semibold text-brand-secondary">{panelTitle}</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {panelPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-text-inverse">
                      <Check className="size-3" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-text-secondary">{point}</span>
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
