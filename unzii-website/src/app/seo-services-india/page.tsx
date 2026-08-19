import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { CityGrid } from "@/components/countries/CityGrid";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "SEO Agency in India",
  description:
    "Unzii is an affordable SEO agency in India, offering low price SEO services and website development for startups and growing businesses in Mumbai, Vadodara, Calicut, and beyond.",
};

const cities = [
  {
    name: "Mumbai",
    description:
      "Looking for the best SEO agency in Mumbai? We provide low price SEO services and website development for startups and growing businesses that need real results, not just reports.",
  },
  {
    name: "Vadodara",
    description:
      "Affordable SEO services in Vadodara, technical audits, keyword research, and on page optimization from a website development agency and SEO agency in India that keeps things transparent.",
  },
  {
    name: "Calicut",
    description:
      "SEO services in Calicut for businesses that want to show up on Google without paying big-city agency prices, low price SEO services with a clear, honest process.",
  },
];

export default function SeoServicesIndiaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="SEO Agency in India"
        heading="Affordable SEO Services in India"
        description="Looking for an SEO agency near me in India? We provide low price SEO services and website development agency work for startups and growing businesses, without cutting corners."
        heroImage="/countries/india.jpg"
      />

      <Overview
        eyebrow="Overview"
        heading="A straightforward SEO agency in India"
        paragraphs={[
          "Finding the best SEO agency in India shouldn't mean choosing between quality and price. We built Unzii to offer low price SEO services that still cover the fundamentals properly: technical health, relevant content, and consistent work over time.",
          "As a website development agency and SEO agency in India, we work with businesses in Mumbai, Vadodara, Calicut, and across the country, using the same transparent, results-driven process, no jargon-filled reports, no vague promises.",
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

      <CityGrid cities={cities} countryName="India" />

      <FinalCTA
        heading="Ready to get found on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
