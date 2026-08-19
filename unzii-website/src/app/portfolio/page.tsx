import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Unzii is a new agency and we'd rather be honest about that than fill this page with fake case studies. Here's what to expect instead, and what's coming.",
};

const faqs = [
  {
    question: "Why don't you have a portfolio yet?",
    answer:
      "Unzii is a new agency, and we would rather be honest about that than fill this page with fake work, someone else's templates, or projects we didn't actually build.",
  },
  {
    question: "How do I know you can deliver good work?",
    answer:
      "You can look at this website itself. It's built with the same standards, process, and attention to detail we'll bring to your project. We're also happy to walk you through our approach before you commit to anything.",
  },
  {
    question: "Will my project be featured as a case study?",
    answer:
      "With your permission, yes. Real client work is exactly what we want to showcase here, and we'll always ask before publishing anything.",
  },
  {
    question: "Can I see work in progress during my project?",
    answer:
      "Yes. We share progress throughout the project, not just at the end, so you always know what's being built.",
  },
  {
    question: "What happens once you have real case studies?",
    answer:
      "This page gets replaced with real projects, real results, and real feedback from the businesses we've worked with. No filler, no fabricated numbers.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Portfolio"
        heading="Our Next Success Story Could Be Yours"
        description="We're just getting started, and we'd rather earn a portfolio with real results than pad this page with recycled templates or work that isn't ours."
        secondaryLabel="What to Expect"
        secondaryHref="#expect"
      />
      <div id="expect" className="scroll-mt-20">
        <Overview
          eyebrow="Why This Page Is Empty"
          heading="We won't show you work that isn't real"
          paragraphs={[
            "Unzii is a new agency. Rather than fill this page with fake case studies, purchased templates, or projects we didn't actually build, we're being upfront: our portfolio is empty because we're just getting started.",
            "What we can promise is the same care, speed, and honesty on your project that you can see reflected everywhere else on this site, in our process, our pricing conversations, and how we communicate.",
          ]}
          panelTitle="What you can expect instead"
          panelPoints={[
            "A direct, honest conversation about your project",
            "The same process we use for every client",
            "Transparent pricing, not vague quotes",
            "A team that treats your project like our first real case study",
          ]}
        />
      </div>
      <FAQ eyebrow="FAQ" heading="Portfolio, answered honestly" faqs={faqs} />
      <FinalCTA
        heading="Ready to become our next case study?"
        description="Every agency's first real client took a chance on them. We'd love for that to be you."
      />
    </>
  );
}
