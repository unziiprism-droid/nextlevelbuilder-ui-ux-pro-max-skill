"use client";

import { useCurrency } from "@/components/providers/CurrencyProvider";
import { currencyCodes } from "@/lib/currency";
import { cn } from "@/lib/utils";

export function CurrencyToggle({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-1",
        className,
      )}
    >
      {currencyCodes.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setCurrency(code)}
          aria-pressed={currency === code}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
            currency === code
              ? "bg-brand-secondary text-text-inverse"
              : "text-text-secondary hover:bg-surface-subtle",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
