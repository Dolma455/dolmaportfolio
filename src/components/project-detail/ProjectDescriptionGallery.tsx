'use client';

import React, { useState } from 'react';
import { Project } from '@/data/portfolioData';
import { 
  Eye, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Maximize2, 
  X, 
  FileText, 
  Monitor, 
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface ProjectDescriptionGalleryProps {
  project: Project;
}

// Curated map of screenshot descriptions for every project
const SCREENSHOT_DETAILS: Record<string, { title: string; description: string; tag: string }> = {
  // Naasa X
  '/projects/naasaxweb_dashboard.png': {
    title: 'Live Trading Cockpit & Depth Visualizer',
    description: 'Zero-latency real-time order book, interactive market depth charts, and automated portfolio equity telemetry.',
    tag: 'Trading Terminal',
  },
  '/projects/naasaxweb_market.png': {
    title: 'Market Depth & Order Flow Analytics',
    description: 'Level 2 bid/ask depth feeds with microsecond-level updates and real-time spread analytics.',
    tag: 'Market Analytics',
  },
  '/projects/naasaxweb_order.png': {
    title: 'Order Routing & Slippage Controls',
    description: 'Single-click limit and market order routing with tactile slider controls for slippage optimization.',
    tag: 'Order Execution',
  },
  '/projects/naasaxweb_report.png': {
    title: 'P&L Reports & Transaction Audit',
    description: 'Real-time profit & loss ledger, exportable tax disclosures, and trade settlement history.',
    tag: 'Financial Audit',
  },
  '/projects/naasaxweb_login.png': {
    title: 'Biometric Authentication & Session Security',
    description: 'Multi-factor authorization with hardware passkey validation protecting institutional accounts.',
    tag: 'Security & 2FA',
  },
  '/projects/naasax.jpg': {
    title: 'Brand Architecture & Design System',
    description: 'Unified obsidian dark mode palette with WCAG AAA accessibility tokens and tactile micro-motion.',
    tag: 'Design System',
  },

  // Connect Infinity
  '/projects/ci_dashboard.png': {
    title: 'Spatial Canvas & Knowledge Hub',
    description: 'Infinite canvas workspace featuring neural node linking, real-time multi-cursor collaboration, and AI summarization.',
    tag: 'Spatial UI',
  },
  '/projects/ciproductpage_hero.png': {
    title: 'Product Landing & Spatial Node System',
    description: 'Cinematic flagship digital presence communicating spatial collaboration paradigms and AI assistance.',
    tag: 'Digital Presence',
  },
  '/projects/ciproductpage_services.png': {
    title: 'Service Mesh & Automated Pipelines',
    description: 'Modular enterprise AI service topology visualizer showing autonomous meeting-to-issue workflows.',
    tag: 'Architecture',
  },
  '/projects/ciproductpage_journey.png': {
    title: 'User Journey & Graph Explorer',
    description: 'Interactive graph exploration interface mapping user pathways across fragmented enterprise knowledge nodes.',
    tag: 'Graph Topology',
  },
  '/projects/ciproductpage_qn.png': {
    title: 'Interactive Q&A Copilot Engine',
    description: 'Natural language queries synthesized into context-aware answers, tasks, and code snippets.',
    tag: 'AI Copilot',
  },
  '/projects/ciproductpage_register.png': {
    title: 'Enterprise Workspace Provisioning',
    description: 'Streamlined corporate onboarding with domain validation and team permission provisioning.',
    tag: 'Onboarding',
  },
  '/projects/ciproductpage_2.png': {
    title: 'Feature Matrix & Toolchain Integrations',
    description: 'Ecosystem integration suite connecting Figma, GitHub, Jira, and Slack with sub-50ms sync.',
    tag: 'Integrations',
  },
  '/projects/ci_report.png': {
    title: 'AI Analytics & Sprint Intelligence',
    description: 'Automated engineering sprint velocity reports and cross-functional team blockers synthesis.',
    tag: 'Analytics',
  },
  '/projects/ci_revai.png': {
    title: 'RevAI Copilot Engine',
    description: 'Sub-second audio meeting transcription and generative action item breakdown.',
    tag: 'RevAI Model',
  },
  '/projects/ci_settings.png': {
    title: 'Workspace Configuration & Access Control',
    description: 'Granular role-based security settings, API token management, and audit logs.',
    tag: 'Configuration',
  },
  '/projects/ci_summary.png': {
    title: 'Executive Intelligence Summary',
    description: 'High-level telemetry dashboard summarizing organization-wide knowledge graph expansion.',
    tag: 'Executive View',
  },
  '/projects/connect-infinity.jpg': {
    title: 'Visual Identity & Spatial Theme',
    description: 'Harmonious neon gradient washes, tactile frosted glassmorphism, and dark mode tokens.',
    tag: 'Visual Craft',
  },

  // Self Service App
  '/projects/ssa_dashbaord.PNG': {
    title: 'Mobile Banking & Portfolio Dashboard',
    description: 'Real-time equity valuation, quick-action fund transfers, and live market trend alerts.',
    tag: 'Overview Screen',
  },
  '/projects/ssa_portfolio.PNG': {
    title: 'Holdings Allocation & Asset Breakdown',
    description: 'Interactive asset breakdown by sector with profit/loss metrics and day change percentages.',
    tag: 'Portfolio Screen',
  },
  '/projects/ssa_details.PNG': {
    title: 'Security Details & Performance Telemetry',
    description: 'Individual stock fundamentals, 52-week pricing corridors, and live transaction depth.',
    tag: 'Stock Detail',
  },
  '/projects/ssa_gainerloser.PNG': {
    title: 'Top Gainers & Market Movers',
    description: 'Instant ranking of daily market gainers, volume leaders, and active percentage shifts.',
    tag: 'Market Movers',
  },
  '/projects/ssa_order.PNG': {
    title: 'One-Tap Trade Order Execution',
    description: 'Gesture-driven buy/sell interface with instant margin calculation and execution confirmations.',
    tag: 'Trade Order',
  },
  '/projects/ssa_kyc.PNG': {
    title: 'Biometric KYC Document Verification',
    description: 'Step-by-step camera OCR document scanner validating citizenship papers with real-time feedback.',
    tag: 'KYC Verification',
  },
  '/projects/ssa_profile.PNG': {
    title: 'Investor Profile & Broker Credentials',
    description: 'Integrated Demat account credentials, linked bank mandates, and trading permissions.',
    tag: 'User Profile',
  },
  '/projects/ssa_settings.PNG': {
    title: 'Security, Passkeys & Preferences',
    description: 'Biometric FaceID passkeys, instant push alert thresholds, and device session monitoring.',
    tag: 'Settings Screen',
  },
  '/projects/ssa_sidebar.PNG': {
    title: 'Ergonomic Quick Navigation Drawer',
    description: 'One-thumb reachable navigation menu accessing statements, tax reports, and live support.',
    tag: 'Navigation Drawer',
  },
  '/projects/ssa_theme.PNG': {
    title: 'Dynamic Theme Personalization',
    description: 'Dynamic dark/light mode toggle with bespoke high-contrast accessibility colorways.',
    tag: 'Theme Modes',
  },
  '/projects/ssa_login.PNG': {
    title: 'Biometric FaceID Passkey Authentication',
    description: 'Hardware-level biometric unlock with fallback PIN for sub-second secure entry.',
    tag: 'Auth & Login',
  },

  // Nepal Stock House
  '/projects/nsh_1.png': {
    title: 'Institutional Trading Terminal',
    description: 'Multi-pane trading desktop with live market tickers, watchlists, and sector breakdown.',
    tag: 'Terminal Hero',
  },
  '/projects/nsh_2.png': {
    title: 'Market Depth & Bid/Ask Queues',
    description: 'Live order book depth showing buyer/seller concentration with real-time volume bars.',
    tag: 'Order Depth',
  },
  '/projects/nsh_3.png': {
    title: 'Stock Screener & Fundamental Metrics',
    description: 'Real-time equity screener sorting stocks by P/E, dividend yield, and trading volume.',
    tag: 'Stock Screener',
  },
  '/projects/nsh_4.png': {
    title: 'Portfolio Risk & Margin Telemetry',
    description: 'Institutional risk calculations with automated margin call safeguards and ledger records.',
    tag: 'Risk Monitor',
  },
  '/projects/nsh_5.png': {
    title: 'Technical Charting & Indicators',
    description: 'Interactive candlestick charts with MACD, RSI, and custom drawing overlays.',
    tag: 'Technical Charts',
  },
  '/projects/nsh_6.png': {
    title: 'Corporate Actions & Regulatory Feeds',
    description: 'Real-time corporate disclosures, board announcements, and dividend payment notices.',
    tag: 'Disclosures',
  },
  '/projects/nsh_7.png': {
    title: 'Broker Clearance & Settlement Ledger',
    description: 'Automated end-of-day trade clearance, client transaction logs, and tax computation.',
    tag: 'Clearing Ledger',
  },

  // Digital KYC
  '/projects/naasakyc_general.png': {
    title: 'Step 01 · Regulatory Requirements',
    description: 'Guided checklist informing users of mandatory identification documents before starting.',
    tag: 'Step 1: Guide',
  },
  '/projects/naasakyc_personal.png': {
    title: 'Step 02 · Identity & OCR Proofs',
    description: 'Automated document extraction and liveness detection verifying proof of identity.',
    tag: 'Step 2: Identity',
  },
  '/projects/naasakyc_family.png': {
    title: 'Step 03 · Family Due Diligence',
    description: 'Structured family declarations conforming to anti-money laundering regulations.',
    tag: 'Step 3: Family',
  },
  '/projects/naasakyc_nominee.png': {
    title: 'Step 04 · Nominee Allocation & e-Sign',
    description: 'Beneficiary percentage allocation and legal e-signature submission.',
    tag: 'Step 4: Signature',
  },
  '/projects/kyc.jpg': {
    title: 'RegTech Identity Verification System',
    description: 'Clean high-trust UI architecture built for multi-stage government compliance.',
    tag: 'RegTech Brand',
  },

  // FlyHigh
  '/projects/flyhigh_1.png': {
    title: 'Flight Discovery & Fare Radar',
    description: 'Fluid gesture-driven search displaying lowest fares and nonstop route options.',
    tag: 'Flight Search',
  },
  '/projects/flyhigh_2.png': {
    title: 'Tactile 3D Cabin Seat Selector',
    description: 'Interactive spatial seat map visualizing legroom, emergency exits, and window placement.',
    tag: 'Seat Selection',
  },
  '/projects/flyhigh_3.png': {
    title: 'Trip Itinerary & Travel Add-ons',
    description: 'Transparent baggage selection, in-flight meal options, and clear fare summary.',
    tag: 'Trip Add-ons',
  },
  '/projects/flyhigh_4.png': {
    title: 'Biometric Checkout & Boarding Pass',
    description: 'One-tap biometric checkout generating dynamic Apple & Google Wallet boarding passes.',
    tag: 'Mobile Boarding',
  },

  // LoyalEdge
  '/projects/loyaledge_1.png': {
    title: 'Merchant Campaign Control Center',
    description: 'Real-time dashboard tracking repeat purchase frequency and customer redemption rates.',
    tag: 'Campaign Hub',
  },
  '/projects/loyaledge_2.png': {
    title: 'Tiered Reward Rule Builder',
    description: 'Drag-and-drop rule engine configuring milestone rewards, point multipliers, and VIP perks.',
    tag: 'Rule Builder',
  },
  '/projects/loyaledge_3.png': {
    title: 'Digital Wallet Pass Simulator',
    description: 'Real-time visual preview of Apple and Google Wallet passes customized with brand tokens.',
    tag: 'Pass Simulator',
  },
  '/projects/loyaledge_4.png': {
    title: 'Customer Lifetime Value Analytics',
    description: 'Predictive cohort analysis measuring merchant return on investment across multiple stores.',
    tag: 'LTV Analytics',
  },
  '/projects/loyaledge.jpg': {
    title: 'Retail Commerce & Pass Ecosystem',
    description: 'Modern consumer brand architecture optimized for mobile wallets and retention.',
    tag: 'Commerce Brand',
  },

  // Naasa Website
  '/projects/naasawebsite_1.png': {
    title: 'Corporate Institutional Portal',
    description: 'Modern financial homepage presenting market indices, corporate background, and accounts.',
    tag: 'Portal Flagship',
  },
  '/projects/naasawebsite_2.png': {
    title: 'Trading & Brokerage Services Hub',
    description: 'Structured comparison of institutional trading accounts, margin facilities, and custody.',
    tag: 'Services Hub',
  },
  '/projects/naasawebsite_3.png': {
    title: 'Equity Research & Regulatory Disclosures',
    description: 'Downloadable equity research reports, market commentaries, and regulatory notices.',
    tag: 'Research Portal',
  },

  // Broker CRM
  '/projects/crm_1.png': {
    title: 'Broker Operations & Lead Pipeline',
    description: 'Centralized broker dashboard tracking client onboarding stages and active inquiries.',
    tag: 'CRM Dashboard',
  },
  '/projects/crm_2.png': {
    title: 'Client Due Diligence & Approval Pipeline',
    description: 'Visual workflow tracking pending KYC approvals and high-net-worth client accounts.',
    tag: 'Due Diligence',
  },
  '/projects/crm_3.png': {
    title: 'Trading Activity & Relationship Logs',
    description: 'Integrated client transaction timelines, call notes, and portfolio health indicators.',
    tag: 'Client History',
  },
  '/projects/crm_4.png': {
    title: 'Compliance Audit & Commission Ledger',
    description: 'Automated compliance flag reviews and broker commission settlement records.',
    tag: 'Compliance Audit',
  },

  // Sagar Distillery
  '/projects/sagar_distillery_home.png': {
    title: 'Artisanal Distillery Flagship Hero',
    description: 'Atmospheric digital showcase featuring cinematic typography and heritage grain textures.',
    tag: 'Flagship Hero',
  },
  '/projects/sagar-journey.png': {
    title: 'Craft Distillation Provenance Timeline',
    description: 'Interactive visual storytelling highlighting botanical sourcing and barrel aging.',
    tag: 'Craft Journey',
  },
  '/projects/sagar-portfolio.png': {
    title: 'Limited Edition Spirit Showcase',
    description: 'Tactile product cards displaying tasting notes, proof, and custom bottle personalization.',
    tag: 'Product Portfolio',
  },

  // Aadi
  '/projects/aadi-design.png': {
    title: 'Editorial Studio Homepage',
    description: 'Refined editorial layout emphasizing large-scale typography and spatial hierarchy.',
    tag: 'Editorial Hero',
  },
  '/projects/aadi-how-works.png': {
    title: 'Interactive Design Trajectory',
    description: 'Step-by-step breakdown of creative philosophy, wireframing, and design delivery.',
    tag: 'Methodology Flow',
  },
  '/projects/aadi-footer.png': {
    title: 'Minimalist Footer & Contact Drawer',
    description: 'Clean typographic footer with subtle micro-interactions and social link system.',
    tag: 'Footer Experience',
  },

  // Agrilink
  '/projects/agrilink_1.png': {
    title: 'IoT Telemetry & Geospatial Field Map',
    description: 'Centralized sensor cluster telemetry, automated irrigation alerts, and soil moisture health.',
    tag: 'Field Telemetry',
  },
  '/projects/agrilink_2.png': {
    title: 'Crop Health Heatmap & Frost Warnings',
    description: 'Real-time telemetry tracking crop temperature thresholds and satellite vegetation indices.',
    tag: 'Crop Analytics',
  },
  '/projects/agrilink_3.png': {
    title: 'Hardware Gateway & Device Fleet Sync',
    description: 'Remote IoT hardware gateway status monitoring with offline synchronization protocols.',
    tag: 'Hardware Fleet',
  },
};

export default function ProjectDescriptionGallery({ project }: ProjectDescriptionGalleryProps) {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const isMobile = project.mockupType === 'mobile';

  // Get all unique images
  const allImages = React.useMemo(() => {
    const list = project.galleryImages && project.galleryImages.length > 0 
      ? [...project.galleryImages] 
      : [project.coverImage];
    if (!list.includes(project.coverImage)) {
      list.unshift(project.coverImage);
    }
    return Array.from(new Set(list));
  }, [project]);

  // Helper to get metadata for any image
  const getDetails = (url: string, index: number) => {
    if (SCREENSHOT_DETAILS[url]) {
      return SCREENSHOT_DETAILS[url];
    }
    const filename = url.split('/').pop()?.split('.')[0] || `Screen ${index + 1}`;
    const clean = filename
      .replace(/^(naasaxweb_|ssa_|ci_|ciproductpage_|agrilink_|crm_|nsh_|naasakyc_|sagar_|aadi-|loyaledge_|flyhigh_)/i, '')
      .replace(/[_-]/g, ' ');
    const title = clean.charAt(0).toUpperCase() + clean.slice(1);
    return {
      title: title || `Interface Screen 0${index + 1}`,
      description: `High-resolution interface view showcasing key interaction patterns and design system components for ${project.title}.`,
      tag: `Screen 0${index + 1}`,
    };
  };

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 pt-6">
      
      {/* 1. Problem, Solution & Impact Narrative Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Problem Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#0D1117] border border-white/10 flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-2xl pointer-events-none rounded-full" />
          <div className="flex items-center gap-2.5 text-xs font-mono text-rose-400 uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span>The Challenge // Friction</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            The User &amp; Business Bottleneck
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {project.problem}
          </p>
        </div>

        {/* Solution Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#0D1117] border border-white/10 flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-2xl pointer-events-none rounded-full" />
          <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>The Architectural Solution</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Human Ergonomics &amp; Frontend Craft
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {project.solution}
          </p>
        </div>
      </div>

      {/* 2. Key Metrics Strip */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Empirical Performance &amp; Business Metrics
            </span>
            <span className="text-xs font-mono text-pink-300">
              Verified Production Telemetry
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col"
              >
                <span
                  className="text-3xl sm:text-4xl font-extrabold font-display"
                  style={{ color: project.accentColor }}
                >
                  {metric.value}
                </span>
                <span className="text-xs font-mono text-slate-400 mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Core Capabilities List */}
      {project.features && project.features.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-pink-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Core Capabilities &amp; UX Innovations
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-snug"
              >
                <CheckCircle2 className="w-4 h-4 text-pink-300 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. DEDICATED SCREENSHOTS & MOCKUPS DESCRIPTION GALLERY */}
      <div className="flex flex-col gap-8 pt-4">
        {/* Section Header */}
        <div className="flex flex-col gap-2 pb-4 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-pink-300 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span>Complete Interface Screenshots ({allImages.length})</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            Screen-by-Screen Architecture &amp; Mockups
          </h2>
          <p className="text-sm text-slate-400 font-normal max-w-2xl">
            Detailed walkthrough of all shipped product screens, mobile user flows, and design system components for {project.title}. Click any screen to view in full resolution.
          </p>
        </div>

        {/* Screenshot Grid Showcase */}
        {isMobile ? (
          /* Mobile Screens Showcase (Vertical Phone Mockup Presentation) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allImages.map((img, idx) => {
              const details = getDetails(img, idx);
              return (
                <div
                  key={idx}
                  className="group flex flex-col rounded-3xl bg-[#0D1117] border border-white/10 hover:border-pink-300/40 p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl overflow-hidden"
                >
                  {/* Phone Device Frame */}
                  <div
                    onClick={() => setFullscreenImage(img)}
                    className="relative w-full aspect-[9/18.5] rounded-[38px] p-2.5 bg-[#12161F] border-[3px] border-white/15 overflow-hidden shadow-inner cursor-zoom-in group/phone mb-4"
                  >
                    {/* Dynamic Island pill */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2 pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    </div>

                    <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={details.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/phone:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 shadow-xl">
                          <Eye className="w-3.5 h-3.5 text-pink-300" />
                          <span>Inspect Full Screen</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metadata and Description */}
                  <div className="flex flex-col gap-1.5 mt-auto">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-pink-300 font-semibold uppercase">
                        {details.tag}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        Screen 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors font-display mt-1">
                      {details.title}
                    </h4>

                    <p className="text-xs text-slate-400 font-normal leading-relaxed">
                      {details.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Desktop Screens Showcase (High-Density Browser Frame Cards) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allImages.map((img, idx) => {
              const details = getDetails(img, idx);
              return (
                <div
                  key={idx}
                  className="group flex flex-col rounded-3xl bg-[#0D1117] border border-white/10 hover:border-pink-300/40 p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl overflow-hidden"
                >
                  {/* Browser Shell Frame */}
                  <div
                    onClick={() => setFullscreenImage(img)}
                    className="relative w-full rounded-2xl bg-[#0A0D13] border border-white/10 overflow-hidden shadow-inner cursor-zoom-in group/browser mb-4"
                  >
                    {/* Top Bar */}
                    <div className="h-8 px-3 bg-[#0A0D13] border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {project.id}.dolma.design
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        0{idx + 1}/{allImages.length}
                      </span>
                    </div>

                    {/* Screenshot Viewport */}
                    <div className="relative aspect-[16/10] w-full bg-black/60 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={details.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/browser:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/browser:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 shadow-xl">
                          <Eye className="w-3.5 h-3.5 text-pink-300" />
                          <span>Inspect Full Screen</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metadata and Description */}
                  <div className="flex flex-col gap-1.5 mt-auto">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-pink-300 font-semibold uppercase tracking-wider">
                        {details.tag}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        Screen 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-pink-300 transition-colors font-display mt-1">
                      {details.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                      {details.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Fullscreen"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fullscreenImage}
              alt="Fullscreen Screenshot"
              className="max-h-[85vh] max-w-full object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <p className="text-xs font-mono text-slate-400 mt-4">
              Click anywhere or press Esc to close fullscreen inspection
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
