import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { CityGrid } from "@/components/countries/CityGrid";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "SEO Services in the United States",
  description:
    "Unzii is an SEO agency for US startups, helping early-stage and growing businesses build fast websites and get found on Google.",
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
        description="We work with early-stage and growing startups across the United States, practical, technical SEO that helps you show up on Google."
        background="bg-surface-tint"
      />

      <CityGrid cities={cities} countryName="the United States" />

      <FinalCTA
        heading="Ready to get found on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
