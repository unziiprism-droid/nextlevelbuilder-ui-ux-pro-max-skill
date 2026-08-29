import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA({
  heading = "Ready to grow your business online?",
  description = "Tell us about your project and we'll get back to you with next steps. No pressure, no fake urgency, just a straightforward conversation.",
  primaryLabel = "Start Your Project",
  primaryHref = "/start-your-project",
}: {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-secondary py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, color-mix(in srgb, var(--color-brand-primary) 35%, transparent), transparent)",
        }}
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text-inverse sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-inverse-muted">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="inverse" size="lg" showArrow>
            {primaryLabel}
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            size="lg"
            className="text-text-inverse hover:bg-white/10"
          >
            Contact Us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
