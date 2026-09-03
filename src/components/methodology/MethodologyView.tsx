'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Compass,
  Lightbulb,
  Layers,
  CheckCircle2,
  Rocket,
  Code,
  Server,
  Database,
  Cpu,
  Shield,
  Cloud,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Palette,
  Zap,
} from 'lucide-react';
import { METHODOLOGIES, ServiceMethodology } from '@/data/methodologyData';
import MethodologyDiagram from '@/components/methodology/MethodologyDiagram';
import { useTheme } from '@/context/ThemeContext';

const ICONS_MAP: Record<string, React.ReactNode> = {
  search: <Search className="w-4 h-4 text-pink-300" />,
  compass: <Compass className="w-4 h-4 text-pink-300" />,
  lightbulb: <Lightbulb className="w-4 h-4 text-pink-300" />,
  layers: <Layers className="w-4 h-4 text-pink-300" />,
  check: <CheckCircle2 className="w-4 h-4 text-pink-300" />,
  rocket: <Rocket className="w-4 h-4 text-pink-300" />,
  code: <Code className="w-4 h-4 text-pink-300" />,
  server: <Server className="w-4 h-4 text-pink-300" />,
  database: <Database className="w-4 h-4 text-pink-300" />,
  cpu: <Cpu className="w-4 h-4 text-pink-300" />,
  shield: <Shield className="w-4 h-4 text-pink-300" />,
  cloud: <Cloud className="w-4 h-4 text-pink-300" />,
};

