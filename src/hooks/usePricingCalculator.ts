import { CurrencyCode, BillingCycle, PRICING_MATRIX, BILLING_MULTIPLIER } from "../data/pricingMatrix";

/**
 * Pure calculator for pricing tiers
 * Formula: Price = base[currency] * regionalMultiplier[currency] * BILLING_MULTIPLIER[cycle]
 * Rounded to the nearest integer.
 */
export const calculatePrice = (
  tierId: string,
  currency: CurrencyCode,
  cycle: BillingCycle
): number => {
  const tier = PRICING_MATRIX[tierId];
  if (!tier) return 0;

  const baseValue = tier.base[currency];
  const regionalMult = tier.regionalMultiplier[currency] ?? 1.0;
  const cycleMult = BILLING_MULTIPLIER[cycle] ?? 1.0;

  return Math.round(baseValue * regionalMult * cycleMult);
};
