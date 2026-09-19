import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Glow } from "@/components/ui/Glow";
import { cn } from "@/lib/utils";

export function FinalCTA({
  heading = "Ready to grow your business online?",
  headingClassName,
  description = "Tell us about your project and we'll get back to you with next steps. No pressure, no fake urgency, just a straightforward conversation.",
  primaryLabel = "Start Your Project",
  primaryHref = "/start-your-project",
}: {
  heading?: string;
  headingClassName?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-yellow py-24 lg:py-28">
      <Glow className="-top-20 left-[8%] h-72 w-72" color="white" opacity={35} />
      <Glow className="-bottom-24 right-[10%] h-80 w-80" color="var(--color-brand-secondary)" opacity={8} />
      <Glow className="top-1/4 right-[30%] h-40 w-40" color="white" opacity={22} />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className={cn("max-w-2xl text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl", headingClassName)}>
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-secondary/70">
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
            className="text-brand-secondary hover:bg-brand-secondary/10"
          >
            Contact Us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
