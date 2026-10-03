// Shared content for the new (default) design. Duplicated from Portfolio.tsx
// on purpose — see the redesign plan: keeps the old /old-portfolio/terminal design's working
// component untouched instead of reshaping it around a shared module.

export type Project = {
  id: number;
  name: string;
  year: string;
  slug: string;
  img: string;
  blurb: string;
  techline: string;
  long: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
};

export const PROJECT_DATA: Project[] = [
  {
    id: 1, name: 'Hirelytics', year: '2024', slug: 'hirelytics', img: '/hirelytics.jpeg',
    blurb: 'AI hiring — voice interviews, auto eval & attention monitoring.',
    techline: 'react · webrtc · openai',
    long: 'A complete AI hiring platform covering both recruiter and candidate workflows — from job creation through automated, AI-graded voice interviews.',
    features: ['Recruiter & candidate workflows', 'Real-time voice interviews (WebRTC)', 'Automated evaluation & scoring', 'Attention monitoring during sessions'],
    tech: ['React', 'Node.js', 'WebRTC', 'OpenAI', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/sumantadotai/hirelytics.app', demo: 'https://hirelytics.app/',
  },
  {
    id: 2, name: 'Talkthru', year: '2024', slug: 'talkthru', img: '/talkthru.png',
    blurb: 'Mental-health chatbot — RAG, GPT-4o, emotion detection, CBT.',
    techline: 'openai · gemini · vectordb',
    long: 'A mobile mental-health companion connecting users with an AI therapist through natural chat — with memory, emotion awareness and clinical safety flows.',
    features: ['RAG + GPT-4o & Gemini responses', 'Emotion detection & semantic memory', 'CBT support and guided journaling', 'Crisis detection & escalation workflows'],
    tech: ['OpenAI', 'Gemini', 'VectorDB', 'Next.js', 'Tailwind'],
  },
  {
    id: 3, name: 'Healthvio', year: '2023', slug: 'healthvio', img: '/healthvio.jpg',
    blurb: 'Telehealth — scheduling, EHR, video calls & calendar sync.',
    techline: 'next · agora · calendar',
    long: 'A full telehealth product handling the clinical journey end to end — booking, dynamic intake, secure video consults and two-way calendar sync.',
    features: ['Appointment scheduling & EHR workflows', 'In-app video calls (Agora)', 'Dynamic patient questionnaires', 'Google Calendar & Outlook sync'],
    tech: ['Next.js', 'Node.js', 'Agora', 'Google Calendar', 'Outlook'],
  },
  {
    id: 4, name: 'Python CLI Coder', year: '2024', slug: 'py-coder', img: '/ai-coder.png',
    blurb: 'CLI for AI codegen, scaffolding & iterative full-stack dev.',
    techline: 'python · cli · openai',
    long: 'A command-line coding agent that generates code, scaffolds folder structures and iterates on full-stack projects with GenAI — built in a 2-day sprint on ~1M tokens.',
    features: ['AI-assisted code generation', 'Folder-structure scaffolding', 'Iterative full-stack development', 'GenAI-driven refactor loops'],
    tech: ['Python', 'CLI', 'OpenAI'],
    github: 'https://github.com/sumantadotai/python-cli-ai-coder', demo: 'https://x.com/infysumanta/status/1911327271782150213',
  },
  {
    id: 5, name: 'Terminal Portfolio', year: '2026', slug: 'terminal-portfolio', img: '/me.jpeg',
    blurb: 'This site\'s original terminal-themed UI — an Astro SPA kept alive at /old-portfolio/terminal.',
    techline: 'astro · react · localStorage',
    long: 'The portfolio\'s first design: a single-page terminal aesthetic built with Astro and a hydrated React component, with its own dark/light theme persistence. Superseded by this Onest-based redesign but kept live as a legacy route.',
    features: ['Terminal-styled dark/light theme', 'Client-side routing synced to the URL', 'Full section set: about, experience, education, skills, projects, contact'],
    tech: ['Astro', 'React', 'TypeScript'],
    demo: '/old-portfolio/terminal',
  },
  {
    id: 6, name: 'Video Call Appointment App', year: '2023', slug: 'video-call-appointment-app', img: '/me.jpeg',
    blurb: 'Book appointments and join live video consultations in the browser.',
    techline: 'next.js · webrtc · getstream',
    long: 'An appointment-booking app with in-browser video calls, built on Next.js with WebRTC and getstream.io handling the real-time video layer.',
    features: ['Appointment scheduling', 'Real-time video calls (WebRTC)', 'getstream.io video integration', 'Responsive SCSS/Tailwind UI'],
    tech: ['Next.js', 'React', 'SCSS', 'Tailwind', 'WebRTC', 'GetStream.io'],
    github: 'https://github.com/sumantadotai/nextjs-videocall-app', demo: 'https://nextjs-videocall-app.vercel.app',
  },
  {
    id: 7, name: 'Full Stack Kanban Application', year: '2022', slug: 'kanban-app', img: '/me.jpeg',
    blurb: 'Drag-and-drop Kanban board backed by a full Node/Express/MongoDB API.',
    techline: 'react · node · mongodb',
    long: 'A full-stack Kanban board — boards, lists and cards with drag-and-drop, backed by a Node.js/Express/MongoDB API.',
    features: ['Drag-and-drop boards, lists & cards', 'REST API on Node/Express', 'MongoDB persistence', 'Tailwind + styled-components UI'],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Styled Components'],
    github: 'https://github.com/sumantadotai/node-react-kanban-app', demo: 'https://mern-kanban-app.vercel.app',
  },
  {
    id: 8, name: 'Dynamic Form Builder', year: '2023', slug: 'form-builder', img: '/me.jpeg',
    blurb: 'Visual drag-and-drop form designer with a Postgres-backed API.',
    techline: 'next.js · node · postgres',
    long: 'A dynamic form builder — design forms visually on the React/Next.js front end and store schemas and submissions through a Node/Express API on Postgres.',
    features: ['Visual drag-and-drop form designer', 'Dynamic field types & validation', 'Node/Express API on Postgres', 'Tailwind + styled-components UI'],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind', 'Styled Components'],
    github: 'https://github.com/sumantadotai/form-builder', demo: 'https://form-builder-sand-zeta.vercel.app',
  },
  {
    id: 9, name: 'Provaswito Art Org Website', year: '2022', slug: 'provaswito-org', img: '/me.jpeg',
    blurb: 'Public website for Provaswito, an art organization.',
    techline: 'web',
    long: 'The public website for Provaswito, an art organization — showcasing events, members and their work.',
    features: ['Organization info & events', 'Member/artist showcase', 'Responsive public website'],
    tech: [],
    github: 'https://github.com/sumantadotai/provaswito.org', demo: 'https://provaswito-org.vercel.app',
  },
  {
    id: 10, name: 'Pizza Booking Application', year: '2022', slug: 'pizza-booking-app', img: '/me.jpeg',
    blurb: 'Real-time pizza ordering app with live order tracking.',
    techline: 'react · node · mongodb',
    long: 'A real-time pizza booking and ordering application — place orders and track status live, built on a Node/Express/MongoDB stack.',
    features: ['Real-time order placement & tracking', 'Node/Express/MongoDB backend', 'Tailwind CSS UI'],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    github: 'https://github.com/sumantadotai/node-react-real-time-pizza-order-app', demo: 'https://pizza-order-app.sumantakabiraj.com',
  },
  {
    id: 11, name: 'Visual Studio Code Extensions', year: '2022', slug: 'vscode-extensions-pack', img: '/me.jpeg',
    blurb: 'A collection of custom Visual Studio Code extensions.',
    techline: 'vs code · typescript',
    long: 'A pack of custom Visual Studio Code extensions.',
    features: ['Custom VS Code extension pack'],
    tech: ['TypeScript'],
    github: 'https://github.com/vscode-extensions-pack',
  },
  {
    id: 12, name: 'CourseSupportBot', year: '2026', slug: 'course-support-bot', img: '/me.jpeg',
    blurb: 'Advanced RAG support bot that answers questions over course subtitles.',
    techline: 'go · sqlite · openai',
    long: 'Ask questions about a video course and get answers that cite the exact lecture and timestamp. Feed it .vtt/.srt subtitles; it builds the module structure, chunks and embeds transcripts, and answers through an advanced RAG pipeline.',
    features: ['Answers cite the exact lecture & timestamp', 'One static Go binary with the web UI embedded', 'SQLite — no database or vector-DB server', 'Admin-editable models, retrieval tuning & guardrails'],
    tech: ['Go', 'SQLite', 'OpenAI', 'TypeScript', 'Docker'],
    github: 'https://github.com/sumantadotai/CourseSupportBot',
  },
  {
    id: 13, name: 'AI Form Builder', year: '2024', slug: 'ai-form-builder', img: '/me.jpeg',
    blurb: 'Describe a form in plain English and get a working form.',
    techline: 'typescript · genai',
    long: 'A form builder driven by prompts — describe the form you need and the app generates it for you.',
    features: ['Prompt-to-form generation with AI'],
    tech: ['TypeScript'],
    github: 'https://github.com/sumantadotai/ai-form-builder', demo: 'https://ai-form-builder-eight.vercel.app',
  },
  {
    id: 14, name: 'Sorting Algorithm Visualizer', year: '2024', slug: 'sorting-visualizer', img: '/me.jpeg',
    blurb: 'Watch sorting algorithms work, step by step.',
    techline: 'typescript · animation',
    long: 'An interactive visualizer that animates sorting algorithms so you can watch how they work.',
    features: ['Animated sorting visualization'],
    tech: ['TypeScript'],
    github: 'https://github.com/sumantadotai/sorting-algorithm-visualizer', demo: 'https://sorting-algorithm-visualizer-mocha.vercel.app',
  },
  {
    id: 15, name: 'ccslot', year: '2026', slug: 'ccslot', img: '/me.jpeg',
    blurb: 'Run multiple Claude Code accounts on one machine — separate logins, shared brain.',
    techline: 'node · npm · cli',
    long: 'An npm CLI that gives each Claude Code account its own config directory while symlinking projects, skills, plans and settings between them, so /resume works across accounts in the same repo.',
    features: ['Zero dependencies', 'Separate auth and MCP credentials per slot', 'Cross-account /resume', 'macOS, Linux & Windows (Node 22+)'],
    tech: ['Node.js', 'TypeScript', 'CLI'],
    github: 'https://github.com/sumantadotai/ccslot', demo: 'https://ccslot.sumanta.ai/',
  },
  {
    id: 16, name: 'ChaiCode Persona', year: '2026', slug: 'chaicode-persona', img: '/me.jpeg',
    blurb: 'Chat with AI personas of Hitesh Choudhary & Piyush Garg.',
    techline: 'next.js · ai sdk · trpc',
    long: 'A persona chat app built on Next.js 16 and the Vercel AI SDK, with a Hono + tRPC API, Better Auth and MongoDB.',
    features: ['Persona chat with Hitesh Choudhary & Piyush Garg', 'Next.js 16 + Vercel AI SDK', 'Hono + tRPC API, Better Auth, MongoDB'],
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'tRPC'],
    github: 'https://github.com/sumantadotai/chaicode-persona', demo: 'https://chaicode-persona.vercel.app',
  },
];

