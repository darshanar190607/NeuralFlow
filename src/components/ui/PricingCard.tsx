import React, { useState, useEffect } from "react";
import { usePricingStore } from "../sections/PricingSection";
import { calculatePrice } from "../../hooks/usePricingCalculator";
import { CURRENCY_SYMBOLS, CurrencyCode, BillingCycle } from "../../data/pricingMatrix";
import { CheckIcon } from "./Icons";

// Price sub-component that isolation-subscribes to pricing store updates
const PricingPriceDisplay: React.FC<{ tierId: string }> = ({ tierId }) => {
  const store = usePricingStore();
  
  const [currency, setCurrency] = useState<CurrencyCode>(() => store.getCurrency());
  const [cycle, setCycle] = useState<BillingCycle>(() => store.getCycle());

  useEffect(() => {
    return store.subscribe(() => {
      setCurrency(store.getCurrency());
      setCycle(store.getCycle());
    });
  }, [store]);

  const priceVal = calculatePrice(tierId, currency, cycle);
  const symbol = CURRENCY_SYMBOLS[currency];
  const billingLabel = cycle === "monthly" ? "mo" : "mo (billed annually)";

  return (
    <div className="flex items-baseline gap-1 mt-4">
      <span className="text-4xl font-mono font-black tracking-tight text-white animate-fade-in" id={`price-val-${tierId}`}>
        {symbol}{currency === "INR" ? priceVal.toLocaleString("en-IN") : priceVal.toFixed(0)}
      </span>
      <span className="text-xs font-mono text-zinc-400">/{billingLabel}</span>
    </div>
  );
};

export interface PricingCardProps {
  id: string;
  name: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  id,
  name,
  description,
  features,
  ctaText,
  isPopular = false,
}) => {
  return (
    <article
      id={`pricing-card-${id}`}
      className={`p-8 rounded-3xl border flex flex-col justify-between transition-interactive duration-200 relative ${
        isPopular
          ? "border-saffron bg-zinc-900/90 shadow-3d-saffron ring-2 ring-saffron/20"
          : "border-zinc-800 bg-zinc-950/60 shadow-3d-oceanic"
      } hover:translate-y-[-4px] hover:border-forsythia/60 group`}
    >
      {isPopular && (
        <span className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full bg-saffron text-oceanic text-[10px] font-mono font-extrabold uppercase tracking-widest">
          Popular
        </span>
      )}
      
      <div>
        <h3 className="text-lg font-mono font-bold text-white tracking-wide">{name}</h3>
        <p className="text-xs font-sans text-zinc-400 mt-2 min-h-[36px]">{description}</p>
        
        {/* Dynamic Price isolation display */}
        <PricingPriceDisplay tierId={id} />
        
        <ul className="mt-8 space-y-3.5 text-xs font-sans text-zinc-300 border-t border-zinc-800/80 pt-6">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="p-0.5 rounded bg-nocturnal/40 text-saffron mt-0.5">
                <CheckIcon className="w-3 h-3 stroke-[3]" />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={`w-full py-3.5 mt-8 rounded-xl font-mono font-black text-xs uppercase tracking-wider transition-interactive cursor-pointer ${
          isPopular
            ? "bg-forsythia text-oceanic hover:bg-saffron shadow-sm"
            : "bg-white/5 border border-zinc-800 text-white hover:bg-white/10"
        }`}
      >
        {ctaText}
      </button>
    </article>
  );
};
