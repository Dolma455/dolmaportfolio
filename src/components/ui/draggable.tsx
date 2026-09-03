'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, X, Minus, Square } from 'lucide-react';

export interface DragItemProps {
  children: React.ReactNode;
  constraintsRef?: React.RefObject<HTMLDivElement>;
  initialX?: number;
  initialY?: number;
  className?: string;
}

export function DragItem({
  children,
  constraintsRef,
  initialX = 0,
  initialY = 0,
  className = '',
}: DragItemProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.08}
      dragMomentum={true}
      initial={{ x: initialX, y: initialY }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ scale: 1.04, cursor: 'grabbing' }}
      className={`absolute cursor-grab select-none will-change-transform ${
        isDragging ? 'z-50' : 'z-10'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function RetroWindow({
  title = 'Window',
  color = 'bg-[#0D1117]',
  headerColor = 'bg-[#161B22]',
  borderColor = 'border-white/20',
  shadowColor = '#F472B6',
  textColor = 'text-white',
  rotation = 0,
  children,
}: {
  title?: string;
  color?: string;
  headerColor?: string;
  borderColor?: string;
  shadowColor?: string;
  textColor?: string;
  rotation?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-72 sm:w-84 border-2 ${borderColor} ${color} ${textColor} font-mono text-xs sm:text-sm backdrop-blur-xl`}
      style={{
        transform: `rotate(${rotation}deg)`,
        boxShadow: `6px 6px 0px 0px ${shadowColor}`,
      }}
    >
      <div className={`flex items-center justify-between border-b-2 ${borderColor} ${headerColor} px-3 py-1.5`}>
        <span className="text-xs font-bold uppercase tracking-wider truncate mr-2">{title}</span>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3.5 h-3.5 border border-white/40 flex items-center justify-center bg-white/10 hover:bg-white/30 cursor-pointer">
            <Minus size={8} className="text-white" />
          </div>
          <div className="w-3.5 h-3.5 border border-white/40 flex items-center justify-center bg-white/10 hover:bg-white/30 cursor-pointer">
            <Square size={6} className="text-white" />
          </div>
          <div className="w-3.5 h-3.5 border border-white/40 flex items-center justify-center bg-red-500/80 hover:bg-red-500 cursor-pointer">
            <X size={8} className="text-white" />
          </div>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function MusicPlayer({
  track = 'Dolma - Ambient_Code.mp3',
  shadowColor = '#38BDF8',
}: {
  track?: string;
  shadowColor?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div
      className="w-72 border-2 border-cyan-400/80 bg-[#090D16] p-3 text-white font-mono"
      style={{ boxShadow: `6px 6px 0px 0px ${shadowColor}` }}
    >
      <div className="flex items-center justify-between border-b border-cyan-400/30 pb-2 mb-3">
        <span className="text-xs font-black uppercase text-cyan-300">DOLMA_PLAYER.EXE</span>
        <Volume2 size={16} className="text-cyan-400 animate-pulse" />
      </div>
      <div className="bg-black/90 border border-white/10 text-emerald-400 p-2 text-xs font-mono mb-3 rounded-none overflow-hidden shadow-inner">
        <div className="truncate text-[11px] font-bold">▶ {track}</div>
        <div className="flex justify-between text-[10px] text-emerald-400/70 mt-1">
          <span>03:12</span>
          <span>320 kbps • Hi-Fi</span>
        </div>
      </div>
      {/* Animated Equalizer / Progress */}
      <div className="w-full h-3 border border-white/20 bg-black/60 mb-3 p-0.5 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 w-3/4 animate-pulse" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          className="border border-white/20 bg-white/10 hover:bg-white/20 p-1.5 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
        >
          <SkipBack size={14} className="text-white" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          className="border border-cyan-400 bg-cyan-400 text-black px-3.5 py-1.5 shadow-[2px_2px_0px_0px_#00F0FF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold cursor-pointer"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
        <button
          type="button"
          className="border border-white/20 bg-white/10 hover:bg-white/20 p-1.5 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
        >
          <SkipForward size={14} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export function Polaroid({
  src,
  caption,
  rotate = 0,
  shadowColor = '#F472B6',
  widthClass = 'w-44 sm:w-52',
  aspectClass = 'aspect-[4/4.8]',
}: {
  src: string;
  caption?: string;
  rotate?: number;
  shadowColor?: string;
  widthClass?: string;
  aspectClass?: string;
}) {
  return (
    <div
      className={`border-2 border-white/20 bg-[#0D1117] p-2.5 sm:p-3 pb-3.5 sm:pb-4 text-center group cursor-pointer ${widthClass}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        boxShadow: `6px 6px 0px 0px ${shadowColor}`,
      }}
    >
      <div className={`relative w-full ${aspectClass} border border-white/10 overflow-hidden mb-2 bg-black rounded-sm`}>
        <img
          src={src}
          alt={caption || 'Preview'}
          className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {caption && (
        <div className="font-mono text-[11px] sm:text-xs font-bold text-pink-200 tracking-wider truncate">
          {caption}
        </div>
      )}
    </div>
  );
}

export function Sticker({
  text,
  color = 'bg-pink-500',
  textColor = 'text-black',
  borderColor = 'border-white/30',
  shadowColor = '#000',
  rotate = 0,
}: {
  text: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
  shadowColor?: string;
  rotate?: number;
}) {
  return (
    <div
      className={`inline-block border-2 ${borderColor} ${color} px-4 py-2 font-black text-xs sm:text-sm uppercase ${textColor} tracking-wider`}
      style={{
        transform: `rotate(${rotate}deg)`,
        boxShadow: `4px 4px 0px 0px ${shadowColor}`,
      }}
    >
      {text}
    </div>
  );
}
