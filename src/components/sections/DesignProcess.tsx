'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Compass,
  Lightbulb,
  Layers,
  CheckCircle2,
  Rocket,
  Sparkles,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { PROCESS_STAGES } from '@/data/portfolioData';

const STAGE_ICONS = [
  <Search key="1" className="w-4 h-4 text-cyan-400" />,
  <Compass key="2" className="w-4 h-4 text-indigo-400" />,
  <Lightbulb key="3" className="w-4 h-4 text-amber-400" />,
  <Layers key="4" className="w-4 h-4 text-purple-400" />,
  <CheckCircle2 key="5" className="w-4 h-4 text-emerald-400" />,
  <Rocket key="6" className="w-4 h-4 text-rose-400" />,
];

export default function DesignProcess() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  return (
    <section id="process" className="relative py-28 px-6 lg:px-12 bg-[#05070A] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Systematic Methodology</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              INTERACTIVE <br />
              <span className="text-gradient-cyan">DESIGN TRAJECTORY.</span>
            </h2>
          </div>
          <p className="text-fg-secondary text-sm md:text-base max-w-md">
            A rigorous 6-stage lifecycle transitioning from raw behavioral data to pixel-perfect, hyper-performant production software.
          </p>
        </div>

        {/* Stage Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PROCESS_STAGES.map((stage, index) => {
            const isActive = activeStageIndex === index;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStageIndex(index)}
                onMouseEnter={() => setActiveStageIndex(index)}
                className={`flex flex-col items-start p-4 rounded-2xl border transition-all text-left group ${
                  isActive
                    ? 'bg-[#0D1117] border-cyan-500/60 shadow-[0_0_25px_rgba(110,231,249,0.18)] ring-1 ring-cyan-500/40'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? 'text-brand-cyan' : 'text-fg-secondary'
                    }`}
                  >
                    {stage.number}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg transition-transform group-hover:scale-110 ${
                      isActive ? 'bg-cyan-500/20' : 'bg-white/5'
                    }`}
                  >
                    {STAGE_ICONS[index]}
                  </div>
                </div>

                <div
                  className={`text-sm font-bold tracking-tight transition-colors ${
                    isActive ? 'text-white' : 'text-fg-secondary group-hover:text-fg-primary'
                  }`}
                >
                  {stage.title.split(' ')[0]}
                </div>
                <div className="text-[10px] font-mono text-fg-muted truncate w-full mt-0.5">
                  {stage.title.split('&')[1] || stage.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Showcase with Real Artifact Diagram */}
        <div className="relative rounded-3xl bg-[#0D1117]/90 border border-white/10 p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-2xl min-h-[420px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStageIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Stage Details & Deliverables */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-brand-cyan border border-cyan-500/20 text-xs font-mono font-bold">
                    Stage {PROCESS_STAGES[activeStageIndex].number} of 06
                  </span>
                  <span className="text-xs font-mono text-fg-secondary">
                    Phase // {PROCESS_STAGES[activeStageIndex].title.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {PROCESS_STAGES[activeStageIndex].title}
                </h3>
                <p className="text-sm font-medium text-brand-cyan mb-4">
                  {PROCESS_STAGES[activeStageIndex].tagline}
                </p>

                <p className="text-sm sm:text-base text-fg-secondary leading-relaxed mb-8 max-w-lg">
                  {PROCESS_STAGES[activeStageIndex].description}
                </p>

                {/* Deliverables Grid */}
                <div className="w-full">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-fg-primary mb-3 font-bold">
                    Key Tangible Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PROCESS_STAGES[activeStageIndex].deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Real Process Diagram Asset Screenshot */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <div className="relative aspect-[16/11] w-full rounded-2xl bg-black/80 border border-white/15 p-3 overflow-hidden shadow-2xl group/diagram">
                  <img
                    src={PROCESS_STAGES[activeStageIndex].image}
                    alt={`${PROCESS_STAGES[activeStageIndex].title} Artifact`}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover/diagram:scale-105"
                  />

                  {/* Top Bar Label */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                      Stage {PROCESS_STAGES[activeStageIndex].number} Artifact
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-800 text-[10px] font-mono text-cyan-300">
                      Verified Workflow
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
