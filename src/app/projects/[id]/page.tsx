'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/portfolioData';
import ProjectMockup from '@/components/project-detail/ProjectMockup';
import ContributionCard from '@/components/project-detail/ContributionCard';
import ProjectDescriptionGallery from '@/components/project-detail/ProjectDescriptionGallery';
import { CinematicFooter } from '@/components/ui/motion-footer';

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Next project navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-[#05070A] text-white select-none relative overflow-x-hidden selection:bg-pink-300/30">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-15 blur-[160px] pointer-events-none -z-10 rounded-full"
        style={{
          background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* Main Content Container */}
      <main className="relative z-10 w-full pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-14 max-w-5xl mx-auto flex flex-col gap-10 sm:gap-12">
        
        {/* 1. Header: Back link & Category pill */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Selected Work</span>
          </Link>

          <span
            className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10"
            style={{ color: project.accentColor }}
          >
            {project.category}
          </span>
        </div>

        {/* 2. Title, Subtitle & 1-2 Sentence Short Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-display tracking-tight leading-[1.06]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-pink-300 font-semibold tracking-tight font-display">
            {project.subtitle}
          </p>

          {/* 1-2 Sentence Short Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl pt-1">
            {project.shortDescription || project.problem}
          </p>
        </div>

        {/* 3. % Contribution in Design and Development */}
        <ContributionCard
          designPercentage={project.designContribution}
          devPercentage={project.devContribution}
          role={project.role}
        />

        {/* 4. Project Mockup(s) - 1 to 2 visual views */}
        <div className="w-full pt-2">
          <ProjectMockup project={project} />
        </div>

        {/* 5. Detailed Project Description & All Screenshots Breakdown */}
        <div className="w-full">
          <ProjectDescriptionGallery project={project} />
        </div>

        {/* 5. Minimal Next Project Link */}
        <div className="pt-10 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Next Project
          </span>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-pink-300 transition-colors cursor-pointer"
          >
            <span>{nextProject.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-pink-300" />
          </Link>
        </div>

      </main>

      {/* 6. Cinematic Motion Footer with DOLMA watermark */}
      <CinematicFooter />
    </div>
  );
}
