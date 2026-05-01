import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { openRoles, teamMembers, taglines } from '../content/siteContent';

const About = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="About"
        title="A women-led AI product studio from Pakistan — building globally."
        description="We built AKSS AI around one belief: AI products should adapt to people, not the other way around. Our team combines product strategy, UI/UX design, AI engineering, and full-stack delivery — and we keep it all under one roof so nothing gets lost between vendors."
        actions={[{ label: 'Contact Us', to: '/contact' }]}
      />

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading eyebrow="The team" title="Seven people. One connected process." />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="soft-card soft-card-dark p-6" data-card>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-mist">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-white/[0.62]">{member.focus}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="We're hiring"
          title="Two open roles that matter right now."
          tone="light"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {openRoles.map((role) => (
            <div key={role.title} className="soft-card soft-card-light p-6" data-card>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {role.title}
                </h3>
                <span className="rounded-full border border-midnight/20 bg-midnight/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-midnight">
                  {role.tag}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 soft-card soft-card-light p-6">
          <p className="text-sm leading-7 text-slate-600">
            Interested? Email us at{' '}
            <a
              href="mailto:akss.ai.support@gmail.com"
              className="font-medium text-midnight underline"
            >
              akss.ai.support@gmail.com
            </a>{' '}
            with your background and why you think you'd be a good fit.
          </p>
        </div>
      </PageSection>

      <PageSection tone="dark">
        <div className="max-w-2xl">
          <span className="eyebrow eyebrow-dark">Our approach</span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {taglines.positioning}
          </h2>
          <p className="mt-6 text-base leading-7 text-white/[0.68]">
            That's not just positioning. It's the actual workflow — discovery before features,
            design before build, and testing before launch.
          </p>
        </div>
      </PageSection>
    </div>
  );
};

export default About;
