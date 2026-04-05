import type { LucideIcon } from 'lucide-react';
import {
  Blocks,
  Bot,
  Building2,
  DollarSign,
  FileSearch,
  GraduationCap,
  LayoutDashboard,
  MessageSquareMore,
  Orbit,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Store,
  Stethoscope,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Features', path: '/features' },
  { label: 'Security', path: '/security' },
  { label: 'About', path: '/about' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

export const heroHighlights = [
  'Secure RAG',
  'AI Chatbots',
  'Workflow Automation',
  'Full-Stack SaaS',
  'UI/UX Design',
];

export const heroNodes = [
  { label: 'Secure RAG Systems', angle: 0 },
  { label: 'AI Chatbots', angle: 45 },
  { label: 'Workflow Automation', angle: 90 },
  { label: 'Custom GenAI SaaS', angle: 135 },
  { label: 'Reduce Costs with AI', angle: 180 },
  { label: '24/7 AI Workforce', angle: 225 },
  { label: 'Instant Insights', angle: 270 },
  { label: 'Customer Intelligence', angle: 315 },
];

export const painPoints = [
  {
    title: 'AI adoption feels fragmented',
    description:
      'Businesses test scattered tools, but none of them match the actual workflow, team structure, or customer journey.',
  },
  {
    title: 'Repetitive work keeps slowing growth',
    description:
      'Support requests, manual follow-ups, content operations, and internal task loops steal time from strategy and delivery.',
  },
  {
    title: 'Sensitive data needs control',
    description:
      'Teams want practical AI support, but private documents, internal knowledge, and customer data require a safer setup.',
  },
  {
    title: 'Execution gets split across vendors',
    description:
      'Strategy, design, engineering, and AI integration often live in separate hands, which makes shipping slower and messier.',
  },
];

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export const services: ServiceItem[] = [
  {
    title: 'Secure RAG Systems',
    description:
      'Private knowledge assistants and internal copilots built around your documents, workflows, and access needs.',
    icon: ScanSearch,
    bullets: ['Document Q&A', 'Knowledge copilots', 'Protected retrieval layers'],
  },
  {
    title: 'AI Chatbots',
    description:
      'Website and messaging assistants that answer questions, guide visitors, capture leads, and reduce response load.',
    icon: Bot,
    bullets: ['Website chat', 'WhatsApp support', 'Lead capture flows'],
  },
  {
    title: 'Workflow Automation',
    description:
      'Operational automations for repetitive internal work across support, sales, marketing, and delivery.',
    icon: Workflow,
    bullets: ['Process mapping', 'Task automation', 'Human-in-the-loop review'],
  },
  {
    title: 'Custom GenAI SaaS',
    description:
      'AI-native products, portals, and internal tools designed around the way your business actually operates.',
    icon: LayoutDashboard,
    bullets: ['Internal tools', 'Client-facing SaaS', 'Full-stack delivery'],
  },
  {
    title: 'Product Design and UX',
    description:
      'Research, interface systems, and product flows that make complex AI experiences feel simple and usable.',
    icon: Orbit,
    bullets: ['UX strategy', 'Wireframes', 'Design systems'],
  },
  {
    title: 'Multi-Platform Delivery',
    description:
      'Launch across web, mobile, desktop, and browser environments depending on where your users work best.',
    icon: Blocks,
    bullets: ['Web apps', 'Mobile flows', 'Browser extensions'],
  },
];

export const processSteps = [
  {
    title: 'Discover the workflow',
    description:
      'We learn how the business works today, what the friction points are, and where AI can actually help.',
  },
  {
    title: 'Design the product',
    description:
      'We shape user journeys, feature logic, interface direction, and the architecture behind the experience.',
  },
  {
    title: 'Build the system',
    description:
      'We combine design, engineering, and AI integration into one connected delivery process.',
  },
  {
    title: 'Refine and support',
    description:
      'We test, improve, and add review layers so the final product is dependable and ready to scale.',
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
    title: 'Clinics and service businesses',
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
    title: 'Operations-heavy teams',
    description:
      'Internal dashboards, repetitive task automation, and secure assistants for real process pressure.',
    focus: 'Efficiency + control',
    icon: Building2,
  },
];

export const differentiators = [
  {
    title: 'Women-led and product-minded',
    description:
      'AKSS AI blends management, design thinking, and engineering into a sharper, more thoughtful build process.',
    icon: Users,
  },
  {
    title: 'Workflow-first implementation',
    description:
      'We start with the business flow, not with a random tool stack or feature wishlist.',
    icon: FileSearch,
  },
  {
    title: 'Human + AI quality control',
    description:
      'Critical outputs can be reviewed and shaped through human-in-the-loop checkpoints.',
    icon: MessageSquareMore,
  },
  {
    title: 'Security-aware by design',
    description:
      'Private knowledge, internal documents, and sensitive use cases are treated with deliberate structure.',
    icon: ShieldCheck,
  },
];

export const faqs = [
  {
    question: 'What kind of businesses do you work with?',
    answer:
      'We primarily work with startups, SMEs, and digital businesses that need custom AI systems, workflow automation, or a product built around a real operational challenge.',
  },
  {
    question: 'Do you only build chatbots?',
    answer:
      'No. Chatbots are one part of the offer. We also build secure RAG systems, internal copilots, workflow automations, and full-stack GenAI SaaS products.',
  },
  {
    question: 'Can you build around our existing workflow?',
    answer:
      'Yes. That is a core part of the AKSS AI model. We study how your process already works, then design and engineer around that reality.',
  },
  {
    question: 'Do you handle both design and development?',
    answer:
      'Yes. AKSS AI combines product thinking, UI/UX design, full-stack development, and AI integration inside one delivery process.',
  },
  {
    question: 'How do you approach data-sensitive use cases?',
    answer:
      'For the right projects, we use guarded retrieval workflows, structured access, and review layers so AI output remains more controlled and context-aware.',
  },
];

export const teamMembers = [
  {
    name: 'Sidra Saleem',
    role: 'CEO, Product Manager & Lead Full Stack Developer',
    focus: 'Product direction, strategy, discovery, and full-stack development',
  },
  {
    name: 'Summiya Ali',
    role: 'COO and Project Operations Manager',
    focus: 'Operations, delivery flow, coordination',
  },
  {
    name: 'Sumrun Fatima',
    role: 'Assistant Product Manager',
    focus: 'Research support, product planning, execution',
  },
  {
    name: 'Zobia Asad',
    role: 'Marketing Manager and Content Creator',
    focus: 'Brand storytelling, outreach, content',
  },
];

export const openRoles = [
  {
    title: 'Sales Manager',
    description:
      'Lead outreach, proposals, negotiations, and early client acquisition for service packages and product builds.',
  },
  {
    title: 'CTO',
    description:
      'Shape technical direction, platform standards, and the long-term architecture of AKSS AI offerings.',
  },
];

export const contactChannels = [
  'akss.ai.support@gmail.com',
];

export const studioModel = [
  {
    title: 'Stage 1: Service + automation',
    description:
      'Start with custom services that solve immediate workflow pain and create a direct feedback loop with real clients.',
    icon: Workflow,
  },
  {
    title: 'Stage 2: Productized client tools',
    description:
      'Turn repeated patterns into stronger internal systems, reusable accelerators, and faster delivery frameworks.',
    icon: TrendingUp,
  },
  {
    title: 'Stage 3: SaaS evolution',
    description:
      'Productize the strongest use cases into subscription-ready AI software once the market need is validated.',
    icon: LayoutDashboard,
  },
];
