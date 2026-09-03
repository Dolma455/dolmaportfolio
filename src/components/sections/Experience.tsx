'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, GraduationCap, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="timeline" className="relative py-28 px-6 lg:px-12 bg-[#05070A] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              EDITORIAL <br />
              <span className="text-gradient-cyan">TIMELINE & IMPACT.</span>
            </h2>
          </div>
          <p className="text-fg-secondary text-sm md:text-base max-w-md">
            Quantifiable achievements, system architecture leadership, and academic research in human-computer interaction.
          </p>
        </div>

        {/* Vertical Connected Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Continuous vertical animated connector line */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600/20" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Connector Node */}
              <div className="absolute -left-[30px] sm:-left-[46px] top-6 w-5 h-5 rounded-full bg-[#05070A] border-2 border-brand-cyan flex items-center justify-center shadow-[0_0_15px_rgba(110,231,249,0.5)] group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              </div>

              {/* Experience Card */}
              <div className="rounded-3xl bg-[#0D1117]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl group-hover:border-cyan-500/30 transition-all text-left">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-brand-cyan border border-cyan-500/20 text-[10px] font-mono">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-fg-secondary">
                    <MapPin className="w-3.5 h-3.5 text-fg-muted" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  {exp.role}
                </h3>
                <div className="text-sm font-medium text-brand-cyan mb-4 flex items-center gap-2">
                  {index === 0 ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4" />
                  )}
                  <span>{exp.company}</span>
                </div>

                <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-fg-primary">
                    Key Outcomes & Architecture Deliverables:
                  </h4>
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-fg-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
