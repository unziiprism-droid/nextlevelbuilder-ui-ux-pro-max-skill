import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { CityGrid } from "@/components/countries/CityGrid";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "SEO Services in Pakistan",
  description:
    "Unzii provides SEO services across Pakistan, including Karachi, Lahore, and Gujranwala, affordable, results-driven, and transparent.",
};

const cities = [
  { name: "Karachi", image: "/countries/pakistan-karachi.jpg" },
  { name: "Lahore", image: "/countries/pakistan-lahore.jpg", href: "/seo-services-lahore" },
  { name: "Gujranwala", image: "/countries/pakistan-gujranwala.jpg" },
];

export default function SeoServicesPakistanPage() {
  return (
    <>
      <ServiceHero
        eyebrow="SEO Services in Pakistan"
        heading="SEO Services Across Pakistan"
        description="We work with businesses across Pakistan, from Karachi to Lahore to Gujranwala, practical, technical SEO that helps you show up on Google."
        background="bg-surface-tint"
      />

      <CityGrid cities={cities} />

      <FinalCTA
        heading="Ready to get found on Google?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
