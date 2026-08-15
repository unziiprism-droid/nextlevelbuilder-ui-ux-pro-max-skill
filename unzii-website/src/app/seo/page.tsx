import type { Metadata } from "next";
import {
  BarChart3,
  ClipboardCheck,
  FileSearch,
  Link2,
  Search,
  TrendingUp,
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { Benefits } from "@/components/services/Benefits";
import { Features } from "@/components/services/Features";
import { Process } from "@/components/shared/Process";
import { Technologies } from "@/components/shared/Technologies";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Best SEO Agency for Startups",
  description:
    "Looking for the best SEO agency for startups? Unzii delivers technical, on-page, and content SEO that compounds as your business grows.",
};

const benefits = [
  {
    icon: Search,
    title: "More qualified traffic",
    description:
      "Rank for the searches your actual customers are making, not just any traffic that passes through.",
  },
  {
    icon: TrendingUp,
    title: "Results that compound",
    description:
      "Unlike paid ads, SEO gains keep working for you long after the initial effort, building momentum over time.",
  },
  {
    icon: BarChart3,
    title: "Clear, honest reporting",
    description:
      "You'll see exactly what changed, why, and how it affected your rankings and traffic. No vague dashboards.",
  },
  {
    icon: FileSearch,
    title: "A stronger technical foundation",
    description:
      "Site speed, crawlability, and structure improvements that help both search engines and real visitors.",
  },
  {
    icon: Link2,
    title: "Improved authority",
    description:
      "A structured approach to content and internal linking that builds trust with search engines over time.",
  },
  {
    icon: ClipboardCheck,
    title: "Ongoing optimization",
    description:
      "SEO is never treated as a one time task. We monitor performance and keep refining as search evolves.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit & Research",
    description:
      "A full technical and content audit of your site, plus research into what your customers are actually searching for.",
  },
  {
    number: "02",
    title: "Technical Foundation",
    description:
      "We fix crawlability, site speed, and structural issues that hold your rankings back before anything else.",
  },
  {
    number: "03",
    title: "On Page Optimization",
    description:
      "Titles, headings, meta data, and content structured around the keywords that matter for your business.",
  },
  {
    number: "04",
    title: "Content & Authority",
    description:
      "A content and internal linking strategy that builds relevance and trust with search engines over time.",
  },
  {
    number: "05",
    title: "Monitor & Refine",
    description:
      "We track rankings and traffic monthly, and adjust the strategy as your results and the search landscape change.",
  },
];

const features = [
  "Full technical SEO audit",
  "Keyword research and mapping",
  "On page optimization for titles and headings",
  "Site speed and Core Web Vitals improvements",
  "Structured data and schema markup",
  "Content strategy recommendations",
  "Internal linking strategy",
  "Search Console and Analytics setup",
  "Monthly performance reporting",
  "Ongoing monitoring and optimization",
];

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most businesses start seeing measurable movement within a few months, with stronger gains building over six months and beyond. SEO compounds, it does not happen overnight, and we will always be upfront about realistic timelines.",
  },
  {
    question: "Do you guarantee first page rankings?",
    answer:
      "No. Nobody can honestly guarantee specific rankings, and we won't pretend otherwise. What we guarantee is a disciplined, transparent process focused on real, measurable improvement.",
  },
  {
    question: "Is SEO a one time project or an ongoing service?",
    answer:
      "SEO works best as an ongoing service. Search engines, competitors, and your own site all keep changing, so we monitor and refine the strategy continuously rather than treating it as a single project.",
  },
  {
    question: "Do you only work on websites you build?",
    answer:
      "No. We provide SEO services for existing websites as well as ones we build for you, regardless of the platform they run on.",
  },
  {
    question: "How do you measure and report progress?",
    answer:
      "We track rankings, organic traffic, and conversions using Google Search Console and Analytics, and share clear monthly reports that explain what changed and why.",
  },
  {
    question: "Can SEO be combined with a new website build?",
    answer:
      "Yes, and it's often the strongest approach. Pairing SEO with our website development service means your site is built with search performance in mind from day one.",
  },
];

export default function SeoPage() {
  return (
    <>
      <ServiceHero
        eyebrow="SEO Agency for Startups"
        heading="SEO That Turns Search Into Growth for Startups"
        description="We improve how search engines see your business and how customers find you, with a process built on data, not guesswork."
        secondaryLabel="See Our Process"
        secondaryHref="#process"
        background="bg-surface-tint"
      />
      <Overview
        eyebrow="Overview"
        heading="SEO is not a one time task"
        paragraphs={[
          "Search rankings are earned through a combination of technical health, relevant content, and consistent effort over time. We treat SEO as an ongoing discipline, not a checklist you complete once.",
          "SEO built specifically for startup growth stages looks different from SEO for an established enterprise, and every engagement starts with real data about your site and your market, so the strategy is built around what will actually move the needle for your business.",
        ]}
        panelTitle="Every SEO engagement includes"
        panelPoints={[
          "Technical SEO audit and fixes",
          "Keyword research and mapping",
          "On page optimization",
          "Content and internal linking strategy",
          "Monthly reporting and reviews",
          "Direct communication throughout",
        ]}
      />
      <Benefits
        heading="Why startups invest in SEO with Unzii"
        description="Search visibility is a long term asset. Here's what that investment gets you."
        items={benefits}
      />
      <Process id="process" heading="How we approach SEO" steps={processSteps} />
      <Features
        heading="What's included in every SEO engagement"
        description="No hidden extras. Every engagement ships with the essentials built in."
        features={features}
      />
      <Technologies
        eyebrow="Our Toolkit"
        heading="Backed by the tools that matter for search"
        items={[
          "Google Search Console",
          "Google Analytics",
          "Google Tag Manager",
          "Screaming Frog",
          "Ahrefs",
          "SEMrush",
          "PageSpeed Insights",
          "Schema.org",
        ]}
      />
      <FAQ heading="SEO, answered" faqs={faqs} />
      <FinalCTA
        heading="Ready to turn search into a growth channel?"
        description="Tell us about your business and your goals, and we'll get back to you with next steps. No pressure, no fake urgency, just a straightforward conversation."
      />
    </>
  );
}
