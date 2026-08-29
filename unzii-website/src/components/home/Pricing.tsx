"use client";

import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { formatCurrencyFromPkr } from "@/lib/currency";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter Website",
    originalPriceInPkr: 80000,
    priceInPkr: 55600,
    period: "one time",
    description: "A clean, professional website for businesses that need to launch fast.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic on page SEO setup",
    ],
    highlighted: false,
  },
  {
    name: "Business Website",
    originalPriceInPkr: 160000,
    priceInPkr: 111200,
    period: "one time",
    description: "A custom built website for businesses ready to grow online.",
    features: [
      "Up to 10 pages",
      "Custom design system",
      "Blog setup",
      "Analytics integration",
      "Three rounds of revisions",
    ],
    highlighted: true,
  },
  {
    name: "Ongoing Growth",
    originalPriceInPkr: 22240,
    priceInPkr: 15290,
    period: "per month",
    description: "Ongoing SEO and content support after your website is live.",
    features: [
      "Monthly SEO check ins",
      "Content strategy",
      "Performance reporting",
      "Priority support",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const { currency } = useCurrency();

  return (
    <section id="pricing" className="scroll-mt-20 bg-surface py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            Straightforward pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            No hidden fees and no confusing packages. These are starting points, every
            quote is tailored to your business. Prices shown in {currency}, switch
            currency in the header above.
          </p>
          <span className="mt-5 inline-flex items-center rounded-full bg-brand-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-steel">
            First 5 clients also get 2 years of domain &amp; hosting free
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex h-full flex-col rounded-3xl border p-8",
                tier.highlighted
                  ? "border-brand-secondary bg-surface-muted shadow-lifted"
                  : "border-border bg-surface-muted",
              )}
            >
              <h3 className="text-lg font-semibold text-brand-secondary">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <p className="text-3xl font-semibold text-brand-secondary">
                  {formatCurrencyFromPkr(tier.priceInPkr, currency)}
                </p>
                <p className="text-base text-text-muted line-through">
                  {formatCurrencyFromPkr(tier.originalPriceInPkr, currency)}
                </p>
              </div>
              <p className="text-xs text-text-muted">{tier.period}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {tier.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-steel" aria-hidden />
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
          ))}
        </div>
      </Container>
    </section>
  );
}
