export type CurrencyCode = "USD" | "GBP" | "INR" | "PKR";

// Fixed, approximate rates (not live). Pricing on this site is
// already presented as rough ranges, so an occasionally-stale static
// rate is preferable to depending on a third-party exchange-rate API.
export const currencies: Record<CurrencyCode, { symbol: string; rateFromUsd: number }> = {
  USD: { symbol: "$", rateFromUsd: 1 },
  GBP: { symbol: "£", rateFromUsd: 0.79 },
  INR: { symbol: "₹", rateFromUsd: 83 },
  PKR: { symbol: "₨", rateFromUsd: 278 },
};

export const currencyCodes = Object.keys(currencies) as CurrencyCode[];

export function formatCurrency(amountUsd: number, currency: CurrencyCode): string {
  const { symbol, rateFromUsd } = currencies[currency];
  const converted = amountUsd * rateFromUsd;
  const step = currency === "PKR" || currency === "INR" ? 1000 : 1;
  const rounded = Math.round(converted / step) * step;
  return `${symbol}${rounded.toLocaleString("en-US")}`;
}

// For prices set directly in PKR (e.g. the Lahore page's local
// pricing), converted through USD as the common base so they can
// still be shown in whichever currency the visitor has selected.
export function formatCurrencyFromPkr(amountPkr: number, currency: CurrencyCode): string {
  const amountUsd = amountPkr / currencies.PKR.rateFromUsd;
  return formatCurrency(amountUsd, currency);
}
