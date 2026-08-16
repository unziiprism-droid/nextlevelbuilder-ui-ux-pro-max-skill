"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { formConfig, siteConfig } from "@/lib/site-config";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { formatCurrency, type CurrencyCode } from "@/lib/currency";
import { cn } from "@/lib/utils";

const steps = ["About You", "Your Project", "Budget & Timeline"];

const serviceOptions = [
  "Website Development",
  "SEO",
  "Full Stack Development",
  "Not sure yet",
];

const budgetTiersUsd = [20, 50, 250];

function getBudgetOptions(currency: CurrencyCode) {
  const [low, mid, high] = budgetTiersUsd.map((amount) =>
    formatCurrency(amount, currency),
  );
  return [
    `Under ${low}`,
    `${low} to ${mid}`,
    `${mid} to ${high}`,
    `${high} and up`,
    "Not sure yet",
  ];
}

const timelineOptions = [
  "As soon as possible",
  "Within a month",
  "One to three months",
  "Just exploring for now",
];

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary";

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  description: "",
  budget: "",
  timeline: "",
};

type Status = "idle" | "loading" | "success" | "error";

export function ProjectForm() {
  const { currency } = useCurrency();
  const budgetOptions = getBudgetOptions(currency);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const canContinue =
    step === 0
      ? form.name.trim() !== "" && form.email.trim() !== ""
      : step === 1
        ? form.service !== "" && form.description.trim() !== ""
        : form.budget !== "" && form.timeline !== "";

  async function handleSubmit() {
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: formConfig.web3formsAccessKey,
          subject: `Project inquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          service: form.service,
          budget: `${form.budget} (${currency})`,
          timeline: form.timeline,
          message: form.description,
        }),
      });
      const result = await response.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-border bg-surface-muted p-10 text-center sm:p-14">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-secondary text-text-inverse">
          <Check className="size-5" aria-hidden />
        </span>
        <h2 className="mt-6 text-xl font-semibold text-brand-secondary">
          Project details received
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
          Thank you, {form.name.split(" ")[0] || "there"}. We typically reply
          within 15 minutes during business hours with next steps.
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-brand-secondary">
          <MessageCircle className="size-4" aria-hidden />
          Need a faster answer? Use the live chat in the corner of this page.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-surface-muted p-8 sm:p-10">
      <div className="flex items-center gap-2">
        {steps.map((label, index) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <div
              className={cn(
                "h-1.5 rounded-full",
                index <= step ? "bg-brand-secondary" : "bg-border-strong",
              )}
            />
            <span
              className={cn(
                "hidden text-xs font-medium sm:block",
                index <= step ? "text-brand-secondary" : "text-text-muted",
              )}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-text-muted sm:hidden">
        Step {step + 1} of {steps.length}, {steps[step]}
      </p>

      <div className="mt-8 flex flex-col gap-5">
        {step === 0 && (
          <>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-brand-secondary">
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Full name"
                className={`mt-2 ${inputClasses}`}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-brand-secondary">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="you@company.com"
                className={`mt-2 ${inputClasses}`}
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium text-brand-secondary">
                Company or business name
                <span className="ml-1 font-normal text-text-muted">(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(event) => update("company", event.target.value)}
                placeholder="Your business name"
                className={`mt-2 ${inputClasses}`}
              />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div>
              <p className="text-sm font-medium text-brand-secondary">
                What do you need?
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {serviceOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => update("service", option)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
                      form.service === option
                        ? "border-brand-secondary bg-brand-secondary text-text-inverse"
                        : "border-border-strong bg-surface text-text-secondary hover:border-brand-secondary",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-sm font-medium text-brand-secondary"
              >
                Tell us about your project and goals
              </label>
              <textarea
                id="description"
                rows={5}
                value={form.description}
                onChange={(event) => update("description", event.target.value)}
                placeholder="What are you trying to build, and what does success look like?"
                className={`mt-2 resize-none ${inputClasses}`}
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label htmlFor="budget" className="text-sm font-medium text-brand-secondary">
                Estimated budget
              </label>
              <select
                id="budget"
                value={form.budget}
                onChange={(event) => update("budget", event.target.value)}
                className={`mt-2 ${inputClasses}`}
              >
                <option value="" disabled>
                  Select a range
                </option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs text-text-muted">
                These are starting points, not hard limits. If your budget is smaller,
                tell us in the project description, we work with a range.
              </p>
            </div>
            <div>
              <label htmlFor="timeline" className="text-sm font-medium text-brand-secondary">
                Timeline
              </label>
              <select
                id="timeline"
                value={form.timeline}
                onChange={(event) => update("timeline", event.target.value)}
                className={`mt-2 ${inputClasses}`}
              >
                <option value="" disabled>
                  Select a timeline
                </option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((current) => current - 1)}
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-brand-secondary"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </button>
        ) : (
          <span />
        )}

        {step < steps.length - 1 ? (
          <button
            type="button"
            disabled={!canContinue}
            onClick={() => setStep((current) => current + 1)}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-medium text-text-inverse transition-all duration-300 hover:bg-accent active:scale-[0.98] disabled:opacity-40 disabled:hover:bg-brand-secondary"
          >
            Continue
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </button>
        ) : (
          <button
            type="button"
            disabled={!canContinue || status === "loading"}
            onClick={handleSubmit}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-medium text-text-inverse transition-all duration-300 hover:bg-accent active:scale-[0.98] disabled:opacity-40 disabled:hover:bg-brand-secondary"
          >
            {status === "loading" ? "Sending…" : "Send My Project Details"}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 text-xs text-red-600">
          Something went wrong sending your details. Please try again, or
          email us directly at {siteConfig.email}.
        </p>
      )}
    </div>
  );
}
