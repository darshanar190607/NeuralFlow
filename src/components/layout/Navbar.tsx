import React, { useState, useEffect } from "react";
import { ZapIcon, MenuIcon, XMark, ArrowUpRightIcon } from "../ui/Icons";

export const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      id="app-header"
      className={`sticky top-0 z-50 w-full border-b transition-interactive duration-180 ${
        isScrolled
          ? "border-border/60 bg-background/80 backdrop-blur-md shadow-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand logo in JetBrains Mono */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 font-mono font-extrabold text-lg tracking-tight cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-text-primary shadow-sm hover:rotate-12 transition-interactive">
            <ZapIcon className="w-4.5 h-4.5 fill-current text-text-primary" />
          </div>
          <span className="text-text-primary font-black">NeuralFlow</span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-wider uppercase">
          <button
            onClick={() => scrollToSection("features")}
            className="text-text-secondary/80 hover:text-secondary cursor-pointer transition-interactive"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection("playground")}
            className="text-text-secondary/80 hover:text-secondary cursor-pointer transition-interactive"
          >
            Sandbox
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-text-secondary/80 hover:text-secondary cursor-pointer transition-interactive"
          >
            Pricing Matrix
          </button>
          <button
            onClick={() => scrollToSection("social-proof")}
            className="text-text-secondary/80 hover:text-secondary cursor-pointer transition-interactive"
          >
            Endorsements
          </button>
        </nav>

        {/* Action Tools */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToSection("playground")}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold rounded-xl bg-accent text-text-primary shadow-sm hover:bg-secondary hover:translate-y-[-1px] transition-interactive cursor-pointer"
          >
            Launch Sandbox <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger menu */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="md:hidden p-2 rounded-lg text-text-primary hover:bg-border/40 transition-interactive cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isDrawerOpen ? <XMark className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 flex flex-col p-6 animate-fade-in border-t border-border">
          <nav className="flex flex-col gap-6 text-sm font-mono font-bold tracking-wider uppercase">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left py-2 border-b border-border/40 text-text-secondary hover:text-secondary"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("playground")}
              className="text-left py-2 border-b border-border/40 text-text-secondary hover:text-secondary"
            >
              Sandbox
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left py-2 border-b border-border/40 text-text-secondary hover:text-secondary"
            >
              Pricing Matrix
            </button>
            <button
              onClick={() => scrollToSection("social-proof")}
              className="text-left py-2 border-b border-border/40 text-text-secondary hover:text-secondary"
            >
              Endorsements
            </button>
          </nav>
          
          <button
            onClick={() => scrollToSection("playground")}
            className="w-full mt-8 py-3.5 flex items-center justify-center gap-2 rounded-xl bg-accent text-text-primary font-mono font-black text-xs uppercase shadow-sm"
          >
            Launch Sandbox <ArrowUpRightIcon className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
