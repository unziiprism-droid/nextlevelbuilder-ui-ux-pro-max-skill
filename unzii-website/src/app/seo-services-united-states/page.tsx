import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { CityGrid } from "@/components/countries/CityGrid";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "SEO Agency for US Startups",
  description:
    "Unzii is an SEO agency for startups in the United States, helping early-stage and growing businesses in San Francisco, New York, Austin, and beyond build fast websites and get found on Google.",
};

const cities = [
  { name: "San Francisco", image: "/countries/us-san-francisco.jpg" },
  { name: "New York", image: "/countries/us-new-york.jpg" },
  { name: "Austin", image: "/countries/us-austin.jpg" },
];

export default function SeoServicesUnitedStatesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="SEO Agency for US Startups"
        heading="SEO Services for Startups Across the US"
        description="We work with early-stage and growing startups across the United States, practical, technical SEO and web development that helps you show up on Google and convert visitors into customers."
        heroImage="/countries/united-states.jpg"
      />

      <Overview
        eyebrow="Overview"
        heading="An SEO agency built for startups"
        paragraphs={[
          "Startups need an SEO agency that understands limited budgets and fast timelines. We focus on the fundamentals that actually move rankings: technical health, relevant content, and consistent execution, not bloated retainers or vague reporting.",
          "We work with startups and growing businesses in San Francisco, New York, Austin, and across the United States, combining SEO with fast, modern website development so you show up on Google and give visitors a reason to stay.",
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

      <CityGrid cities={cities} countryName="the United States" />

      <FinalCTA
        heading="Ready to get found on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
