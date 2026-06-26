import React, { useState, useRef } from "react";
import { BentoGrid } from "../ui/BentoGrid";
import { AccordionList } from "../ui/AccordionList";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { FEATURES } from "../../data/featuresData";
import { ZapIcon } from "../ui/Icons";

export const FeatureSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Custom hook observes width changes with 100ms debounce
  const isMobile = useResizeObserver(containerRef, 768, 100);

  // Active index state (context lock) preserved across mobile/desktop layouts
  const [activeFeatureId, setActiveFeatureId] = useState<string>(FEATURES[0].id);

  return (
    <section
      id="features"
      ref={containerRef}
      className="py-24 px-6 md:px-12 bg-background transition-colors duration-300 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-4 rounded-full border border-primary/20 bg-border/40 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <ZapIcon className="w-3.5 h-3.5 text-secondary animate-pulse" /> Capabilities Suite
          </div>
          <h2
            id="features-heading"
            className="text-3xl md:text-5xl font-mono font-extrabold tracking-tight text-text-primary mb-4"
          >
            Engineered for Autonomous Precision
          </h2>
          <p className="max-w-2xl mx-auto text-base font-sans text-zinc-600 dark:text-zinc-300">
            Forget manual integration plumbing. Our agentic pipeline layer automates schemas, sanitizes fields, and syncs vectors continuously.
          </p>
        </div>

        {/* View Layout Reflow transition (300ms–400ms ease-in-out) */}
        <div className="transition-all duration-350 ease-in-out">
          {isMobile ? (
            <AccordionList
              activeId={activeFeatureId}
              setActiveId={setActiveFeatureId}
            />
          ) : (
            <BentoGrid
              activeId={activeFeatureId}
              setActiveId={setActiveFeatureId}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
