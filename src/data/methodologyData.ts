export interface MethodologyStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  artifactLabel: string;
  iconName: 'search' | 'compass' | 'lightbulb' | 'layers' | 'check' | 'rocket' | 'code' | 'server' | 'database' | 'cpu' | 'shield' | 'cloud';
}

export interface SkillCapability {
  name: string;
  level: string;
  color: string;
  context: string;
  tags?: string[];
}

export interface ServiceMethodology {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  badge: string;
  capabilitiesTitle: string;
  capabilitiesDescription: string;
  capabilities: SkillCapability[];
  stages: MethodologyStage[];
}

export const METHODOLOGIES: Record<string, ServiceMethodology> = {
  'ux-ui-design': {
    id: 'ux-ui-design',
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    category: 'Human-Centered Design',
    tagline: 'From behavioral empathy and cognitive architecture to pixel-perfect design systems.',
    summary:
      'A rigorous 6-stage lifecycle transitioning from raw qualitative research to production-ready design tokens, accessibility standards, and micro-interaction prototypes.',
    badge: 'Design Methodology',
    capabilitiesTitle: 'Product Design & UX Craft',
    capabilitiesDescription:
      'Human-centered aesthetics, spatial hierarchy, and fluid interaction choreography designed for engagement and conversion.',
    capabilities: [
      {
        name: 'Figma',
        level: 'Master',
        color: '#F24E1E',
        context: 'Design Systems, Auto-Layout & High-Fidelity Specs',
        tags: ['Variables', 'Auto-Layout', 'Component Libraries'],
      },
      {
        name: 'FigJam',
        level: 'Advanced',
        color: '#A259FF',
        context: 'User Flow Architecture & Information Topology',
        tags: ['User Journeys', 'Mind Mapping', 'Workshops'],
      },
      {
        name: 'Design Systems',
        level: 'Master',
        color: '#F472B6',
        context: 'Semantic Design Tokens & Multi-Brand Systems',
        tags: ['Color Tokens', 'Spacing 8pt', 'Typography Scale'],
      },
      {
        name: 'Prototyping',
        level: 'Master',
        color: '#FF7262',
        context: '60 FPS Gesture, Micro-Motion & Haptics',
        tags: ['Smart Animate', 'Spring Physics', 'Interactive Flows'],
      },
      {
        name: 'UX Research',
        level: 'Advanced',
        color: '#10B981',
        context: 'Usability Testing Sessions & Behavioral Audits',
        tags: ['Interviews', 'Heuristic Evaluation', 'Heatmaps'],
      },
      {
        name: 'Spatial Ergonomics',
        level: 'Master',
        color: '#C084FC',
        context: 'Cognitive Load Reduction & WCAG AAA Standards',
        tags: ['WCAG AAA', 'Accessibility', 'Fitts Law'],
      },
    ],
    stages: [
      {
        number: '01',
        title: 'Discover & Empathize',
        tagline: 'User Interviews, Qualitative Insights & Contextual Inquiries',
        description:
          'Uncovering core user pain points, workflow bottlenecks, and psychological mental models through structured user interviews, stakeholder workshops, and competitor ecosystem analysis.',
        deliverables: [
          'User Persona Archetypes',
          'Empathy Maps & Mindsets',
          'Contextual Interview Logs',
          'Competitive UX Benchmarking',
        ],
        artifactLabel: 'Research Synthesis Matrix',
        iconName: 'search',
      },
      {
        number: '02',
        title: 'Define & Synthesize',
        tagline: 'Information Architecture, Journey Maps & Job-to-be-Done',
        description:
          'Synthesizing raw research into intuitive user pathways, establishing Jobs-to-be-Done (JTBD) criteria, and structuring information hierarchies for zero navigation friction.',
        deliverables: [
          'User Flow Architecture Diagrams',
          'Information Hierarchy (IA) Trees',
          'End-to-End Journey Maps',
          'MoSCoW Feature Priority Specs',
        ],
        artifactLabel: 'IA & User Flow Blueprint',
        iconName: 'compass',
      },
      {
        number: '03',
        title: 'Wireframing & Ideation',
        tagline: 'Low-Fidelity Spatial Layouts & Rapid Concept Iterations',
        description:
          'Exploring rapid paper sketches, multi-variant wireframe explorations, and layout ergonomics in FigJam to validate intuitive spatial relationships before high-fidelity styling.',
        deliverables: [
          'Low-Fidelity Wireframe Systems',
          'Interactive FigJam Flows',
          'Spatial Ergonomics Studies',
          'Rapid Clickable Wireframes',
        ],
        artifactLabel: 'Wireframe Spatial Layouts',
        iconName: 'lightbulb',
      },
      {
        number: '04',
        title: 'Visual UI & Design Systems',
        tagline: 'Tokenized Figma Components, Typography & WCAG AAA Contrast',
        description:
          'Transforming approved wireframes into high-fidelity screens utilizing atomic design systems, strict semantic design tokens (spacing, color, typography), and dark/light modes.',
        deliverables: [
          'Production Figma Component Library',
          'Color & Spatial Design Tokens',
          'High-Fidelity Screen Suites',
          'WCAG AAA Dark-Mode Contrast Specs',
        ],
        artifactLabel: 'Atomic Design System Library',
        iconName: 'layers',
      },
      {
        number: '05',
        title: 'Prototyping & Usability',
        tagline: 'Micro-Interactions, 60fps Physics & User Testing Loops',
        description:
          'Connecting high-fidelity screens with smart animate micro-interactions, transition physics, and conducting moderated usability testing sessions to benchmark task completion times.',
        deliverables: [
          'Smart Animate Hi-Fi Prototypes',
          'Usability Testing Heatmaps',
          'SUS Usability Scorecards',
          'Friction Feedback Logs',
        ],
        artifactLabel: 'Interactive Hi-Fi Prototype',
        iconName: 'check',
      },
      {
        number: '06',
        title: 'Handoff & Design QA',
        tagline: 'Figma Dev Mode Specs, Breakpoints & Verification',
        description:
          'Preparing clean, modular component specs for developers, documenting responsive breakpoints, edge cases, and conducting visual design QA audits during production implementation.',
        deliverables: [
          'Figma Dev Mode Token Specs',
          'Responsive Breakpoint Guides',
          'Cubic-Bezier Animation Curves',
          'Design QA Verification Checklists',
        ],
        artifactLabel: 'Production Dev Handoff Package',
        iconName: 'rocket',
      },
    ],
  },

  'flutter-development': {
    id: 'flutter-development',
    slug: 'flutter-development',
    title: 'Flutter Development',
    category: 'Cross-Platform Mobile Engineering',
    tagline: 'Native performance, 60/120fps fluid transitions, and scalable BLoC architectures.',
    summary:
      'A structured 6-phase engineering trajectory delivering production-grade iOS and Android mobile apps from platform architecture to App Store submission.',
    badge: 'Mobile Methodology',
    capabilitiesTitle: 'Flutter & Mobile Engineering',
    capabilitiesDescription:
      'Component architecture, reactive state machines, and sub-second render pipelines engineered for high-performance cross-platform apps.',
    capabilities: [
      {
        name: 'Flutter & Dart',
        level: 'Master',
        color: '#02569B',
        context: 'Cross-Platform iOS & Android Native Architecture',
        tags: ['Dart 3', 'AOT Compilation', 'Hot Reload'],
      },
      {
        name: 'BLoC & Riverpod',
        level: 'Master',
        color: '#61DAFB',
        context: 'Unidirectional Reactive State Management',
        tags: ['Streams', 'State Machines', 'Immutability'],
      },
      {
        name: 'Cupertino & Material',
        level: 'Master',
        color: '#F472B6',
        context: 'Pixel-Perfect Native UI & Custom Canvas Painters',
        tags: ['Micro-Animations', 'Adaptive UI', 'Design Tokens'],
      },
      {
        name: 'Platform Channels',
        level: 'Advanced',
        color: '#38BDF8',
        context: 'Native Swift (iOS) & Kotlin (Android) Hardware Bridges',
        tags: ['MethodChannels', 'Biometrics', 'Camera/Sensors'],
      },
      {
        name: 'Offline Storage',
        level: 'Master',
        color: '#FFCA28',
        context: 'SQLite, Isar & Hive Resilient Persistence',
        tags: ['Offline-First', 'Local Cache', 'Encrypted Vault'],
      },
      {
        name: 'DevTools Profiling',
        level: 'Advanced',
        color: '#10B981',
        context: '120Hz ProMotion Frame Budget Audits',
        tags: ['Sub-16ms Frames', 'Memory Leak Profiling', 'Golden Tests'],
      },
    ],
    stages: [
      {
        number: '01',
        title: 'Architecture Blueprint',
        tagline: 'Clean Architecture, BLoC State Machines & Native SDK Scoping',
        description:
          'Analyzing iOS & Android platform specifics, evaluating third-party SDK compatibility, and defining clean layered architecture patterns (Presentation, Domain, Data) with strict separation of concerns.',
        deliverables: [
          'Clean Architecture Diagrams',
          'BLoC / Riverpod State Strategy',
          'Platform Compatibility Matrix',
          'Native Dependency Audit',
        ],
        artifactLabel: 'Mobile Architecture Schematics',
        iconName: 'compass',
      },
      {
        number: '02',
        title: 'UI Component Engineering',
        tagline: 'Atomic Widgets, Cupertino/Material Fidelity & Tokens',
        description:
          'Translating Figma design tokens into re-usable Flutter widgets, implementing custom Painters where needed, and crafting smooth 60fps/120fps fluid transitions.',
        deliverables: [
          'Modular Flutter Widget Library',
          'Adaptive AppTheme (Light & Dark)',
          'Custom Vector Canvas Painters',
          'Micro-Animation Controllers',
        ],
        artifactLabel: 'Flutter Widget Catalog',
        iconName: 'layers',
      },
      {
        number: '03',
        title: 'Reactive State & Data Flow',
        tagline: 'Unidirectional Streams, Freezed Models & Error Boundaries',
        description:
          'Implementing rock-solid reactive state management, asynchronous stream handling, error boundaries, and immutable model classes using Freezed and JSON serialization.',
        deliverables: [
          'BLoC State & Event Machine',
          'Repository Pattern Layer',
          'Immutable DTO Data Models',
          'Centralized Error Interceptors',
        ],
        artifactLabel: 'Reactive State Pipeline',
        iconName: 'code',
      },
      {
        number: '04',
        title: 'Native Integrations & Offline',
        tagline: 'Platform Method Channels, SQLite/Hive & Background Sync',
        description:
          'Wiring native iOS Swift & Android Kotlin capabilities through Method Channels, background push notification triggers, and offline-first database caching with SQLite/Isar/Hive.',
        deliverables: [
          'iOS & Android Platform Channels',
          'Offline-First Local DB Engine',
          'FCM Push Notification Handlers',
          'Secure Keyring / Keychain Storage',
        ],
        artifactLabel: 'Native Channel Bridge',
        iconName: 'cpu',
      },
      {
        number: '05',
        title: 'Automated QA & Profiling',
        tagline: 'Unit Tests, Widget Golden Tests & Flutter DevTools Audits',
        description:
          'Rigorous test automation suite covering unit tests, widget golden snapshot tests, memory leak inspections, and frame render budget audits in Flutter DevTools.',
        deliverables: [
          'Unit & Widget Test Suites (>85%)',
          'Golden Screenshot Regression Tests',
          'Flutter DevTools Profiling Report',
          'Memory Leak & Allocation Audits',
        ],
        artifactLabel: 'Quality Assurance Matrix',
        iconName: 'check',
      },
      {
        number: '06',
        title: 'CI/CD & App Store Release',
        tagline: 'Fastlane Automation, TestFlight & Google Play Rollout',
        description:
          'Configuring continuous integration pipelines with automated building, cryptographic code signing, TestFlight beta distribution, and Google Play Console automated release management.',
        deliverables: [
          'GitHub Actions CI/CD Workflows',
          'Fastlane Automated Signing Scripts',
          'TestFlight & Internal Track Builds',
          'App Store Optimization (ASO) Package',
        ],
        artifactLabel: 'Release Pipeline & Store Delivery',
        iconName: 'rocket',
      },
    ],
  },

  'backend-cloud-development': {
    id: 'backend-cloud-development',
    slug: 'backend-cloud-development',
    title: 'Backend and Cloud Development',
    category: 'Cloud Infrastructure & Distributed Systems',
    tagline: 'Resilient microservices, high-throughput databases, and automated cloud deployments.',
    summary:
      'An enterprise 6-stage engineering lifecycle from domain modeling and API contract design to containerized Kubernetes orchestration and SRE observability.',
    badge: 'Backend & Cloud Methodology',
    capabilitiesTitle: 'Cloud Infrastructure & Distributed Architecture',
    capabilitiesDescription:
      'Microservices, containerization, resilient APIs, and automated cloud ops engineered for 99.99% reliability and sub-second response times.',
    capabilities: [
      {
        name: 'Python & .NET',
        level: 'Master',
        color: '#3776AB',
        context: 'High-Throughput API & Microservices Core',
        tags: ['FastAPI', 'ASP.NET Core', 'Clean Architecture'],
      },
      {
        name: 'AWS & Azure Cloud',
        level: 'Proficient',
        color: '#0078D4',
        context: 'Cloud Infrastructure, Serverless & Identity',
        tags: ['VPC & Subnets', 'ECS/Lambda', 'IAM Security'],
      },
      {
        name: 'Docker & Kubernetes',
        level: 'Master',
        color: '#2496ED',
        context: 'Multi-Stage Container Builds & Pod Orchestration',
        tags: ['Microservices', 'K8s Ingress', 'Docker Compose'],
      },
      {
        name: 'PostgreSQL & MongoDB',
        level: 'Master',
        color: '#336791',
        context: 'Relational & Document DB Schema Optimization',
        tags: ['Query Profiling', 'Indexing', 'Transactions'],
      },
      {
        name: 'Redis In-Memory',
        level: 'Advanced',
        color: '#DC382D',
        context: 'Sub-Millisecond Caching & Real-Time Pub/Sub',
        tags: ['Cache Invalidation', 'Rate Limiting', 'Key-Value'],
      },
      {
        name: 'CI/CD & GitHub Actions',
        level: 'Master',
        color: '#F05032',
        context: 'Automated Testing, Security Scans & Zero-Downtime Rollouts',
        tags: ['Blue/Green Deploy', 'SAST Audits', 'Secrets Vault'],
      },
    ],
    stages: [
      {
        number: '01',
        title: 'Domain Modeling & Contracts',
        tagline: 'Domain-Driven Design, OpenAPI Specs & Schema Architecture',
        description:
          'Deconstructing business requirements into bounded domain contexts, drafting strict OpenAPI/REST/GraphQL contracts, and establishing normalized data access patterns.',
        deliverables: [
          'Domain Architecture Blueprints',
          'OpenAPI v3 / Swagger Contracts',
          'Entity-Relationship (ERD) Models',
          'Data Access & Interface Specs',
        ],
        artifactLabel: 'Domain & Contract Schematics',
        iconName: 'compass',
      },
      {
        number: '02',
        title: 'Resilient Microservices Core',
        tagline: 'Clean Architecture, JWT Authentication & Rate Limiting',
        description:
          'Building robust, scalable backend services with strict input validation, centralized logging, structured error propagation, and JWT / OAuth2 security boundaries.',
        deliverables: [
          'Production REST / GraphQL Endpoints',
          'JWT / OAuth2 Authentication Engine',
          'Role-Based Access Control (RBAC)',
          'Rate-Limiting & Input Validation',
        ],
        artifactLabel: 'API Microservices Architecture',
        iconName: 'server',
      },
      {
        number: '03',
        title: 'Database & Caching Engine',
        tagline: 'PostgreSQL, MongoDB, Indexing & Redis Sub-Millisecond Cache',
        description:
          'Designing high-throughput relational and document database schemas, multi-column indexes, transactional integrity, and Redis sub-millisecond caching layers.',
        deliverables: [
          'Optimized PostgreSQL Schemas',
          'Automated Database Migrations',
          'Redis Cache Invalidation Strategy',
          'Query Execution Plan Optimizations',
        ],
        artifactLabel: 'Database Schema & Cache Topology',
        iconName: 'database',
      },
      {
        number: '04',
        title: 'Containerization & Cloud IaC',
        tagline: 'Docker Multi-Stage, Kubernetes & Terraform / CloudFormation',
        description:
          'Packaging services into lightweight, secure Docker containers, orchestrating microservices, and provisioning repeatable cloud infrastructure using Infrastructure-as-Code.',
        deliverables: [
          'Multi-Stage Optimized Dockerfiles',
          'Kubernetes / ECS Manifests',
          'Terraform / CloudFormation Templates',
          'VPC, Subnet & Network Security Rules',
        ],
        artifactLabel: 'Cloud Cluster & IaC Blueprint',
        iconName: 'cloud',
      },
      {
        number: '05',
        title: 'CI/CD & Security Hardening',
        tagline: 'GitHub Actions, Zero-Downtime Deployments & Secrets',
        description:
          'Establishing automated pipelines for linting, security vulnerability scanning (SAST), unit/integration testing, and blue/green zero-downtime rolling cloud deployments.',
        deliverables: [
          'GitHub Actions CI/CD Pipelines',
          'Blue/Green Zero-Downtime Scripts',
          'Key Vault & Secret Management',
          'OWASP Security Audit Compliance',
        ],
        artifactLabel: 'Continuous Delivery Pipeline',
        iconName: 'shield',
      },
      {
        number: '06',
        title: 'Observability & SRE Reliability',
        tagline: 'OpenTelemetry Tracing, Prometheus, Grafana & Alerts',
        description:
          'Instrumenting distributed tracing across all microservices, configuring Prometheus telemetry collection, Grafana real-time dashboards, and automated incident alerting.',
        deliverables: [
          'Distributed Tracing Instrumentation',
          'Real-Time Prometheus & Grafana Panels',
          'Liveness & Health Probe Endpoints',
          'Automated Pager & Incident Triggers',
        ],
        artifactLabel: 'SRE Observability Dashboard',
        iconName: 'rocket',
      },
    ],
  },
};
