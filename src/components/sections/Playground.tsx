'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sliders, Palette, ToggleLeft, ToggleRight, Copy, Check, MousePointer, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Playground() {
  const [toggleState, setToggleState] = useState(true);
  const [sliderValue, setSliderValue] = useState(65);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedPaletteIndex, setSelectedPaletteIndex] = useState(0);

  const PALETTES = [
    { name: 'Obsidian Cyan', primary: '#6EE7F9', secondary: '#818CF8', bg: '#05070A' },
    { name: 'Aurora Emerald', primary: '#34D399', secondary: '#2DD4BF', bg: '#061612' },
    { name: 'Electric Violet', primary: '#C084FC', secondary: '#F472B6', bg: '#0F0918' },
    { name: 'Solar Amber', primary: '#FBBF24', secondary: '#F87171', bg: '#140E05' },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6EE7F9', '#818CF8', '#C084FC'],
    });
  };

  return (
    <section id="playground" className="relative py-28 px-6 lg:px-12 bg-[#05070A] overflow-hidden border-t border-white/5">
      {/* Glow Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tactile Research & Prototyping</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              INTERACTIVE <br />
              <span className="text-gradient-cyan">PLAYGROUND & LAB.</span>
            </h2>
          </div>
          <p className="text-fg-secondary text-sm md:text-base max-w-md">
            A micro-interaction laboratory showcasing experimental physics, dynamic tactile controls, and generative design tokens.
          </p>
        </div>

        {/* 4 Interactive Experiment Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Experiment 1: Spring Physics & Haptic Pulse Switch */}
          <div className="p-8 rounded-3xl bg-[#0D1117]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-fg-secondary mb-4">
                <span className="text-cyan-400">EXPERIMENT 01 //</span>
                <span>Spring Physics & Haptic Feedback</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tactile Dynamic Toggle</h3>
              <p className="text-xs sm:text-sm text-fg-secondary mb-6">
                Test interactive physics easing with fluid squash-and-stretch micro-motion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setToggleState(!toggleState);
                    triggerCelebration();
                  }}
                  className={`relative w-16 h-9 rounded-full transition-colors p-1 flex items-center ${
                    toggleState ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-[0_0_20px_rgba(110,231,249,0.4)]' : 'bg-white/10'
                  }`}
                >
                  <motion.div
                    layout
                    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                    className={`w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center ${
                      toggleState ? 'ml-auto' : 'ml-0'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${toggleState ? 'bg-cyan-500' : 'bg-slate-400'}`} />
                  </motion.div>
                </button>
                <span className="text-xs font-mono text-fg-primary">
                  {toggleState ? 'Physics Active (60fps)' : 'Damped State'}
                </span>
              </div>

              <button
                onClick={triggerCelebration}
                className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-brand-cyan text-xs font-mono border border-cyan-500/30 transition-colors"
              >
                Spark Particle Burst
              </button>
            </div>
          </div>

          {/* Experiment 2: Dynamic Harmonic Color Token Generator */}
          <div className="p-8 rounded-3xl bg-[#0D1117]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-fg-secondary mb-4">
                <span className="text-purple-400">EXPERIMENT 02 //</span>
                <span>Adaptive Design Tokens</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Palette Harmony Engine</h3>
              <p className="text-xs sm:text-sm text-fg-secondary mb-6">
                Select tokens to inspect real-time WCAG contrast ratios and copy hex codes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {PALETTES.map((pal, idx) => (
                  <button
                    key={pal.name}
                    onClick={() => setSelectedPaletteIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      selectedPaletteIndex === idx
                        ? 'bg-white/15 border-white/30 text-white shadow-sm'
                        : 'bg-white/5 border-white/5 text-fg-secondary hover:text-white'
                    } border`}
                  >
                    {pal.name}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-xl shadow-md transition-colors"
                    style={{ backgroundColor: PALETTES[selectedPaletteIndex].primary }}
                  />
                  <div>
                    <div className="text-xs font-bold text-white font-mono">
                      {PALETTES[selectedPaletteIndex].primary}
                    </div>
                    <div className="text-[10px] text-fg-secondary font-mono">Primary Accent</div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PALETTES[selectedPaletteIndex].primary)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-fg-secondary hover:text-white transition-colors"
                  aria-label="Copy Hex Code"
                >
                  {copiedHex === PALETTES[selectedPaletteIndex].primary ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Experiment 3: Fluid Slider & Telemetry Gauge */}
          <div className="p-8 rounded-3xl bg-[#0D1117]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-fg-secondary mb-4">
                <span className="text-emerald-400">EXPERIMENT 03 //</span>
                <span>Continuous Interaction Physics</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fluid Precision Slider</h3>
              <p className="text-xs sm:text-sm text-fg-secondary mb-6">
                Dynamic value dampening with real-time UI scale reactivity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-fg-secondary">UI DENSITY RATIO</span>
                <span className="text-cyan-400 font-bold">{sliderValue}%</span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex items-center justify-between text-[10px] font-mono text-fg-muted">
                <span>Minimalist</span>
                <span>Optimized Spatial Comfort</span>
                <span>Dense Cockpit</span>
              </div>
            </div>
          </div>

          {/* Experiment 4: Spatial 3D Card Tilt Simulation */}
          <div className="p-8 rounded-3xl bg-[#0D1117]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-fg-secondary mb-4">
                <span className="text-amber-400">EXPERIMENT 04 //</span>
                <span>Spatial Ergonomics</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3D Depth & Light Sensor</h3>
              <p className="text-xs sm:text-sm text-fg-secondary mb-6">
                Hover to experience continuous gyro/pointer-responsive gradient lighting.
              </p>
            </div>

            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-black to-[#0D1117] border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs font-bold text-white font-mono flex items-center gap-2">
                  <MousePointer className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Gyro Reactive Canvas</span>
                </div>
                <div className="text-[11px] text-fg-secondary font-mono">
                  Sub-millisecond pointer tracking
                </div>
              </div>

              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono text-xs font-bold">
                60Hz
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
