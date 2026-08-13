import type { Metadata } from "next";
import {
  Database,
  Layers,
  Rocket,
  ShieldCheck,
  Users,
  Workflow,
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
  title: "Full Stack Development",
  description:
    "Full stack product engineering for web applications, coming soon from Unzii. Custom backends, databases, and real business logic, not just websites.",
};

const benefits = [
  {
    icon: Layers,
    title: "Beyond marketing sites",
    description:
      "Custom web applications with real functionality, not just pages that describe your business.",
  },
  {
    icon: Database,
    title: "Real data, real logic",
    description:
      "Databases, authentication, and business logic built around how your operations actually work.",
  },
  {
    icon: Workflow,
    title: "One team, one process",
    description:
      "The same design and engineering discipline you get from our website work, applied to full applications.",
  },
  {
    icon: ShieldCheck,
    title: "Built to scale safely",
    description:
      "Architecture decisions made with growth and security in mind from the very first sprint.",
  },
  {
    icon: Users,
    title: "Direct access to your team",
    description:
      "No account managers or outsourced teams. You work with the people actually building your product.",
  },
  {
    icon: Rocket,
    title: "From idea to launch",
    description:
      "Support across the full journey, from early product decisions through to a working, shipped application.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Scope",
    description:
      "We learn your product, your users, and the problem you're solving, then define what needs to be built.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Data models, system architecture, and interface design planned before a line of application code is written.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Frontend and backend built together, with regular checkpoints so nothing drifts from the original plan.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Functionality, performance, and security tested thoroughly before anything reaches real users.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We deploy your application and stay available as your product grows and your needs change.",
  },
];

const features = [
  "Custom backend and API development",
  "Database design and management",
  "User authentication and permissions",
  "Third party integrations",
  "Admin panels and internal tools",
  "Cloud hosting and deployment setup",
  "Automated testing where it matters",
  "Performance and security review",
  "Clear technical documentation",
  "Support available after launch",
];

const faqs = [
  {
    question: "When will full stack development be available?",
    answer:
      "We're actively building out this service and don't have a fixed public date yet. Get in touch and we'll let you know as soon as it's ready, and we can start a conversation about your project in the meantime.",
  },
  {
    question: "What kind of projects will this service cover?",
    answer:
      "Custom web applications, internal tools, dashboards, and products that need real backends, databases, and business logic, not just a website front end.",
  },
  {
    question: "Can I talk to you now about an upcoming project?",
    answer:
      "Yes. Reach out through our contact page and we'll discuss your project so we're ready to move quickly once this service is fully available.",
  },
  {
    question: "Will you still take on website development in the meantime?",
    answer:
      "Absolutely. Website development and SEO remain fully available today, and full stack development will sit alongside them as an additional service.",
  },
  {
    question: "What technologies will you use?",
    answer:
      "A modern, proven stack including React, Next.js, Node.js, and PostgreSQL, chosen based on what actually fits your product rather than a one size fits all template.",
  },
  {
    question: "How is this different from your website development service?",
    answer:
      "Website development focuses on the site your customers see. Full stack development covers everything behind it too, including custom logic, data, and integrations that a real application needs.",
  },
];

export default function FullStackDevelopmentPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Full Stack Development"
        badge="Coming Soon"
        heading="Full Stack Applications, Built From Idea to Launch"
        description="We're expanding beyond websites into full product engineering, real backends, databases, and business logic built around what your product needs."
        primaryLabel="Get Notified"
        primaryHref="/contact"
        secondaryLabel="See What's Planned"
        secondaryHref="#process"
        background="bg-surface-tint"
      />
      <Overview
        eyebrow="Overview"
        heading="Websites are just the beginning"
        paragraphs={[
          "Full stack development means building the entire application, not just the site that sits in front of it: custom backends, databases, authentication, and business logic built specifically for what your product needs.",
          "This service is in active development. We're building out the process and team to deliver full stack work with the same care as everything else we build, and we're not launching it until it's ready.",
        ]}
        panelTitle="What full stack development will include"
        panelPoints={[
          "Custom backend and database architecture",
          "User authentication and permissions",
          "Third party integrations",
          "Admin panels and internal tools",
          "Cloud hosting and deployment",
          "Ongoing support after launch",
        ]}
      />
      <Benefits
        heading="Why this service is worth the wait"
        description="Building a real application takes more than a template. Here's what we're building toward."
        items={benefits}
      />
      <Process id="process" heading="How full stack projects will work" steps={processSteps} />
      <Features
        heading="What's planned for every full stack project"
        description="The essentials we're building this service around from day one."
        features={features}
      />
      <Technologies
        eyebrow="Our Toolkit"
        heading="A modern stack for real applications"
        items={[
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Prisma",
          "Docker",
          "Vercel",
          "AWS",
          "REST & GraphQL APIs",
        ]}
      />
      <FAQ heading="Full stack development, answered" faqs={faqs} />
      <FinalCTA
        heading="Building something bigger than a website?"
        description="Get in touch and we'll keep you posted as this service comes online, and start the conversation about your project today."
        primaryLabel="Get Notified"
        primaryHref="/contact"
      />
    </>
  );
}
