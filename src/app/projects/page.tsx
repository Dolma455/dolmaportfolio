'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from '@/components/modals/ProjectModal';

// Complete showcase projects array with all available client projects
const ALL_PROJECT_SHOWCASE = [
  {
    id: 'naasa-x',
    title: 'NAASA X',
    subtitle: 'Institutional Liquidity & High-Frequency Crypto Trading Cockpit',
    category: 'Fintech',
    year: '2024',
    breakdown: '80% Design · 20% Frontend',
    description: 'Desktop trading cockpit engineered for low-latency order routing, live depth charts, and automated portfolio management.',
    coverImage: '/projects/naasaxweb_dashboard.png',
    tags: ['Fintech', 'Trading', 'Web3', 'Next.js'],
    data: PROJECTS.find((p) => p.id === 'naasa-x') || PROJECTS[0],
  },
  {
    id: 'agrilink',
    title: 'AGRILINK',
    subtitle: 'Smart Agri-Tech Telemetry & Supply Chain Intelligence Platform',
    category: 'IoT',
    year: '2024',
    breakdown: '70% Design · 30% Development',
    description: 'Centralized telemetry dashboard tracking hardware sensor networks, irrigation levels, and predictive crop analytics in real time.',
    coverImage: '/projects/agrilink_1.png',
    tags: ['IoT', 'SaaS', 'Telemetry', 'Hardware'],
    data: PROJECTS.find((p) => p.id === 'agrilink') || PROJECTS[1],
  },
  {
    id: 'connect-infinity',
    title: 'CONNECT INFINITY',
    subtitle: 'Spatial AI Knowledge Hub & Graph Collaboration Engine',
    category: 'AI',
    year: '2024',
    breakdown: '75% Design · 25% Development',
    description: 'Spatial UI productivity environment combining neural network graph mapping, canvas collaboration, and conversational AI copilots.',
    coverImage: '/projects/ci_dashboard.png',
    tags: ['AI', 'Spatial UI', 'Productivity', 'Graph'],
    data: PROJECTS.find((p) => p.id === 'connect-infinity') || PROJECTS[2],
  },
  {
    id: 'naasa-website',
    title: 'NAASA WEBSITE',
    subtitle: 'Corporate Financial Portal & Institutional Investor Hub',
    category: 'Web',
    year: '2024',
    breakdown: '70% Design · 30% Strategy',
    description: 'Comprehensive financial institution portal with modern institutional branding, investor relations, and regulatory hubs.',
    coverImage: '/projects/naasawebsite_1.png',
    tags: ['Corporate', 'Website', 'Finance', 'Design System'],
    data: PROJECTS.find((p) => p.id === 'naasa-x') || PROJECTS[0],
  },
  {
    id: 'self-service-app',
    title: 'SELF SERVICE APP',
    subtitle: 'Biometric Mobile Onboarding & Frictionless KYC Banking Client',
    category: 'Mobile',
    year: '2024',
    breakdown: '70% Design · 10% Development',
    description: 'Frictionless customer onboarding mobile application featuring biometrics, instant KYC document scanning, and automated account provisioning.',
    coverImage: '/projects/ssa_dashbaord.PNG',
    tags: ['Mobile App', 'Fintech', 'KYC', 'Flutter'],
    data: PROJECTS.find((p) => p.id === 'naasa-x') || PROJECTS[0],
  },
  {
    id: 'sagar-distillery',
    title: 'SAGAR DISTILLERY',
    subtitle: 'Heritage Brand Experience & Direct-to-Consumer Digital Flagship',
    category: 'Brand',
    year: '2024',
    breakdown: '90% Design · 10% Development',
    description: 'Luxury heritage brand experience and direct-to-consumer digital flagship with cinematic storytelling and custom bottle engraving configurator.',
    coverImage: '/projects/sagar_distillery_home.png',
    tags: ['Branding', 'Luxury', 'E-Commerce', '3D'],
    data: PROJECTS.find((p) => p.id === 'loyaledge') || PROJECTS[3],
  },
];

const CATEGORIES = ['All', 'Fintech', 'Mobile', 'IoT', 'AI', 'Web', 'Brand'];

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return ALL_PROJECT_SHOWCASE;
    return ALL_PROJECT_SHOWCASE.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#05070A] text-white pt-28 sm:pt-32 pb-24 px-4 sm:px-8 lg:px-14 select-none relative overflow-x-hidden">
      {/* Ambient Radial Background Glows bound to dynamic theme */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[rgba(var(--theme-glow),0.06)] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-40 right-1/4 w-[600px] h-[600px] bg-cyan-500/3 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back navigation */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-pink-300 font-bold uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Full Portfolio Archive</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              All <span className="text-pink-300">Projects</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal mt-2 max-w-xl leading-relaxed">
              Explore complete showcase of mobile applications, enterprise platforms, and interactive design systems built by Dolma Lama.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 shrink-0">
            Showing <span className="text-white font-bold">{filteredProjects.length}</span> of{' '}
            <span className="text-white font-bold">{ALL_PROJECT_SHOWCASE.length}</span> projects
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-pink-300 text-[#05070A] font-bold shadow-[0_0_15px_rgba(var(--theme-glow),0.4)]'
                  : 'bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.data)}
              className="group relative flex flex-col rounded-3xl bg-[#0D1117] border border-white/10 hover:border-pink-300/40 p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl bg-black/60 border border-white/10 overflow-hidden shadow-inner mb-4">
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
                    <span>View Case Study</span>
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

                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-pink-300 transition-colors tracking-tight mb-2">
                    {project.title}
                  </h3>

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
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
