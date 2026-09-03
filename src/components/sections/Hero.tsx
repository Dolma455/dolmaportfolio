'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, Sparkles } from 'lucide-react';
import ImageStreamHero, { StreamImage } from '@/components/ui/image-stream-hero';

const CDN = 'https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev';

// High-resolution portfolio showcases + atmospheric gradients
const HERO_STREAM_IMAGES: StreamImage[] = [
  {
    src: '/projects/naasaxweb_dashboard.png',
    alt: 'NAASA X Trading Platform',
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-01.png`,
    alt: 'Ambient gradient wash',
  },
  {
    src: '/projects/agrilink_1.png',
    alt: 'Agrilink IoT Dashboard',
  },
  {
    src: `${CDN}/gradients/crimson_aura/crimson-aura-02.png`,
    alt: 'Crimson aura',
  },
  {
    src: '/projects/ci_dashboard.png',
    alt: 'Connect Infinity AI Hub',
  },
  {
    src: `${CDN}/gradients/hue-flow/hue-flow-01.png`,
    alt: 'Flowing hue gradient',
  },
  {
    src: '/projects/ssa_dashbaord.PNG',
    alt: 'Mobile Banking App',
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-03.png`,
    alt: 'Moon-toned gradient',
  },
  {
    src: '/services/ux-ui-design.jpg',
    alt: 'UX/UI Design System',
  },
  {
    src: '/services/flutter-development.jpg',
    alt: 'Flutter Mobile App',
  },
  {
    src: '/projects/sagar_distillery_home.png',
    alt: 'Sagar Distillery Luxury Brand',
  },
  {
    src: '/1.jpg',
    alt: 'Dolma Lama Portrait',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-[#05070A] border-b border-white/5">
      <ImageStreamHero
        images={HERO_STREAM_IMAGES}
        speed={18}
        cards={10}
        axis={56}
        className="min-h-[92vh] sm:min-h-[96vh] w-full bg-[#05070A]"
      >
        {/* Subtle Ambient Radial Glows */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FDE047]/5 blur-[220px] rounded-full" />

        {/* Foreground Content */}
        <div className="relative z-10 flex min-h-[92vh] sm:min-h-[96vh] flex-col items-center justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 text-center">
          {/* Top Pill: Identity & Role */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/75 border border-white/15 backdrop-blur-xl text-xs font-mono text-[#FDE047] shadow-lg">
            <Sparkles size={13} className="text-[#FDE047]" />
            <span className="tracking-wider">DOLMA LAMA • PRODUCT DESIGNER &amp; DEVELOPER</span>
          </div>

          {/* Main Clean Headline */}
          <div className="my-auto py-8 max-w-4xl space-y-6">
            <h1 className="text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold uppercase tracking-[-0.035em] text-white leading-[0.94] drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
              Digital products,
              <br />
              <span className="text-[#FDE047] drop-shadow-[0_0_35px_rgba(253,224,71,0.3)]">
                front and centre.
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-balance px-4 text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed drop-shadow-md">
              Fusing human ergonomics, systems thinking, and low-latency Next.js and Flutter engineering from zero to scale.
            </p>
          </div>

          {/* Bottom Row: Live Status & Explore Button */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-white/15 text-xs font-mono text-slate-200 backdrop-blur-xl shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Select Roles &amp; Contracts</span>
            </div>

            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full bg-[#FDE047] hover:bg-yellow-300 text-black font-bold text-xs font-mono transition-all shadow-[0_0_20px_rgba(253,224,71,0.3)] hover:scale-105"
            >
              <span>Explore Projects</span>
              <ArrowDown size={14} />
            </Link>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
}
