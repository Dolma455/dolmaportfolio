'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function Philosophy() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#05070A] overflow-hidden border-t border-white/5">
      {/* Ambient Glows bound to dynamic theme */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[rgba(var(--theme-glow),0.06)] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/3 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-semibold text-pink-300 tracking-wide mb-4">
            <span>Career Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-display">
            Career &amp; <span className="text-pink-300">Experience</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal mt-4 max-w-2xl leading-relaxed">
            A journey bridging human-centered product ergonomics with high-performance software engineering.
          </p>
        </div>

        {/* Combined Layout: Minimized Portrait on Left + Career & Experience on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* ========================================================================= */}
          {/* LEFT COLUMN: Minimized Portrait Card (5 cols)                            */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-[#0D1117] border border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden group"
            >
              {/* Minimized Portrait Image Container */}
              <div className="relative aspect-[4/4.2] w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-5 group-hover:border-pink-300/40 transition-all duration-500">
                <img
                  src="/dolmalama.png"
                  alt="Dolma Lama"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60" />
              </div>

              {/* Identity & Short Bio */}
              <div className="text-left px-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">Dolma Lama</h3>
                <p className="text-sm text-pink-300 mt-1 mb-3 font-semibold">
                  Product Designer &amp; Engineer
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Experienced product designer with robust engineering depth across mobile app development, design systems, and cloud infrastructure.
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
              
              {/* Vertical connector line dynamically bound to active theme */}
              <div className="absolute left-[14px] top-3 bottom-3 w-[2px] bg-white/10" />

              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative group"
                >
                  {/* Circular Pointer Node */}
                  <div className="absolute left-[-21px] sm:left-[-29px] top-6 w-4 h-4 rounded-full bg-[#05070A] border-2 border-pink-300 flex items-center justify-center shadow-[0_0_10px_rgba(var(--theme-glow),0.3)] group-hover:scale-125 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-300" />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl bg-[#0D1117] border border-white/10 p-6 sm:p-7 shadow-xl group-hover:border-pink-300/30 transition-all text-left">
                    
                    {/* Card Top Row: Role & Period on Left, Company/Uni at Top Right */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3.5">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight font-display">
                          {exp.role}
                        </h3>
                        <span className="text-xs sm:text-sm text-pink-300 font-semibold tracking-wide">
                          {exp.period}
                        </span>
                      </div>

                      {/* Company & Location at Right Top */}
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 shrink-0 self-start sm:self-auto">
                        {index === 0 ? (
                          <GraduationCap className="w-4 h-4 text-pink-300 shrink-0" />
                        ) : (
                          <Briefcase className="w-4 h-4 text-pink-300 shrink-0" />
                        )}
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Concise Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
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
