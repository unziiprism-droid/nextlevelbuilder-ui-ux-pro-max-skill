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
    "See Hiii Sage, a real client project by Unzii: full brand refresh and WordPress rebuild for an events and marketplace platform.",
};

const faqs = [
  {
    question: "Is Hiii Sage a real client?",
    answer:
      "Yes. Hiii Sage is a paying client who brought us in for a full brand refresh and website rebuild on a tight deadline, and gave us permission to share the design work here.",
  },
  {
    question: "How do I know you can deliver good work?",
    answer:
      "The Hiii Sage project above shows our actual process end to end, from branding through a full WordPress rebuild. We're also happy to walk you through our approach before you commit to anything.",
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
    question: "What happens as you take on more clients?",
    answer:
      "More real case studies get added alongside Hiii Sage, with real outcomes and real feedback from the businesses we've worked with. No filler, no fabricated numbers.",
  },
];

const gallery = [
  {
    src: "/portfolio/hiiisage-activations.jpg",
    alt: "Hiii Sage custom activations section with event lounge photography",
  },
  {
    src: "/portfolio/hiiisage-events.jpg",
    alt: "Hiii Sage curated event experiences photo gallery",
  },
  {
    src: "/portfolio/hiiisage-difference.jpg",
    alt: "Hiii Sage what makes us different feature grid",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Portfolio"
        heading="Our Next Success Story Could Be Yours"
        description="Real client work, honestly presented. Here's Hiii Sage, a full brand refresh and website rebuild we delivered on a tight deadline."
        secondaryLabel="See the Case Study"
        secondaryHref="#hiii-sage"
      />

      <div id="hiii-sage" className="scroll-mt-20 py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Case Study</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
              Hiii Sage
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              An events and marketplace platform connecting entrepreneurs, operators, and decision
              makers. Unzii delivered a full brand refresh and a rebuilt WordPress site, from new
              visual identity to a live launch under a tight deadline.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border shadow-lifted">
            <Image
              src="/portfolio/hiiisage-hero.jpg"
              alt="Hiii Sage homepage hero: The right people. In the right room."
              width={1600}
              height={735}
              className="w-full h-auto"
              priority
            />
          </Reveal>

          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {gallery.map((item) => (
              <Reveal key={item.src} delay={0.15} className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1600}
                  height={730}
                  className="w-full h-auto"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <div id="expect" className="scroll-mt-20">
        <Overview
          eyebrow="Beyond This Page"
          heading="What working with us looks like"
          paragraphs={[
            "Hiii Sage needed a full rebrand and a rebuilt website under a hard launch deadline. We handled the brand refresh, the WordPress rebuild, and every round of revisions, then got it live on time.",
            "That's the same process, speed, and honesty you can expect on your project: a direct line to the person doing the work, transparent pricing, and progress you can actually see.",
          ]}
          panelTitle="What you can expect"
          panelPoints={[
            "A direct, honest conversation about your project",
            "The same process we use for every client",
            "Transparent pricing, not vague quotes",
            "A team that treats your project like our next case study",
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
