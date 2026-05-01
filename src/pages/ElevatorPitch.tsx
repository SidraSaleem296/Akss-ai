import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { studioModel } from '../content/siteContent';

const ElevatorPitch = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Studio model"
        title="AKSS AI is best understood as an AI product studio, not just a service vendor."
        description="The business model starts with workflow discovery and custom delivery, then evolves into stronger reusable systems and productized software once real patterns are validated."
        actions={[
          { label: 'Start a Project', to: '/contact' },
          { label: 'About the Studio', to: '/about', variant: 'secondary' },
        ]}
      >
        <div className="soft-card soft-card-dark p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.42]">
            Positioning line
          </p>
          <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">
            Custom GenAI SaaS Builder for business workflows
          </p>
          <p className="mt-3 text-sm leading-7 text-white/[0.62]">
            We design and build software around the way a business already works rather
            than forcing the business to adapt to generic tools.
          </p>
        </div>
      </PageHero>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="Growth path"
          title="The smartest version of the business scales in stages."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {studioModel.map((stage) => {
            const Icon = stage.icon;

            return (
              <div key={stage.title} className="soft-card soft-card-dark p-6" data-card>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#8AA3FF]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/[0.62]">{stage.description}</p>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="Why this model works"
          title="It creates revenue, feedback, and product learning at the same time."
          description="Custom project work gives AKSS AI a way to understand demand deeply before pushing too early into product-only bets."
          tone="light"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {[
            'Sell services first to generate cash flow and market insight.',
            'Study repeated workflow problems and turn them into reusable accelerators.',
            'Productize only after the strongest use cases are validated through delivery.',
            'Keep product, pricing, team, and technology aligned as the company grows.',
          ].map((item) => (
            <div key={item} className="soft-card soft-card-light p-5" data-card>
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default ElevatorPitch;
