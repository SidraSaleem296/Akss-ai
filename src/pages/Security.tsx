import { Check, LockKeyhole, ScanSearch, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';

const securityPillars = [
  {
    title: 'Private knowledge workflows',
    description:
      'When a product uses internal documentation, team knowledge, or sensitive business information, retrieval needs to be structured and intentional.',
    icon: ScanSearch,
  },
  {
    title: 'Access and control awareness',
    description:
      'The goal is not just to connect data to AI. It is to shape who can use what, in which context, and with what level of visibility.',
    icon: LockKeyhole,
  },
  {
    title: 'Review paths where trust matters',
    description:
      'For workflows where accuracy, tone, or responsibility matter, human-in-the-loop review helps reduce avoidable risk.',
    icon: ShieldCheck,
  },
];

const Security = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Security"
        title="Security-conscious AI for businesses that need more control."
        description="AKSS AI treats security as part of product design, not as a late-stage patch. For private knowledge systems, internal copilots, and sensitive workflows, we focus on structure, guarded access, and responsible output handling."
        actions={[
          { label: 'Tell Us About Your Workflow', to: '/contact' },
          { label: 'See Solutions', to: '/solutions', variant: 'secondary' },
        ]}
      >
        <div className="soft-card soft-card-dark p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.42]">
            Security posture
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/[0.62]">
            {[
              'Guarded retrieval workflows',
              'Private-document use case design',
              'Human-reviewed output paths',
              'Architecture matched to the business context',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-teal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="Security principles"
          title="AI adoption should feel deliberate, not reckless."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div key={pillar.title} className="soft-card soft-card-dark p-6" data-card>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#8AA3FF]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/[0.62]">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="Implementation notes"
          title="What this means in practice."
          description="Security requirements vary by business, which is why AKSS AI avoids pretending every use case should be deployed the same way."
          tone="light"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {[
            'Choose the right architecture for the sensitivity of the workflow.',
            'Separate public-facing experiences from private internal knowledge flows.',
            'Design prompts, retrieval, and access layers together instead of in isolation.',
            'Introduce human review where reliability matters more than full automation.',
          ].map((item) => (
            <div key={item} className="soft-card soft-card-light flex gap-4 p-5" data-card>
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
                <Check className="h-4 w-4" />
              </div>
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default Security;
