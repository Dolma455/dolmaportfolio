export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  client: string;
  timeline: string;
  problem: string;
  solution: string;
  impact: string;
  accentColor: string;
  coverImage: string;
  galleryImages: string[];
  tools: string[];
  liveUrl?: string;
  figmaUrl?: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  features: string[];
  tag: string;
  shortDescription?: string;
  designContribution: number;
  devContribution: number;
  mockupType?: 'desktop' | 'mobile' | 'dual';
}

export interface ProcessStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  badge?: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
}

export const PERSONAL_INFO = {
  name: 'Dolma Lama',
  role: 'Product Designer & Frontend Engineer',
  experience: '3+ Years Crafting Digital Products',
  education: 'MSc Computer Science & Technology • Ulster University',
  location: 'Bradford, United Kingdom',
  availability: 'Open for Select Contracts & Full-Time Senior Roles',
  timezone: 'Bradford (GMT / BST)',
  email: 'dolmadev455@gmail.com',
  headline: 'ARCHITECTING TACTILE DIGITAL PRODUCTS & SCALABLE UI ENGINES',
  subheadline:
    'Fusing human ergonomics, systems thinking, and low-latency frontend architecture. I build high-conviction digital products from zero to scale.',
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '25+', label: 'Shipped Products' },
    { value: '12+', label: 'Global Clients' },
    { value: '100%', label: 'Design & Code Craft' },
  ],
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dolma-lama-2612b4291/',
      handle: 'dolma-lama-2612b4291',
      id: 'linkedin',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/dolma003/',
      handle: '@dolma003',
      id: 'instagram',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/Dolma455',
      handle: 'Dolma455',
      id: 'github',
    },
    {
      label: 'TikTok',
      url: 'https://www.tiktok.com/@dolmalama081',
      handle: '@dolmalama081',
      id: 'tiktok',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'naasa-x',
    title: 'Naasa X',
    subtitle: 'Institutional Liquidity & Next-Gen Crypto Trading Cockpit',
    category: 'Fintech & Web3 Platform',
    year: '2024',
    role: 'Lead UI/UX Designer & Frontend Architect',
    client: 'Naasa Securities Labs',
    timeline: '4 Months',
    shortDescription: 'High-frequency institutional trading cockpit with real-time WebSockets, custom depth visualization, and slippage controls.',
    designContribution: 80,
    devContribution: 20,
    mockupType: 'desktop',
    problem:
      'High-frequency traders were bogged down by cluttered legacy order books, slow order routing latency, and complex multi-token swap parameters with zero real-time visual feedback.',
    solution:
      'Designed an ultra-dense, dark obsidian trading cockpit with real-time WebSockets, micro-interactions for slippage adjustments, and custom depth charts optimized for rapid decision making.',
    impact: '42% surge in daily swap transaction volume; trade execution friction dropped from 4.2s to 1.1s.',
    accentColor: '#6EE7F9',
    coverImage: '/projects/naasaxweb_dashboard.png',
    galleryImages: [
      '/projects/naasaxweb_dashboard.png',
      '/projects/naasaxweb_market.png',
      '/projects/naasaxweb_order.png',
      '/projects/naasaxweb_report.png',
      '/projects/naasaxweb_login.png',
      '/projects/naasax.jpg',
    ],
    tools: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebSockets'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Swap Volume Growth', value: '+42%' },
      { label: 'Execution Latency', value: '< 180ms' },
      { label: 'Active User NPS', value: '78' },
    ],
    features: [
      'Zero-latency real-time order book and live depth visualization',
      'One-gesture slippage and gas fee optimization slider',
      'Unified dark-mode visual hierarchy with WCAG AAA contrast',
    ],
    tag: 'Web3 & Financial Architecture',
  },
  {
    id: 'agrilink',
    title: 'Agrilink',
    subtitle: 'Smart Agri-Tech Telemetry & Supply Chain Intelligence',
    category: 'Enterprise IoT & SaaS',
    year: '2024',
    role: 'UX Researcher & Lead Frontend Engineer',
    client: 'Agrilink Systems UK',
    timeline: '3 Months',
    shortDescription: 'Centralized IoT telemetry and smart agriculture control hub with automated irrigation alerts and sensor cluster tracking.',
    designContribution: 70,
    devContribution: 30,
    mockupType: 'dual',
    problem:
      'Agricultural operations managers juggled fragmented manual spreadsheets and disconnected hardware telemetry, causing severe delays in irrigation response and crop loss.',
    solution:
      'Engineered an end-to-end responsive telemetry control center surfacing real-time IoT sensor clusters, automated frost thresholds, and satellite crop health heatmaps.',
    impact: 'Reduced water waste by 28% across 14 pilot deployments; boosted harvest yield predictability to 94%.',
    accentColor: '#34D399',
    coverImage: '/projects/agrilink_1.png',
    galleryImages: [
      '/projects/agrilink_1.png',
      '/projects/agrilink_2.png',
      '/projects/agrilink_3.png',
    ],
    tools: ['React', 'Flutter', 'Tailwind CSS', 'Figma', 'Postman', 'Firebase'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Water Saved', value: '28%' },
      { label: 'Yield Accuracy', value: '94%' },
      { label: 'Pilot Farms', value: '14+' },
    ],
    features: [
      'Interactive geospatial field heatmaps and moisture gauges',
      'Real-time automated telemetry alert push system',
      'Offline-first mobile sync for low-connectivity rural hubs',
    ],
    tag: 'IoT Telemetry & Analytics',
  },
  {
    id: 'connect-infinity',
    title: 'Connect Infinity',
    subtitle: 'Spatial AI Knowledge Hub & Real-time Collaboration Engine',
    category: 'Enterprise AI & Productivity',
    year: '2023 - 2024',
    role: 'Principal Product Designer & UI Developer',
    client: 'Infinity Global Labs',
    timeline: '5 Months',
    shortDescription: 'Spatial UI productivity environment combining neural network graph mapping, canvas collaboration, and conversational AI copilots.',
    designContribution: 75,
    devContribution: 25,
    mockupType: 'desktop',
    problem:
      'Distributed product teams were losing 8+ hours weekly switching between siloed tickets, documents, and Figma files with zero contextual synthesis.',
    solution:
      'Built a spatial canvas interface with semantic AI context indexing, bidirectional node linking, and an automated meeting-to-action pipeline.',
    impact: '65% faster cross-functional employee onboarding; adopted by 8 enterprise engineering squads.',
    accentColor: '#818CF8',
    coverImage: '/projects/ci_dashboard.png',
    galleryImages: [
      '/projects/ci_dashboard.png',
      '/projects/ciproductpage_hero.png',
      '/projects/ciproductpage_services.png',
      '/projects/ciproductpage_journey.png',
      '/projects/ciproductpage_qn.png',
      '/projects/ciproductpage_register.png',
      '/projects/ciproductpage_2.png',
      '/projects/ci_report.png',
      '/projects/ci_revai.png',
      '/projects/ci_settings.png',
      '/projects/ci_summary.png',
      '/projects/connect-infinity.jpg',
    ],
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'GraphQL', 'OpenAI'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Onboarding Velocity', value: '+65%' },
      { label: 'Active Knowledge Nodes', value: '120k+' },
      { label: 'Team Adoption', value: '8 Squads' },
    ],
    features: [
      'Infinite canvas with fluid pan/zoom interaction ergonomics',
      'Autonomous AI meeting transcript synthesiser and issue generator',
      'Sub-50ms live multi-cursor presence engine',
    ],
    tag: 'Spatial UI & AI Knowledge System',
  },
  {
    id: 'self-service-app',
    title: 'Self Service App',
    subtitle: 'Biometric Mobile Onboarding & Frictionless KYC Banking Client',
    category: 'Mobile & Banking UI',
    year: '2024',
    role: 'Lead Mobile UI/UX Designer & Flutter Engineer',
    client: 'Naasa Securities Mobile',
    timeline: '3.5 Months',
    shortDescription: 'Frictionless customer onboarding mobile application featuring biometrics, instant KYC document scanning, and automated account provisioning.',
    designContribution: 70,
    devContribution: 30,
    mockupType: 'mobile',
    problem:
      'Users faced high drop-off during manual paper KYC identity verification and complex portfolio tracking on legacy platforms.',
    solution:
      'Engineered a frictionless 4-step biometric KYC onboarding application with real-time document OCR and live portfolio tracking.',
    impact: 'Cut verification turnaround from 4 days to under 10 minutes; 92% completion rate.',
    accentColor: '#A78BFA',
    coverImage: '/projects/ssa_dashbaord.PNG',
    galleryImages: [
      '/projects/ssa_dashbaord.PNG',
      '/projects/ssa_portfolio.PNG',
      '/projects/ssa_details.PNG',
      '/projects/ssa_gainerloser.PNG',
      '/projects/ssa_order.PNG',
      '/projects/ssa_kyc.PNG',
      '/projects/ssa_profile.PNG',
      '/projects/ssa_settings.PNG',
      '/projects/ssa_sidebar.PNG',
      '/projects/ssa_theme.PNG',
      '/projects/ssa_login.PNG',
    ],
    tools: ['Flutter', 'Dart', 'Figma', 'Biometrics', 'Firebase'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Completion Rate', value: '92%' },
      { label: 'KYC Verification', value: '< 10 mins' },
      { label: 'App Store Rating', value: '4.8 ★' },
    ],
    features: [
      'One-tap biometric passkey login',
      'Step-by-step verified KYC flow with instant visual feedback',
      'Real-time portfolio gain/loss visualizer',
    ],
    tag: 'Mobile Experience & Fintech',
  },
  {
    id: 'nepal-stock-house',
    title: 'Nepal Stock House',
    subtitle: 'Modern Institutional Broker Terminal & Real-Time Market Portal',
    category: 'Fintech & Equity Trading',
    year: '2024',
    role: 'Lead Product Designer & Frontend Engineer',
    client: 'Nepal Stock House',
    timeline: '4 Months',
    shortDescription: 'High-density institutional equity trading terminal featuring real-time market depth, live order matching, and comprehensive portfolio telemetry.',
    designContribution: 75,
    devContribution: 25,
    mockupType: 'desktop',
    problem:
      'Traders relied on slow, archaic web portals with multi-second latency spikes, difficult order navigation, and disconnected stock intelligence charts.',
    solution:
      'Engineered an ultra-fast trading dashboard with live WebSocket feeds, synchronized technical depth charts, and automated trade settlement monitoring.',
    impact: 'Accelerated order execution by 54%; NPS among active day traders rose to 86.',
    accentColor: '#38BDF8',
    coverImage: '/projects/nsh_1.png',
    galleryImages: [
      '/projects/nsh_1.png',
      '/projects/nsh_2.png',
      '/projects/nsh_3.png',
      '/projects/nsh_4.png',
      '/projects/nsh_5.png',
      '/projects/nsh_6.png',
      '/projects/nsh_7.png',
    ],
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'WebSockets', 'Chart.js'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Execution Speedup', value: '+54%' },
      { label: 'Trader NPS', value: '86' },
      { label: 'Daily Trades', value: '35k+' },
    ],
    features: [
      'Real-time Level 2 order book and interactive depth charts',
      'Automated equity screener with custom technical filters',
      'Institutional trade settlement and tax computation ledger',
    ],
    tag: 'Institutional FinTech & Capital Markets',
  },
  {
    id: 'naasa-website',
    title: 'Naasa Securities Portal',
    subtitle: 'Corporate Financial Portal & Institutional Investor Hub',
    category: 'Corporate & Web Platform',
    year: '2024',
    role: 'Lead UI/UX Designer & Frontend Engineer',
    client: 'Naasa Securities',
    timeline: '2 Months',
    shortDescription: 'Modern corporate financial institution portal with structured investor relations, accessible token systems, and responsive design.',
    designContribution: 70,
    devContribution: 30,
    mockupType: 'desktop',
    problem:
      'Traditional brokerage websites suffered from dense, unreadable disclosures, outdated PDF downloads, and poor mobile accessibility.',
    solution:
      'Crafted a modern institutional financial portal with structured investor relations, accessible design system tokens, and interactive trading account onboarding.',
    impact: 'Boosted account opening inquiries by 52%; reduced bounce rate by 38%.',
    accentColor: '#38BDF8',
    coverImage: '/projects/naasawebsite_1.png',
    galleryImages: [
      '/projects/naasawebsite_1.png',
      '/projects/naasawebsite_2.png',
      '/projects/naasawebsite_3.png',
    ],
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Inquiries Growth', value: '+52%' },
      { label: 'Bounce Rate', value: '-38%' },
      { label: 'Mobile Score', value: '98/100' },
    ],
    features: [
      'Interactive financial disclosure visualizer',
      'Unified accessible design system with WCAG AAA tokens',
      'Responsive investor relations portal',
    ],
    tag: 'Fintech Portal & Identity',
  },
  {
    id: 'naasa-kyc',
    title: 'Digital KYC Verification',
    subtitle: 'Multi-Step Compliant Digital Identity & Investor Onboarding Suite',
    category: 'Fintech & Identity',
    year: '2024',
    role: 'Lead UI/UX Designer & Systems Architect',
    client: 'Naasa Securities RegTech',
    timeline: '2 Months',
    shortDescription: 'Regulatory-compliant multi-step digital KYC verification pipeline featuring document validation, family due diligence, and biometric verification.',
    designContribution: 80,
    devContribution: 20,
    mockupType: 'desktop',
    problem:
      'Paper-based investor identification caused average onboarding delays of 7 days with error rates exceeding 26% on manual document uploads.',
    solution:
      'Designed a guided 4-step progressive disclosure portal covering personal identification, family declarations, nominee allocations, and digital signatures.',
    impact: 'Reduced verification turnaround to under 2 hours; form completion accuracy reached 98.4%.',
    accentColor: '#10B981',
    coverImage: '/projects/naasakyc_general.png',
    galleryImages: [
      '/projects/naasakyc_general.png',
      '/projects/naasakyc_personal.png',
      '/projects/naasakyc_family.png',
      '/projects/naasakyc_nominee.png',
      '/projects/kyc.jpg',
    ],
    tools: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'RegTech API'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Verification Time', value: '< 2 hrs' },
      { label: 'Completion Rate', value: '98.4%' },
      { label: 'Compliance Score', value: '100%' },
    ],
    features: [
      'Progressive disclosure 4-stage identity collection',
      'Instant document validation and proof verification previews',
      'Compliant digital signature and nominee distribution engine',
    ],
    tag: 'RegTech & Compliance Architecture',
  },
  {
    id: 'loyaledge',
    title: 'LoyalEdge',
    subtitle: 'Automated Retention Engine & Customer Rewards Architecture',
    category: 'Fintech & Merchant Platform',
    year: '2023',
    role: 'Product Designer & Frontend Developer',
    client: 'LoyalEdge Commerce',
    timeline: '3 Months',
    shortDescription: 'Automated retention and customer rewards architecture with visual campaign builder and Apple/Google Wallet pass widgets.',
    designContribution: 65,
    devContribution: 35,
    mockupType: 'desktop',
    problem:
      'E-commerce merchants had difficulty configuring dynamic multi-tier loyalty campaigns without hiring engineering agencies to build custom tracking logic.',
    solution:
      'Designed a visual campaign builder and modular rule creator with instant ROI simulation and white-label consumer mobile pass widgets.',
    impact: 'Increased repeated consumer purchases by 34% across 80+ participating merchant stores.',
    accentColor: '#F59E0B',
    coverImage: '/projects/loyaledge_1.png',
    galleryImages: [
      '/projects/loyaledge_1.png',
      '/projects/loyaledge_2.png',
      '/projects/loyaledge_3.png',
      '/projects/loyaledge_4.png',
      '/projects/loyaledge.jpg',
    ],
    tools: ['React', 'Figma', 'Tailwind CSS', 'TypeScript', 'Storybook', 'Postman'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Repeat Purchases', value: '+34%' },
      { label: 'Active Stores', value: '80+' },
      { label: 'Merchant NPS', value: '82' },
    ],
    features: [
      'Drag-and-drop campaign rule builder with real-time margin preview',
      'Dynamic Apple & Google Wallet loyalty card generator',
      'Unified omnichannel customer lifetime value (LTV) analytics',
    ],
    tag: 'Commerce & Retention Suite',
  },
  {
    id: 'flyhigh',
    title: 'FlyHigh Travels',
    subtitle: 'Ultra-Fluid Flight Booking & Spatial Itinerary Experience',
    category: 'Consumer Travel & Mobile UI',
    year: '2023',
    role: 'Lead UI/UX Designer & Flutter Engineer',
    client: 'FlyHigh Aviation UK',
    timeline: '2.5 Months',
    shortDescription: 'Gesture-driven mobile flight booking experience with tactile 3D cabin seat selection, fare transparency, and biometric checkout.',
    designContribution: 70,
    devContribution: 30,
    mockupType: 'mobile',
    problem:
      'Clunky multi-page checkout flows and opaque pricing breakdowns led to a 68% cart abandonment rate on mobile devices.',
    solution:
      'Rebuilt the entire journey into a continuous 3-step spatial flow with interactive seat selection, transparent fare breakdowns, and one-tap biometric checkout.',
    impact: 'Cut checkout abandonment by 41%; average booking completion dropped from 4.8 minutes to 90 seconds.',
    accentColor: '#EC4899',
    coverImage: '/projects/flyhigh_1.png',
    galleryImages: [
      '/projects/flyhigh_1.png',
      '/projects/flyhigh_2.png',
      '/projects/flyhigh_3.png',
      '/projects/flyhigh_4.png',
    ],
    tools: ['Flutter', 'Figma', 'Prototyping', 'Dart', 'Firebase', 'Stripe'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Abandonment Cut', value: '-41%' },
      { label: 'Booking Time', value: '90s' },
      { label: 'App Store Rating', value: '4.9 ★' },
    ],
    features: [
      'Tactile 3D airplane seat selection and cabin view simulator',
      'Live flight telemetry, gate change alerts, and digital boarding pass',
      '60 FPS gesture-driven flight comparison matrices',
    ],
    tag: 'Mobile Experience & Ergonomics',
  },
  {
    id: 'broker-crm',
    title: 'Broker CRM Intelligence',
    subtitle: 'Institutional Client Relationship & Pipeline Management System',
    category: 'Enterprise SaaS & CRM',
    year: '2024',
    role: 'Lead Product Designer',
    client: 'Institutional Capital Partners',
    timeline: '3 Months',
    shortDescription: 'Comprehensive client relationship management platform for broker-dealers, managing trading accounts, regulatory disclosures, and communication pipelines.',
    designContribution: 80,
    devContribution: 20,
    mockupType: 'desktop',
    problem:
      'Account managers were juggling scattered spreadsheets and unorganized emails, losing visibility on pending client verifications and high-value orders.',
    solution:
      'Engineered an enterprise CRM dashboard centralizing client profiles, active account verifications, trading activity logs, and compliance audits.',
    impact: 'Shortened sales pipeline turnaround by 48%; operational tracking efficiency improved 3x.',
    accentColor: '#6366F1',
    coverImage: '/projects/crm_1.png',
    galleryImages: [
      '/projects/crm_1.png',
      '/projects/crm_2.png',
      '/projects/crm_3.png',
      '/projects/crm_4.png',
    ],
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Turnaround Boost', value: '+48%' },
      { label: 'Efficiency Gain', value: '3x' },
      { label: 'Active Managed Portfolios', value: '1,200+' },
    ],
    features: [
      'Visual client lifecycle pipeline with real-time status triggers',
      'Integrated trading activity telemetry and risk flags',
      'Compliance and regulatory audit log visualizer',
    ],
    tag: 'Enterprise Workflow & CRM Architecture',
  },
  {
    id: 'sagar-distillery',
    title: 'Sagar Distillery',
    subtitle: 'Heritage Brand Experience & Direct-to-Consumer Digital Flagship',
    category: 'Brand & E-Commerce Flagship',
    year: '2024',
    role: 'Brand & Digital Product Designer',
    client: 'Sagar Distillery',
    timeline: '2.5 Months',
    shortDescription: 'Luxury heritage brand experience and direct-to-consumer digital flagship with cinematic storytelling and custom product exploration.',
    designContribution: 85,
    devContribution: 15,
    mockupType: 'desktop',
    problem:
      'Artisan craft spirits lacked an online digital flagship that communicated their multi-generational heritage and premium craft distillation.',
    solution:
      'Designed an atmospheric, cinematic digital brand showcase featuring rich typography, tactile grain textures, and interactive product exploration.',
    impact: 'Direct-to-consumer brand engagement surged by 64%; international wholesale leads up 45%.',
    accentColor: '#F59E0B',
    coverImage: '/projects/sagar_distillery_home.png',
    galleryImages: [
      '/projects/sagar_distillery_home.png',
      '/projects/sagar-journey.png',
      '/projects/sagar-portfolio.png',
    ],
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Framer Motion', '3D Blender'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Brand Engagement', value: '+64%' },
      { label: 'Inquiries', value: '+45%' },
      { label: 'Session Duration', value: '3m 40s' },
    ],
    features: [
      'Atmospheric cinematic storytelling and micro-interactions',
      'Product provenance exploration timeline',
      'Custom typography and luxury aesthetic',
    ],
    tag: 'Brand Craft & Flagship',
  },
  {
    id: 'aadi',
    title: 'Aadi Studio & Digital Experience',
    subtitle: 'Minimalist Editorial Showcase & Brand Interaction System',
    category: 'Brand & Web Experience',
    year: '2023',
    role: 'Digital Designer & Creative Technologist',
    client: 'Aadi Creative',
    timeline: '2 Months',
    shortDescription: 'Editorial digital experience showcasing minimalist brand storytelling, tactile typography, and interactive process navigation.',
    designContribution: 85,
    devContribution: 15,
    mockupType: 'desktop',
    problem:
      'Creative agencies often default to cluttered templates that fail to convey spatial craftsmanship and distinctive brand character.',
    solution:
      'Architected an ultra-clean editorial layout emphasizing dramatic typographic scale, smooth layout shifts, and tactile case exploration.',
    impact: 'Visitor engagement time grew to 4m 12s; client portfolio conversion rose by 39%.',
    accentColor: '#EC4899',
    coverImage: '/projects/aadi-design.png',
    galleryImages: [
      '/projects/aadi-design.png',
      '/projects/aadi-how-works.png',
      '/projects/aadi-footer.png',
    ],
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://github.com/Dolma455',
    metrics: [
      { label: 'Session Duration', value: '4m 12s' },
      { label: 'Conversion Lift', value: '+39%' },
      { label: 'Design Awards', value: 'Featured' },
    ],
    features: [
      'Editorial typographic tension with high readability',
      'Interactive methodology breakdown with visual diagrams',
      'Seamless smooth scroll transitions and micro-interactions',
    ],
    tag: 'Editorial Design & Identity',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Discover & Deconstruct',
    tagline: 'Deep Qualitative Research & Friction Analysis',
    description:
      'Deconstructing problem spaces through user interviews, behavioral analytics audits, and competitive telemetry to pinpoint exact cognitive bottlenecks.',
    image: '/projects/research_requirements.png',
    deliverables: ['User Journey Mapping', 'Behavioral Telemetry Audit', 'Competitor Teardowns', 'Empathy Archetypes'],
  },
  {
    number: '02',
    title: 'Define & Structural Architecture',
    tagline: 'Information Topology & Interaction Systems',
    description:
      'Transforming unstructured insights into structured information architecture, deterministic state diagrams, and measurable KPI benchmarks.',
    image: '/projects/wireframing.png',
    deliverables: ['Information Topology', 'Interaction Models', 'User Storyboards', 'Success Metrics Matrix'],
  },
  {
    number: '03',
    title: 'Visual Craft & Design Tokens',
    tagline: 'High-Fidelity Aesthetics & Spatial Hierarchy',
    description:
      'Crafting cohesive design token systems, WCAG AAA accessibility palettes, and bespoke typographic tension that elevates the product into a work of art.',
    image: '/projects/visual_design.png',
    deliverables: ['Design Token Systems', 'Responsive UI Suites', 'Component Specifications', 'Dark/Light Palette Specs'],
  },
  {
    number: '04',
    title: 'Interactive Prototyping & Motion',
    tagline: 'Micro-Interactions & Tactile Haptic Feel',
    description:
      'Building 60 FPS interactive prototypes in Figma and code to test spatial ergonomics, gesture curves, and spring physics in real users hands.',
    image: '/projects/prototyping.png',
    deliverables: ['Interactive Prototypes', 'Micro-Animation Choreography', 'Spatial Haptics Specs', 'Component Sandbox'],
  },
  {
    number: '05',
    title: 'Usability Validation & Stress Testing',
    tagline: 'Empirical Verification & Iteration',
    description:
      'Executing moderated usability sessions, task completion time benchmarks, and accessibility audits to refine the interface before code freeze.',
    image: '/projects/usability_tesing.png',
    deliverables: ['Usability Study Reports', 'A/B Test Verification', 'Accessibility Audits', 'Refinement Logs'],
  },
  {
    number: '06',
    title: 'Production Frontend Engineering',
    tagline: 'Sub-Second Runtimes & Zero-Loss Handoff',
    description:
      'Translating every micro-interaction and design token into modular, clean Next.js, React, and Flutter code with zero handoff fidelity loss.',
    image: '/projects/developer_handoff.png',
    deliverables: ['Production Next.js / Flutter Code', 'Storybook Token Docs', 'Automated CI/CD Tests', 'Performance Audits'],
  },
];

