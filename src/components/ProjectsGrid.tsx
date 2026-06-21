import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Users, Sparkles, BookOpen, Clock, Activity, TrendingUp, HelpCircle, Check, Play, RefreshCw, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

export function ProjectsGrid() {
  const [activePlayground, setActivePlayground] = useState<string | null>(null);

  // QueueCare Simulation States
  const [qcQueuePos, setQcQueuePos] = useState<number>(5);
  const [qcEstimatedWait, setQcEstimatedWait] = useState<number>(35);
  const [qcIsBooked, setQcIsBooked] = useState<boolean>(false);
  const [qcLogs, setQcLogs] = useState<string[]>([]);

  // FTI App Simulation States
  const [ftiIncome, setFtiIncome] = useState<number>(50000);
  const [savingsRatio, setSavingsRatio] = useState<number>(30); // 30%
  const [investmentChoice, setInvestmentChoice] = useState<'stocks' | 'crypto' | 'bonds'>('stocks');
  const [ftiLessonsCompleted, setFtiLessonsCompleted] = useState<number>(3);
  const [ftiXp, setFtiXp] = useState<number>(450);

  // QueueCare ticking mechanism simulation
  useEffect(() => {
    let interval: any;
    if (qcIsBooked && qcQueuePos > 1) {
      interval = setInterval(() => {
        setQcQueuePos(prev => {
          const next = prev - 1;
          const nextWait = next * 7;
          setQcEstimatedWait(nextWait);
          setQcLogs(prevLogs => [
            `Patient #104 checked in. You are now at position #${next}!`,
            ...prevLogs
          ]);
          return next;
        });
      }, 7000);
    } else if (qcQueuePos === 1 && qcIsBooked) {
      setQcLogs(prevLogs => [
        `🔔 IT IS YOUR TURN! Please proceed to Consultation Room B.`,
        ...prevLogs
      ]);
      setQcIsBooked(false);
    }
    return () => clearInterval(interval);
  }, [qcIsBooked, qcQueuePos]);

  const handleQueueCareBook = () => {
    setQcQueuePos(6);
    setQcEstimatedWait(42);
    setQcIsBooked(true);
    setQcLogs([
      "Successfully booked Appointment under slot: #QC-8729.",
      "Live patient queue initialized. Current position: #6.",
      "ML Optimizer predicted wait: ~42 mins."
    ]);
  };

  const handleFtiCompleteLesson = () => {
    setFtiLessonsCompleted(prev => prev + 1);
    setFtiXp(prev => prev + 150);
  };

  // Math calculated outputs for FTI
  const ftiSavings = Math.round((ftiIncome * savingsRatio) / 100);
  const ftiInvested = Math.round((ftiIncome * (100 - savingsRatio - 40)) / 100);
  const ftiExpenses = Math.round((ftiIncome * 40) / 100); // fixed essential ratio
  const ftiProgressScore = Math.min(100, Math.round((savingsRatio * 2) + (ftiLessonsCompleted * 8)));

  const bgStyles = ["bg-[#B46A72]", "bg-[#A8B58A]"];
  const borderColors = ["border-[#B46A72]/20", "border-[#A8B58A]/20"];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => {
          const isQueueCare = project.id === "queuecare";
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[14px] border border-[#0A0A0A]/10 overflow-hidden flex flex-col justify-between hover:border-[#1E3AF0] transition-all duration-350"
            >
              {/* Header Colored Ribbon banner */}
              <div className={`p-4 ${isQueueCare ? 'bg-[#1E3AF0] text-white' : 'bg-[#0A0A0A]/5 text-[#0A0A0A]'} border-b border-[#0A0A0A]/10 flex items-center justify-between`}>
                <span className="text-[10px] font-bold uppercase tracking-widest block">
                  {project.badge} • 2024-25
                </span>
                <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded border uppercase ${isQueueCare ? 'bg-white/10 text-white border-white/20' : 'bg-white text-[#0A0A0A] border-[#0A0A0A]/10'}`}>
                  {isQueueCare ? "01 / 02" : "02 / 02"}
                </span>
              </div>

              {/* Main Content */}
              <div className="p-6 sm:p-7 flex-1">
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0A0A0A] leading-tight mb-1 uppercase">
                  {project.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-[#1E3AF0] font-semibold mb-4 mt-0.5">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#0A0A0A]/80 leading-relaxed font-sans mb-6">
                  {project.description}
                </p>

                {/* Bullet list of specs */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-[9px] uppercase tracking-widest text-[#0A0A0A]/50 font-black mb-1">Key Objectives:</h4>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#0A0A0A]/85">
                      <span className="text-[#1E3AF0] mt-0.5 shrink-0">❖</span>
                      <p className="leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Contributor badge row */}
                {project.contributors && (
                  <div className="mb-6 flex items-center gap-2 bg-[#0A0A0A]/5 p-3 rounded-[10px] border border-[#0A0A0A]/10">
                    <Users className="w-4 h-4 text-[#0A0A0A]/60 shrink-0" />
                    <div className="text-[11px] text-[#0A0A0A]/80 leading-tight">
                      <span className="font-bold">Co-Contributors:</span> {project.contributors.join(", ")}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] uppercase border-b border-[#1E3AF0] text-[#1E3AF0] font-bold"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Panel buttons */}
              <div className="p-5 bg-[#0A0A0A]/5 border-t border-[#0A0A0A]/10 flex flex-col sm:flex-row gap-3">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-4 rounded-full bg-[#1E3AF0] text-white hover:bg-[#0A0A0A] text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Launch Live Site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActivePlayground(project.id)}
                  className={`flex-1 py-2 px-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F2] text-[#0A0A0A] inline-flex items-center justify-center gap-2 cursor-pointer ${
                    activePlayground === project.id ? "ring-2 ring-[#1E3AF0]" : ""
                  }`}
                >
                  <Play className="w-3.5 h-3.5 text-inherit" />
                  Try Live Simulator
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Simulator Overlay/Modal Panel */}
      <AnimatePresence>
        {activePlayground && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0A]/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-[14px] border border-[#0A0A0A]/10 p-6 sm:p-8 w-full max-w-2xl relative shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button
                onClick={() => {
                  setActivePlayground(null);
                  setQcIsBooked(false);
                }}
                className="absolute top-4 right-4 p-2 rounded-full border border-[#0A0A0A]/10 text-[#0A0A0A] hover:bg-[#F5F5F2] transition-colors"
              >
                ✕
              </button>

              {/* Playground 1: QueueCare Smart Hospital Simulator */}
              {activePlayground === "queuecare" && (
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-[#1E3AF0] text-white rounded-xl">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-[#0A0A0A]">
                        QueueCare Terminal Sandbox
                      </h4>
                      <p className="text-xs uppercase font-mono text-[#0A0A0A]/50 tracking-wider">
                        // Real-time Queue Tracking Simulation (localStorage synced structure)
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#0A0A0A]/70 mb-6 leading-relaxed">
                    Test the core algorithms of QueueCare. Simulate booking an appointment inside a busy clinic of Women's Multi-speciality Department. Monitor live position updates, ML predicted wait timer changes, and console receipts.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
                    {/* Simulator Action Panel */}
                    <div className="p-5 bg-[#F5F5F2] rounded-2xl flex flex-col justify-between border border-[#0A0A0A]/10">
                      <div>
                        <span className="text-[10px] uppercase font-mono font-bold text-[#1E3AF0] tracking-wider block mb-1">
                          Role: Patient Portal View
                        </span>
                        <h5 className="font-display font-bold text-base text-[#0A0A0A] mb-3">
                          Simulate Dynamic Booking
                        </h5>
                        <p className="text-xs text-[#0A0A0A]/85 leading-relaxed mb-4">
                          Secure a patient slot. The live backend will slot you as Patient #105 and advance you automatically every 7 seconds.
                        </p>
                      </div>

                      <div className="space-y-2">
                        {!qcIsBooked ? (
                          <button
                            onClick={handleQueueCareBook}
                            className="w-full py-3 rounded-xl bg-[#1E3AF0] hover:bg-[#0A0A0A] text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                          >
                            <Play className="w-4 h-4 fill-current" />
                            Book Free Patient Slot
                          </button>
                        ) : (
                          <div className="p-3 bg-[#16C172]/20 rounded-xl border border-[#16C172] text-center text-xs font-semibold text-[#16C172] flex items-center justify-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#16C172] animate-ping" />
                            Simulation Active & Synced
                          </div>
                        )}
                        <button
                          onClick={() => {
                            setQcIsBooked(false);
                            setQcQueuePos(5);
                            setQcEstimatedWait(35);
                            setQcLogs([]);
                          }}
                          className="w-full py-2.5 rounded-xl border border-[#0A0A0A]/10 hover:bg-[#F5F5F2] text-xs text-[#0A0A0A]/60"
                        >
                          Reset Engine
                        </button>
                      </div>
                    </div>

                    {/* Simulator Screen output Panel */}
                    <div className="p-5 bg-[#0A0A0A] text-white rounded-2xl flex flex-col justify-between font-mono relative overflow-hidden">
                      <span className="absolute top-2 right-2 text-[9px] text-[#16C172] font-bold uppercase tracking-widest animate-pulse">
                        ● LIVE TRANSMIT
                      </span>
                      
                      <div>
                        <span className="text-[10px] text-[#1E3AF0] uppercase font-bold tracking-wider block mb-3">// CLIENT MONITORS:</span>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-white/10 p-3 rounded-xl text-center">
                            <span className="text-[9px] text-white/50 block">LIVE POSITION</span>
                            <span className="text-xl font-bold font-display text-white">
                              {qcIsBooked ? `#${qcQueuePos}` : "--"}
                            </span>
                          </div>
                          <div className="bg-white/10 p-3 rounded-xl text-center">
                            <span className="text-[9px] text-white/50 block">EST. TIME</span>
                            <span className="text-xl font-bold font-display text-white">
                              {qcIsBooked ? `${qcEstimatedWait}m` : "--"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Log Screen */}
                      <div className="bg-white/5 p-2 rounded-lg text-[10px] text-white/70 h-24 overflow-y-auto space-y-1 scrollbar-thin">
                        {qcLogs.length === 0 ? (
                          <span className="text-white/30">Console is idle. Book above to start live listener websocket feed...</span>
                        ) : (
                          qcLogs.map((log, lIdx) => (
                            <p key={lIdx} className="leading-tight border-b border-white/5 pb-1">
                              &gt; {log}
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <button
                      onClick={() => {
                        setActivePlayground(null);
                        setQcIsBooked(false);
                      }}
                      className="px-5 py-2.5 rounded-lg bg-[#0A0A0A] text-white text-xs font-bold"
                    >
                      Close Simulator
                    </button>
                  </div>
                </div>
              )}

              {/* Playground 2: FTI Financial Literacy Simulator */}
              {activePlayground === "ftiapp" && (
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-[#0A0A0A] text-white rounded-xl">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-[#0A0A0A]">
                        FTI Gamified Wealth Simulator
                      </h4>
                      <p className="text-xs uppercase font-mono text-[#0A0A0A]/50 tracking-wider">
                        // Practice Interactive Taxing, Budgeting & Leaderboard Streaks
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#0A0A0A]/70 mb-6 leading-relaxed">
                    Test the financial architecture engine. Drag the savings indicator to see how FTI App dynamically manages investment splits risk-free. Complete a gamified lesson block to increase your overall Financial Health score and gain leaderboard XP points!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Budget Builder inputs */}
                    <div className="p-5 bg-[#F5F5F2] border border-[#0A0A0A]/10 rounded-2xl space-y-4">
                      <span className="text-[10px] uppercase font-mono font-bold text-[#1E3AF0] tracking-wider block">
                        Module: Budgeting & Micro-learning
                      </span>

                      <div>
                        <label className="text-xs font-bold text-[#0A0A0A] flex justify-between">
                          <span>Monthly Income (INR)</span>
                          <span className="text-[#1E3AF0]">₹{ftiIncome.toLocaleString('en-IN')}</span>
                        </label>
                        <input
                          type="range"
                          min="15000"
                          max="150000"
                          step="5000"
                          value={ftiIncome}
                          onChange={(e) => setFtiIncome(Number(e.target.value))}
                          className="w-full accent-[#1E3AF0] mt-2"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#0A0A0A] flex justify-between">
                          <span>Target Savings Ratio</span>
                          <span className="text-[#1E3AF0]">{savingsRatio}%</span>
                        </label>
                        <input
                          type="range"
                          min="10"
                          max="50"
                          step="5"
                          value={savingsRatio}
                          onChange={(e) => setSavingsRatio(Number(e.target.value))}
                          className="w-full accent-[#1E3AF0] mt-2"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={handleFtiCompleteLesson}
                          className="w-full py-3 rounded-xl bg-[#1E3AF0] hover:bg-[#0A0A0A] text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                        >
                          <BookOpen className="w-4 h-4" />
                          Complete Lesson (+150 XP)
                        </button>
                        <span className="text-[10px] text-center block text-[#0A0A0A]/50 mt-1.5">
                          Lesson Tracker: {ftiLessonsCompleted} modules done. Level up!
                        </span>
                      </div>
                    </div>

                    {/* Results Panel */}
                    <div className="p-5 bg-white border border-[#0A0A0A]/10 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] text-[#1E3AF0] uppercase font-bold tracking-wider block mb-3">
                          YOUR INVESTMENT PORTFOLIO:
                        </span>

                        <div className="space-y-2.5 text-xs">
                          <div className="flex justify-between pb-1.5 border-b border-[#0A0A0A]/5">
                            <span className="text-[#0A0A0A]/50">Essential Expenses (40%):</span>
                            <span className="font-mono text-[#0A0A0A] font-bold">₹{ftiExpenses.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex justify-between pb-1.5 border-b border-[#0A0A0A]/5">
                            <span className="text-[#0A0A0A]/50">Liquidity Savings ({savingsRatio}%):</span>
                            <span className="font-mono text-[#16C172] font-bold">₹{ftiSavings.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex justify-between pb-1.5 border-b border-[#0A0A0A]/5">
                            <span className="text-[#0A0A0A]/50">Investment Split ({100 - savingsRatio - 40}%):</span>
                            <span className="font-mono text-[#1E3AF0] font-bold">₹{ftiInvested.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Health Score and Leaderboard */}
                      <div className="mt-4 pt-4 border-t border-[#0A0A0A]/10 bg-[#F5F5F2] p-3 rounded-xl">
                        <div className="flex justify-between text-xs font-bold text-[#0A0A0A] mb-1.5">
                          <span>Financial Health Score:</span>
                          <span className="text-[#1E3AF0]">{ftiProgressScore}%</span>
                        </div>
                        <div className="w-full bg-[#0A0A0A]/10 h-2.5 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ width: `${ftiProgressScore}%` }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#1E3AF0] h-full"
                          />
                        </div>
                        <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-[#0A0A0A]/60">
                          <span>XP STREAK: {ftiXp} EXP</span>
                          <span className="px-1.5 py-0.5 rounded bg-[#1E3AF0] text-white font-bold text-[9px]">
                            RANK #18
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      onClick={() => {
                        setActivePlayground(null);
                        setFtiLessonsCompleted(3);
                        setFtiXp(450);
                      }}
                      className="px-5 py-2.5 rounded-lg bg-[#0A0A0A] text-white text-xs font-bold"
                    >
                      Close Simulator
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
