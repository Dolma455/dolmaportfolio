'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0D1117] border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-fg-secondary hover:text-white transition-colors border border-white/10 focus:outline-none z-20"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-mono font-bold"
              style={{
                backgroundColor: `${project.accentColor}20`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}40`,
              }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-fg-secondary">• {project.year}</span>
            <span className="text-xs font-mono text-fg-secondary">• {project.role}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-pink-300 mb-8 font-mono font-medium">
            {project.subtitle}
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-start"
              >
                <span
                  className="text-2xl sm:text-3xl font-bold font-display"
                  style={{ color: project.accentColor }}
                >
                  {metric.value}
                </span>
                <span className="text-xs text-fg-secondary font-mono mt-1">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Real Image Showcase & Gallery Viewer */}
          <div className="space-y-4 mb-10">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/80 border border-white/15 shadow-2xl">
              <img
                src={project.galleryImages[activeImageIndex] || project.coverImage}
                alt={`${project.title} Screenshot ${activeImageIndex + 1}`}
                className="w-full h-full object-contain bg-black/40"
              />
            </div>

            {/* Gallery Thumbnail Selector */}
            {project.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border transition-all shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-cyan-400 ring-2 ring-cyan-400/40'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Problem & Solution Teardown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-bold">
                The User & Business Friction
              </h4>
              <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-bold">
                The Architectural Solution
              </h4>
              <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Product Features */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-fg-primary uppercase tracking-wider mb-4 font-bold">
              Key Engineering & UX Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-pink-300 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-white/10">
            <span className="text-xs font-mono text-fg-secondary mr-2">Technologies Used:</span>
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-fg-primary"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Modal Action CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="text-xs text-fg-secondary font-mono">
              Designed & Engineered by <strong className="text-white">Dolma Lama</strong>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl || 'https://github.com/Dolma455'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-xs shadow-[0_0_20px_rgba(var(--theme-glow),0.3)] transition-all hover:scale-105"
              >
                <span>Launch Prototype / Code</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
