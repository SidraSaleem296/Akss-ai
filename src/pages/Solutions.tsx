import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { industries, processSteps, services } from '../content/siteContent';

const Solutions = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Solutions"
        title="Custom AI solutions built for business workflows."
        description="From secure knowledge assistants to full-stack GenAI products, AKSS AI builds systems that solve practical business problems with stronger usability, cleaner design, and better implementation depth."
        actions={[
          { label: 'Book a Discovery Call', to: '/contact' },
          { label: 'See Features', to: '/features', variant: 'secondary' },
        ]}
      >
        <div className="soft-card soft-card-dark p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.42]">
            Studio stack
          </p>
          <div className="mt-5 grid gap-3">
            {['Secure RAG systems', 'Workflow automation', 'AI chatbots', 'Custom GenAI SaaS'].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/[0.68]"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </PageHero>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="Core offers"
          title="AI products and systems designed around what your team actually needs."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="soft-card soft-card-dark p-6" data-card>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#8AA3FF]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/[0.62]">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/[0.62]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-teal" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="How delivery works"
          title="A product-led process from workflow discovery to launch-ready build."
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

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="Use cases"
          title="The strongest fit is where workflow complexity meets growth pressure."
          description="AKSS AI works best for teams that have real operating friction, repeatable user journeys, or private knowledge they want to use more intelligently."
          tone="light"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div key={industry.title} className="soft-card soft-card-light p-5" data-card>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {industry.focus}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="dark">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow-dark">Next step</span>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Need help deciding which AI solution fits your workflow?
            </h2>
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
