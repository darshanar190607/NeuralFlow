import React, { useEffect, useState } from "react";
import { usePricingStore } from "../sections/PricingSection";
import { BillingCycle } from "../../data/pricingMatrix";

export const PricingToggle: React.FC = () => {
  const store = usePricingStore();
  const [cycle, setCycle] = useState<BillingCycle>(() => store.getCycle());

  useEffect(() => {
    return store.subscribe(() => {
      setCycle(store.getCycle());
    });
  }, [store]);

  const toggleCycle = (newCycle: BillingCycle) => {
    store.setCycle(newCycle);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center p-1 bg-mint/30 dark:bg-zinc-800/80 rounded-xl border border-mint dark:border-zinc-800 shadow-inner">
        <button
          id="billing-cycle-monthly"
          type="button"
          onClick={() => toggleCycle("monthly")}
          className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-interactive cursor-pointer ${
            cycle === "monthly"
              ? "bg-nocturnal text-white dark:bg-mint dark:text-oceanic shadow-sm"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
          }`}
        >
          Monthly
        </button>
        <button
          id="billing-cycle-annual"
          type="button"
          onClick={() => toggleCycle("annual")}
          className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-interactive cursor-pointer ${
            cycle === "annual"
              ? "bg-nocturnal text-white dark:bg-mint dark:text-oceanic shadow-sm"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
          }`}
        >
          Annual
        </button>
      </div>

      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-[10px] font-mono font-extrabold uppercase tracking-wider animate-pulse">
        Save 20%
      </div>
    </div>
  );
};
