import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { processSteps, services, taglines } from '../content/siteContent';

const Solutions = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Solutions"
        title="Every product starts with your workflow."
        description={taglines.positioning}
        actions={[{ label: 'Book a Discovery Call', to: '/contact' }]}
      />

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="Core offers"
          title="Six capabilities. Each one custom-scoped to your workflow."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="soft-card soft-card-dark p-6" data-card>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-mist">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/[0.62]">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/[0.62]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-mist" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {service.bestFor && (
                  <div className="mt-6 rounded-[18px] border border-white/10 bg-white/[0.02] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/[0.48]">
                      Best for
                    </p>
                    <p className="mt-2 text-sm text-white/[0.68]">{service.bestFor}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="How delivery works"
          title="Discovery to launch. One team, no handoffs."
          tone="light"
          centered
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="soft-card soft-card-light p-5" data-card>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="dark">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Not sure which solution fits?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/[0.68]">
              Tell us your workflow. We'll scope the right build together.
            </p>
          </div>
          <Link to="/contact" className="button-primary w-fit">
            Start the Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </PageSection>
    </div>
  );
};

export default Solutions;
