import React, { useEffect, useState } from "react";
import { TESTIMONIALS, COMPANY_LOGOS } from "../../data/testimonialsData";
import { TestimonialCard } from "../ui/TestimonialCard";
import * as Icons from "../ui/Icons";

export const SocialProofSection: React.FC = () => {
  const [stats, setStats] = useState({
    eventsProcessed: 8431942,
    vectorsSynced: 1290342,
    activeAgents: 148,
  });

  // Slowly increment telemetry counters in real-time
  useEffect(() => {
    const timer = setInterval(() => {
      setStats((prev) => ({
        eventsProcessed: prev.eventsProcessed + Math.floor(Math.random() * 5) + 1,
        vectorsSynced: prev.vectorsSynced + Math.floor(Math.random() * 3) + 1,
        activeAgents: prev.activeAgents + (Math.random() > 0.85 ? 1 : 0),
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const renderIcon = (iconName: string, className: string = "w-5 h-5") => {
    const IconComponent = (Icons as any)[iconName] || Icons.ZapIcon;
    return <IconComponent className={className} />;
  };

  return (
    <section
      id="social-proof"
      className="py-24 px-6 md:px-12 bg-background transition-colors duration-300 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Brand logo wall strip */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-text-secondary/50 mb-8">
            Empowering Modern Pipelines Globally
          </p>
          <div
            id="company-logo-grid"
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75 dark:opacity-60"
          >
            {COMPANY_LOGOS.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-text-primary font-mono font-bold text-sm hover:text-secondary hover:opacity-100 transition-interactive duration-180"
              >
                {renderIcon(logo.iconName, "w-5 h-5 text-secondary")}
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Telemetry Command Station */}
        <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-border dark:border-zinc-800/85 shadow-3d-mint relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2.5 h-full bg-accent" />
          
          <div className="flex flex-col justify-center pl-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-text-secondary/60 mb-1">
              <Icons.ActivityIcon className="w-4 h-4 text-secondary animate-pulse" /> Live Telemetry
            </div>
            <div className="text-3xl font-mono font-black text-text-primary tracking-tight" id="telemetry-events">
              {stats.eventsProcessed.toLocaleString()}
            </div>
            <div className="text-xs font-sans text-zinc-500 mt-1">Data Events Cleaned &amp; Cleansed</div>
          </div>

          <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/60 dark:border-zinc-800/60 pt-4 md:pt-0 md:pl-8">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-text-secondary/60 mb-1">
              <Icons.ZapIcon className="w-4 h-4 text-secondary" /> Dimensions Sync
            </div>
            <div className="text-3xl font-mono font-black text-text-primary tracking-tight" id="telemetry-vectors">
              {stats.vectorsSynced.toLocaleString()}
            </div>
            <div className="text-xs font-sans text-zinc-500 mt-1">Vector Dimensions Loaded</div>
          </div>

          <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/60 dark:border-zinc-800/60 pt-4 md:pt-0 md:pl-8">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-text-secondary/60 mb-1">
              <Icons.Cog8Tooth className="w-4 h-4 text-secondary" /> Agent Workers
            </div>
            <div className="text-3xl font-mono font-black text-text-primary tracking-tight" id="telemetry-agents">
              {stats.activeAgents}
            </div>
            <div className="text-xs font-sans text-zinc-500 mt-1">Autonomous Workers Running</div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-mono font-extrabold tracking-tight text-text-primary">
            Endorsed by Top-tier Architects
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <TestimonialCard key={test.id} {...test} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
