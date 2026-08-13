import type { Metadata } from "next";
import type { BlogSection } from "@/lib/blog";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TableOfContents } from "@/components/blog/TableOfContents";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Unzii handles information when you visit theunzii.com or get in touch with us.",
};

const lastUpdated = "August 2026";

const sections: BlogSection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    body: [
      "This Privacy Policy explains how Unzii (\"we,\" \"us,\" or \"our\") handles information when you visit theunzii.com or get in touch with us. We built this site to collect as little of your data as possible, and this policy explains exactly what that means in practice.",
    ],
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: [
      "Contact and project forms: when you use our Contact or Start Your Project forms, the information you enter, such as your name, email address, and project details, is not submitted to or stored on our servers. These forms open your own email application with your message pre filled, and the message is sent directly from your email account to ours.",
      "Live chat: if you use our live chat widget, the platform that powers it (Tawk.to) may collect information such as your IP address, browser type, and the messages you send, in line with its own privacy policy.",
      "Analytics: we use tools such as Google Analytics and Google Search Console to understand how visitors use this site, including pages viewed, general location, and device type. This data is aggregated and does not directly identify you.",
      "Cookies: this site may use cookies set by third party tools such as Google Analytics and our live chat widget. You can control or disable cookies through your browser settings.",
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Information",
    body: [
      "We use the information described above to respond to your messages, understand how our site is used, and improve our services. We do not sell your information to third parties.",
    ],
  },
  {
    id: "third-party-services",
    heading: "Third Party Services",
    body: [
      "We rely on a small number of third party services to run this site, including Google Analytics, Google Search Console, and Tawk.to for live chat. Each of these providers has its own privacy policy governing how they handle data.",
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    body: [
      "Since we don't collect form submissions on our own servers, we only retain the emails you send us directly, for as long as needed to respond to your inquiry or manage an ongoing project.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    body: [
      "You can ask us to access, correct, or delete any personal information we hold about you by emailing hello@unzii.com.",
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    body: [
      "This website is not directed at children under 13, and we do not knowingly collect information from children.",
    ],
  },
  {
    id: "changes-to-this-policy",
    heading: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. Changes will be posted on this page with an updated date.",
    ],
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    body: ["Questions about this policy can be sent to hello@unzii.com."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Container className="pt-16 pb-24 lg:pt-20 lg:pb-32">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl">
        Privacy Policy
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
