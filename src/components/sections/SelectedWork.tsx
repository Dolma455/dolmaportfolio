'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '@/data/portfolioData';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

interface ShowcaseProject {
  number: string;
  title: string;
  displayTitle: string;
  category: string;
  description: string;
  tags: string[];
  coverImage: string;
  bgColor: string;
  accentColor: string;
  data: Project;
}

export default function SelectedWork() {
  // Find corresponding projects or fallback
  const naasaX = PROJECTS.find((p) => p.id === 'naasa-x') || PROJECTS[0];
  const agrilink = PROJECTS.find((p) => p.id === 'agrilink') || PROJECTS[1];
  const connectInfinity = PROJECTS.find((p) => p.id === 'connect-infinity') || PROJECTS[2];

  // Exactly 3 Featured Projects
  const SHOWCASE_PROJECTS: ShowcaseProject[] = [
    {
      number: '01',
      title: 'NAASA X',
      displayTitle: 'NAASA X Trading Platform',
      category: 'Fintech & Web3 Platform',
      description: 'Desktop trading cockpit engineered for high-frequency order routing, live market depth visualization, and portfolio analytics.',
      tags: ['Figma', 'Next.js', 'TypeScript', 'WebSockets'],
      coverImage: '/projects/naasaxweb_dashboard.png',
      bgColor: '#0C1017',
      accentColor: '#F472B6',
      data: naasaX,
    },
    {
      number: '02',
      title: 'AGRILINK',
      displayTitle: 'Agrilink IoT & Telemetry',
      category: 'Enterprise IoT & SaaS',
      description: 'Centralized telemetry dashboard tracking hardware sensor networks, irrigation levels, and predictive crop analytics.',
      tags: ['React', 'Flutter', 'Tailwind CSS', 'Firebase'],
      coverImage: '/projects/agrilink_1.png',
      bgColor: '#07141A',
      accentColor: '#2DD4BF',
      data: agrilink,
    },
    {
      number: '03',
      title: 'CONNECT INFINITY',
      displayTitle: 'Connect Infinity AI Hub',
      category: 'Spatial UI & AI Knowledge System',
      description: 'Spatial UI productivity environment combining neural network graph mapping, canvas collaboration, and AI copilots.',
      tags: ['Next.js', 'TypeScript', 'GraphQL', 'OpenAI'],
      coverImage: '/projects/ci_dashboard.png',
      bgColor: '#100D22',
      accentColor: '#A78BFA',
      data: connectInfinity,
    },
  ];

  return (
    <section id="work" className="relative bg-[#05070A] border-t border-white/5">
      {/* Ambient Glows bound to dynamic theme */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[rgba(var(--theme-glow),0.05)] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/3 blur-[180px] pointer-events-none rounded-full" />

      {/* Story Scroll Flow Art for 3 Featured Projects */}
      <div className="w-full">
        <FlowArt aria-label="Selected Projects Story Scroll">
          {SHOWCASE_PROJECTS.map((project) => (
            <FlowSection
              key={project.title}
              aria-label={project.title}
              style={{ backgroundColor: project.bgColor, color: '#fff' }}
            >
              {/* 1. Header: Project Number and Category */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10"
                    style={{ color: project.accentColor }}
                  >
                    {project.number}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.category}
                  </span>
                </div>
                <Link
                  href={`/projects/${project.data.id}`}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer group"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* 2. Main Content: Left (Project Name + Description + Tags) & Right (Image) */}
              <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left: Project Name & Description */}
                <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display mb-4 leading-[1.08]">
                    {project.displayTitle}
                  </h2>

                  <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-[50ch] mb-6">
                    {project.description}
                  </p>

                  {/* Project Tech Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-medium text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link
                      href={`/projects/${project.data.id}`}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(var(--theme-glow),0.4)] hover:shadow-[0_0_35px_rgba(var(--theme-glow),0.6)] transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Project Screenshot */}
                <Link
                  href={`/projects/${project.data.id}`}
                  className="lg:col-span-6 xl:col-span-5 relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl bg-black/60 border border-white/10 overflow-hidden shadow-2xl group cursor-pointer block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-300 text-[#05070A] font-bold text-sm shadow-2xl">
                      <span>View Details</span>
                      <ArrowUpRight className="w-4 h-4 text-[#05070A]" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* 3. Bottom Indicator */}
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-medium">
                <span>{project.title}</span>
                <span>Scroll to next project ↓</span>
              </div>
            </FlowSection>
          ))}
        </FlowArt>
      </div>

      {/* Tight snug View All Projects Button right below 3rd card */}
      <div className="-mt-4 sm:-mt-6 pb-12 sm:pb-16 flex flex-col items-center justify-center text-center relative z-20 px-4">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2.5 px-9 sm:px-11 py-4 sm:py-4.5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(var(--theme-glow),0.4)] hover:shadow-[0_0_35px_rgba(var(--theme-glow),0.6)] hover:scale-105 backdrop-blur-md cursor-pointer"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
