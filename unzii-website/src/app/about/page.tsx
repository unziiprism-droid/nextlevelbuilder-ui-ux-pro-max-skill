import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Unzii is a technology agency focused on website development and SEO, built around honesty, direct communication, and real craftsmanship.",
};

const faqs = [
  {
    question: "Who is Unzii?",
    answer:
      "Unzii is an agency built for startups and growing businesses that can't invest heavily in their online presence, and as a result struggle to rank on Google. We provide them with genuinely good, quality work anyway.",
  },
  {
    question: "Do you work with startups on a limited budget?",
    answer:
      "Yes, that's who Unzii was built for first. We started this agency specifically so startups could get a genuinely good website without being priced out of one, alongside our work with larger, established businesses.",
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
        dark
      />
      <Overview
        eyebrow="Our Story"
        heading="Started to make a real website within reach"
        paragraphs={[
          "Unzii was founded by Unsa Zafar, with the idea taking shape in March 2026. It started from a simple problem: too many startups have the drive to grow, but not the budget for a website that actually represents them, and end up stuck without a real online presence because of it.",
          "That is who we built Unzii for first, startups who need a genuinely good website without being priced out of one. Alongside that, we work with larger, established businesses too, building performance driven websites and pairing them with SEO to help them rank where their customers are searching.",
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
      <FAQ eyebrow="FAQ" heading="About Unzii, answered" faqs={faqs} />
      <FinalCTA
        heading="Want to work with a team that actually cares about your results?"
        description="Tell us about your business, and let's see if we're a good fit. No pressure, no fake urgency, just a straightforward conversation."
      />
    </>
  );
}