export const EXPERIENCE = [
  { co: 'BuildFound (Fddigital)', role: 'Full Stack Developer · Remote', when: 'Sep 2025 — Present', note: 'Building AI MVPs and scalable AI products for startups and enterprises.' },
  { co: 'BexCode Services (Dcode Health)', role: 'Full Stack Developer · Team Lead · Remote', when: 'Feb 2023 — Sep 2025', note: 'Led team management and full-stack delivery, building Node.js services and infrastructure for Dcode Health, a healthcare platform.' },
  { co: 'Tata Consultancy Services', role: 'Assistant System Engineer Developer', when: 'Feb 2020 — Nov 2022', note: 'Back-end web development and MongoDB-based enterprise services.' },
  { co: 'Real Time Consultancy Services', role: 'Software Developer', when: 'Jul 2019 — Feb 2020', note: 'Shipped React.js and MongoDB features for client products.' },
];

export const EDUCATION = [
  { school: 'SRM University Sikkim', deg: 'Master of Computer Applications (MCA) — AI, ML & Data Science', when: 'Jul 2025 — Present' },
  { school: 'Triveni Devi Bhalotia (TDB) College, Raniganj', deg: 'Bachelor of Computer Science', when: '2016 — 19' },
  { school: 'Ondal High School', deg: 'Higher Secondary (W.B.C.H.S.E)', when: '2014 — 16' },
  { school: 'Dakshinkhanda High School', deg: 'Secondary (W.B.B.S.E)', when: '2012 — 14' },
];

