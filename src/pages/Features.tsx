import { Check, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { differentiators, services } from '../content/siteContent';

const featureGroups = [
  {
    title: 'Workflow-first architecture',
    points: [
      'Custom product flows instead of generic software templates',
      'AI behavior aligned with business logic and user journeys',
      'Practical implementation designed around real operational pressure',
    ],
  },
  {
    title: 'Secure-by-design thinking',
    points: [
      'Guarded retrieval workflows for private knowledge use cases',
      'Controlled access patterns where internal data matters',
      'Human review layers when trust and accuracy need extra care',
    ],
  },
  {
    title: 'Product design + engineering in one team',
    points: [
      'UI/UX, AI integration, and full-stack delivery under one roof',
      'Fewer handoffs between strategy, interface, and implementation',
      'Cleaner launch readiness with stronger consistency across the product',
    ],
  },
];

const Features = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Features"
        title="Built for speed, clarity, and practical AI adoption."
        description="AKSS AI is structured to help businesses move from ideas and friction points to well-shaped, launch-ready systems without juggling separate design, engineering, and AI vendors."
        tone="light"
        actions={[
          { label: 'Explore Solutions', to: '/solutions' },
          { label: 'Security Approach', to: '/security', variant: 'secondary' },
        ]}
      >
        <div className="grid gap-3">
          {[
            { icon: Workflow, label: 'Workflow-first system design' },
            { icon: ShieldCheck, label: 'Private data aware architecture' },
            { icon: Sparkles, label: 'Human-in-the-loop delivery' },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="soft-card soft-card-light flex items-center gap-4 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-slate-700">{item.label}</p>
              </div>
            );
          })}
        </div>
      </PageHero>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="Feature groups"
          title="The product studio model gives AKSS AI a stronger operating system than a standard AI agency."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featureGroups.map((group) => (
            <div key={group.title} className="soft-card soft-card-dark p-6" data-card>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-white/[0.62]">
                {group.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 leading-7">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="Delivery surface"
          title="Feature depth matched with service breadth."
          description="The AKSS AI offer spans interface design, AI logic, and full-stack implementation, which makes the final product feel more coherent."
          tone="light"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="soft-card soft-card-light p-5" data-card>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light">
        <SectionHeading
          eyebrow="Why it matters"
          title="Better structure in the build phase usually means less friction in the product later."
          tone="light"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {differentiators.slice(0, 2).map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="soft-card soft-card-light flex gap-4 p-6" data-card>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>
    </div>
  );
};

export default Features;
