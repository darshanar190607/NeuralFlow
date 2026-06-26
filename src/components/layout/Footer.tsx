import React from "react";
import { ZapIcon, LinkIcon } from "../ui/Icons";

export const Footer: React.FC = () => {
  return (
    <footer
      id="app-footer"
      className="bg-surface text-background border-t border-zinc-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 font-mono font-black text-lg tracking-tight text-white">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-surface">
                <ZapIcon className="w-4 h-4 fill-current text-surface" />
              </div>
              <span>NeuralFlow</span>
            </div>
            <p className="text-xs font-sans text-zinc-400 max-w-sm leading-relaxed">
              Next-generation autonomous agentic data automation platform. Streamlining schemas, scrubbing data leaks, and syncing dimensions in real-time.
            </p>
          </div>

          {/* Nav Column 1 */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">Platform</h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-400">
              <li><a href="#features" className="hover:text-accent transition-interactive">Capabilities</a></li>
              <li><a href="#playground" className="hover:text-accent transition-interactive">Interactive Sandbox</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-interactive">Pricing Engine</a></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">Legal & Docs</h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-400">
              <li><a href="#" className="hover:text-accent transition-interactive">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-interactive">SLA Guarantee</a></li>
              <li><a href="#" className="hover:text-accent transition-interactive">Developer Docs</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-zinc-500">
            &copy; {new Date().getFullYear()} NeuralFlow Technologies. All rights reserved. Built with senior frontend precision.
          </div>
          
          {/* Social Links using Link Icon */}
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-accent transition-interactive inline-flex items-center gap-1 text-[11px] font-mono" aria-label="Github Developer Profile">
              <LinkIcon className="w-3.5 h-3.5" /> github
            </a>
            <a href="#" className="hover:text-accent transition-interactive inline-flex items-center gap-1 text-[11px] font-mono" aria-label="Developer Twitter Channel">
              <LinkIcon className="w-3.5 h-3.5" /> twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
