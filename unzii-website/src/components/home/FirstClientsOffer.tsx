"use client";

import { useEffect, useState } from "react";
import { Gift, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const DISMISS_KEY = "unzii-first-clients-offer-dismissed";

export function FirstClientsOffer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-secondary/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="First 5 clients offer"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl border border-border bg-surface p-8 text-center shadow-lifted"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-muted hover:text-brand-secondary"
        >
          <X className="size-4" aria-hidden />
        </button>

        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-surface-muted text-brand-supporting">
          <Gift className="size-5" aria-hidden />
        </span>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-supporting">
          Limited to our first 5 clients
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-secondary">
          Get a website built, plus 2 years of domain &amp; hosting FREE.
        </h2>

        <p className="mt-3 text-sm text-text-secondary">
          Offer applies to the first 5 new clients only. No ongoing hosting costs for two years.
        </p>

        <Button href="/start-your-project" size="lg" className="mt-6 w-full" onClick={dismiss}>
          Claim This Offer
        </Button>
      </div>
    </div>
  );
}
