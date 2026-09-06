import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your request has been received.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-brand-secondary text-text-inverse">
            <CheckCircle2 className="size-6" aria-hidden />
          </span>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-brand-secondary sm:text-3xl">
            Request received
          </h1>
          <p className="mt-3 leading-relaxed text-text-secondary">
            Thanks for reaching out. We&apos;ll review your website and get back to you
            shortly with your free website review.
          </p>
          <Button href="/" className="mt-8">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
