'use client';

import React from 'react';

interface ContributionCardProps {
  designPercentage: number;
  devPercentage: number;
  role: string;
}

export default function ContributionCard({
  designPercentage,
  devPercentage,
  role,
}: ContributionCardProps) {
  return (
    <div className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-pink-300 font-semibold block mb-0.5">
            Role & Contribution
          </span>
          <span className="text-base sm:text-lg font-bold text-white font-display">
            {role}
          </span>
        </div>

        {/* 1-Line Percentage Callout */}
        <div className="flex items-center gap-5 sm:gap-6">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-pink-300 font-display">
              {designPercentage}%
            </span>
            <span className="text-xs uppercase tracking-wide font-medium text-slate-400">
              Design
            </span>
          </div>

          <div className="w-px h-6 bg-white/15" />

          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-cyan-300 font-display">
              {devPercentage}%
            </span>
            <span className="text-xs uppercase tracking-wide font-medium text-slate-400">
              Development
            </span>
          </div>
        </div>
      </div>

      {/* Sleek Dual-Tone Progress Line */}
      <div className="relative h-2 sm:h-2.5 w-full bg-black/60 rounded-full overflow-hidden flex border border-white/10">
        <div
          style={{ width: `${designPercentage}%` }}
          className="h-full bg-gradient-to-r from-pink-500 to-pink-300 shadow-[0_0_10px_rgba(244,114,182,0.5)] transition-all duration-700"
        />
        <div
          style={{ width: `${devPercentage}%` }}
          className="h-full bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.5)] transition-all duration-700"
        />
      </div>
    </div>
  );
}
