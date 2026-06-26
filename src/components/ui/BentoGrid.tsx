import React from "react";
import { FEATURES, FeatureItem } from "../../data/featuresData";
import * as Icons from "./Icons";

interface BentoGridProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ activeId, setActiveId }) => {
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName] || Icons.ZapIcon;
    return <IconComponent className={className} />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] animate-fade-in">
      {FEATURES.map((feat, index) => {
        const isActive = activeId === feat.id;
        
        // Define column span classes for asymmetric layout
        const gridSpans = [
          "md:col-span-2 md:row-span-1", // 0: Schema Mapper
          "md:col-span-1 md:row-span-2", // 1: Data Sanitizer (taller card)
          "md:col-span-1 md:row-span-1", // 2: Vector Sync
          "md:col-span-2 md:row-span-1", // 3: API Connector
        ];
        
        const cardSpan = gridSpans[index] || "md:col-span-1";

        return (
          <article
            key={feat.id}
            id={`bento-card-${feat.id}`}
            onClick={() => setActiveId(feat.id)}
            className={`p-8 rounded-3xl border flex flex-col justify-between cursor-pointer relative overflow-hidden group select-none transition-all duration-300 ease-out ${cardSpan} ${
              isActive
                ? "border-secondary bg-surface text-white shadow-3d-saffron scale-[1.01] animate-border-pulse"
                : "border-border dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/60 text-text-primary hover:translate-y-[-6px] hover:border-secondary hover:shadow-lg dark:hover:bg-zinc-900/40"
            }`}
          >
            {/* Glow backing card */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-saffron/5 rounded-full filter blur-xl transition-opacity duration-300 pointer-events-none ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`} />
            
            <div className="flex items-start justify-between w-full">
              <div className="flex items-center gap-3">
                <span className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-surface shadow-md rotate-6 scale-110"
                    : "bg-border/40 dark:bg-zinc-850 text-text-secondary dark:text-mint group-hover:bg-accent group-hover:text-surface group-hover:rotate-6 group-hover:scale-110"
                }`}>
                  {renderIcon(feat.iconName, "w-5 h-5")}
                </span>
                <div>
                  <h3 className={`text-sm font-mono font-bold tracking-wide transition-colors duration-200 ${
                    isActive ? "text-accent" : "text-text-primary"
                  }`}>{feat.title}</h3>
                  <p className={`text-[11px] font-sans mt-0.5 transition-colors duration-200 ${
                    isActive ? "text-zinc-300" : "text-zinc-500 dark:text-zinc-450"
                  }`}>{feat.shortDesc}</p>
                </div>
              </div>
              
              {/* Feature telemetry speed tags */}
              <div className="text-right">
                <span className={`block text-[10px] font-mono font-bold uppercase tracking-widest ${
                  isActive ? "text-zinc-400" : "text-zinc-500"
                }`}>{feat.metricLabel}</span>
                <span className={`block text-xs font-mono font-black mt-0.5 transition-transform duration-300 ${
                  isActive ? "text-accent scale-105" : "text-secondary group-hover:scale-105"
                }`}>{feat.metricValue}</span>
              </div>
            </div>

            <div className="mt-4 flex-grow flex flex-col justify-end">
              <p className={`text-xs font-sans leading-relaxed max-w-2xl transition-colors duration-205 ${
                isActive ? "text-zinc-200" : "text-zinc-650 dark:text-zinc-300"
              }`}>
                {feat.longDesc}
              </p>
              
              {/* Technical tag details */}
              <div className="flex flex-wrap gap-2 mt-4 transition-transform duration-300 group-hover:translate-x-1">
                {feat.technicalDetails.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded border transition-colors duration-200 ${
                      isActive
                        ? "border-zinc-700 bg-zinc-800/40 text-zinc-300"
                        : "border-border/60 dark:border-zinc-800 bg-border/10 dark:bg-zinc-900/35 text-text-secondary/80 dark:text-mint/80"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

