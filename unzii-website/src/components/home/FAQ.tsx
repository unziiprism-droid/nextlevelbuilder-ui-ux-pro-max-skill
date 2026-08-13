import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    question: "What services does Unzii offer?",
    answer:
      "We build custom websites and provide SEO services to help businesses grow online. Full stack application development is coming soon as an additional service.",
  },
  {
    question: "Do you work with international or global clients?",
    answer:
      "Yes. Unzii works with businesses across different countries and time zones, and we structure communication and project timelines to fit how your team operates.",
  },
  {
    question: "How long does a typical website project take?",
    answer:
      "Timelines depend on scope, but most website projects move from discovery to launch within a few weeks. We'll give you a clear timeline before work begins, not vague estimates.",
  },
  {
    question: "Will my website be optimized for SEO from the start?",
    answer:
      "Yes. Every site we build follows technical SEO best practices from day one, with clean semantic markup, fast load times, and a structure search engines can crawl effectively.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on your project's scope and goals. Share the details on our Start Your Project page and we'll follow up with a clear, honest quote.",
  },
  {
    question: "What happens after my website launches?",
    answer:
      "Launch isn't the finish line. We monitor performance and are available for ongoing SEO, updates, and improvements as your business grows.",
  },
];

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 divide-y divide-border rounded-2xl border border-border bg-surface">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-brand-secondary marker:content-none">
                {faq.question}
                <ChevronDown
                  className="size-5 shrink-0 text-text-muted transition-transform duration-300 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {faq.answer}
              </p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
