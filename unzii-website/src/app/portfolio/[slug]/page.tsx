import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FinalCTA } from "@/components/shared/FinalCTA";

export function generateStaticParams() {
  return getAllCaseStudies().map((caseStudy) => ({ slug: caseStudy.slug }));
}

// Required for static export: only pre-generated slugs exist as files.
// Add real case studies to src/lib/case-studies.ts and rebuild to generate new pages.
export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};

  return {
    title: caseStudy.client,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage(props: PageProps<"/portfolio/[slug]">) {
  const { slug } = await props.params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <ServiceHero
        eyebrow="Case Study"
        heading={caseStudy.client}
        description={caseStudy.summary}
        hideActions
      />

      <div className="py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border shadow-lifted">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.heroAlt}
              width={1891}
              height={856}
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
                {caseStudy.challenge.heading}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
                {caseStudy.challenge.body}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>The Approach</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-secondary sm:text-3xl">
                {caseStudy.approach.heading}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
                {caseStudy.approach.body}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {caseStudy.approach.gallery.map((item) => (
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
                {caseStudy.result.heading}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
                {caseStudy.result.body}
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

      <FinalCTA
        heading="Our Next Success Story Could Be Yours"
        description="Every agency's first real client took a chance on them. We'd love for that to be you."
        singleButton
      />
    </>
  );
}
