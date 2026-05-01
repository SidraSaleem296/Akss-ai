import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { differentiators, processSteps } from '../content/siteContent';

const About = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="About AKSS AI"
        title="A women-led studio building practical AI products for modern businesses."
        description="AKSS AI was founded to make advanced technology more useful, accessible, and well-designed for growing businesses. Our work sits at the intersection of product strategy, interface design, engineering, and automation."
        tone="light"
        actions={[
          { label: 'Meet the Team', to: '/team' },
          { label: 'Contact Us', to: '/contact', variant: 'secondary' },
        ]}
      >
        <div className="soft-card soft-card-light p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Positioning
          </p>
          <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-950">
            AI Product Studio for business workflows
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We design and build custom AI-powered software tailored to how companies
            already operate instead of forcing them into generic tools.
          </p>
        </div>
      </PageHero>

      <PageSection tone="dark" className="scene-grid-dark">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Mission"
              title="Simplify complex AI for businesses that need usable systems, not just hype."
            />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/[0.64]">
              AKSS AI focuses on turning workflow complexity into clear, usable products.
              That can mean a secure RAG assistant, an internal automation tool, a
              customer-facing chatbot, or a full custom SaaS product.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Vision"
              title="Become one of Pakistan’s strongest women-founded AI solution companies."
            />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/[0.64]">
              We want AKSS AI to stand for trustworthy execution, thoughtful design,
              practical automation, and a calmer, more credible way to bring AI into real
              businesses.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="How we operate"
          title="A connected process from discovery to launch."
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

      <PageSection tone="light">
        <SectionHeading
          eyebrow="Why the model works"
          title="The difference is not just the tools. It is the way the product is shaped."
          tone="light"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {differentiators.map((item) => {
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

export default About;
