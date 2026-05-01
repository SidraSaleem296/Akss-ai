import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { securityPillars, taglines } from '../content/siteContent';

const Security = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Security"
        title="Your data never leaves your control. By design."
        description="We use open-source AI on your own infrastructure with end-to-end encryption. No commercial APIs. No external data exposure. Your private documents, internal knowledge, and sensitive workflows stay on your terms — always."
        actions={[
          { label: 'Talk About Your Use Case', to: '/contact' },
          { label: 'See Solutions', to: '/solutions', variant: 'secondary' },
        ]}
      />

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="What you need to know"
          title="Most AI tools are sending your data somewhere you can't see."
        />

        <div className="mt-8 soft-card soft-card-dark p-6 lg:p-8" data-card>
          <p className="text-base leading-8 text-white/[0.72]">
            When you use ChatGPT, Claude API, or Gemini on your documents, that data is
            transmitted to external servers under commercial terms of service. For private business
            knowledge, financial records, or customer data — that is a structural risk, not a
            theoretical one.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
            How we're different:
          </h3>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div key={pillar.title} className="soft-card soft-card-dark p-6" data-card>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-mist">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/[0.62]">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light">
        <div className="max-w-2xl">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Questions about your specific use case?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Every business has different security needs. Tell us about your workflow and we'll
            explain exactly how we'd handle it.
          </p>
          <div className="mt-8">
            <a href="/contact" className="button-primary">
              Talk to Us About Your Workflow
            </a>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default Security;
