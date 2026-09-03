"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { DragItem, RetroWindow, MusicPlayer, Polaroid, Sticker } from '@/components/ui/draggable';
import { MousePointer2, ArrowLeft, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';

export default function PlaygroundPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-[#05070A] text-white cursor-crosshair selection:bg-pink-500 selection:text-black select-none"
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-15"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.14) 1.2px, transparent 1.2px)',
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Subtle Ambient Radial Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/5 blur-[160px] pointer-events-none rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

            {/* Top Navigation Bar: Back to Portfolio */}
            <div className="absolute top-5 left-5 z-50">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 border border-white/15 bg-[#0D1117]/90 px-4 py-2 font-mono text-xs font-bold text-white shadow-[3px_3px_0px_0px_#F472B6] hover:bg-pink-300 hover:text-black hover:border-pink-300 transition-all backdrop-blur-md"
                >
                    <ArrowLeft size={14} />
                    <span>Back to Portfolio</span>
                </Link>
            </div>

            {/* Top-Right Interaction Prompt */}
            <div className="absolute top-5 right-5 pointer-events-none z-30">
                <div className="flex items-center gap-2 bg-[#0D1117]/90 border border-white/15 text-slate-300 px-3.5 py-2 font-mono text-xs shadow-[3px_3px_0px_0px_#00F0FF] backdrop-blur-md">
                    <Sparkles size={13} className="text-pink-300" />
                    <span>INTERACTIVE DESK • DRAG ANYTHING</span>
                </div>
            </div>

            {/* ========================================================= */}
            {/* USEFUL-ONLY DRAGGABLE CARDS                               */}
            {/* ========================================================= */}

            {/* 1. Cohesive Bold Title (Single Clean Block) */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={80} initialY={110} className="z-10">
                <div className="flex flex-col">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-pink-300 uppercase mb-1">
                        Creative Technologist
                    </span>
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase leading-none text-white drop-shadow-[5px_5px_0px_rgba(244,114,182,0.3)]">
                        DESIGN <span className="text-pink-300">×</span> CODE
                    </h1>
                </div>
            </DragItem>

            {/* 2. Dolma's Portrait Polaroid */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={960} initialY={90} className="z-20">
                <Polaroid
                    src="/1.jpg"
                    caption="Dolma Lama // Product Designer"
                    rotate={-4}
                    shadowColor="#F472B6"
                />
            </DragItem>

            {/* 3. About Window: Bio, Philosophy & Direct Contact */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={80} initialY={240} className="z-20">
                <RetroWindow
                    title="About_Dolma.txt"
                    color="bg-[#0D1117]/95"
                    headerColor="bg-[#161B22]"
                    borderColor="border-pink-400/60"
                    shadowColor="#F472B6"
                    rotation={1}
                >
                    <div className="space-y-3 text-slate-200">
                        <div>
                            <div className="font-bold text-white text-base text-pink-200">
                                Dolma Lama
                            </div>
                            <div className="text-xs font-mono text-cyan-300 mt-0.5">
                                UX/UI Designer &amp; Fullstack Developer
                            </div>
                        </div>

                        <p className="text-xs leading-relaxed text-slate-300">
                            Fusing human-centered Figma design systems with high-performance Next.js &amp; Flutter engineering. 3+ years shipping commercial digital products from zero to scale.
                        </p>

                        <div className="pt-1">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 w-full border-2 border-black bg-pink-300 py-2 text-black font-black text-xs hover:bg-white transition-all shadow-[3px_3px_0px_0px_#000]"
                            >
                                <span>LET&apos;S TALK</span>
                                <ArrowUpRight size={14} />
                            </Link>
                        </div>
                    </div>
                </RetroWindow>
            </DragItem>

            {/* 4. Tech Stack Terminal: Core Competencies */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={500} initialY={170} className="z-20">
                <RetroWindow
                    title="skills_stack.sh"
                    color="bg-[#070B14]/95"
                    headerColor="bg-[#0A101D]"
                    borderColor="border-cyan-400/60"
                    shadowColor="#00F0FF"
                    rotation={-2}
                >
                    <div className="font-mono text-xs space-y-2 text-slate-300">
                        <div className="text-emerald-400 flex items-center gap-1.5 pb-1 border-b border-white/10">
                            <Terminal size={12} />
                            <span className="font-bold">dolma --expertise</span>
                        </div>
                        <div className="text-xs text-slate-300">
                            <span className="text-pink-300 font-bold">UX/UI:</span> Figma, Design Systems, Tokens, Prototyping
                        </div>
                        <div className="text-xs text-slate-300">
                            <span className="text-cyan-300 font-bold">Frontend:</span> React, Next.js 14, TypeScript, Tailwind, GSAP
                        </div>
                        <div className="text-xs text-slate-300">
                            <span className="text-amber-300 font-bold">Mobile:</span> Flutter, Dart, iOS &amp; Android, BLoC State
                        </div>
                        <div className="text-xs text-slate-300">
                            <span className="text-purple-300 font-bold">Cloud:</span> Node.js, Azure Cloud, Docker, REST &amp; GraphQL
                        </div>
                    </div>
                </RetroWindow>
            </DragItem>

            {/* 5. Music Player: Lo-Fi Coding Vibe */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={80} initialY={520} className="z-30">
                <MusicPlayer
                    track="Dolma Lama - Deep_Work_Lofi.mp3"
                    shadowColor="#00F0FF"
                />
            </DragItem>

            {/* 6. Availability Status Badge */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={500} initialY={430} className="z-20">
                <Sticker
                    text="● AVAILABLE FOR SELECT CONTRACTS"
                    color="bg-emerald-400"
                    textColor="text-black"
                    borderColor="border-black"
                    shadowColor="#059669"
                    rotate={3}
                />
            </DragItem>

            {/* 7. Shipped Products Badge */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={500} initialY={500} className="z-20">
                <Sticker
                    text="25+ SHIPPED PRODUCTS // 100% CRAFT"
                    color="bg-pink-400"
                    textColor="text-black"
                    borderColor="border-black"
                    shadowColor="#BE185D"
                    rotate={-2}
                />
            </DragItem>

            {/* 8. Main Project CTA Button */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={860} initialY={480} className="z-30">
                <Link href="/#contact" className="group relative block">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-pink-400 transition-transform group-hover:translate-x-3.5 group-hover:translate-y-3.5" />
                    <div className="relative border-2 border-white/30 bg-[#0D1117] px-8 py-4.5 text-xl font-black uppercase text-white transition-transform group-hover:-translate-y-1 flex items-center gap-3 shadow-xl">
                        <span>START A PROJECT</span>
                        <ArrowUpRight className="w-5 h-5 text-pink-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </Link>
            </DragItem>

            {/* 9. Drag Instruction Hint */}
            <DragItem constraintsRef={containerRef as React.RefObject<HTMLDivElement>} initialX={80} initialY={720}>
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#0D1117]/80 px-4 py-2 backdrop-blur-md shadow-[3px_3px_0px_0px_#F472B6] text-white">
                    <MousePointer2 size={15} className="text-pink-300" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                        Grab &amp; Arrange Your Desk
                    </span>
                </div>
            </DragItem>

        </main>
    );
}