export default function MethodologyView({ service }: { service: string }) {
  const router = useRouter();
  const serviceKey = service || 'ux-ui-design';
  const currentService: ServiceMethodology =
    METHODOLOGIES[serviceKey] || METHODOLOGIES['ux-ui-design'];

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { theme, setTheme, options } = useTheme();

  const servicesList = [
    { slug: 'ux-ui-design', title: 'UX/UI Design' },
    { slug: 'flutter-development', title: 'Flutter Development' },
    { slug: 'backend-cloud-development', title: 'Backend & Cloud Development' },
  ];

  return (
    <div className="relative min-h-screen bg-[#05070A] text-white pt-28 pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Floating Top Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 md:p-5 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-6 py-2.5 rounded-full bg-[#0D1117]/85 backdrop-blur-xl border border-white/10 shadow-2xl max-w-4xl w-full">
          {/* Back to Home button */}
          <Link
            href="/#offers"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-pink-300 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Center Brand */}
          <Link href="/" className="flex items-center gap-1.5 py-1 px-2">
            <span className="text-base sm:text-lg font-black tracking-tight text-white">
              Dolma
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
          </Link>

          {/* Theme Palette Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-pink-300/40 text-slate-300 hover:text-white transition-all group"
              title="Change Theme Color"
            >
              <Palette className="w-3.5 h-3.5 text-pink-300 group-hover:rotate-45 transition-transform" />
            </button>

            <AnimatePresence>
              {themeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-11 p-3 rounded-2xl bg-[#0D1117]/95 backdrop-blur-2xl border border-white/10 shadow-2xl z-50 flex flex-col gap-2 min-w-[200px]"
                >
                  <div className="px-1 pb-1.5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Theme
                    </span>
                    <span className="text-[10px] font-mono text-pink-300 font-bold">
                      {options.find((o) => o.id === theme)?.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-6 gap-1.5 pt-1">
                    {options.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setTheme(option.id);
                          setThemeMenuOpen(false);
                        }}
                        className={`w-6 h-6 rounded-full transition-all ${
                          theme === option.id
                            ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-[#0D1117]'
                            : 'opacity-70 hover:opacity-100 hover:scale-105'
                        }`}
                        style={{ backgroundColor: option.preview }}
                        title={option.name}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Service Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {servicesList.map((svc) => {
            const isSelected = svc.slug === currentService.slug;
            return (
              <button
                key={svc.slug}
                onClick={() => {
                  setActiveStageIndex(0);
                  router.push(`/methodology/${svc.slug}`);
                }}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold transition-all ${
                  isSelected
                    ? 'bg-pink-300 text-[#05070A] shadow-[0_0_20px_rgba(var(--theme-glow),0.4)] scale-105'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {svc.title}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 1. FIRST: SPECIALIZED STACK & CAPABILITIES                                 */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-pink-300 tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                <span>Technical Constellation</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                SPECIALIZED <br />
                <span className="text-gradient-pink">STACK & CAPABILITIES.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed font-normal">
              {currentService.capabilitiesDescription}
            </p>
          </div>

          {/* Interactive Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {currentService.capabilities.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative p-6 rounded-2xl bg-[#0D1117] border border-white/10 hover:border-pink-300/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        border: `1px solid ${skill.color}35`,
                      }}
                    >
                      <Zap className="w-5 h-5" style={{ color: skill.color }} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-pink-300 font-semibold">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors mb-1 tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.context}
                  </p>
                </div>

                {skill.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-black/40 border border-white/10 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. AFTER THAT: INTERACTIVE METHODOLOGY TRAJECTORY                         */}
        {/* ========================================================================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-white/10 pb-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-pink-300 tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                <span>{currentService.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                INTERACTIVE <br />
                <span className="text-gradient-pink">
                  {currentService.title.toUpperCase()} TRAJECTORY.
                </span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed font-normal">
              {currentService.summary}
            </p>
          </div>

          {/* 6-Stage Navigation Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {currentService.stages.map((stage, index) => {
              const isActive = activeStageIndex === index;
              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStageIndex(index)}
                  onMouseEnter={() => setActiveStageIndex(index)}
                  className={`flex flex-col items-start p-4 rounded-2xl border transition-all text-left group ${
                    isActive
                      ? 'bg-[#0D1117] border-pink-500/60 shadow-[0_0_25px_rgba(var(--theme-glow),0.25)] ring-1 ring-pink-500/40'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? 'text-pink-300' : 'text-slate-400'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg transition-transform group-hover:scale-110 ${
                        isActive ? 'bg-pink-500/20' : 'bg-white/5'
                      }`}
                    >
                      {ICONS_MAP[stage.iconName] || <Sparkles className="w-4 h-4 text-pink-300" />}
                    </div>
                  </div>

                  <div
                    className={`text-sm font-bold tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                    }`}
                  >
                    {stage.title.split(' ')[0]}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 truncate w-full mt-0.5">
                    {stage.title.split('&')[1] || stage.tagline}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Showcase Panel */}
          <div className="relative rounded-3xl bg-[#0D1117] border border-white/10 p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-2xl min-h-[440px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentService.slug}-${activeStageIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left"
              >
                {/* Left Column: Stage Details & Deliverables */}
                <div className="lg:col-span-6 flex flex-col items-start text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20 text-xs font-mono font-bold">
                      Stage {currentService.stages[activeStageIndex].number} of 06
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Phase // {currentService.stages[activeStageIndex].title.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                    {currentService.stages[activeStageIndex].title}
                  </h3>
                  <p className="text-sm font-medium text-pink-300 mb-4">
                    {currentService.stages[activeStageIndex].tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-lg">
                    {currentService.stages[activeStageIndex].description}
                  </p>

                  {/* Tangible Deliverables Grid */}
                  <div className="w-full">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3 font-bold">
                      Key Tangible Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentService.stages[activeStageIndex].deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200 hover:border-pink-300/30 transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4 text-pink-300 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Visual Diagram / Artifact */}
                <div className="lg:col-span-6 relative flex items-center justify-center">
                  <MethodologyDiagram
                    serviceSlug={currentService.slug}
                    stageNumber={currentService.stages[activeStageIndex].number}
                    stageTitle={currentService.stages[activeStageIndex].title}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Collaboration Call to Action */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white tracking-tight">
              Ready to apply this methodology to your product?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Let's collaborate on building a high-impact digital experience together.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#offers"
              className="px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              Explore Other Services
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-xs transition-all shadow-[0_0_20px_rgba(var(--theme-glow),0.3)] hover:scale-105"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
