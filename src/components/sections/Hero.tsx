'use client';

import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import FlashlightTextReveal from '@/components/ui/flashlight-text-reveal';

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-[#05070A] border-b border-white/5 overflow-hidden">
      <FlashlightTextReveal
        text={"PRODUCT DESIGNER\nAND DEVELOPER"}
        textColor="#FFFFFF"
        ghost={0.06}
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="clamp(2.6rem, 8.5vw, 7.5rem)"
        wander={true}
        radius={0.38}
        strength={1.2}
        colors={["#05070A", "#0D1117", "#161B22"]}
        speed={0.75}
        height="100vh"
        className="min-h-[640px] sm:min-h-[720px] max-h-[920px]"
      >
        <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 text-center px-4">
          {/* Top Section: Availability badge */}
          <div className="pointer-events-auto flex flex-col items-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for full-time &amp; contract opportunities</span>
            </div>
          </div>

          {/* Center spacer so the interactive flashlight text shines through */}
          <div className="flex-1" />

          {/* Bottom Section: Bio & Bold Clean CTAs */}
          <div className="pointer-events-auto flex flex-col items-center gap-4 max-w-xl">
            <p className="text-balance text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed drop-shadow-md">
              Designing digital products that feel intuitive, elegant, and fast.
            </p>

            <div className="flex items-center gap-3.5 mt-1">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(var(--theme-glow),0.4)] hover:shadow-[0_0_35px_rgba(var(--theme-glow),0.6)] hover:scale-105 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-md hover:scale-105"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </FlashlightTextReveal>
    </section>
  );
}
