import { Globe2, LineChart, MessageCircle, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: Rocket,
    title: "Performance obsessed",
    description:
      "Every build is engineered for speed from the ground up, with optimized assets, clean code, and Core Web Vitals in mind at every step.",
  },
  {
    icon: LineChart,
    title: "SEO built in, not bolted on",
    description:
      "Search visibility is part of the architecture from day one, not an afterthought added after launch.",
  },
  {
    icon: MessageCircle,
    title: "Direct communication",
    description:
      "You work directly with the people building your project, not account managers relaying messages back and forth.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent process",
    description:
      "Clear milestones, honest timelines, and no reports full of jargon. You always know exactly where your project stands.",
  },
  {
    icon: Sparkles,
    title: "Modern craftsmanship",
    description:
      "Thoughtful design and clean, scalable code, built to feel premium and to hold up as your business grows.",
  },
  {
    icon: Globe2,
    title: "Built for global clients",
    description:
      "We work with businesses across time zones and markets, adapting to how your team operates.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface-muted py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Why Unzii</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
              A team that treats your business like it&apos;s our own
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
              As an SEO agency for startups, we&apos;re not a template factory. Every
              project gets deliberate design decisions, engineering discipline, and a
              direct line to the people doing the work.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-brand-supporting">
                    <reason.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-brand-secondary">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
