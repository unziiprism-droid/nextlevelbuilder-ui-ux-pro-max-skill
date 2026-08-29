import { Gauge, Smartphone, LayoutTemplate, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { formConfig, siteConfig } from "@/lib/site-config";

const included = [
  { icon: Gauge, label: "One speed or performance issue" },
  { icon: Smartphone, label: "One mobile experience gap" },
  { icon: LayoutTemplate, label: "One design or conversion opportunity" },
  { icon: CheckCircle2, label: "One action you can do this week" },
];

const inputClasses =
  "mt-2 w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary";

// Plain HTML form posting directly to Web3Forms, no client JS: this
// section sits right after the Hero, and a client component here
// (even with no animation) adds enough hydration work under
// throttled mobile CPU to measurably delay when the browser paints
// the Hero's LCP text. A native form with a redirect avoids that
// entirely.
export function SeoReviewOffer() {
  return (
    <section className="border-y border-border bg-surface-muted py-16 lg:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-secondary sm:text-3xl">
              <span className="text-brand-steel">Free</span> Website Review
            </h2>
            <p className="mt-3 text-base font-medium text-brand-steel">
              Not sure if your website is helping or hurting your business?
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Send us your website and we&apos;ll record three practical improvements,
              no generic report, no pressure.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {included.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-brand-steel">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="access_key" value={formConfig.web3formsAccessKey} />
              <input type="hidden" name="subject" value="Free website review request" />
              <input type="hidden" name="redirect" value={`${siteConfig.url}/thank-you`} />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="seo-review-name" className="text-sm font-medium text-brand-secondary">
                  Your name
                </label>
                <input
                  id="seo-review-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="seo-review-email" className="text-sm font-medium text-brand-secondary">
                  Email
                </label>
                <input
                  id="seo-review-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="seo-review-website" className="text-sm font-medium text-brand-secondary">
                  Website URL
                </label>
                <input
                  id="seo-review-website"
                  name="website"
                  type="text"
                  required
                  placeholder="yourstartup.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="seo-review-rank-for" className="text-sm font-medium text-brand-secondary">
                  What&apos;s the main goal for your site?
                  <span className="ml-1 font-normal text-text-muted">(optional)</span>
                </label>
                <input
                  id="seo-review-rank-for"
                  name="goal"
                  type="text"
                  placeholder="e.g. more leads, a faster site, a redesign"
                  className={inputClasses}
                />
              </div>

              <Button type="submit" className="mt-2 w-full">
                Get My Free Website Review
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
