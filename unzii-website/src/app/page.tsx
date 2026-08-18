import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SeoReviewOffer } from "@/components/home/SeoReviewOffer";
import { Pricing } from "@/components/home/Pricing";
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
      <SeoReviewOffer />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
