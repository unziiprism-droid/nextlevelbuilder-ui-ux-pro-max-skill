import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { CityGrid } from "@/components/countries/CityGrid";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "SEO Services in India",
  description:
    "Unzii provides SEO services across India, including Mumbai, Vadodara, and Calicut, affordable, results-driven, and transparent.",
};

const cities = [
  { name: "Mumbai", image: "/countries/india-mumbai.jpg" },
  { name: "Vadodara", image: "/countries/india-vadodara.jpg" },
  { name: "Calicut", image: "/countries/india-calicut.jpg" },
];

export default function SeoServicesIndiaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="SEO Services in India"
        heading="SEO Services Across India"
        description="We work with startups and growing businesses across India, from Mumbai to Vadodara to Calicut, practical, technical SEO that helps you show up on Google."
        background="bg-surface-tint"
      />

      <CityGrid cities={cities} countryName="India" />

      <FinalCTA
        heading="Ready to get found on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
