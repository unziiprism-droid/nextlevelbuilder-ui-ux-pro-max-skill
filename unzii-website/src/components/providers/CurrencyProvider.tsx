"use client";

import { createContext, useContext } from "react";
import type { CurrencyCode } from "@/lib/currency";

const CurrencyContext = createContext<{
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
} | null>(null);

// Pricing is USD-only by design: a currency switcher reads as a
// budget-agency signal we don't want. The context stays in place so
// Pricing/ProjectForm don't need reworking, but it's now fixed to USD.
export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyContext.Provider value={{ currency: "USD", setCurrency: () => {} }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
