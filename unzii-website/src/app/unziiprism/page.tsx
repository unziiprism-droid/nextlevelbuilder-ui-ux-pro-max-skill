import type { Metadata } from "next";
import { Palette, Type, BookOpen, Sparkles } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Benefits } from "@/components/services/Benefits";
import { Overview } from "@/components/services/Overview";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { plaax } from "./fonts";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Palette,
    title: "Logo & Brand Marks",
    description:
      "A distinct mark built to work at every size, from a favicon to a storefront sign.",
  },
  {
    icon: Type,
    title: "Colour & Typography Systems",
    description:
      "A defined palette and type scale so your brand looks consistent everywhere it shows up.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    description:
      "A clear reference document so anyone on your team, or any vendor, can apply your brand correctly.",
  },
  {
    icon: Sparkles,
    title: "Visual Design",
    description:
      "Social media kits, presentation decks, and print-ready assets that match your identity.",
  },
];

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
    <div className={cn(plaax.variable)}>
      <ServiceHero
        eyebrow="Unziiprism"
        eyebrowLogo={{ src: "/logo/unziiprism-logo.png", alt: "Unziiprism", width: 3553, height: 694 }}
        heading={<><span className="text-brand-yellow">Unzii</span>&apos;s Design Department</>}
        headingClassName="font-plaax font-bold tracking-normal"
        description="Logo design, brand identity, and visual design — handled by the same team behind Unzii, under one dedicated design department."
        secondaryLabel="Get in Touch"
        secondaryHref="/contact"
        variant="dark"
      />

      <Benefits
        heading="What Unziiprism delivers"
        headingClassName="font-plaax font-bold tracking-normal"
        description="Everything a brand needs to look and feel consistent, wherever it shows up."
        items={benefits}
        variant="dark"
      />

      <Overview
        eyebrow="About Unziiprism"
        heading="The design side of Unzii"
        headingClassName="font-plaax font-bold tracking-normal"
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

      <FAQ
        eyebrow="FAQ"
        heading="Unziiprism, answered"
        headingClassName="font-plaax font-bold tracking-normal"
        faqs={faqs}
        background="bg-brand-secondary-light"
        dark
      />

      <FinalCTA
        heading="Need a logo or brand identity?"
        headingClassName="font-plaax font-bold tracking-normal"
        description="Tell us about your business and we'll show you how Unziiprism can help bring your brand to life."
        primaryLabel="Start a Design Project"
      />
    </div>
  );
}
