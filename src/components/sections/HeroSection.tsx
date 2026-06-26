import React from "react";
import HeroVisual from "../ui/HeroVisual";
import { ArrowRightIcon, PlayIcon, CheckIcon } from "../ui/Icons";

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden bg-primary text-white transition-all duration-300"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-border/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow delay-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column content */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          {/* Accent notification pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/20 bg-border/10 text-border text-xs font-mono font-bold tracking-wider animate-fade-in delay-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            NOW LIVE — PERSISTENT MULTI-TAB SYNCS
          </div>

          {/* Primary value proposition (Single <h1> per page rules) */}
          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl font-mono font-black tracking-tight text-white leading-[1.08] animate-fade-up delay-1"
          >
            Automate complex data workflows with{" "}
            <span className="text-accent block sm:inline">
              agentic AI
            </span>
          </h1>

          <p className="text-base sm:text-lg font-sans text-border/90 max-w-xl leading-relaxed animate-fade-up delay-2">
            Connect databases, APIs, and document lakes. Let autonomous agent clusters cleanse schema mutations, redact PII leaks, and sync embeddings in sub-50ms real-time.
          </p>

          {/* CTA Cluster */}
          <div className="pt-4 flex flex-wrap gap-4 animate-fade-up delay-3">
            <button
              id="hero-cta-pricing"
              onClick={() => scrollToSection("pricing")}
              className="px-6 py-4 rounded-xl font-mono font-black text-xs uppercase tracking-wider bg-accent hover:bg-secondary text-text-primary shadow-3d-forsythia hover:translate-y-[-2px] transition-interactive cursor-pointer flex items-center gap-2"
            >
              <span>Start Free Trial</span>
              <ArrowRightIcon className="w-4 h-4 text-text-primary" />
            </button>
            <button
              id="hero-cta-sandbox"
              onClick={() => scrollToSection("playground")}
              className="px-6 py-4 rounded-xl font-mono font-black text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-border/25 hover:translate-y-[-1px] transition-interactive cursor-pointer flex items-center gap-2"
            >
              <span>Interactive Sandbox</span>
              <PlayIcon className="w-4 h-4 text-accent fill-current" />
            </button>
          </div>

          {/* Quick value propositions list */}
          <div className="pt-6 grid grid-cols-2 gap-4 text-xs font-mono text-border/60 animate-fade-in delay-3">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-accent" />
              <span>Zero Hardcoded Schemas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-accent" />
              <span>Real-Time Tab Syncing</span>
            </div>
          </div>

        </div>

        {/* Right Column visual - Fades in immediately */}
        <div className="lg:col-span-6 w-full animate-fade-in delay-0">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
