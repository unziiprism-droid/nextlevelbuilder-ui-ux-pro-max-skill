import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { primaryNav, services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const helpfulLinks = [...services.map((s) => ({ label: s.label, href: s.href })), ...primaryNav];

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center lg:py-32">
      <Eyebrow className="justify-center">404</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl">
        This Page Doesn&apos;t Exist
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
        The page you&apos;re looking for may have moved or never existed. Let&apos;s get
        you back on track.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Button href="/" size="lg" showArrow>
          Back to Home
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Contact Us
        </Button>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
        {helpfulLinks.map((link) => (
          <Button key={link.href} href={link.href} variant="ghost" size="md">
            {link.label}
          </Button>
        ))}
      </div>
    </Container>
  );
}
