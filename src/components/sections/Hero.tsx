'use client';

import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { ImageStreamHero } from '@/components/ui/image-stream-hero';

const CDN = 'https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev';

// High-fidelity image stream combining Dolma's real product screenshots with atmospheric gradient cards
const IMAGES = [
  {
    src: '/projects/naasaxweb_dashboard.png',
    alt: 'NAASA X Trading Dashboard',
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-01.png`,
    alt: 'Soft multi-tone gradient wash',
  },
  {
    src: '/projects/agrilink_1.png',
    alt: 'Agrilink IoT Dashboard',
  },
  {
    src: `${CDN}/gradients/crimson_aura/crimson-aura-02.png`,
    alt: 'Crimson aura gradient',
  },
  {
    src: '/projects/ci_dashboard.png',
    alt: 'Connect Infinity AI Knowledge Hub',
  },
  {
    src: `${CDN}/gradients/hue-flow/hue-flow-01.png`,
    alt: 'Flowing hue gradient',
  },
  {
    src: '/projects/ssa_dashbaord.PNG',
    alt: 'Self-Service Mobile Banking Platform',
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-03.png`,
    alt: 'Moon-toned gradient',
  },
  {
    src: '/projects/naasawebsite_1.png',
    alt: 'Naasa Corporate Institutional Portal',
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-03.png`,
    alt: 'Layered hero gradient',
  },
  {
    src: '/projects/sagar_distillery_home.png',
    alt: 'Sagar Distillery Digital Flagship',
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-05.png`,
    alt: 'Deep moon-toned gradient',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-[#05070A] border-b border-white/5">
      <ImageStreamHero
        images={IMAGES}
        className="h-[600px] sm:h-[660px] lg:h-[720px] w-full bg-[#05070A]"
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-between pt-24 sm:pt-28 pb-12 sm:pb-16 text-center select-none">
          {/* Top Section: Title (Above the corridor, cleared from Navbar) */}
          <div className="px-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Product <span className="text-pink-300 font-black">Designer</span>
            </h1>
          </div>

          {/* Center: The 3D image stream corridor passes cleanly through the center */}

          {/* Bottom Section: Description (Below the corridor) */}
          <div className="px-6 flex flex-col items-center gap-3">
            <p className="max-w-md text-balance text-sm text-slate-300 font-normal leading-relaxed">
              Leading with shipped products. Fusing <span className="text-pink-300 font-semibold">human ergonomics</span> with <span className="text-pink-300 font-semibold">Next.js &amp; Flutter</span> engineering.
            </p>

            <div className="flex items-center gap-3 mt-1">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-xs sm:text-sm font-mono transition-all shadow-[0_0_25px_rgba(var(--theme-glow),0.4)] hover:shadow-[0_0_35px_rgba(var(--theme-glow),0.6)] hover:scale-105 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown size={14} />
              </Link>
            </div>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
}
