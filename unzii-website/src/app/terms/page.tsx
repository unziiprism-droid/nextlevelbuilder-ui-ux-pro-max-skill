import type { Metadata } from "next";
import type { BlogSection } from "@/lib/blog";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TableOfContents } from "@/components/blog/TableOfContents";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms that govern your use of theunzii.com.",
};

const lastUpdated = "August 2026";

const sections: BlogSection[] = [
  {
    id: "acceptance-of-terms",
    heading: "Acceptance of Terms",
    body: [
      "By using theunzii.com, you agree to these Terms. If you don't agree, please don't use this website.",
    ],
  },
  {
    id: "about-our-services",
    heading: "About Our Services",
    body: [
      "Unzii provides website development and design services through Unziiprism, with full stack development coming soon. The specific scope, deliverables, timeline, and cost of any project are agreed separately in writing before work begins. These website Terms cover your use of theunzii.com itself, not the terms of an individual client engagement.",
    ],
  },
  {
    id: "use-of-this-website",
    heading: "Use of This Website",
    body: [
      "You agree to use this site only for lawful purposes and not to attempt to disrupt, hack, or misuse it in any way.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    body: [
      "The design, code, content, and branding of this website are the property of Unzii unless otherwise noted, and may not be copied or reused without permission.",
    ],
  },
  {
    id: "no-guarantees",
    heading: "No Guarantees",
    body: [
      "While we build every site with care and follow SEO best practices, we cannot guarantee specific search rankings, traffic, or business outcomes, since these depend on many factors outside our control.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    body: [
      "Unzii is not liable for any indirect, incidental, or consequential damages arising from your use of this website, to the fullest extent permitted by law.",
    ],
  },
  {
    id: "external-links",
    heading: "External Links",
    body: [
      "This site may link to third party websites, including WhatsApp and our live chat provider. We aren't responsible for the content or practices of sites we don't control.",
    ],
  },
  {
    id: "changes-to-these-terms",
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of this site after changes are posted means you accept the updated Terms.",
    ],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: [
      "These Terms are governed by the laws applicable to Unzii's place of business, without regard to conflict of law principles.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    body: ["Questions about these Terms can be sent to hello@theunzii.com."],
  },
];

export default function TermsPage() {
  return (
    <Container className="pt-16 pb-24 lg:pt-20 lg:pb-32">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl">
        Terms
      </h1>
      <p className="mt-4 text-sm text-text-muted">Last updated: {lastUpdated}</p>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_18rem]">
        <article className="flex max-w-3xl flex-col gap-10">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-brand-secondary">
                {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <TableOfContents sections={sections} />
        </aside>
      </div>
    </Container>
  );
}
