"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import HorizontalScrollMarquee from "@/components/ui/horizontal-marquee";

interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  accent: string;
}

const THREE_SERVICES: ServiceItem[] = [
  {
    title: "UX/UI Design",
    description:
      "Crafting human-centered digital interfaces, design systems, interactive prototypes, and accessible user experiences in Figma.",
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    image: "/services/ux-ui-design.jpg",
    href: "/methodology/ux-ui-design",
    accent: "#FDE047",
  },
  {
    title: "Flutter Development",
    description:
      "Engineering native iOS & Android applications with fluid 120fps motion, clean BLoC architecture, and robust offline-first synchronization.",
    tags: ["Flutter", "Dart", "iOS & Android", "BLoC State"],
    image: "/services/flutter-development.jpg",
    href: "/methodology/flutter-development",
    accent: "#38BDF8",
  },
  {
    title: "Backend & Cloud Dev",
    description:
      "Architecting high-throughput REST and GraphQL APIs, resilient microservices, Docker container clusters, and scalable Azure cloud topologies.",
    tags: ["Node.js", "Azure Cloud", "Docker", "REST & GraphQL"],
    image: "/services/cloud-development.jpg",
    href: "/methodology/backend-cloud-development",
    accent: "#34D399",
  },
];

const EXPERTISE_TOOLS = [
  {
    name: "Figma",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "Flutter",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 166 202" fill="none">
        <path d="M102.8 0L0 102.8L31.6 134.4L166 0H102.8Z" fill="#47C5FB" />
        <path d="M102.8 98.7L47.5 154.1L79.1 185.7L166 98.7H102.8Z" fill="#47C5FB" />
        <path d="M79.1 185.7L94.9 201.5H158.1L126.5 169.9L79.1 185.7Z" fill="#00569E" />
        <path d="M126.5 169.9L166 130.4H102.8L79.1 154.1L126.5 169.9Z" fill="#00B5F8" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: ".NET",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#512BD4" />
        <text x="64" y="76" fill="white" fontSize="36" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">.NET</text>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 180 180" fill="none">
        <mask id="next-mask-offer" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#next-mask-offer)">
          <circle cx="90" cy="90" r="90" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
          <path d="M149.508 157.438L69.1555 54H54V125.967H66.1536V69.4688L139.987 164.846C143.344 162.607 146.529 160.124 149.508 157.438Z" fill="white" />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#3178C6" />
        <path d="M72 80V96H88V80H72ZM40 48H88V60H68V96H54V60H40V48Z" fill="white" />
        <path d="M88 64C88 64 80 60 72 68C64 76 72 88 88 88C104 88 104 68 88 64Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 128 128" fill="none">
        <path d="M64 8L116 38V90L64 120L12 90V38L64 8Z" fill="#339933" />
        <path d="M64 22L98 42V86L64 106L30 86V42L64 22Z" fill="#026E00" />
        <text x="64" y="72" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: "Azure",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 128 128" fill="none">
        <path d="M22 96L54 20H76L44 96H22Z" fill="#008AD7" />
        <path d="M46 96L68 50L84 76L62 96H46Z" fill="#005BA1" />
        <path d="M62 96L84 76H114L86 96H62Z" fill="#008AD7" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 128 128" fill="none">
        <rect x="22" y="52" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="38" y="52" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="54" y="52" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="70" y="52" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="38" y="38" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="54" y="38" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="70" y="38" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="54" y="24" width="14" height="12" rx="2" fill="#2496ED" />
        <path d="M120 66C116 66 110 68 106 72C100 64 90 64 84 66C70 66 58 72 50 82C40 82 24 84 14 96C32 108 80 110 106 96C120 88 124 74 120 66Z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 128 128" fill="none">
        <path d="M64 8L116 38V90L64 120L12 90V38L64 8Z" stroke="#E10098" strokeWidth="6" />
        <circle cx="64" cy="8" r="8" fill="#E10098" />
        <circle cx="116" cy="38" r="8" fill="#E10098" />
        <circle cx="116" cy="90" r="8" fill="#E10098" />
        <circle cx="64" cy="120" r="8" fill="#E10098" />
        <circle cx="12" cy="90" r="8" fill="#E10098" />
        <circle cx="12" cy="38" r="8" fill="#E10098" />
        <path d="M64 8L64 120M116 38L12 90M116 90L12 38" stroke="#E10098" strokeWidth="4" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Dart",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 128 128" fill="none">
        <path d="M24 24L74 24L104 54L44 114L24 114L24 24Z" fill="#0175C2" />
        <path d="M64 24L104 64L64 104L24 64L64 24Z" fill="#02569B" />
        <path d="M74 24L104 54L84 74L54 44L74 24Z" fill="#29B6F6" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 128 128" fill="none">
        <path d="M64 0C64 0 62.7 1.6 60.9 5.8C52.4 25.5 32 50.8 32 78.4C32 99.4 46.1 117.8 62.4 122.9V128C62.4 128 63.3 127.8 64 127.7C64.7 127.8 65.6 128 65.6 128V122.9C81.9 117.8 96 99.4 96 78.4C96 50.8 75.6 25.5 67.1 5.8C65.3 1.6 64 0 64 0Z" fill="#47A248" />
        <path d="M64 0V122.9C80.3 117.8 94.4 99.4 94.4 78.4C94.4 50.8 74 25.5 65.5 5.8C64.7 3.8 64 1.9 64 0Z" fill="#499D4A" />
        <path d="M63.8 122.9V44.2C63.8 44.2 60.3 54.7 54.4 68.2C48.6 81.6 51.5 98.7 63.8 122.9Z" fill="#FFFFFF" opacity="0.35" />
      </svg>
    ),
  },
];

export default function WhatIOffer() {
  return (
    <section
      id="offerings"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#05070A] overflow-hidden border-t border-white/5"
    >
      {/* Ambient Glows bound to dynamic theme */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[rgba(var(--theme-glow),0.06)] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/3 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-pink-300 uppercase tracking-wider mb-3">
            <span>Core Disciplines // Technical Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            My <span className="text-pink-300">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal mt-3 max-w-xl">
            Human-centered product design paired with scalable full-stack and mobile engineering.
          </p>
        </div>

        {/* Simple 3 Cards Grid for Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto w-full">
          {THREE_SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="block group"
            >
              <Card className="h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0C1017]/90 backdrop-blur-xl hover:border-pink-300/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl flex flex-col justify-between">
                {/* Image Banner */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1017] via-transparent to-transparent opacity-70" />
                </div>

                {/* Card Content */}
                <CardContent className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-slate-400 group-hover:text-pink-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mt-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300 group-hover:border-pink-300/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* ================================================== */}
        {/* EXPERTISE TOOLS — Horizontal Scrolling Showcase    */}
        {/* ================================================== */}
        <div className="pt-16 sm:pt-24 flex flex-col items-center w-full">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-pink-300 font-bold">
              Expertise Tools &amp; Technologies
            </span>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Horizontal scrolling ecosystem of core frameworks, engineering engines &amp; cloud infrastructure
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-5">
            {/* Track 1: Smooth Horizontal Scroll Left */}
            <HorizontalScrollMarquee
              items={EXPERTISE_TOOLS}
              direction="left"
              speedSeconds={30}
              pauseOnHover={true}
            />

            {/* Track 2: Smooth Horizontal Scroll Right (Reversed) */}
            <HorizontalScrollMarquee
              items={[...EXPERTISE_TOOLS].reverse()}
              direction="right"
              speedSeconds={34}
              pauseOnHover={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
