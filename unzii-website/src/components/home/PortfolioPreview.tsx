import { Code2, Search, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const categories = [
  { icon: Code2, label: "Website Redesign" },
  { icon: Search, label: "SEO Growth" },
  { icon: Sparkles, label: "Full Stack Build" },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-border bg-surface-muted px-8 py-16 text-center sm:px-16 lg:py-20">
          <Reveal className="mx-auto max-w-2xl">
            <Eyebrow className="justify-center">Portfolio</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
              Our next success story could be yours
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              We&apos;re building our case study library one project at a time. Rather
              than pad this section with filler, we&apos;d rather show you real,
              measurable work as it launches, starting with yours.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <div
                key={category.label}
                className="flex items-center gap-2.5 rounded-full border border-dashed border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-text-secondary"
              >
                <category.icon className="size-4 text-brand-supporting" aria-hidden />
                {category.label}
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.18} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/start-your-project" showArrow>
              Start Your Project
            </Button>
            <Button href="/portfolio" variant="ghost">
              Visit Portfolio Page
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
