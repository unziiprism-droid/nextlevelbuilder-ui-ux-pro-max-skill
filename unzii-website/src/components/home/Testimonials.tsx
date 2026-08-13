import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Populate as real client testimonials come in — the layout below renders
// them automatically once this array is no longer empty.
const testimonials: Testimonial[] = [];

export function Testimonials() {
  return (
    <section className="bg-surface-muted py-24 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Client Voices</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            What our clients will say
          </h2>
        </Reveal>

        {testimonials.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name} className="rounded-2xl border border-border bg-surface p-8">
                <Quote className="size-6 text-brand-supporting" aria-hidden />
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-brand-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl rounded-2xl border border-dashed border-border-strong bg-surface p-10 text-center">
            <Quote className="mx-auto size-6 text-brand-supporting" aria-hidden />
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              We&apos;re early in our client journey and won&apos;t publish testimonials
              we haven&apos;t earned. This space is reserved for genuine feedback from
              the businesses we work with. Check back soon.
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
