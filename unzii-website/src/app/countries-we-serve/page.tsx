import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
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
      <section className="border-b border-border bg-surface-muted/30 py-16 lg:py-20">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl">
            Websites Built for Businesses, Wherever You&apos;re Growing
          </h1>
        </Container>
      </section>

      <CountryGrid />

      <FinalCTA
        heading="Ready for a website that works for your business?"
        description="Tell us about your business and we'll follow up with a clear, honest quote. No pressure, no fake urgency."
      />
    </>
  );
}
