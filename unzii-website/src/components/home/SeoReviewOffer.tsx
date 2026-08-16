"use client";

import { useState } from "react";
import { Search, FileSearch, Users, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { formConfig } from "@/lib/site-config";

const included = [
  { icon: Search, label: "One technical SEO issue" },
  { icon: FileSearch, label: "One page or content opportunity" },
  { icon: Users, label: "One competitor gap" },
  { icon: CheckCircle2, label: "One action you can do this week" },
];

interface FormState {
  name: string;
  email: string;
  website: string;
  rankFor: string;
}

const initialState: FormState = { name: "", email: "", website: "", rankFor: "" };

type Status = "idle" | "loading" | "success" | "error";

export function SeoReviewOffer() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const canSubmit =
    form.name.trim() !== "" && form.email.trim() !== "" && form.website.trim() !== "";

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: formConfig.web3formsAccessKey,
          subject: `Free SEO review request from ${form.name}`,
          name: form.name,
          email: form.email,
          website: form.website,
          rank_for: form.rankFor || "Not specified",
          message: `Free SEO opportunity review request.\nWebsite: ${form.website}\nWants to rank for: ${form.rankFor || "Not specified"}`,
        }),
      });
      const result = await response.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-y border-border bg-surface-muted py-16 lg:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Free SEO Opportunity Review</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-brand-secondary sm:text-3xl">
              Not sure why your startup isn&apos;t appearing in search?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Send us your website and we&apos;ll record three practical SEO opportunities,
              no generic report, no pressure.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {included.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-brand-supporting">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-6 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-secondary text-text-inverse">
                  <CheckCircle2 className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-secondary">
                  Request received
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-secondary">
                  Thanks, {form.name.split(" ")[0] || "there"}. We&apos;ll record your SEO
                  opportunity review and send it your way shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="seo-review-name" className="text-sm font-medium text-brand-secondary">
                    Your name
                  </label>
                  <input
                    id="seo-review-name"
                    type="text"
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    placeholder="Full name"
                    className="mt-2 w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="seo-review-email" className="text-sm font-medium text-brand-secondary">
                    Email
                  </label>
                  <input
                    id="seo-review-email"
                    type="email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="seo-review-website" className="text-sm font-medium text-brand-secondary">
                    Website URL
                  </label>
                  <input
                    id="seo-review-website"
                    type="text"
                    value={form.website}
                    onChange={(event) => update("website", event.target.value)}
                    placeholder="yourstartup.com"
                    className="mt-2 w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="seo-review-rank-for" className="text-sm font-medium text-brand-secondary">
                    What do you want to rank for?
                    <span className="ml-1 font-normal text-text-muted">(optional)</span>
                  </label>
                  <input
                    id="seo-review-rank-for"
                    type="text"
                    value={form.rankFor}
                    onChange={(event) => update("rankFor", event.target.value)}
                    placeholder="e.g. project management software"
                    className="mt-2 w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit || status === "loading"}
                  className="mt-2 w-full disabled:opacity-40"
                >
                  {status === "loading" ? "Sending…" : "Get My Free SEO Review"}
                </Button>

                {status === "error" && (
                  <p className="text-xs text-red-600">
                    Something went wrong sending your details. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