export const SOCIALS = {
  github: 'https://github.com/sumantadotai',
  linkedin: 'https://www.linkedin.com/in/sumanta-kabiraj/',
  twitter: 'https://x.com/sumantadotai',
  instagram: 'https://instagram.com/infysumanta',
  email: 'mailto:me@sumantakabiraj.com',
  cal: 'https://cal.com/sumanta-kabiraj/connect-with-me',
};

export const SKILLS = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'React Native', 'Expo', 'Tauri', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Azure'];

export const BIO_PARAGRAPHS = [
  "I'm a full-stack developer who loves building intelligent, scalable products for healthcare — AI conversational systems, secure auth, EHR integrations and cloud-native architectures.",
  'Currently building AI MVPs and scalable products at BuildFound. Always exploring new tools and techniques to ship better products.',
];

export const HERO = {
  name: 'Sumanta',
  role: 'Full-Stack Developer',
  location: 'Kolkata, IN',
  building: 'AI MVPs at BuildFound',
};

export const FOCUS = [
  { title: 'AI products', body: 'LLM apps, RAG pipelines, voice agents and evaluation loops — from prototype to production MVP.' },
  { title: 'Healthcare software', body: 'Telehealth, EHR integrations, scheduling and secure auth for clinical workflows.' },
  { title: 'Full-stack & cloud', body: 'Next.js, Node, Python and Go services on AWS/Azure — built to scale and easy to hand off.' },
];

