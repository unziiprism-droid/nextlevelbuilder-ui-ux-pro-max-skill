import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/shared/FAQ";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Unzii. Send a message and a real person will read it and reply, usually within one to two business days.",
};

const nextSteps = [
  {
    icon: Mail,
    title: "We read every message",
    description: "A real person reads what you send, not a bot or a queue.",
  },
  {
    icon: Clock,
    title: "You hear back quickly",
    description: "Expect a reply within one to two business days, usually sooner.",
  },
  {
    icon: Calendar,
    title: "We talk it through",
    description: "If it's a good fit, we set up a call to go over your project in detail.",
  },
];

const faqs = [
  {
    question: "What's the fastest way to reach you?",
    answer:
      "The form on this page, or emailing us directly at hello@unzii.com. Both go to the same place.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes. The first conversation about your project costs nothing and comes with no pressure to commit.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "Usually within one to two business days. If it takes longer than that, feel free to follow up.",
  },
  {
    question: "I'm not ready to start a project yet. Can I still reach out?",
    answer:
      "Of course. Questions, early ideas, or just wanting to understand how we work are all good reasons to get in touch.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl">
                Let&apos;s Talk About Your Project
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
                Whether you have a clear brief or just an early idea, send us a message.
                No forms full of jargon, no automated replies pretending to be a person.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex w-fit items-center gap-2.5 text-sm font-medium text-brand-secondary transition-colors hover:text-brand-supporting"
                >
                  <Mail className="size-4" aria-hidden />
                  {siteConfig.email}
                </Link>
                <Link
                  href="/start-your-project"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand-supporting"
                >
                  Ready to start? Fill out our project form
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-surface-muted p-8 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface-muted py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {nextSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="flex flex-col gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-surface text-brand-supporting">
                  <step.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-secondary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FAQ eyebrow="FAQ" heading="Contact, answered" faqs={faqs} />

      <section className="py-20 lg:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-md text-base leading-relaxed text-text-secondary">
            Already know what you need built? Skip ahead and tell us about your project
            directly.
          </p>
          <Button href="/start-your-project" showArrow>
            Start Your Project
          </Button>
        </Container>
      </section>
    </>
  );
}
