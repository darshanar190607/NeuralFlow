export type CurrencyCode = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";

export interface PricingMatrixTier {
  name: string;
  base: Record<CurrencyCode, number>;
  regionalMultiplier: Record<CurrencyCode, number>;
}

export const PRICING_MATRIX: Record<string, PricingMatrixTier> = {
  starter: {
    name: "Starter",
    base: { INR: 999, USD: 12, EUR: 11 },
    regionalMultiplier: { INR: 1.0, USD: 1.0, EUR: 1.0 }
  },
  pro: {
    name: "Pro",
    base: { INR: 2499, USD: 29, EUR: 27 },
    regionalMultiplier: { INR: 1.0, USD: 1.05, EUR: 1.02 }
  },
  enterprise: {
    name: "Enterprise",
    base: { INR: 5999, USD: 72, EUR: 66 },
    regionalMultiplier: { INR: 1.0, USD: 1.08, EUR: 1.05 }
  }
};

export const BILLING_MULTIPLIER: Record<BillingCycle, number> = {
  monthly: 1.0,
  annual: 0.80
};

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€"
};
