import React from "react";
import { FEATURES, FeatureItem } from "../../data/featuresData";
import * as Icons from "./Icons";

interface AccordionListProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

export const AccordionList: React.FC<AccordionListProps> = ({ activeId, setActiveId }) => {
  const renderIcon = (iconName: string, className: string = "w-5 h-5") => {
    const IconComponent = (Icons as any)[iconName] || Icons.ZapIcon;
    return <IconComponent className={className} />;
  };

  return (
    <div className="space-y-4 animate-fade-in" id="accordion-list">
      {FEATURES.map((feat) => {
        const isOpen = activeId === feat.id;

        return (
          <article
            key={feat.id}
            id={`accordion-panel-${feat.id}`}
            className={`overflow-hidden rounded-2xl border transition-interactive duration-350 bg-white dark:bg-zinc-900 ${
              isOpen
                ? "border-saffron ring-2 ring-saffron/20 shadow-md"
                : "border-mint dark:border-zinc-800"
            }`}
          >
            {/* Header: Touch target height of 56px (greater than min 44px) */}
            <button
              id={`accordion-trigger-${feat.id}`}
              type="button"
              onClick={() => setActiveId(feat.id)}
              className="w-full flex items-center justify-between p-5 min-h-[56px] text-left font-mono font-bold text-nocturnal dark:text-white hover:text-saffron focus:outline-none cursor-pointer select-none"
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${feat.id}`}
            >
              <div className="flex items-center gap-3">
                <span className={`p-2 rounded-xl transition-interactive ${
                  isOpen 
                    ? "bg-forsythia text-oceanic shadow-sm" 
                    : "bg-mint/40 dark:bg-zinc-800 text-nocturnal dark:text-mint"
                }`}>
                  {renderIcon(feat.iconName, "w-5 h-5")}
                </span>
                <span className="text-sm font-bold tracking-wide">{feat.title}</span>
              </div>
              <Icons.ChevronDown
                className={`w-5 h-5 transition-transform duration-350 ${
                  isOpen ? "rotate-180 text-saffron" : "text-zinc-400"
                }`}
              />
            </button>

            {/* Expandable container using max-height and opacity (GPU accelerated properties) */}
            <div
              id={`accordion-body-${feat.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${feat.id}`}
              className={`transition-all duration-350 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[350px] opacity-100 border-t border-mint/40 dark:border-zinc-800/40" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 space-y-4">
                <p className="text-xs font-sans text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {feat.longDesc}
                </p>
                
                {/* Micro metrics dashboard inside panel */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-mint/10 dark:bg-zinc-800/20 border border-mint/20 dark:border-zinc-800/40">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{feat.metricLabel}</span>
                  <span className="text-xs font-mono font-black text-saffron">{feat.metricValue}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {feat.technicalDetails.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded border border-mint/25 dark:border-zinc-800/30 bg-mint/5 dark:bg-zinc-850/20 text-nocturnal/75 dark:text-mint/75">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
