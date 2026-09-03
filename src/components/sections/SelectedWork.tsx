'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from '@/components/modals/ProjectModal';
import { PROJECTS, Project } from '@/data/portfolioData';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

interface ShowcaseProject {
  number: string;
  title: string;
  boldTitleLines: string[];
  description: string;
  coverImage: string;
  bgColor: string;
  accentColor: string;
  data: Project;
}

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Find corresponding projects or fallback
  const naasaX = PROJECTS.find((p) => p.id === 'naasa-x') || PROJECTS[0];
  const agrilink = PROJECTS.find((p) => p.id === 'agrilink') || PROJECTS[1];
  const connectInfinity = PROJECTS.find((p) => p.id === 'connect-infinity') || PROJECTS[2];

  // Exactly 3 Featured Projects
  const SHOWCASE_PROJECTS: ShowcaseProject[] = [
    {
      number: '01',
      title: 'NAASA X',
      boldTitleLines: ['NAASA X', 'TRADING', 'PLATFORM'],
      description: 'Desktop trading cockpit engineered for high-frequency order routing, live market depth, and portfolio analytics.',
      coverImage: '/projects/naasaxweb_dashboard.png',
      bgColor: '#0C1017',
      accentColor: '#F472B6',
      data: naasaX,
    },
    {
      number: '02',
      title: 'AGRILINK',
      boldTitleLines: ['AGRILINK', 'IOT &', 'TELEMETRY'],
      description: 'Centralized telemetry dashboard tracking hardware sensor networks, irrigation levels, and predictive crop analytics.',
      coverImage: '/projects/agrilink_1.png',
      bgColor: '#07141A',
      accentColor: '#2DD4BF',
      data: agrilink,
    },
    {
      number: '03',
      title: 'CONNECT INFINITY',
      boldTitleLines: ['CONNECT', 'INFINITY', 'AI HUB'],
      description: 'Spatial UI productivity environment combining neural network graph mapping, canvas collaboration, and AI copilots.',
      coverImage: '/projects/ci_dashboard.png',
      bgColor: '#100D22',
      accentColor: '#A78BFA',
      data: connectInfinity,
    },
  ];

  return (
    <section id="work" className="relative bg-[#05070A] border-t border-white/5">
      {/* Ambient Glows bound to dynamic theme */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[rgba(var(--theme-glow),0.06)] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/3 blur-[180px] pointer-events-none rounded-full" />

      {/* Story Scroll Flow Art for 3 Featured Projects */}
      <div className="w-full">
        <FlowArt aria-label="Selected Projects Story Scroll">
          {SHOWCASE_PROJECTS.map((project, index) => (
            <FlowSection
              key={project.title}
              aria-label={project.title}
              style={{ backgroundColor: project.bgColor, color: '#fff' }}
            >
              {/* 1. Header: Project Track Number */}
              <div className="flex items-center justify-between">
                <p
                  className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em]"
                  style={{ color: project.accentColor }}
                >
                  {project.number} — Project
                </p>
                <button
                  onClick={() => setSelectedProject(project.data)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 2. Main Content: Left (Project Name + Description) & Right (Image) */}
              <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Project Name (Bold Big Text) & Description */}
                <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
                  <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.88] uppercase tracking-tight text-white mb-4 sm:mb-6">
                    {project.boldTitleLines.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < project.boldTitleLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>

                  <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-[50ch]">
                    {project.description}
                  </p>

                  <div className="mt-4 sm:mt-6">
                    <button
                      onClick={() => setSelectedProject(project.data)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(var(--theme-glow),0.35)] hover:shadow-[0_0_30px_rgba(var(--theme-glow),0.5)] transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right: Project Screenshot */}
                <div
                  onClick={() => setSelectedProject(project.data)}
                  className="lg:col-span-6 xl:col-span-5 relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl bg-black/60 border border-white/10 overflow-hidden shadow-2xl group cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-300 text-[#05070A] font-bold text-xs shadow-2xl">
                      <span>Expand Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#05070A]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Bottom Indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{project.title}</span>
                <span>Scroll down ↓</span>
              </div>
            </FlowSection>
          ))}
        </FlowArt>
      </div>

      {/* Tight snug View All Projects Button right below 3rd card */}
      <div className="-mt-4 sm:-mt-6 pb-12 sm:pb-16 flex flex-col items-center justify-center text-center relative z-20 px-4">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_25px_rgba(var(--theme-glow),0.35)] hover:shadow-[0_0_35px_rgba(var(--theme-glow),0.55)] hover:scale-105 backdrop-blur-md cursor-pointer"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
        <p className="text-[11px] font-mono text-slate-400 mt-2">
          Explore complete archive of shipped products &amp; design systems
        </p>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
