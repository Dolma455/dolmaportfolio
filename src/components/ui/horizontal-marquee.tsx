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
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-pink-300/40 hover:bg-white/[0.06] transition-all duration-300 shrink-0 group cursor-default"
          >
            <div className="w-5 h-5 flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5">
              {tool.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              {tool.name}
            </span>
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
