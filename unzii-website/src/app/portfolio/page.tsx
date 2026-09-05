import type { Metadata } from "next";
import Image from "next/image";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Overview } from "@/components/services/Overview";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Unzii is a new agency. Here's a concept project that shows how we design and build, plus what to expect as real client work comes in.",
};

const faqs = [
  {
    question: "Is Harvest & Home a real client?",
    answer:
      "No. Harvest & Home is a concept project we designed and built ourselves to show our process and quality on a real, working page rather than a mockup or template. It isn't a paying client and we're upfront about that.",
  },
  {
    question: "Why don't you have real client work yet?",
    answer:
      "Unzii is a new agency, and we would rather be honest about that than fill this page with fake case studies, purchased templates, or projects we didn't actually build.",
  },
  {
    question: "How do I know you can deliver good work?",
    answer:
      "The concept project above and this website itself are built with the same standards, process, and attention to detail we'll bring to your project. We're also happy to walk you through our approach before you commit to anything.",
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
      "Real client work gets added alongside this concept project, with real results and real feedback from the businesses we've worked with. No filler, no fabricated numbers.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Portfolio"
        heading="Our Next Success Story Could Be Yours"
        description="We're just getting started, and we'd rather earn a portfolio with real results than pad this page with recycled templates. Here's a concept project that shows how we actually work."
        secondaryLabel="See the Concept Project"
        secondaryHref="#concept"
      />

      <div id="concept" className="scroll-mt-20 py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Concept Project</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
              Harvest &amp; Home
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              A farm-to-table meal delivery brand, designed and built by our team to demonstrate our
              approach to brand identity and website design. Not a paying client, just an honest
              example of our work.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border shadow-lifted">
            <Image
              src="/portfolio/harvest-and-home-full.jpg"
              alt="Harvest & Home concept website design, showing the homepage, brand story, and weekly menu sections"
              width={1400}
              height={2704}
              className="w-full h-auto"
            />
          </Reveal>
        </Container>
      </div>

      <div id="expect" className="scroll-mt-20">
        <Overview
          eyebrow="Beyond This Page"
          heading="We won't show you work that isn't real"
          paragraphs={[
            "Unzii is a new agency. Rather than fill this page with fake case studies, purchased templates, or projects we didn't actually build, we're being upfront: the project above is a concept piece, and our real client portfolio is still empty because we're just getting started.",
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
