import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/shared/Process";
import { Technologies } from "@/components/shared/Technologies";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: { absolute: "SEO Agency for Startups | Fast Websites That Rank — Unzii" },
  description:
    "Unzii is an SEO agency for startups — we build fast, SEO-optimized websites that help growing businesses get found on Google.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Process />
      <Technologies />
      <PortfolioPreview />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
