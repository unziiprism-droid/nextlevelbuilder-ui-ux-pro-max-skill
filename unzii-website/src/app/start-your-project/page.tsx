import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectForm } from "@/components/start-project/ProjectForm";
import { FAQ } from "@/components/shared/FAQ";

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Tell us about your project in a few quick steps. Unzii reads every submission directly and replies within one to two business days.",
};

const faqs = [
  {
    question: "Do I need to know exact requirements before filling this out?",
    answer:
      "No. A rough idea of what you need and your goals is enough to get the conversation started. We'll help shape the details together.",
  },
  {
    question: "What happens after I submit this form?",
    answer:
      "We read every submission ourselves and reply within one to two business days with next steps, usually a short call to go over your project.",
  },
  {
    question: "Is there a minimum project size?",
    answer:
      "No fixed minimum. Share your budget range and we'll be upfront about whether it's a good fit before any work begins.",
  },
  {
    question: "Will I get a fixed price right away?",
    answer:
      "Not from this form alone. Pricing depends on scope, so we'll confirm a clear, honest quote once we understand what you need.",
  },
];

export default function StartYourProjectPage() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Start Your Project</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl">
              Tell Us About Your Project
            </h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              A few quick questions help us understand what you need before we talk.
              Takes about two minutes, and a real person reads every submission.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container className="mx-auto max-w-2xl">
          <Reveal delay={0.1}>
            <ProjectForm />
          </Reveal>
        </Container>
      </section>

      <FAQ eyebrow="FAQ" heading="Before you submit" faqs={faqs} />
    </>
  );
}
