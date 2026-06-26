import React, { useEffect, useState } from "react";
import { usePricingStore } from "../sections/PricingSection";
import { CurrencyCode } from "../../data/pricingMatrix";

export const CurrencySwitcher: React.FC = () => {
  const store = usePricingStore();
  const [currency, setCurrency] = useState<CurrencyCode>(() => store.getCurrency());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return store.subscribe(() => {
      setCurrency(store.getCurrency());
    });
  }, [store]);

  const selectCurrency = (code: CurrencyCode) => {
    store.setCurrency(code);
    setIsOpen(false);
  };

  const options: { code: CurrencyCode; label: string; symbol: string }[] = [
    { code: "USD", label: "USD", symbol: "$" },
    { code: "INR", label: "INR", symbol: "₹" },
    { code: "EUR", label: "EUR", symbol: "€" }
  ];

  return (
    <div className="relative inline-block text-left z-20">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold rounded-xl border border-mint dark:border-zinc-800 bg-white dark:bg-zinc-900 text-nocturnal dark:text-arctic hover:bg-mint/40 dark:hover:bg-zinc-800/80 transition-interactive cursor-pointer shadow-sm"
          id="currency-switcher-btn"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Currency: {currency}</span>
          <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.22 8.22a.749.749 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl border border-mint dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black/5 focus:outline-none z-20 animate-fade-up"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="py-1" role="none">
              {options.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => selectCurrency(opt.code)}
                  className={`w-full text-left block px-4 py-2 text-xs font-mono font-medium transition-interactive hover:bg-mint/20 dark:hover:bg-zinc-800/80 cursor-pointer ${
                    currency === opt.code
                      ? "text-saffron font-bold bg-mint/10 dark:bg-zinc-800/40"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                  role="menuitem"
                >
                  {opt.label} ({opt.symbol})
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
