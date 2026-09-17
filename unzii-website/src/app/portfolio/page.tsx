import type { Metadata } from "next";
import Image from "next/image";
import { ServiceHero } from "@/components/services/ServiceHero";
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
        heading="Selected Work"
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
        </Container>
      </div>

      <div className="border-t border-border py-24 lg:py-32">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-16">
            <Reveal>
              <Eyebrow>The Challenge</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-secondary sm:text-3xl">
                A full rebrand, on a hard deadline
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
                Hiii Sage needed to move on from its previous brand entirely: new name, new colors,
                new fonts, new imagery, new copy, all while keeping the page layout the client
                already liked. The site had to be rebuilt on a fresh install and live by a fixed
                launch date, with no room to slip.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>The Approach</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-secondary sm:text-3xl">
                Rebuild the brand, keep what worked
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
                We applied the new visual identity, palette, and typography across the existing
                layout rather than starting from a blank page, rewrote the copy and imagery section
                by section, and worked through several rounds of client revisions before rebuilding
                everything in WordPress and connecting the new domain.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {gallery.map((item) => (
                  <div key={item.src} className="overflow-hidden rounded-2xl border border-border shadow-soft">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1600}
                      height={730}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Eyebrow>The Result</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-secondary sm:text-3xl">
                Live, on time, on the new domain
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
                Hiii Sage launched on schedule with its new brand fully in place, the old domain
                retired, and a site the client can keep building on as they add more events and
                partners.
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

      <FAQ
        eyebrow="FAQ"
        heading="Portfolio, answered honestly"
        faqs={faqs}
        background="bg-brand-yellow-light"
      />
      <FinalCTA
        heading="Our Next Success Story Could Be Yours"
        description="Every agency's first real client took a chance on them. We'd love for that to be you."
      />
    </>
  );
}
