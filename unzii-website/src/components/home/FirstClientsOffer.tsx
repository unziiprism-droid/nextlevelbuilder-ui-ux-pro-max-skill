import { Gift } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FirstClientsOffer() {
  return (
    <section className="bg-brand-secondary py-3">
      <Container>
        <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <div className="flex items-center gap-2">
            <Gift className="size-4 shrink-0 text-brand-supporting" aria-hidden />
            <p className="text-sm font-medium text-surface">
              <span className="font-semibold text-brand-supporting">Limited to our first 5 clients:</span>{" "}
              get a website built and{" "}
              <span className="font-semibold">2 years of domain &amp; hosting FREE.</span>
            </p>
          </div>
          <Button
            href="/start-your-project"
            size="md"
            variant="inverse"
            className="h-8 shrink-0 px-3.5 text-xs sm:h-11 sm:px-5 sm:text-sm"
          >
            Claim This Offer
          </Button>
        </div>
      </Container>
    </section>
  );
}
