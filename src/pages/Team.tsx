import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { openRoles, teamMembers } from '../content/siteContent';

const Team = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Team"
        title="Meet the people building AKSS AI."
        description="AKSS AI brings together product management, operations, design, development, AI engineering, and content strategy so the studio can move from discovery to delivery with stronger consistency."
        actions={[
          { label: 'Start a Project', to: '/contact' },
          { label: 'About AKSS AI', to: '/about', variant: 'secondary' },
        ]}
      >
        <div className="soft-card soft-card-dark p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.42]">
            Studio structure
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Product leadership', 'Operations', 'AI engineering', 'Design + development'].map(
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

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="Core team"
          title="A compact team with complementary strengths across delivery."
          tone="light"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="soft-card soft-card-light p-5" data-card>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                AKSS AI
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-700">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{member.focus}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="dark">
        <SectionHeading
          eyebrow="Open roles"
          title="The next hires should strengthen growth and technical direction."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {openRoles.map((role) => (
            <div key={role.title} className="soft-card soft-card-dark p-6" data-card>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {role.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/[0.62]">{role.description}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default Team;
