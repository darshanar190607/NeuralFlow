import React from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import FeatureSection from "./components/sections/FeatureSection";
import LivePlayground from "./components/sections/LivePlayground";
import PricingSection from "./components/sections/PricingSection";
import SocialProofSection from "./components/sections/SocialProofSection";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased selection:bg-accent/35 selection:text-text-primary transition-colors duration-300">
      {/* ---------------- NAVIGATION HEADER ---------------- */}
      <Navbar />

      {/* ---------------- MAIN CONTENT AREA ---------------- */}
      <main>
        {/* ---------------- HERO AREA ---------------- */}
        <HeroSection />

        {/* ---------------- BENTO GRID & ACCORDION FEATURES ---------------- */}
        <FeatureSection />

        {/* ---------------- REAL-TIME CONSOLE SANDBOX ---------------- */}
        <LivePlayground />

        {/* ---------------- DYNAMIC PRICING ENGINE ---------------- */}
        <PricingSection />

        {/* ---------------- CUSTOMER SOCIAL CREDENTIALS ---------------- */}
        <SocialProofSection />
      </main>

      {/* ---------------- FOOTER SYSTEM ---------------- */}
      <Footer />
    </div>
  );
}

export { App };
