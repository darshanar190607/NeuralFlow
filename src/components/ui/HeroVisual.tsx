import React, { useState } from "react";
import * as Icons from "./Icons";

export const HeroVisual: React.FC = () => {
  const [isIsometric, setIsIsometric] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Active status variables
  const dataThroughput = "14,842 rec/s";
  const systemLatency = "38ms";

  return (
    <div className="flex flex-col items-center w-full">
      {/* 3D View Controllers */}
      <div className="flex items-center gap-2 mb-4 bg-background/80 border border-border p-1.5 rounded-xl self-end z-20 shadow-sm">
        <button
          onClick={() => setIsIsometric(false)}
          className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg flex items-center gap-1.5 transition-interactive cursor-pointer ${
            !isIsometric
              ? "bg-nocturnal text-white dark:bg-mint dark:text-oceanic shadow-sm font-bold"
              : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          }`}
        >
          {/* Simple layout SVG */}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18M3 9h18" />
          </svg>
          Flat 2D
        </button>
        <button
          onClick={() => setIsIsometric(true)}
          className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg flex items-center gap-1.5 transition-interactive cursor-pointer ${
            isIsometric
              ? "bg-nocturnal text-white dark:bg-mint dark:text-oceanic shadow-sm font-bold"
              : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          }`}
        >
          {/* Simple 3D rotation SVG */}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" x2="12" y1="22.08" y2="12" />
          </svg>
          Interactive 3D
        </button>
      </div>

      {/* Main 3D Canvas Sandbox Container */}
      <div
        id="hero-visual-stage"
        className="relative w-full h-[380px] md:h-[480px] rounded-3xl border border-border bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md overflow-hidden flex items-center justify-center p-4 md:p-8 transition-all duration-500 shadow-inner"
      >
        {/* Soft background glow circles using the palette colors */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-forsythia/10 dark:bg-forsythia/5 filter blur-[60px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-saffron/10 dark:bg-saffron/5 filter blur-[60px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-mint/10 dark:bg-nocturnal/20 filter blur-[80px] pointer-events-none" />

        {/* Isometric / 3D Canvas Structure */}
        <div
          className={`relative transition-all duration-700 ease-out flex items-center justify-center ${
            isIsometric ? "perspective-3d" : ""
          }`}
          style={{ width: "100%", height: "100%" }}
        >
          {/* Isometric Wrapper */}
          <div
            className={`relative w-full max-w-[500px] h-[320px] md:h-[360px] flex items-center justify-center transition-all duration-700 ${
              isIsometric ? "isometric-container preserve-3d" : "preserve-3d"
            }`}
          >
            {/* --- Isometric SVG Grid & Connecting Cables (Base Level) --- */}
            <svg
              className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
                isIsometric ? "opacity-100" : "opacity-40"
              }`}
              viewBox="0 0 500 360"
              fill="none"
              stroke="currentColor"
            >
              {/* Ground alignment guides (only visible in isometric) */}
              {isIsometric && (
                <g className="text-mint/40 dark:text-zinc-800/60" strokeWidth="1">
                  {/* Isometric Grid lines */}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`grid-h-${i}`} x1="-100" y1={40 * i} x2="600" y2={40 * i - 200} />
                  ))}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`grid-v-${i}`} x1={60 * i} y1="-100" x2={60 * i - 300} y2="500" />
                  ))}
                </g>
              )}

              {/* Data streams paths */}
              <g className="text-mint dark:text-zinc-700" strokeWidth="2" strokeLinecap="round">
                {/* Node 1 to Node 2 */}
                <path d="M 80,180 C 140,140 180,140 240,120" strokeDasharray="4 4" />
                <path d="M 80,180 C 140,220 180,220 240,240" strokeDasharray="4 4" />

                {/* Node 2 to Node 3 */}
                <path d="M 240,120 C 320,100 340,120 420,180" strokeDasharray="4 4" />
                <path d="M 240,240 C 320,260 340,240 420,180" strokeDasharray="4 4" />
              </g>

              {/* Glowing Dynamic Data Packets (SVG circle animations along paths) */}
              <circle r="4" fill="#FFC801" className="glow-forsythia animate-pulse">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M 80,180 C 140,140 180,140 240,120"
                />
              </circle>
              <circle r="4.5" fill="#FF9932" className="glow-saffron animate-pulse">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M 80,180 C 140,220 180,220 240,240"
                />
              </circle>
              <circle r="4" fill="#D9E8E2" className="glow-mint">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  path="M 240,120 C 320,100 340,120 420,180"
                />
              </circle>
              <circle r="5" fill="#FFC801" className="glow-forsythia">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  path="M 240,240 C 320,260 340,240 420,180"
                />
              </circle>
            </svg>

            {/* --- NODE 1 (LEFT): INGESTION HUB --- */}
            <div
              className={`absolute transition-all duration-500 flex flex-col items-center justify-center ${
                isIsometric
                  ? "left-[40px] top-[140px] translate-z-low hover:translate-z-medium"
                  : "left-6 top-[150px]"
              } preserve-3d`}
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={() => setHoveredNode("ingest")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 p-2.5 relative cursor-pointer ${
                  isIsometric
                    ? "bg-nocturnal border-2 border-mint text-white shadow-3d-nocturnal"
                    : "bg-nocturnal text-white border border-mint shadow-xl"
                } ${hoveredNode === "ingest" ? "scale-105 border-forsythia" : ""}`}
              >
                {/* Cylinder DB SVG */}
                <svg className="w-8 h-8 text-forsythia animate-bounce mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-mint">
                  DB_INGEST
                </span>

                {/* 3D layer plate shadow helper */}
                {isIsometric && (
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-saffron to-transparent opacity-20 pointer-events-none" />
                )}
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] font-mono font-bold text-nocturnal dark:text-arctic block uppercase tracking-wider">
                  Ingestion Hub
                </span>
                <span className="text-[8px] font-mono text-zinc-500 dark:text-mint/60">
                  SQL, APIs, S3
                </span>
              </div>
            </div>

            {/* --- NODE 2A (MIDDLE TOP): AI MAPPING ENGINE --- */}
            <div
              className={`absolute transition-all duration-500 flex flex-col items-center justify-center ${
                isIsometric
                  ? "left-[200px] top-[40px] translate-z-medium hover:translate-z-high"
                  : "left-[190px] top-[40px]"
              } preserve-3d`}
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={() => setHoveredNode("mapper")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 p-2 relative cursor-pointer ${
                  isIsometric
                    ? "bg-forsythia border-2 border-white text-oceanic shadow-3d-forsythia"
                    : "bg-forsythia text-oceanic border-2 border-white shadow-xl"
                } ${hoveredNode === "mapper" ? "scale-105 rotate-2 bg-saffron text-white border-forsythia" : ""}`}
              >
                {/* Chip/processor SVG */}
                <svg className="w-8 h-8 text-oceanic animate-pulse mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                </svg>
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-oceanic">
                  SEMANTIC
                </span>
                
                {/* Visual pulse glow when hovered */}
                <span className="absolute -inset-1 rounded-2xl border border-forsythia animate-ping opacity-25 pointer-events-none" />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] font-mono font-bold text-nocturnal dark:text-arctic block uppercase tracking-wider">
                  Schema AI
                </span>
                <span className="text-[8px] font-mono text-zinc-500 dark:text-mint/60">
                  Self-healing schema
                </span>
              </div>
            </div>

            {/* --- NODE 2B (MIDDLE BOTTOM): SMART PII SCRUBBER --- */}
            <div
              className={`absolute transition-all duration-500 flex flex-col items-center justify-center ${
                isIsometric
                  ? "left-[200px] top-[210px] translate-z-medium hover:translate-z-high"
                  : "left-[190px] top-[220px]"
              } preserve-3d`}
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={() => setHoveredNode("scrubber")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 p-2 relative cursor-pointer ${
                  isIsometric
                    ? "bg-arctic border-2 border-mint text-nocturnal shadow-3d-mint"
                    : "bg-arctic text-nocturnal border border-mint shadow-xl"
                } ${hoveredNode === "scrubber" ? "scale-105 bg-mint" : ""}`}
              >
                {/* Shield SVG */}
                <svg className="w-8 h-8 text-saffron mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-oceanic">
                  PII_SCRUB
                </span>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] font-mono font-bold text-nocturnal dark:text-arctic block uppercase tracking-wider">
                  PII Guard
                </span>
                <span className="text-[8px] font-mono text-zinc-500 dark:text-mint/60">
                  Zero-shot privacy
                </span>
              </div>
            </div>

            {/* --- NODE 3 (RIGHT): VECTOR SYNC OUTPOST --- */}
            <div
              className={`absolute transition-all duration-500 flex flex-col items-center justify-center ${
                isIsometric
                  ? "right-[40px] top-[140px] translate-z-high hover:translate-y-[-10px]"
                  : "right-6 top-[150px]"
              } preserve-3d`}
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={() => setHoveredNode("vector")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 p-2 relative cursor-pointer ${
                  isIsometric
                    ? "bg-oceanic border-2 border-forsythia text-white shadow-3d-oceanic"
                    : "bg-oceanic text-white border border-forsythia shadow-xl"
                } ${hoveredNode === "vector" ? "scale-105 border-saffron shadow-3d-saffron" : ""}`}
              >
                <Icons.ZapIcon className="w-8 h-8 text-forsythia animate-pulse mb-1" />
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-mint">
                  VEC_SYNC
                </span>

                {/* Glow ring */}
                <span className="absolute inset-0 rounded-2xl bg-teal-400/5 glow-forsythia animate-pulse-glow" />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] font-mono font-bold text-nocturnal dark:text-arctic block uppercase tracking-wider">
                  Vector Store
                </span>
                <span className="text-[8px] font-mono text-zinc-500 dark:text-mint/60">
                  Pinecone / PgVector
                </span>
              </div>
            </div>

            {/* --- FLOAT FLOATING SUB-PANEL: PIPELINE TELEMETRY --- */}
            {isIsometric && (
              <div
                className="absolute left-[130px] top-[140px] translate-z-high animate-float-layer bg-oceanic text-arctic border border-mint/20 rounded-xl p-3 shadow-2xl font-mono text-[9px] space-y-1 z-30 w-[140px] select-none"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-1.5 text-mint font-bold border-b border-zinc-800 pb-1 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-pulse" />
                  <span>Flow_Metrics.sh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Flow Rate:</span>
                  <span className="text-white font-semibold">{dataThroughput}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Latency:</span>
                  <span className="text-forsythia font-bold">{systemLatency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">State:</span>
                  <span className="text-emerald-400 font-bold">STABILIZED</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Floating Info Note */}
      <span className="text-xs font-mono text-zinc-500 dark:text-mint/60 mt-3 text-center flex items-center justify-center gap-1">
        <Icons.ActivityIcon className="w-3.5 h-3.5 text-forsythia" />
        {isIsometric 
          ? "Hover and tilt isometric blocks to inspect isolated server sub-planes."
          : "Standard 2D architectural blueprint map."
        }
      </span>
    </div>
  );
};
export default HeroVisual;
