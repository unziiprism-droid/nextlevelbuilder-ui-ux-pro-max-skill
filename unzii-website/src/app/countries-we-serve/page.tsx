import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { CountryGrid } from "@/components/countries/CountryGrid";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Countries We Serve",
  description:
    "Unzii provides SEO and website development services to startups and growing businesses across the United States, India, and Pakistan.",
};

export default function CountriesWeServePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Where We Work"
        heading="SEO and Websites, Wherever You're Growing"
        description="We work with startups and growing businesses across multiple countries, with the same transparent, results-driven process everywhere."
        background="bg-surface-tint"
      />

      <CountryGrid />

      <FinalCTA
        heading="Ready to get found on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
