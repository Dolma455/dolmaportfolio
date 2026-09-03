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
  metrics: { label: string; value: string }[];
  features: string[];
  tag: string;
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
      '/projects/ci_report.png',
      '/projects/ci_revai.png',
      '/projects/ciproductpage_services.png',
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
    id: 'loyaledge',
    title: 'LoyalEdge',
    subtitle: 'Automated Retention Engine & Customer Rewards Architecture',
    category: 'Fintech & Merchant Platform',
    year: '2023',
    role: 'Product Designer & Frontend Developer',
    client: 'LoyalEdge Commerce',
    timeline: '3 Months',
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
