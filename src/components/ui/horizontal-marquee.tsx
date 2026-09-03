'use client';

import React, { useRef, useState } from 'react';

export interface MarqueeItem {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface HorizontalScrollMarqueeProps {
  items: MarqueeItem[];
  direction?: 'left' | 'right';
  speedSeconds?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function HorizontalScrollMarquee({
  items,
  direction = 'left',
  speedSeconds = 28,
  pauseOnHover = true,
  className = '',
}: HorizontalScrollMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless continuous looping
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-2 ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Edge Gradient Fades for Premium Blending */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#05070A] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#05070A] to-transparent z-10" />

      {/* Horizontal Scrolling Track */}
      <div
        ref={scrollerRef}
        className="flex items-center gap-4 sm:gap-6 w-max cursor-grab active:cursor-grabbing"
        style={{
          animation: `scroll-${direction} ${speedSeconds}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {displayItems.map((tool, idx) => (
          <div
            key={`${tool.name}-${idx}`}
            className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-yellow-300/60 hover:bg-white/[0.08] transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(253,224,71,0.25)] hover:scale-105 shrink-0"
          >
            {/* Logo Only */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {tool.icon}
            </div>

            {/* Tooltip on Hover */}
            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap px-2.5 py-0.5 rounded-md bg-[#0D1117] border border-white/15 text-[10px] font-mono font-bold text-yellow-300 shadow-lg">
              {tool.name}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