export const CAREER_START = 2019;

export type App = {
  name: string;
  slug: string;
  icon?: string;
  tagline: string;
  body: string;
  status: string;
  platforms: string[];
  // Filter chips on /apps (see APP_TAGS).
  tags: string[];
  features: string[];
  install?: string;
  url: string;
  links: { label: string; href: string }[];
};

export const APP_TAGS = ['Web', 'Mobile', 'iOS', 'Android', 'Desktop', 'macOS', 'Windows', 'Linux', 'Terminal'];

// Shipped, publicly available apps — the /apps page.
export const APPS: App[] = [
  {
    name: 'Byre', slug: 'byre', icon: '/apps/byre.svg',
    tagline: 'Every local database, under one roof.',
    body: 'A menu-bar app that runs PostgreSQL, MySQL and MongoDB side by side — each with its own version, data folder and port. Like Postgres.app, but for every engine, with a Studio built in.',
    status: 'v0.1.1',
    platforms: ['macOS', 'Windows', 'Linux'],
    tags: ['Desktop', 'macOS', 'Windows', 'Linux', 'Terminal'],
    features: ['PostgreSQL 14–18 & 19 beta, MySQL 8.4–26, MongoDB 7.0–9.0', 'Studio: browse, query and edit Postgres, MySQL, MariaDB, MongoDB, Redis/Valkey, SQLite and Turso', 'AI agents manage your databases through the byre command', 'Automatic updates'],
    url: 'https://byre.app/',
    links: [{ label: 'Download', href: 'https://byre.app/download' }, { label: 'Docs', href: 'https://byre.app/docs' }, { label: 'Changelog', href: 'https://byre.app/changelog' }],
  },
];
