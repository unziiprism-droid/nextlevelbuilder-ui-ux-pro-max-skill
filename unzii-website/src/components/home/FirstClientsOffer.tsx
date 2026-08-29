"use client";

import { useEffect, useMemo, useState } from "react";
import { Gift, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const DISMISS_KEY = "unzii-first-clients-offer-dismissed";

const CONFETTI_COLORS = [
  "var(--color-text-inverse)",
  "var(--color-brand-primary)",
  "var(--color-border-strong)",
  "var(--color-status-live)",
  "var(--color-brand-steel)",
];

function makeConfetti(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = Math.PI + Math.random() * Math.PI;
    const distance = 60 + Math.random() * 130;
    return {
      id: i,
      left: 50 + (Math.random() - 0.5) * 16,
      tx: Math.cos(angle) * distance,
      ty: Math.sin(angle) * distance,
      rot: 180 + Math.random() * 540 * (Math.random() > 0.5 ? 1 : -1),
      delay: Math.random() * 0.15,
      duration: 0.75 + Math.random() * 0.55,
      size: 7 + Math.random() * 7,
      round: Math.random() > 0.5,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    };
  });
}

function Confetti() {
  const pieces = useMemo(() => makeConfetti(34), []);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-visible">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute animate-[confetti-burst_var(--dur)_ease-out_var(--delay)_forwards]"
          style={
            {
              left: `${p.left}%`,
              top: 0,
              width: p.size,
              height: p.round ? p.size : p.size * 0.5,
              backgroundColor: p.color,
              borderRadius: p.round ? "9999px" : "2px",
              "--tx": `${p.tx}px`,
              "--ty": `${p.ty}px`,
              "--rot": `${p.rot}deg`,
              "--dur": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              opacity: 0,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

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
        className="relative w-full max-w-sm"
        onClick={(event) => event.stopPropagation()}
      >
        <Confetti />

        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 text-center shadow-lifted">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-muted hover:text-brand-secondary"
        >
          <X className="size-4" aria-hidden />
        </button>

        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-surface-muted text-brand-steel">
          <Gift className="size-5" aria-hidden />
        </span>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-steel">
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
    </div>
  );
}
