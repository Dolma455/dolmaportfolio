'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MethodologyDiagramProps {
  serviceSlug: string;
  stageNumber: string;
  stageTitle: string;
}

export default function MethodologyDiagram({
  serviceSlug,
  stageNumber,
  stageTitle,
}: MethodologyDiagramProps) {
  // Render visual diagrams tailored to each service and stage
  return (
    <div className="relative aspect-[16/11] w-full rounded-2xl bg-black/80 border border-white/15 p-5 overflow-hidden shadow-2xl flex flex-col justify-between">
      {/* Top Bar with mock window controls */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[10px] font-mono text-slate-400 ml-2">
            artifact_stage_{stageNumber}.schema
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[10px] font-mono text-pink-300">
          Verified Workflow
        </span>
      </div>

      {/* Main Schematic Body */}
      <div className="relative flex-1 flex items-center justify-center p-4">
        {serviceSlug === 'ux-ui-design' && (
          <UXDiagram stageNumber={stageNumber} />
        )}
        {serviceSlug === 'flutter-development' && (
          <FlutterDiagram stageNumber={stageNumber} />
        )}
        {serviceSlug === 'backend-cloud-development' && (
          <BackendDiagram stageNumber={stageNumber} />
        )}
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] font-mono text-slate-400 z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
          <span>Stage {stageNumber} Artifact</span>
        </div>
        <span className="text-pink-300 font-semibold">{stageTitle}</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// UX / UI Diagrams
// -------------------------------------------------------------
function UXDiagram({ stageNumber }: { stageNumber: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3">
      {/* Visual wireframe / token grid */}
      <div className="grid grid-cols-3 gap-2.5 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2"
        >
          <div className="h-2 w-12 rounded bg-pink-400/50" />
          <div className="h-12 rounded bg-white/5 border border-white/5 flex items-center justify-center">
            <span className="text-[9px] font-mono text-slate-400">User Flow</span>
          </div>
          <div className="h-1.5 w-16 rounded bg-slate-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-3 rounded-xl bg-pink-500/5 border border-pink-500/20 flex flex-col gap-2"
        >
          <div className="h-2 w-16 rounded bg-pink-300/80" />
          <div className="h-12 rounded bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
            <span className="text-[9px] font-mono text-pink-300">Tokens & IA</span>
          </div>
          <div className="h-1.5 w-10 rounded bg-pink-400/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2"
        >
          <div className="h-2 w-14 rounded bg-pink-400/50" />
          <div className="h-12 rounded bg-white/5 border border-white/5 flex items-center justify-center">
            <span className="text-[9px] font-mono text-slate-400">WCAG AAA</span>
          </div>
          <div className="h-1.5 w-20 rounded bg-slate-600" />
        </motion.div>
      </div>

      {/* Simulated timeline connecting row */}
      <div className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg bg-black/60 border border-white/5 text-[10px] font-mono text-slate-400">
        <span className="text-pink-300">Figma Specs // Auto-Layout</span>
        <span>Grid: 8pt System</span>
        <span className="text-emerald-400">Passed QA</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Flutter Mobile Diagrams
// -------------------------------------------------------------
function FlutterDiagram({ stageNumber }: { stageNumber: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3">
      {/* BLoC / Widget stream pipeline */}
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="flex-1 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
          <span className="text-[10px] font-mono text-slate-400 block mb-1">UI View</span>
          <span className="text-xs font-bold text-white">Widget Tree</span>
        </div>
        <div className="text-pink-300 font-mono text-xs">➔ Events ➔</div>
        <div className="flex-1 p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-center">
          <span className="text-[10px] font-mono text-pink-300 block mb-1">State Machine</span>
          <span className="text-xs font-bold text-white">BLoC / Riverpod</span>
        </div>
        <div className="text-pink-300 font-mono text-xs">➔ State ➔</div>
        <div className="flex-1 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
          <span className="text-[10px] font-mono text-slate-400 block mb-1">Data Layer</span>
          <span className="text-xs font-bold text-white">Repositories</span>
        </div>
      </div>

      {/* Native Bridge channel */}
      <div className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-[10px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-slate-300">Platform MethodChannel</span>
        </div>
        <span className="text-pink-300">iOS (Swift) + Android (Kotlin)</span>
        <span className="text-slate-400">FPS: 120Hz ProMotion</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Backend & Cloud Diagrams
// -------------------------------------------------------------
function BackendDiagram({ stageNumber }: { stageNumber: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3">
      {/* Microservices Node Diagram */}
      <div className="grid grid-cols-4 gap-2 w-full text-center">
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
          <span className="text-[9px] font-mono text-slate-400 block">Client</span>
          <span className="text-xs font-bold text-white">API Gateway</span>
        </div>
        <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30">
          <span className="text-[9px] font-mono text-pink-300 block">Auth</span>
          <span className="text-xs font-bold text-white">JWT / OAuth2</span>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
          <span className="text-[9px] font-mono text-slate-400 block">Services</span>
          <span className="text-xs font-bold text-white">Docker / K8s</span>
        </div>
        <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30">
          <span className="text-[9px] font-mono text-pink-300 block">Storage</span>
          <span className="text-xs font-bold text-white">PostgreSQL</span>
        </div>
      </div>

      {/* Cloud & Telemetry bar */}
      <div className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-[10px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">OpenTelemetry + Prometheus</span>
        </div>
        <span className="text-pink-300">p99 Latency: 12ms</span>
        <span className="text-slate-400">CI/CD: GitHub Actions</span>
      </div>
    </div>
  );
}
