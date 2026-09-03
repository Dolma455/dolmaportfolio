'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Code2, Wrench, Shield, CheckCircle, Zap } from 'lucide-react';
import { SKILLS_DATA } from '@/data/portfolioData';

export default function TechConstellation() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 px-6 lg:px-12 bg-[#05070A] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Constellation</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              SPECIALIZED <br />
              <span className="text-gradient-cyan">STACK & CAPABILITIES.</span>
            </h2>
          </div>
          <p className="text-fg-secondary text-sm md:text-base max-w-md">
            No generic progress bars. An organic ecosystem of design systems, modern web runtimes, and mobile frameworks engineered for scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {SKILLS_DATA.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono font-bold transition-all ${activeCategoryIndex === idx
                  ? 'bg-cyan-500/15 border-cyan-400/60 text-brand-cyan shadow-[0_0_20px_rgba(110,231,249,0.18)] ring-1 ring-cyan-400/40'
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] text-fg-secondary hover:text-white'
                } border`}
            >
              {idx === 0 && <Layers className="w-3.5 h-3.5" />}
              {idx === 1 && <Code2 className="w-3.5 h-3.5" />}
              {idx === 2 && <Wrench className="w-3.5 h-3.5" />}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Constellation Canvas & Interactive Skill Nodes */}
        <div className="relative rounded-3xl bg-[#0D1117]/80 border border-white/10 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden">

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {SKILLS_DATA[activeCategoryIndex].category}
            </h3>
            <p className="text-sm text-fg-secondary">
              {SKILLS_DATA[activeCategoryIndex].description}
            </p>
          </div>

          {/* Floating Skill Node Cluster Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS_DATA[activeCategoryIndex].skills.map((skill, index) => {
              const isHovered = hoveredSkill === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          border: `1px solid ${skill.color}35`,
                        }}
                      >
                        <Zap className="w-5 h-5" style={{ color: skill.color }} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-fg-secondary">
                          Proficiency: <strong className="text-white">{skill.level}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-fg-muted mb-4 font-mono">
                    {skill.context}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-fg-secondary">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      Production Tested
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-bold"
                      style={{
                        backgroundColor: `${skill.color}20`,
                        color: skill.color,
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Ambient Node Glow on Hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `radial-gradient(200px circle at 50% 50%, ${skill.color}12, transparent 80%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Infinite Marquee */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-3">
            <div className="text-xs font-mono text-fg-secondary flex items-center gap-2">
              <span>ACTIVE TOOLCHAIN & ECOSYSTEM MARQUEE</span>
            </div>

            <div className="relative overflow-hidden w-full py-2">
              <div className="flex gap-8 whitespace-nowrap animate-marquee">
                {[
                  'Figma',
                  'Flutter',
                  'React',
                  'Next.js 14',
                  'TypeScript',
                  'Tailwind CSS',
                  'Framer Motion',
                  'GraphQL',
                  'Postman',
                  'Azure Cloud',
                  'Firebase',
                  'Vite',
                  'Docker',
                  '.NET Core',
                  'Figma',
                  'Flutter',
                  'React',
                  'Next.js 14',
                  'TypeScript',
                  'Tailwind CSS',
                ].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-fg-secondary/70 hover:text-brand-cyan transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
