'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function Philosophy() {
  return (
    <section id="about" className="relative py-20 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#05070A] overflow-hidden border-t border-white/5">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Centered Aligned like others */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Career & Experience
          </h2>
        </div>

        {/* Combined Layout: Minimized Portrait on Left + Career & Experience on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ========================================================================= */}
          {/* LEFT COLUMN: Minimized Portrait Card (5 cols)                            */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-[#0D1117] border border-white/10 p-5 shadow-2xl relative overflow-hidden group"
            >
              {/* Minimized Portrait Image Container */}
              <div className="relative aspect-[4/4.2] w-full max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-4 group-hover:border-pink-300/30 transition-all duration-500">
                <img
                  src="/dolmalama.png"
                  alt="Dolma Lama"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60" />
              </div>

              {/* Identity & Short Bio */}
              <div className="text-left px-1">
                <h3 className="text-xl font-bold text-white tracking-tight">Dolma Lama</h3>
                <p className="text-xs font-mono text-pink-300 mt-0.5 mb-2.5">
                  UX/UI Designer & Fullstack Developer
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  UX/UI Designer with robust engineering skills across mobile app development, frontend, backend, and cloud architectures.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: CAREER & EXPERIENCE TIMELINE (7 cols)                       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">

            {/* Vertical Connected Timeline */}
            <div className="relative pl-7 sm:pl-9 space-y-6">
              
              {/* Single-color vertical connector line precisely centered with pointer */}
              <div className="absolute left-[14px] top-3 bottom-3 w-[2px] bg-pink-300/25" />

              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative group"
                >
                  {/* Circular Pointer Node - EXACTLY centered on the 15px axis */}
                  <div className="absolute left-[-21px] sm:left-[-29px] top-6 w-4 h-4 rounded-full bg-[#05070A] border-2 border-pink-300 flex items-center justify-center shadow-[0_0_8px_rgba(var(--theme-glow),0.4)] group-hover:scale-125 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-300" />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-3xl bg-[#0D1117] border border-white/10 p-5 sm:p-6 shadow-xl group-hover:border-pink-300/30 transition-all text-left">
                    
                    {/* Card Top Row: Role & Period on Left, Company/Uni at Top Right */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono text-pink-300 font-medium tracking-wide">
                          {exp.period}
                        </span>
                      </div>

                      {/* Company & Location at Right Top */}
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 shrink-0 self-start sm:self-auto">
                        {index === 0 ? (
                          <GraduationCap className="w-3.5 h-3.5 text-pink-300 shrink-0" />
                        ) : (
                          <Briefcase className="w-3.5 h-3.5 text-pink-300 shrink-0" />
                        )}
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Concise Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
