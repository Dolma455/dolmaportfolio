'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials, AnimatedTestimonialItem } from '@/components/ui/animated-testimonials';

interface Company {
  name: string;
  logo: string;
}

const COMPANIES: Company[] = [
  {
    name: 'Cognix Insights',
    logo: '/logos/cognix-mark.png',
  },
  {
    name: 'Naasa Securities',
    logo: '/logos/naasa-mark.png',
  },
  {
    name: 'Nepal Stock House',
    logo: '/logos/nepal-stock-house-mark.png',
  },
  {
    name: 'Waterflow Technology',
    logo: '/logos/waterflow-mark.png',
  },
];

const TESTIMONIAL_DATA: AnimatedTestimonialItem[] = [
  {
    name: 'Sarah Chen',
    designation: 'Product Lead at Naasa Securities',
    quote:
      'The attention to detail and innovative design execution completely transformed our trading platform. Working with Dolma was effortlessly collaborative and exceeded our leadership team’s highest benchmarks.',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3540&auto=format&fit=crop',
  },
  {
    name: 'Alexander Sterling',
    designation: 'VP of Product at Fintech Terminal Labs',
    quote:
      'Dolma possesses the rarest blend in modern product development: world-class aesthetic intuition paired with the technical depth to build it into flawless, high-performance code. Our launch would not have succeeded without her.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop',
  },
  {
    name: 'Dr. Sarah Jenkins',
    designation: 'Founder & CEO at Agrilink IoT Systems',
    quote:
      'Her attention to micro-interactions, accessibility tokens, and spatial layout elevated our enterprise dashboard from a standard utility tool into an experience that our enterprise clients genuinely love opening every day.',
    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop',
  },
  {
    name: 'Marcus Vance',
    designation: 'Engineering Director at Nexus Scale Cloud',
    quote:
      'Working with Dolma was effortless. She transformed ambiguous product ideas into crisp, interactive prototypes in record time, and the resulting frontend code was modular, clean, and robust.',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop',
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#05070A] overflow-hidden border-t border-white/5">
      {/* Subtle Ambient Glows bound to dynamic theme */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[rgba(var(--theme-glow),0.06)] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/3 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-pink-300 uppercase tracking-wider mb-3">
            <span>Social Proof // Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Trusted by <span className="text-pink-300">Leaders &amp; Teams</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal mt-3 max-w-xl">
            Direct testimonials from founders, product directors, and engineering leads.
          </p>
        </div>

        {/* 1. First: Client Companies */}
        <div className="w-full flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 py-2 px-4">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group cursor-default transition-transform"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain filter drop-shadow group-hover:brightness-110 transition-all"
                />
              </div>
              <span className="text-sm sm:text-base md:text-lg font-bold text-slate-200 tracking-tight group-hover:text-white transition-colors">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 2. Then: Frames of People (Animated Testimonials) */}
        <div className="relative rounded-3xl bg-[#0D1117]/80 border border-white/10 p-6 sm:p-10 md:p-14 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <AnimatedTestimonials testimonials={TESTIMONIAL_DATA} autoplay={true} />
        </div>

      </div>
    </section>
  );
}
