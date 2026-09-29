'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PROJECTS } from '@/data/portfolioData';

// Complete showcase projects array derived from PROJECTS
const ALL_PROJECT_SHOWCASE = PROJECTS.map((p) => {
  let cat = 'Fintech';
  if (p.category.includes('Mobile') || p.id === 'flyhigh' || p.id === 'self-service-app') cat = 'Mobile';
  else if (p.category.includes('IoT')) cat = 'IoT';
  else if (p.category.includes('AI')) cat = 'AI';
  else if (p.category.includes('Brand') || p.id === 'sagar-distillery' || p.id === 'aadi') cat = 'Brand';
  else if (p.category.includes('Corporate') || p.id === 'naasa-website') cat = 'Web';
  else if (p.category.includes('Enterprise') || p.id === 'broker-crm') cat = 'Enterprise';
  else if (p.category.includes('Fintech') || p.category.includes('Trading')) cat = 'Fintech';

  return {
    id: p.id,
    title: p.title.toUpperCase(),
    subtitle: p.subtitle,
    category: cat,
    year: p.year,
    breakdown: `${p.designContribution}% Design · ${p.devContribution}% Development`,
    description: p.shortDescription || p.problem,
    coverImage: p.coverImage,
    tags: p.tools.slice(0, 4),
  };
});

const CATEGORIES = ['All', 'Fintech', 'Mobile', 'IoT', 'AI', 'Web', 'Brand', 'Enterprise'];

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return ALL_PROJECT_SHOWCASE;
    return ALL_PROJECT_SHOWCASE.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#05070A] text-white pt-28 sm:pt-32 pb-24 px-4 sm:px-8 lg:px-14 select-none relative overflow-x-hidden selection:bg-pink-300/30">
      {/* Ambient Radial Background Glows bound to dynamic theme */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[rgba(var(--theme-glow),0.06)] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-40 right-1/4 w-[600px] h-[600px] bg-cyan-500/3 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 sm:mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </Link>
        </div>

        {/* Header Title Section */}
        <div className="flex flex-col gap-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-pink-300 w-fit tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span>Complete Architecture Archive</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-display">
            Selected Engineering &amp; Design Case Studies
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            A comprehensive index of digital systems, consumer mobile applications, and high-frequency fintech platforms built from zero to scale.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-12 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 mr-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>

          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-pink-300 text-[#05070A] font-bold shadow-md'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative flex flex-col rounded-3xl bg-[#0D1117] border border-white/10 hover:border-pink-300/40 p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer overflow-hidden block"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl bg-black/60 border border-white/10 overflow-hidden shadow-inner mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90">
                  {project.year}
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-pink-300 text-[#05070A] font-bold text-xs shadow-xl">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#05070A]" />
                  </div>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-300">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-pink-300 transition-colors tracking-tight mb-2 font-display">
                    {project.title}
                  </h3>

                  {/* Contribution Ratio Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-slate-300 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    <span>{project.breakdown}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
