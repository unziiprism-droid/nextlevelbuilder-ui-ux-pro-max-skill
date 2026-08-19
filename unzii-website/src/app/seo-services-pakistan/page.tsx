import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { CityGrid } from "@/components/countries/CityGrid";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "SEO Services in Pakistan",
  description:
    "Unzii offers SEO services in Pakistan, including Karachi, Lahore, and Gujranwala, affordable, results-driven, and transparent.",
};

const cities = [
  {
    name: "Karachi",
    description:
      "SEO services in Karachi for businesses that want to rank on Google in Pakistan's biggest, most competitive market, technical fixes, keyword research, and content that actually moves rankings.",
  },
  {
    name: "Lahore",
    description:
      "SEO services in Lahore built to get local and growing businesses found, practical, technical work, not vague promises, with clear monthly reporting in plain language.",
  },
  {
    name: "Gujranwala",
    description:
      "SEO services in Gujranwala for businesses that want the same technical, results-driven process big-city agencies charge more for, without cutting corners.",
  },
];

export default function SeoServicesPakistanPage() {
  return (
    <>
      <ServiceHero
        eyebrow="SEO Services in Pakistan"
        heading="SEO Services Across Pakistan"
        description="We provide SEO services in Pakistan for businesses in Karachi, Lahore, Gujranwala, and beyond, practical, technical work that helps you show up on Google, not vague promises."
        heroImage="/countries/pakistan.jpg"
      />

      <Overview
        eyebrow="Overview"
        heading="Straightforward SEO services in Pakistan"
        paragraphs={[
          "Whether you're just getting started or scaling across Pakistan, visibility on Google is often the difference between being found and being invisible. Our SEO services focus on the fundamentals: technical health, relevant content, and consistent work over time.",
          "We work with businesses in Karachi, Lahore, and Gujranwala directly, and serve clients across Pakistan and internationally using the same transparent, results-driven process, no jargon-filled reports, no vague promises.",
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

      <CityGrid cities={cities} countryName="Pakistan" />

      <FinalCTA
        heading="Ready to get found on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
