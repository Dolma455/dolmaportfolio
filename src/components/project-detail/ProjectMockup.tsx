'use client';

import React, { useState } from 'react';
import { Project } from '@/data/portfolioData';
import { ChevronLeft, ChevronRight, Grid, Monitor, Smartphone, Eye, Sparkles } from 'lucide-react';

interface ProjectMockupProps {
  project: Project;
}

export default function ProjectMockup({ project }: ProjectMockupProps) {
  const isMobile = project.mockupType === 'mobile';
  
  // Consolidate all available screenshots
  const allImages = React.useMemo(() => {
    const list = project.galleryImages && project.galleryImages.length > 0 
      ? [...project.galleryImages] 
      : [project.coverImage];
    // Ensure coverImage is first if not already present
    if (!list.includes(project.coverImage)) {
      list.unshift(project.coverImage);
    }
    return Array.from(new Set(list));
  }, [project]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'featured' | 'grid'>('featured');
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const currentImage = allImages[activeIndex] || project.coverImage;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  };

  // Helper to extract clean human label from screenshot filename
  const getImageLabel = (url: string, index: number) => {
    const filename = url.split('/').pop()?.split('.')[0] || `Screen ${index + 1}`;
    const clean = filename
      .replace(/^(naasaxweb_|ssa_|ci_|ciproductpage_|agrilink_|crm_|nsh_|naasakyc_|sagar_|aadi-|loyaledge_|flyhigh_)/i, '')
      .replace(/[_-]/g, ' ');
    if (!clean.trim()) return `Screen 0${index + 1}`;
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* View Switcher & Screen Counter Strip */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode('featured')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'featured'
                  ? 'bg-pink-300 text-[#05070A] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isMobile ? <Smartphone className="w-3.5 h-3.5" /> : <Monitor className="w-3.5 h-3.5" />}
              <span>Interactive Frame</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-pink-300 text-[#05070A] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All Screens ({allImages.length})</span>
            </button>
          </div>
        </div>

        {/* Screen Index Counter & Step Navigation */}
        {viewMode === 'featured' && allImages.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous mockup"
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-2 py-1 rounded-full bg-white/[0.03] border border-white/5">
              <span className="text-pink-300 font-bold">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>{' '}
              / {String(allImages.length).padStart(2, '0')} · {getImageLabel(currentImage, activeIndex)}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next mockup"
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Main Presentation Container */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Dynamic Ambient Glow */}
        <div
          className="absolute -inset-4 sm:-inset-6 rounded-3xl opacity-25 blur-3xl pointer-events-none -z-10"
          style={{
            background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`,
          }}
        />

        {/* FEATURED VIEW MODE */}
        {viewMode === 'featured' ? (
          isMobile ? (
            /* Mobile Device Presentation with Active Screen + Sibling Previews */
            <div className="flex flex-col items-center gap-8 py-4">
              <div className="relative flex items-center justify-center">
                {/* iPhone 15 Pro Hardware Frame */}
                <div className="relative w-[300px] sm:w-[340px] rounded-[50px] p-3.5 bg-[#12161F] border-[4px] border-white/20 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
                  {/* Dynamic Island */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0a0f1d] border border-blue-500/40" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse" />
                  </div>

                  {/* Screen Content */}
                  <div 
                    onClick={() => setFullscreenImage(currentImage)}
                    className="relative w-full aspect-[9/19.5] rounded-[42px] overflow-hidden bg-black cursor-zoom-in group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentImage}
                      alt={`${project.title} Screen ${activeIndex + 1}`}
                      className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-medium text-white flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-pink-300" />
                        <span>Enlarge</span>
                      </div>
                    </div>
                  </div>

                  {/* Home Bar */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-20 pointer-events-none" />
                </div>
              </div>

              {/* Mobile Screen Thumbnail Ribbon */}
              <div className="w-full max-w-4xl flex items-center gap-3 overflow-x-auto pb-4 pt-2 px-2 scrollbar-thin">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative flex-shrink-0 flex flex-col items-center gap-2 p-2 rounded-2xl border transition-all cursor-pointer ${
                      activeIndex === idx
                        ? 'bg-white/[0.08] border-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.3)] ring-1 ring-pink-300'
                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="w-16 h-28 rounded-xl overflow-hidden bg-black border border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`Screen ${idx + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 group-hover:text-white max-w-[80px] truncate">
                      {getImageLabel(img, idx)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Desktop Browser Shell Presentation */
            <div className="flex flex-col gap-6">
              <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#0F141C] border border-white/15 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] overflow-hidden">
                {/* Minimal Window Bar */}
                <div className="h-10 sm:h-12 px-4 bg-[#0A0D13] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>

                  {/* Browser URL bar */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono">
                    <span className="text-emerald-400 text-[10px]">🔒</span>
                    <span>{project.id}.dolma.design</span>
                    <span className="text-slate-500 text-[10px] hidden sm:inline">
                      / {getImageLabel(currentImage, activeIndex).toLowerCase().replace(/\s+/g, '-')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFullscreenImage(currentImage)}
                      className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Enlarge screen"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                      {activeIndex + 1}/{allImages.length}
                    </span>
                  </div>
                </div>

                {/* Desktop Screen Viewport */}
                <div 
                  onClick={() => setFullscreenImage(currentImage)}
                  className="relative w-full aspect-[16/10] bg-[#05070A] overflow-hidden cursor-zoom-in group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentImage}
                    alt={`${project.title} mockup ${activeIndex + 1}`}
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-2 shadow-2xl">
                      <Eye className="w-3.5 h-3.5 text-pink-300" />
                      <span>Click to Enlarge Fullscreen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Screenshot Thumbnail Navigation Strip */}
              {allImages.length > 1 && (
                <div className="w-full flex items-center gap-3 overflow-x-auto pb-2 pt-1 px-1 scrollbar-thin">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`group relative flex-shrink-0 flex items-center gap-3 p-2 rounded-xl border transition-all cursor-pointer ${
                        activeIndex === idx
                          ? 'bg-white/[0.08] border-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.3)] ring-1 ring-pink-300'
                          : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <div className="w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden bg-black border border-white/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex flex-col text-left pr-2">
                        <span className="text-[10px] font-mono text-pink-300 font-bold">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-medium text-slate-200 group-hover:text-white max-w-[120px] truncate">
                          {getImageLabel(img, idx)}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        ) : (
          /* GRID VIEW MODE - Display ALL Screenshots at once */
          <div className="w-full">
            <div className={`grid gap-6 ${isMobile ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
              {allImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setFullscreenImage(img)}
                  className="group relative flex flex-col rounded-2xl bg-[#0D1117] border border-white/10 hover:border-pink-300/50 p-3 sm:p-4 transition-all duration-300 hover:shadow-2xl cursor-zoom-in"
                >
                  <div className={`relative w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 ${isMobile ? 'aspect-[9/19]' : 'aspect-[16/10]'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${project.title} Screen ${idx + 1}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                        <Eye className="w-3 h-3 text-pink-300" />
                        <span>Inspect</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 px-1">
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white">
                      {getImageLabel(img, idx)}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fullscreenImage}
              alt="Fullscreen View"
              className="max-h-[85vh] max-w-full object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <p className="text-xs font-mono text-slate-400 mt-4">
              Click anywhere to close full screen view
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

