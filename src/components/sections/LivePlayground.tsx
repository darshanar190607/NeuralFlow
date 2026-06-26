import React, { useState, useEffect, useRef } from "react";
import { broadcastMessage, useTabSyncListener } from "../../utils/sync";

interface RunEventPayload {
  source: string;
  agent: string;
  isRunning: boolean;
  progress: number;
  logs: string[];
  isCompleted: boolean;
}

export default function LivePlayground() {
  const [selectedSource, setSelectedSource] = useState("Stripe Invoices API");
  const [selectedAgent, setSelectedAgent] = useState("Deduplicate & Mask PII");
  const [velocity, setVelocity] = useState<number>(3); // 1-5 speed multiplier
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const logsEndRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const sources = [
    "Stripe Invoices API",
    "PostgreSQL Customer Records",
    "Google Spreadsheet Rows",
    "Salesforce Lead Tracker",
  ];

  const agents = [
    "Deduplicate & Mask PII",
    "Semantic Schema Alignment",
    "Bi-directional Vector Sync",
    "Anomaly & Fraud Detector",
  ];

  // Auto-scroll logs terminal
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Synchronize execution state from other tabs
  useTabSyncListener((msg) => {
    if (msg.type === "PIPELINE_RUN" && msg.payload) {
      const data = msg.payload as RunEventPayload;
      setSelectedSource(data.source);
      setSelectedAgent(data.agent);
      setIsRunning(data.isRunning);
      setProgress(data.progress);
      setLogs(data.logs);
      setIsCompleted(data.isCompleted);
    }
  });

  // Clean timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const broadcastCurrentState = (
    running: boolean,
    prog: number,
    currentLogs: string[],
    completed: boolean
  ) => {
    broadcastMessage("PIPELINE_RUN", {
      source: selectedSource,
      agent: selectedAgent,
      isRunning: running,
      progress: prog,
      logs: currentLogs,
      isCompleted: completed,
    });
  };

  const runPipeline = () => {
    if (isRunning) return;

    setIsRunning(true);
    setIsCompleted(false);
    setProgress(0);
    const initialLogs = [
      `[SYSTEM] Init Link context on: ${selectedSource}`,
      `[SYSTEM] Directing agent target: ${selectedAgent}`,
      `[INFO] Deploying autonomous telemetry cluster on thread #${Math.floor(Math.random() * 800 + 100)}`,
    ];
    setLogs(initialLogs);
    broadcastCurrentState(true, 0, initialLogs, false);

    const steps = [
      {
        percentage: 15,
        log: `[CONNECT] SSL Handshake succeeded. Ingesting raw streams...`,
      },
      {
        percentage: 35,
        log: `[PARSING] Discovered ${Math.floor(Math.random() * 500 + 120)} records. Scanning structure.`,
      },
      {
        percentage: 55,
        log: `[AGENT_ENGAGED] Spinning up semantic parsing routines...`,
      },
      {
        percentage: 75,
        log: `[MUTATION] ${selectedAgent === "Deduplicate & Mask PII" ? "[PII] Masked 14 phone records. Cleaned trailing blank whitespaces." : "[MAPPING] Schema drift fixed. Realigned 'invoice_dt' -> 'date_issued'."}`,
      },
      {
        percentage: 90,
        log: `[VALIDATING] All zero-shot assertion criteria verified. Preparing write locks.`,
      },
      {
        percentage: 100,
        log: `[SYNC_SUCCESS] 243 events synced successfully in ${(42 / velocity).toFixed(1)}ms! State saved.`,
      },
    ];

    let currentStepIdx = 0;
    
    const executeNextStep = () => {
      if (currentStepIdx >= steps.length) {
        setIsRunning(false);
        setIsCompleted(true);
        return;
      }

      const step = steps[currentStepIdx];
      // Delay inversely proportional to velocity slider
      const delay = (1600 - velocity * 250);

      timerRef.current = setTimeout(() => {
        setProgress(step.percentage);
        setLogs((prev) => {
          const nextLogs = [...prev, step.log];
          broadcastCurrentState(true, step.percentage, nextLogs, step.percentage === 100);
          return nextLogs;
        });

        if (step.percentage === 100) {
          setIsRunning(false);
          setIsCompleted(true);
        } else {
          currentStepIdx++;
          executeNextStep();
        }
      }, delay);
    };

    executeNextStep();
  };

  const handleSourceSelect = (src: string) => {
    if (isRunning) return;
    setSelectedSource(src);
    broadcastMessage("PIPELINE_RUN", {
      source: src,
      agent: selectedAgent,
      isRunning,
      progress,
      logs,
      isCompleted,
    });
  };

  const handleAgentSelect = (ag: string) => {
    if (isRunning) return;
    setSelectedAgent(ag);
    broadcastMessage("PIPELINE_RUN", {
      source: selectedSource,
      agent: ag,
      isRunning,
      progress,
      logs,
      isCompleted,
    });
  };

  return (
    <section id="playground" className="py-24 px-6 md:px-12 bg-white dark:bg-zinc-950 transition-colors duration-300 border-t border-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-4 rounded-full border border-primary/20 bg-border/40 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            {/* Play icon */}
            <svg className="w-3.5 h-3.5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Live Sandbox
          </div>
          <h2 id="playground-heading" className="text-3xl md:text-5xl font-mono font-extrabold tracking-tight text-text-primary mb-4">
            Autonomous Sync Sandbox
          </h2>
          <p className="max-w-2xl mx-auto text-base font-sans text-zinc-600 dark:text-zinc-300">
            Select an ingestion stream and AI agent, and trigger a pipeline job. Open this page in <strong>another browser window/tab</strong> to watch them sync in real-time!
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-border dark:border-zinc-800/80 shadow-3d-mint flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Step 1: Select Data Source */}
              <div>
                <label className="block text-xs font-mono font-black uppercase text-text-secondary/60 tracking-widest mb-3">
                  1. Ingestion Pipeline
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {sources.map((src) => {
                    const isSelected = selectedSource === src;
                    return (
                      <button
                        key={src}
                        id={`source-option-${src.replace(/\s+/g, "-").toLowerCase()}`}
                        disabled={isRunning}
                        onClick={() => handleSourceSelect(src)}
                        className={`w-full p-3.5 rounded-xl text-left border text-xs font-mono font-bold transition-interactive cursor-pointer ${
                          isSelected
                            ? "border-saffron bg-forsythia/10 text-text-primary ring-1 ring-saffron/20 translate-y-[-1px]"
                            : "border-mint dark:border-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:border-saffron/40 hover:bg-background/40 disabled:opacity-50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {/* DB Icon */}
                          <svg className={`w-4 h-4 ${isSelected ? "text-saffron" : "text-zinc-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                          </svg>
                          <span>{src}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select AI Agent */}
              <div>
                <label className="block text-xs font-mono font-black uppercase text-text-secondary/60 tracking-widest mb-3">
                  2. Autonomous Processor
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {agents.map((ag) => {
                    const isSelected = selectedAgent === ag;
                    return (
                      <button
                        key={ag}
                        id={`agent-option-${ag.replace(/\s+/g, "-").toLowerCase()}`}
                        disabled={isRunning}
                        onClick={() => handleAgentSelect(ag)}
                        className={`w-full p-3.5 rounded-xl text-left border text-xs font-mono font-bold transition-interactive cursor-pointer ${
                          isSelected
                            ? "border-saffron bg-forsythia/10 text-text-primary ring-1 ring-saffron/20 translate-y-[-1px]"
                            : "border-mint dark:border-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:border-saffron/40 hover:bg-background/40 disabled:opacity-50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {/* Cpu Icon */}
                          <svg className={`w-4 h-4 ${isSelected ? "text-saffron" : "text-zinc-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <rect width="16" height="16" x="4" y="4" rx="2" />
                            <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                          </svg>
                          <span>{ag}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Speed slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-mono font-black uppercase text-text-secondary/60 tracking-widest">
                    Execution Velocity
                  </label>
                  <span className="text-xs font-mono font-black text-saffron">
                    {velocity}x Speed
                  </span>
                </div>
                <input
                  id="velocity-slider"
                  type="range"
                  min="1"
                  max="5"
                  disabled={isRunning}
                  value={velocity}
                  onChange={(e) => setVelocity(Number(e.target.value))}
                  className="w-full h-1.5 bg-background dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-saffron"
                />
              </div>

            </div>

            {/* Launch Pipeline Trigger */}
            <button
              id="trigger-pipeline-btn"
              onClick={runPipeline}
              disabled={isRunning}
              className={`w-full mt-8 py-4 px-6 rounded-xl font-mono font-black text-sm flex items-center justify-center gap-2.5 transition-interactive cursor-pointer ${
                isRunning
                  ? "bg-background dark:bg-zinc-800 text-zinc-450 border border-border dark:border-zinc-700 cursor-not-allowed"
                  : "bg-forsythia hover:bg-saffron text-oceanic shadow-md hover:shadow-lg hover:translate-y-[-1px]"
              }`}
            >
              {isRunning ? (
                <>
                  {/* CSS Spinner */}
                  <svg className="w-5 h-5 animate-spin text-saffron" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>STREAMING THREADS...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>EXECUTE SYNC JOB</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Console */}
          <div className="lg:col-span-7 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-3d-nocturnal p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-saffron" />
                <span className="w-2.5 h-2.5 rounded-full bg-mint" />
                <span className="text-xs font-mono text-zinc-500 ml-2 font-bold">telemetry_console.log</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
                <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-saffron animate-pulse" : isCompleted ? "bg-mint animate-pulse" : "bg-zinc-700"}`} />
                <span className="font-bold">{isRunning ? "RUNNING" : isCompleted ? "COMPLETED" : "IDLE"}</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div id="terminal-log-container" className="flex-1 overflow-y-auto font-mono text-xs text-zinc-300 space-y-3 pr-2 max-h-[300px]">
              {logs.length === 0 ? (
                <div className="text-zinc-500 italic h-full flex flex-col items-center justify-center pt-16">
                  {/* Terminal Icon */}
                  <svg className="w-10 h-10 mb-2.5 text-mint/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                  <span className="font-bold text-center">CONSOLE READY FOR INGESTION</span>
                  <span className="text-[10px] text-zinc-650">Select parameters on the left and trigger execute job</span>
                </div>
              ) : (
                logs.map((log, index) => {
                  let textClass = "text-zinc-300";
                  if (log.includes("[SYSTEM]")) textClass = "text-zinc-500 font-extrabold";
                  else if (log.includes("[CONNECT]")) textClass = "text-mint font-bold";
                  else if (log.includes("[AGENT_ENGAGED]")) textClass = "text-saffron font-bold";
                  else if (log.includes("[SUCCESS]") || log.includes("[SYNC_SUCCESS]")) textClass = "text-forsythia font-black uppercase tracking-wider";
                  else if (log.includes("[MUTATION]")) textClass = "text-mint";
                  else if (log.includes("[VALIDATING]")) textClass = "text-zinc-400 font-bold";

                  return (
                    <div key={index} className={`leading-relaxed break-all ${textClass}`}>
                      {log}
                    </div>
                  );
                })
              )}
              <div ref={logsEndRef} />
            </div>

            {/* Progress Bar */}
            <div className="border-t border-zinc-900 pt-4 mt-4">
              <div className="flex justify-between items-center mb-1.5 text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                <span>Thread Sync Vector Flow:</span>
                <span className="text-saffron font-black">{progress}%</span>
              </div>
              <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden shadow-inner">
                <div
                  id="terminal-progress-bar"
                  className="bg-forsythia h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export { LivePlayground };
