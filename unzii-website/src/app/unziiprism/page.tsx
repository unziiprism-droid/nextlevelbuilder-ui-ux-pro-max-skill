import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Unziiprism — Unzii's Design Department",
  description:
    "Unziiprism is Unzii's in-house design department, handling logo design, brand identity, and visual design for the businesses we work with.",
};

const faqs = [
  {
    question: "What is Unziiprism?",
    answer:
      "Unziiprism is Unzii's design department — the part of our team that focuses on logo design, brand identity, and visual design, separate from the website and development side of what we do.",
  },
  {
    question: "Is Unziiprism a different company from Unzii?",
    answer:
      "No. Unziiprism is a department within Unzii, not a separate business. It exists so our design work has its own home, while staying part of the same team and the same standards.",
  },
  {
    question: "Can I hire Unziiprism for just a logo or brand identity, without a website?",
    answer:
      "Yes. Branding and design work through Unziiprism can be its own project, whether or not you're also building a website with us.",
  },
  {
    question: "Where can I see examples of Unziiprism's design work?",
    answer:
      "We're building out this page with real projects as they're completed. In the meantime, reach out and we're happy to share relevant work directly.",
  },
];

export default function UnziiprismPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Unziiprism"
        heading="Unzii's Design Department"
        description="Logo design, brand identity, and visual design — handled by the same team behind Unzii, under one dedicated design department."
        secondaryLabel="Get in Touch"
        secondaryHref="/contact"
      />

      <Overview
        eyebrow="About Unziiprism"
        heading="The design side of Unzii"
        paragraphs={[
          "Unziiprism is Unzii's design department, focused on logo design, brand identity, and visual design work. It isn't a separate company — it's part of the same team, held to the same standards of honesty and quality as everything else we build.",
          "We're building out this page over time as branding projects are completed, so you can see real work rather than placeholders. If you need a logo or brand identity now, get in touch and we'll walk you through it directly.",
        ]}
        panelTitle="What Unziiprism covers"
        panelPoints={[
          "Logo design and brand marks",
          "Color palettes and typography systems",
          "Brand identity guidelines",
          "Visual design for print and digital",
        ]}
      />

      <FAQ eyebrow="FAQ" heading="Unziiprism, answered" faqs={faqs} />

      <FinalCTA
        heading="Need a logo or brand identity?"
        description="Tell us about your business and we'll show you how Unziiprism can help bring your brand to life."
        primaryLabel="Start a Design Project"
      />
    </>
  );
}
