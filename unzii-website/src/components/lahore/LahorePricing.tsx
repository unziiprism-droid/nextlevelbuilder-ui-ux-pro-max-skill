import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "SEO Starter",
    priceUsd: 200,
    period: "starting from",
    description: "For small businesses in Lahore just getting started with search.",
    features: [
      "Technical SEO audit",
      "On page optimization",
      "Google Search Console setup",
      "Monthly report",
    ],
    highlighted: false,
  },
  {
    name: "SEO Growth",
    priceUsd: 1000,
    period: "starting from, per month",
    description: "Ongoing SEO for businesses ready to compete for real rankings.",
    features: [
      "Everything in Starter",
      "Keyword research and mapping",
      "Content strategy",
      "Internal linking strategy",
      "Monthly strategy call",
    ],
    highlighted: true,
  },
  {
    name: "Website + SEO Bundle",
    priceUsd: 5000,
    period: "starting from",
    description: "A new SEO ready website plus ongoing SEO, from the same team.",
    features: [
      "Custom website build",
      "SEO ready foundation",
      "Three months of SEO included",
      "Priority support",
    ],
    highlighted: false,
  },
];

export function LahorePricing() {
  return (
    <section className="bg-surface-muted py-24 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            Straightforward pricing in PKR
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            No hidden fees and no confusing packages. These are starting points, every
            quote is tailored to your business.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-8",
                  tier.highlighted
                    ? "border-brand-secondary bg-surface shadow-lifted"
                    : "border-border bg-surface",
                )}
              >
                <h3 className="text-lg font-semibold text-brand-secondary">{tier.name}</h3>
                <p className="mt-4 text-3xl font-semibold text-brand-secondary">
                  {formatCurrency(tier.priceUsd, "PKR")}
                </p>
                <p className="text-xs text-text-muted">{tier.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {tier.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-supporting" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/start-your-project" className="w-full">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
