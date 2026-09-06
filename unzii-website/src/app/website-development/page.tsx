import type { Metadata } from "next";
import { Gauge, LayoutTemplate, Lock, Search, TrendingUp, Wrench } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Benefits } from "@/components/services/Benefits";
import { Features } from "@/components/services/Features";
import { Technologies } from "@/components/shared/Technologies";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Website Design Agency for Startups",
  description:
    "Custom, high-performance websites built for startups — engineered for speed, SEO, and conversion from day one.",
};

const benefits = [
  {
    icon: Gauge,
    title: "Faster load times",
    description:
      "Optimized assets and clean code mean your site loads quickly on every device, which keeps visitors around.",
  },
  {
    icon: LayoutTemplate,
    title: "Built for every screen",
    description:
      "Responsive layouts that look and work great on phones, tablets, and desktops alike.",
  },
  {
    icon: Search,
    title: "SEO ready foundation",
    description:
      "Semantic markup and clean structure give search engines exactly what they need to find you.",
  },
  {
    icon: TrendingUp,
    title: "Designed to convert",
    description:
      "Every layout decision is made with your business goals and your visitors' actions in mind.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    description:
      "Modern hosting, HTTPS, and secure coding practices protect your business and your customers.",
  },
  {
    icon: Wrench,
    title: "Easy to maintain",
    description:
      "Clean, documented code that will not leave you stuck if you ever need changes down the road.",
  },
];

const features = [
  "Custom design tailored to your brand",
  "Fully responsive across all devices",
  "On page SEO setup included",
  "Fast, optimized performance",
  "Accessible, semantic markup",
  "Secure HTTPS hosting guidance",
  "Content management options",
  "Analytics and Search Console setup",
  "Clear documentation and handoff",
  "Support available after launch",
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Timelines depend on scope, but most website projects move from discovery to launch within a few weeks. We'll give you a clear timeline before work begins, not vague estimates.",
  },
  {
    question: "Do you use templates or page builders?",
    answer:
      "No. Every website we build is coded from scratch and designed specifically for your business, not adapted from a template.",
  },
  {
    question: "Will my website work well on mobile?",
    answer:
      "Yes. Every site we build is mobile first and tested across devices before launch.",
  },
  {
    question: "Can I update the content myself after launch?",
    answer:
      "In most cases, yes. Depending on the platform we use for your project, we can set up a content management system so you can make updates without needing a developer.",
  },
  {
    question: "Is SEO included in website development?",
    answer:
      "Yes. Technical SEO best practices — clean semantic markup, fast load times, and a crawlable structure — are built into every site from day one.",
  },
  {
    question: "What happens after my website launches?",
    answer:
      "We monitor performance after launch and are available for updates, fixes, and improvements as your business grows.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Website Design Agency for Startups"
        heading="Websites Built for Startups That Want to Grow"
        description="We design and build fast, modern websites engineered for real business results, not just good looks."
        background="bg-surface-tint"
      />
      <Benefits
        heading="Why businesses choose Unzii for their website"
        description="A website is an investment. Here's what that investment gets you."
        items={benefits}
      />
      <Features
        heading="What's included in every website"
        description="No hidden extras. Every project ships with the essentials built in."
        features={features}
      />
      <Technologies />
      <FAQ heading="Website development, answered" faqs={faqs} />
      <FinalCTA
        heading="Ready to build a website that actually works for your business?"
        description="Tell us about your project and we'll get back to you with next steps. No pressure, no fake urgency, just a straightforward conversation."
      />
    </>
  );
}
