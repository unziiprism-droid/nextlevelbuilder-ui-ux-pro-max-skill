import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { CityGrid } from "@/components/countries/CityGrid";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Local SEO Agency for Small Businesses in the US",
  description:
    "Unzii is a local SEO agency for small businesses in the United States, offering affordable local SEO services, Google Business Profile optimization, and SEO packages for small business owners in San Francisco, New York, Austin, and beyond.",
};

const cities = [
  {
    name: "San Francisco",
    description:
      "Local SEO services for small businesses in San Francisco, technical audits, Google Business Profile optimization, and local keyword strategy, without agency-sized retainers.",
  },
  {
    name: "New York",
    description:
      "A local SEO agency for small businesses in New York, practical local SEO consulting focused on getting you found by nearby customers on Google.",
  },
  {
    name: "Austin",
    description:
      "Affordable local SEO services for small businesses in Austin, straightforward technical SEO and Google Business Profile work, with direct communication throughout.",
  },
];

export default function SeoServicesUnitedStatesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Local SEO Agency for Small Business"
        heading="Affordable Local SEO Services for Small Businesses"
        description="We're a local SEO agency and consultant for small businesses across the US, offering affordable SEO packages, Google Business Profile optimization, and practical local SEO services that help nearby customers find you."
        heroImage="/countries/united-states.jpg"
      />

      <Overview
        eyebrow="Overview"
        heading="A local SEO agency built for small business budgets"
        paragraphs={[
          "Looking for a local SEO agency near you? Unzii works with small businesses across the US, offering affordable local SEO services and straightforward local SEO consulting, without the bloated retainers bigger SEO companies charge.",
          "From Google Business Profile optimization to on page fixes and local keyword targeting, we handle the technical work that gets small businesses found on Google Maps and in local search results, in San Francisco, New York, Austin, and beyond.",
        ]}
        panelTitle="Every engagement includes"
        panelPoints={[
          "Local SEO audit and Google Business Profile optimization",
          "Local keyword research and mapping",
          "On page optimization",
          "Citations and local listing consistency",
          "Monthly reporting in plain language",
          "Direct communication throughout",
        ]}
      />

      <CityGrid cities={cities} countryName="the United States" />

      <FinalCTA
        heading="Ready to get found by local customers on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
