import type { Metadata } from "next";
import { FirstClientsOffer } from "@/components/home/FirstClientsOffer";
import { Hero } from "@/components/home/Hero";
import { SeoReviewOffer } from "@/components/home/SeoReviewOffer";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: { absolute: "Website Development Agency for Startups | Unzii" },
  description:
    "Unzii is a website development agency for startups — we build fast, custom websites and full-stack web applications for growing businesses.",
};

export default function Home() {
  return (
    <>
      <FirstClientsOffer />
      <Hero />
      <SeoReviewOffer />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
