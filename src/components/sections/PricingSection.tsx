import React, { createContext, useContext, useRef, useEffect } from "react";
import { CurrencyCode, BillingCycle, PRICING_MATRIX } from "../../data/pricingMatrix";
import { CurrencySwitcher } from "../ui/CurrencySwitcher";
import { PricingToggle } from "../ui/PricingToggle";
import { PricingCard } from "../ui/PricingCard";
import { CreditCardIcon } from "../ui/Icons";

interface PricingStore {
  getCurrency: () => CurrencyCode;
  getCycle: () => BillingCycle;
  setCurrency: (c: CurrencyCode) => void;
  setCycle: (cy: BillingCycle) => void;
  subscribe: (listener: () => void) => () => void;
}

const PricingContext = createContext<PricingStore | null>(null);

export const usePricingStore = () => {
  const store = useContext(PricingContext);
  if (!store) throw new Error("usePricingStore must be used within PricingProvider");
  return store;
};

const PricingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Store values inside references to bypass component re-renders
  const stateRef = useRef<{ currency: CurrencyCode; cycle: BillingCycle }>({
    currency: "USD",
    cycle: "monthly",
  });
  
  // Scoped list of observer listeners
  const listenersRef = useRef<Set<() => void>>(new Set());

  const store = useRef<PricingStore>({
    getCurrency: () => stateRef.current.currency,
    getCycle: () => stateRef.current.cycle,
    setCurrency: (c) => {
      if (stateRef.current.currency !== c) {
        stateRef.current.currency = c;
        listenersRef.current.forEach((listener) => listener());
      }
    },
    setCycle: (cy) => {
      if (stateRef.current.cycle !== cy) {
        stateRef.current.cycle = cy;
        listenersRef.current.forEach((listener) => listener());
      }
    },
    subscribe: (listener) => {
      listenersRef.current.add(listener);
      return () => {
        listenersRef.current.delete(listener);
      };
    },
  });

  return (
    <PricingContext.Provider value={store.current}>
      {children}
    </PricingContext.Provider>
  );
};

export const PricingSection: React.FC = () => {
  const tiers = [
    {
      id: "starter",
      name: "Starter",
      description: "Ideal for small teams automating core spreadsheets and database triggers.",
      features: [
        "Up to 3 active automation streams",
        "Standard LLM Mapping Engine",
        "15-minute sync interval",
        "Auto-recovery for minor API failures",
        "Community support",
      ],
      ctaText: "Get Started Free",
    },
    {
      id: "pro",
      name: "Pro",
      description: "Perfect for scaling organizations requiring real-time sub-second sync and deep PII protection.",
      features: [
        "Unlimited active streams",
        "Advanced Agentic Schema Mapping",
        "Real-time sub-second synchronization",
        "Zero-shot PII redaction & sanitization",
        "99.99% Guaranteed uptime SLA",
        "Dedicated account engineer",
      ],
      ctaText: "Upgrade to Pro",
      isPopular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Designed for high-throughput enterprises with massive on-prem or hybrid cloud pipelines.",
      features: [
        "Dedicated server isolated clusters",
        "Custom fine-tuned mapping models",
        "Bi-directional vector embedding sync",
        "Custom compliance audit logs (HIPAA/GDPR)",
        "Infinite horizontal scaling limits",
        "24/7/365 Direct phone hotlines",
      ],
      ctaText: "Contact Sales",
    },
  ];

  return (
    <PricingProvider>
      <section
        id="pricing"
        className="py-24 px-6 md:px-12 bg-oceanic transition-colors duration-300 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Block */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-4 rounded-full border border-mint/20 bg-mint/10 text-mint text-xs font-mono font-bold uppercase tracking-wider">
              <CreditCardIcon className="w-3.5 h-3.5 text-saffron" /> Pricing Engine
            </div>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-5xl font-mono font-extrabold tracking-tight text-white mb-4"
            >
              Predictable Matrix Pricing
            </h2>
            <p className="max-w-2xl mx-auto text-base font-sans text-zinc-300">
              Calculated in real-time using our multi-dimensional configuration model. Zero hidden charges. Regional discounts applied instantly.
            </p>

            {/* Controls (Toggles & Currency switchers) */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <PricingToggle />
              <CurrencySwitcher />
            </div>
          </div>

          {/* Cards Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier) => (
              <PricingCard key={tier.id} {...tier} />
            ))}
          </div>
        </div>
      </section>
    </PricingProvider>
  );
};

export default PricingSection;
