"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { CurrencyCode } from "@/lib/currency";

const STORAGE_KEY = "unzii-currency";

const CurrencyContext = createContext<{
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
} | null>(null);

export function CurrencyProvider({
  children,
  defaultCurrency = "USD",
}: {
  children: React.ReactNode;
  defaultCurrency?: CurrencyCode;
}) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(defaultCurrency);

  useEffect(() => {
    // Reading localStorage during the initial render (even guarded by
    // typeof window) would make the client's first render diverge
    // from the server-rendered HTML and trigger a hydration
    // mismatch. Deferring to an effect keeps the first paint matching
    // the server output, then swaps in the stored preference.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "USD" || stored === "GBP" || stored === "INR" || stored === "PKR") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrencyState(stored);
    }
  }, []);

  function setCurrency(next: CurrencyCode) {
    setCurrencyState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
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