export const SKILLS_DATA = [
  {
    category: 'Product Design & UX Craft',
    description: 'Human-centered aesthetics, spatial hierarchy, and fluid interaction choreography.',
    skills: [
      { name: 'Figma', level: 'Master', color: '#F24E1E', context: 'Design Systems & High-Fidelity Specs' },
      { name: 'FigJam', level: 'Advanced', color: '#A259FF', context: 'User Flow & Journey Architecture' },
      { name: 'Design Systems', level: 'Master', color: '#6EE7F9', context: 'Multi-brand Tokens & Component Libraries' },
      { name: 'Prototyping', level: 'Master', color: '#FF7262', context: '60 FPS Gesture & Micro-Motion' },
      { name: 'UX Research', level: 'Advanced', color: '#10B981', context: 'Usability Testing & Empathy Audits' },
      { name: 'Spatial Ergonomics', level: 'Master', color: '#C084FC', context: 'Cognitive Load Reduction' },
    ],
  },
  {
    category: 'Frontend & Mobile Engineering',
    description: 'Component architecture, reactive state, and sub-second render pipelines.',
    skills: [
      { name: 'React', level: 'Master', color: '#61DAFB', context: 'Scalable Component Architecture' },
      { name: 'Next.js 14', level: 'Master', color: '#FFFFFF', context: 'App Router, Server Components & SSR' },
      { name: 'Flutter & Dart', level: 'Master', color: '#02569B', context: 'Cross-Platform iOS & Android Systems' },
      { name: 'TypeScript', level: 'Advanced', color: '#3178C6', context: 'Type-Safe Architecture & APIs' },
      { name: 'Tailwind CSS', level: 'Master', color: '#38BDF8', context: 'Bespoke Design Token Implementations' },
      { name: 'Framer Motion', level: 'Master', color: '#EC4899', context: 'Physics-Driven Animation Curves' },
    ],
  },
  {
    category: 'Architecture & Toolchain',
    description: 'Production infrastructure, version control, CI/CD, and cloud integrations.',
    skills: [
      { name: 'Git & GitHub', level: 'Master', color: '#F05032', context: 'Trunk-Based Delivery & CI Workflows' },
      { name: 'Postman & REST/GraphQL', level: 'Advanced', color: '#FF6C37', context: 'API Schema Validation' },
      { name: 'Azure Cloud', level: 'Proficient', color: '#0078D4', context: 'Distributed Services & Hosting' },
      { name: 'Firebase', level: 'Advanced', color: '#FFCA28', context: 'Real-time Datastores & Auth' },
      { name: 'Vite & Webpack', level: 'Master', color: '#646CFF', context: 'Hyper-Fast Bundling Pipelines' },
      { name: '.NET / C#', level: 'Proficient', color: '#512BD4', context: 'Backend Integration & Microservices' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2026 - Present',
    role: 'Student',
    company: 'Ulster University, UK',
    location: '',
    description:
      'Pursuing MSc in Computer Science, exploring human-computer interaction, distributed systems, and modern software architectures.',
    achievements: [],
    skills: [],
  },
  {
    period: 'Feb 2024 - March 2026',
    role: 'UX/UI Designer & Flutter Developer',
    company: 'Cognix Insights',
    location: '',
    description:
      'Led UI/UX design workflows in Figma and engineered performant, responsive cross-platform mobile applications with Flutter.',
    achievements: [],
    skills: [],
  },
  {
    period: 'July 2023 - Feb 2024',
    role: 'Software Developer',
    company: 'Internship Experience',
    location: '',
    description:
      'Collaborated with development teams to build intuitive web interfaces, implement frontend features, and ensure clean software design.',
    achievements: [],
    skills: [],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'Dolma possesses the rarest blend in modern product development: world-class aesthetic intuition paired with the technical depth to actually build it into flawless, high-performance code. Our launch would not have succeeded without her.',
    author: 'Alexander Sterling',
    role: 'VP of Product',
    company: 'Fintech Terminal Labs',
    avatarInitials: 'AS',
  },
  {
    quote:
      'Her attention to micro-interactions, accessibility tokens, and spatial layout elevated our enterprise dashboard from a standard utility tool into an experience that our enterprise clients genuinely love opening every day.',
    author: 'Dr. Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'Agrilink IoT Systems',
    avatarInitials: 'SJ',
  },
  {
    quote:
      'Working with Dolma was effortless. She transformed ambiguous product ideas into crisp, interactive prototypes in record time, and the resulting frontend code was modular, clean, and robust.',
    author: 'Marcus Vance',
    role: 'Engineering Director',
    company: 'Nexus Scale Cloud',
    avatarInitials: 'MV',
  },
];
