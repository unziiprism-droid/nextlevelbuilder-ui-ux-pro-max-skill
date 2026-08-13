import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, your customers, and your goals before a single pixel is designed.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and visual design tailored to your brand, reviewed and refined together with you.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, scalable code built for speed, accessibility, and search performance from the start.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We ship, monitor performance, and keep optimizing. Your site is never just left to sit.",
  },
];

export function Process({
  id,
  eyebrow = "Our Process",
  heading = "A clear path from idea to launch",
  description = "No guesswork, no surprises. Every project follows the same disciplined process.",
  steps = defaultSteps,
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  steps?: ProcessStep[];
}) {
  const gridCols =
    steps.length >= 5
      ? "sm:grid-cols-2 lg:grid-cols-5"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section id={id} className="scroll-mt-20 py-24 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            {description}
          </p>
        </Reveal>

        <div className={`relative mt-16 grid grid-cols-1 gap-10 lg:gap-8 ${gridCols}`}>
          <div
            aria-hidden
            className="absolute top-6 left-0 right-0 hidden h-px bg-border lg:block"
          />
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} className="relative">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-6">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-brand-secondary">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-secondary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
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
