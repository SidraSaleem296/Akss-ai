import type { LucideIcon } from 'lucide-react';
import {
  Blocks,
  Bot,
  Building2,
  DollarSign,
  FileSearch,
  GraduationCap,
  Heart,
  LayoutDashboard,
  ListTodo,
  BookOpen,
  MessageSquareMore,
  Orbit,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Store,
  Stethoscope,
  Users,
  Workflow,
  Lock,
  Database,
  Eye,
  CheckCircle,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Security', path: '/security' },
  { label: 'Personal AI', path: '/personal-ai' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const taglines = {
  b2b: 'Your AI. Your Rules.',
  b2c: 'Know Yourself. Grow Yourself.',
  descriptor: 'Open-source intelligence. End-to-end encrypted.',
  positioning: 'We listen to your workflow. We design around it. We build with AI at the core.',
};

export const painPoints = [
  {
    title: 'Bad fit',
    description:
      'Off-the-shelf AI forces your team to change, not the tool. Workarounds pile up and adoption dies.',
  },
  {
    title: 'Privacy risk',
    description:
      "Commercial APIs send your data to external servers. That's not acceptable for internal knowledge or sensitive workflows.",
  },
  {
    title: 'No single owner',
    description:
      'Strategy, design, AI, and engineering split across vendors means no one accountable for the result.',
  },
];

export type ServiceItem = {
  title: string;
  description: string;
  shortDescription?: string;
  icon: LucideIcon;
  bullets: string[];
  bestFor?: string;
};

export const services: ServiceItem[] = [
  {
    title: 'Secure RAG Systems',
    description:
      'Private knowledge assistants from your documents, internal data, and team knowledge. Guarded retrieval, structured access, end-to-end encrypted.',
    shortDescription: 'Private knowledge assistants from your documents — encrypted, accurate, fast',
    icon: ScanSearch,
    bullets: ['Document Q&A', 'Knowledge copilots', 'Protected retrieval layers'],
    bestFor: 'Finance, legal, clinics, internal operations',
  },
  {
    title: 'AI Chatbots',
    description:
      'Website and WhatsApp assistants that reduce support load, capture leads, and guide users — without sounding robotic.',
    shortDescription: 'Support, lead capture, and guidance on web or WhatsApp — 24/7',
    icon: Bot,
    bullets: ['Website chat', 'WhatsApp support', 'Lead capture flows'],
    bestFor: 'E-commerce, service businesses, startups',
  },
  {
    title: 'Workflow Automation',
    description:
      'Operational automations that eliminate repetitive manual work — support queues, follow-ups, content ops, internal coordination.',
    shortDescription: 'Eliminate the repetitive manual work draining your team every day',
    icon: Workflow,
    bullets: ['Process mapping', 'Task automation', 'Human-in-the-loop review'],
    bestFor: 'Any team losing hours to the same tasks every day',
  },
  {
    title: 'Custom GenAI SaaS',
    description:
      'AI-native internal tools or client-facing products built around your specific business logic. Scoped in discovery, built by one team.',
    shortDescription: 'Full AI products built around your specific business logic',
    icon: LayoutDashboard,
    bullets: ['Internal tools', 'Client-facing SaaS', 'Full-stack delivery'],
    bestFor: 'Startups and scale-ups with validated workflow pain',
  },
  {
    title: 'Product Design & UX',
    description:
      'Interfaces built for your specific use case — not adapted from a template. We design for adoption, not aesthetics.',
    shortDescription: 'Interfaces that make complex AI feel simple and actually get used',
    icon: Orbit,
    bullets: ['UX strategy', 'Wireframes', 'Design systems'],
    bestFor: 'Any product where interface quality determines usage',
  },
  {
    title: 'Multi-Platform Delivery',
    description:
      'Web, mobile, desktop, or browser extension — wherever your users are.',
    shortDescription: 'Web, mobile, or wherever your users work',
    icon: Blocks,
    bullets: ['Web apps', 'Mobile flows', 'Browser extensions'],
    bestFor: 'Teams needing deployment flexibility',
  },
];

export const processSteps = [
  {
    title: 'Listen',
    description:
      'We map your actual workflow. Real friction, real users, real goals. No assumptions.',
  },
  {
    title: 'Design',
    description:
      'We create UI/UX specific to your use case — built to get adopted, not just launched.',
  },
  {
    title: 'Build',
    description:
      'AI, engineering, and design delivered together. One team. No handoffs.',
  },
  {
    title: 'Refine',
    description:
      'Testing, feedback, and human review where reliability matters.',
  },
];

export type IndustryItem = {
  title: string;
  description: string;
  focus: string;
  icon: LucideIcon;
};

export const industries: IndustryItem[] = [
  {
    title: 'E-commerce',
    description:
      'Customer support, product guidance, content operations, and lead capture workflows.',
    focus: 'Support + conversion',
    icon: Store,
  },
  {
    title: 'Finance',
    description:
      'Document analysis chatbots, financial data processing, automated reporting, and secure knowledge assistants for financial documents.',
    focus: 'Document intelligence + automation',
    icon: DollarSign,
  },
  {
    title: 'Education',
    description:
      'Assistant tools, personalized learning flows, and knowledge-rich experiences for digital education.',
    focus: 'Learning + guidance',
    icon: GraduationCap,
  },
  {
    title: 'Clinics',
    description:
      'Inquiry handling, intake support, internal knowledge access, and automation for busy teams.',
    focus: 'Intake + operations',
    icon: Stethoscope,
  },
  {
    title: 'Startups',
    description:
      'AI-first MVPs, internal copilots, and workflow-specific products that move faster than stacked tools.',
    focus: 'MVP + experimentation',
    icon: Sparkles,
  },
  {
    title: 'Operations teams',
    description:
      'Internal dashboards, repetitive task automation, and secure assistants for real process pressure.',
    focus: 'Efficiency + control',
    icon: Building2,
  },
];

export const differentiators = [
  {
    title: 'Open-source AI',
    description:
      'Your data never reaches external servers. Unlike GPT or Gemini APIs, we run models on your own infrastructure with E2E encryption.',
    icon: ShieldCheck,
  },
  {
    title: 'Listen first, always',
    description:
      "We start with how you work, not with a feature list. Discovery is not a formality — it's how good products happen.",
    icon: FileSearch,
  },
  {
    title: 'Design that drives adoption',
    description:
      'A product nobody uses solves nothing. UI/UX is an engineering decision here, not an afterthought.',
    icon: MessageSquareMore,
  },
  {
    title: 'Women-led and detail-obsessed',
    description:
      'Management thinking, design sensibility, and engineering depth in one team.',
    icon: Users,
  },
];

export const securityPillars = [
  {
    title: 'Open-source models on your infrastructure',
    description:
      'Processed where you control it. Zero external transmission.',
    icon: Database,
  },
  {
    title: 'End-to-end encryption built in',
    description:
      'Architecture decision, not a compliance checkbox. Designed in from day one.',
    icon: Lock,
  },
  {
    title: 'Guarded retrieval',
    description:
      "The AI only accesses what it's designed to access. Structured access, not open pipelines.",
    icon: ScanSearch,
  },
  {
    title: 'Role-aware access control',
    description:
      'Who can use what, in which context, with what visibility — defined before build, not after launch.',
    icon: Eye,
  },
  {
    title: 'Human review where it counts',
    description:
      'Full automation is a deliberate choice, not a default. We add checkpoints where accuracy or compliance matter.',
    icon: CheckCircle,
  },
];

export const faqs = [
  {
    question: 'Do you only build chatbots?',
    answer:
      'No. Chatbots are one service. We also build RAG systems, internal copilots, workflow automations, and full-stack GenAI products.',
  },
  {
    question: 'Can you build around our existing workflow?',
    answer:
      "Yes — that's the starting point. We map your current process before designing or building anything.",
  },
  {
    question: 'How do you handle sensitive data?',
    answer:
      'Open-source models on your infrastructure. E2E encryption. Guarded retrieval. Zero external data exposure.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Focused builds launch in 2 weeks. Larger products are scoped in discovery.',
  },
  {
    question: 'Do you handle design and development?',
    answer:
      'Yes. UI/UX, full-stack engineering, and AI integration — one team, one process.',
  },
];

export const teamMembers = [
  {
    name: 'Sidra Saleem',
    role: 'CEO & Product Manager',
    focus: 'Product direction, strategy, full-stack development',
  },
  {
    name: 'Summiya Ali',
    role: 'COO',
    focus: 'Operations, delivery flow, client coordination',
  },
  {
    name: 'Sumrun Fatima',
    role: 'Assistant Product Manager',
    focus: 'Research, planning, execution',
  },
  {
    name: 'Zobia Asad',
    role: 'Marketing Manager & Content Creator',
    focus: 'Brand, outreach, content',
  },
  {
    name: 'Aqsa',
    role: 'AI Engineer',
    focus: 'AI/ML development and model integration',
  },
  {
    name: 'Tayyaba',
    role: 'Full-Stack Developer',
    focus: 'Frontend and backend engineering',
  },
  {
    name: 'Hira',
    role: 'UI/UX Designer',
    focus: 'Design systems, experience, interface',
  },
];

export const openRoles = [
  {
    title: 'Sales Manager',
    description:
      'Own client acquisition, proposals, and negotiations for B2B service packages.',
    tag: 'Revenue-critical',
  },
  {
    title: 'CTO',
    description:
      'Shape technical direction and long-term architecture for B2B and B2C products.',
    tag: 'Technical leadership',
  },
];

export const contactChannels = ['akss.ai.support@gmail.com'];

export const b2cApps = [
  {
    title: 'Mindful Me',
    tagline: 'Your moods. Your patterns. Your privacy.',
    description:
      "Discover emotional patterns you've never noticed. Your AI remembers your journey, recognizes triggers, and helps you understand yourself — fully encrypted, never shared.",
    icon: Heart,
  },
  {
    title: 'SkyLimits',
    tagline: 'Your goals. Your AI coach. Your data.',
    description:
      'Set goals and get AI guidance that adapts to how you actually work — not a generic productivity template.',
    icon: ListTodo,
  },
  {
    title: 'InsightEd',
    tagline: 'Your learning. Your pace. Your AI tutor.',
    description:
      "An AI that learns how you learn. Adaptive study tools and personalized revision — remembers everything you've covered.",
    icon: BookOpen,
  },
];
