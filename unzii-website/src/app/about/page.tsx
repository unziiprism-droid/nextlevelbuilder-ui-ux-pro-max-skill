import type { Metadata } from "next";
import {
  Gauge,
  Globe2,
  Handshake,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { Benefits } from "@/components/services/Benefits";
import { Features } from "@/components/services/Features";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Unzii is a technology agency focused on website development and SEO, built around honesty, direct communication, and real craftsmanship.",
};

const values = [
  {
    icon: Handshake,
    title: "Honesty first",
    description:
      "We'd rather tell you something you don't want to hear than sell you something that won't work.",
  },
  {
    icon: Sparkles,
    title: "Craftsmanship",
    description:
      "Every detail, from spacing to page speed, gets the same level of care as the big decisions.",
  },
  {
    icon: Gauge,
    title: "Performance obsessed",
    description:
      "A beautiful site that loads slowly isn't a finished product. Speed and usability are never an afterthought.",
  },
  {
    icon: MessageCircle,
    title: "Direct communication",
    description:
      "You talk to the people actually building your project, not a layer of account managers.",
  },
  {
    icon: Globe2,
    title: "Global mindset",
    description:
      "We work with businesses across different countries and time zones, and build our process around that.",
  },
  {
    icon: TrendingUp,
    title: "Long term thinking",
    description:
      "We build for where your business is going, not just where it is today.",
  },
];

const workPrinciples = [
  "Every project starts with a real conversation, not a generic form",
  "Clear timelines communicated before work begins",
  "Direct access to the people building your project",
  "No jargon filled reports or vague updates",
  "Performance and SEO considered from day one",
  "Design decisions made with a reason, not a trend",
  "Honest recommendations, even when they're not what you expected",
  "Support available after launch, not just before",
];

const faqs = [
  {
    question: "Who is Unzii?",
    answer:
      "Unzii is a technology agency focused on website development and SEO, built around direct communication, real craftsmanship, and honest results. Full stack application development is coming soon as an additional service.",
  },
  {
    question: "Do you work with international or global clients?",
    answer:
      "Yes. We work with businesses across different countries and time zones, and our process and communication are built to work well remotely from the start.",
  },
  {
    question: "How big is your team?",
    answer:
      "We stay small and focused so every project gets real attention, not layers of account managers and subcontractors.",
  },
  {
    question: "What makes Unzii different from other agencies?",
    answer:
      "We don't rely on templates, filler content, or fake urgency to sell projects. Every decision is made with a clear reason, and we're upfront about what will and won't help your business.",
  },
  {
    question: "How do I start working with you?",
    answer:
      "Share some details about your project on our Start Your Project page, and we'll follow up with next steps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ServiceHero
        eyebrow="About Unzii"
        heading="We Build Technology That Grows Real Businesses"
        description="Unzii exists to give businesses of every size access to fast, modern websites and real search visibility, without the bloat, guesswork, or empty promises so much of this industry runs on."
        secondaryLabel="See What We Value"
        secondaryHref="#values"
      />
      <Overview
        eyebrow="Why Unzii"
        heading="Built around how business actually grows"
        paragraphs={[
          "Too many businesses are sold a website or a stack of SEO tactics with no real connection to growth. Unzii exists to close that gap, building technology that is judged by whether it actually moves your business forward, not just how it looks in a portfolio.",
          "We stay small and focused on purpose. Every project gets direct attention from the people actually doing the work, not handed off between account managers and subcontractors.",
        ]}
        panelTitle="What guides our work"
        panelPoints={[
          "Clarity over jargon",
          "Performance over decoration",
          "Honesty over empty promises",
          "Long term thinking over quick wins",
          "Direct communication, always",
        ]}
      />
      <div id="values" className="scroll-mt-20">
        <Benefits
          eyebrow="Our Values"
          heading="What we value"
          description="These aren't slogans on a wall. They shape every decision we make on your project."
          items={values}
        />
      </div>
      <Features
        eyebrow="How We Work"
        heading="A few principles behind every project"
        description="Regardless of size, every engagement follows the same standards."
        features={workPrinciples}
      />
      <FAQ eyebrow="FAQ" heading="About Unzii, answered" faqs={faqs} />
      <FinalCTA
        heading="Want to work with a team that actually cares about your results?"
        description="Tell us about your business, and let's see if we're a good fit. No pressure, no fake urgency, just a straightforward conversation."
      />
    </>
  );
}
