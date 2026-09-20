import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See Hiii Sage, a real client project by Unzii: full brand refresh and WordPress rebuild for an events and marketplace platform.",
};

export default function PortfolioPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <ServiceHero
        eyebrow="Portfolio"
        heading="Selected Work"
        description="Real client work, honestly presented. Here's what we've shipped so far."
      />

      <div className="py-24 lg:py-32">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </Container>
      </div>

      <FinalCTA
        heading="Our Next Success Story Could Be Yours"
        description="Every agency's first real client took a chance on them. We'd love for that to be you."
      />
    </>
  );
}
