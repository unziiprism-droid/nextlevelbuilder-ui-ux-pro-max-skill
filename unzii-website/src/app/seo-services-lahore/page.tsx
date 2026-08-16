import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "SEO Services in Lahore",
  description:
    "Looking for SEO services in Pakistan? Unzii offers SEO services in Lahore and across Pakistan — affordable, results-driven, and transparent.",
};

const faqs = [
  {
    question: "Do you only work with businesses in Lahore?",
    answer:
      "No. We provide SEO services in Lahore and across Pakistan, and we also work with international clients. Wherever your business is, the process is the same: transparent, technical, results-driven SEO.",
  },
  {
    question: "How much do SEO services in Pakistan cost with Unzii?",
    answer:
      "You can see our current starting packages on our pricing page. Every quote is tailored to your business and goals, share your details on our Start Your Project page and we'll follow up with a clear, honest number.",
  },
  {
    question: "My website was built cheaply and it's a mess. Can you still do SEO on it?",
    answer:
      "Often, yes, but sometimes the site itself is the real problem. If we find that's the case, we'll tell you honestly, and we can fix the foundation and the SEO together instead of layering SEO on top of a broken site.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most businesses see measurable movement within a few months, with stronger gains building over six months and beyond. We'll always be upfront about realistic timelines, not vague promises.",
  },
];

export default function SeoServicesLahorePage() {
  return (
    <>
      <ServiceHero
        eyebrow="SEO Services in Lahore"
        heading="SEO Services in Lahore, Built to Get You Found"
        description="We provide SEO services in Lahore and across Pakistan, practical, technical work that helps local and growing businesses show up on Google, not vague promises."
        secondaryLabel="See Pricing"
        secondaryHref="/#pricing"
        background="bg-surface-tint"
      />

      <Overview
        eyebrow="Overview"
        heading="Straightforward SEO services in Pakistan"
        paragraphs={[
          "Whether you're just getting started or scaling across Pakistan, visibility on Google is often the difference between being found and being invisible. Our SEO services in Lahore focus on the fundamentals: technical health, relevant content, and consistent work over time.",
          "We serve businesses in Lahore directly, and work with clients across Pakistan and internationally using the same transparent, results-driven process, no jargon-filled reports, no vague promises.",
        ]}
        panelTitle="Every engagement includes"
        panelPoints={[
          "Technical SEO audit and fixes",
          "Keyword research and mapping",
          "On page optimization",
          "Content and internal linking strategy",
          "Monthly reporting in plain language",
          "Direct communication throughout",
        ]}
      />

      <div className="bg-surface-muted">
        <FAQ eyebrow="FAQ" heading="SEO services in Lahore, answered" faqs={faqs} />
      </div>

      <FinalCTA
        heading="Ready to get found on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote in PKR. No pressure, no fake urgency."
      />
    </>
  );
}
