import { ArrowRight, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { b2cApps, taglines } from '../content/siteContent';

const PersonalAI = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Personal AI"
        title={taglines.b2c}
        description="Open-source AI that learns your patterns — mood, goals, learning — all encrypted, all yours."
        tone="light"
        actions={[{ label: 'Join the Beta', to: '/contact' }]}
      >
        <div className="soft-card soft-card-light p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {taglines.descriptor}
          </p>
        </div>
      </PageHero>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading eyebrow="The apps" title="Three tools. One personal AI layer." />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {b2cApps.map((app) => {
            const Icon = app.icon;

            return (
              <div key={app.title} className="soft-card soft-card-dark p-6" data-card>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-mist">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {app.title}
                </h3>
                <p className="mt-3 text-sm font-medium italic text-white/[0.78]">
                  {app.tagline}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/[0.62]">{app.description}</p>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="Why different"
          title="Personal AI that's actually yours."
          tone="light"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {[
            {
              title: 'Open-source AI',
              description: 'Never sent to external servers',
            },
            {
              title: 'Truly personal',
              description: 'Learns YOUR patterns, not generic ones',
            },
            {
              title: 'E2E encrypted',
              description: "Even we can't read your data",
            },
            {
              title: 'Unified',
              description: 'Mood, goals, and learning connected in one AI layer',
            },
          ].map((item) => (
            <div key={item.title} className="soft-card soft-card-light flex gap-4 p-6" data-card>
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="light">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Join the beta — Mindful Me, SkyLimits, and InsightEd.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Be among the first to experience personal AI that actually understands you.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="button-primary">
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default PersonalAI;
