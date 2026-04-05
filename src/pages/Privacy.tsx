import PageHero from '../components/PageHero';
import PageSection from '../components/PageSection';

const privacySections = [
  {
    title: 'Information we receive',
    body:
      'AKSS AI may receive contact details, project requirements, workflow descriptions, and other information that a prospect or client chooses to share through direct communication, forms, or service delivery.',
  },
  {
    title: 'How information is used',
    body:
      'Information is used to understand business needs, respond to inquiries, scope projects, and improve the quality of communication and delivery. AKSS AI should only use client information in ways that are relevant to the engagement.',
  },
  {
    title: 'Security mindset',
    body:
      'Because AKSS AI works on automation, internal tools, and knowledge-based systems, privacy and access control should be treated seriously at every stage of the build process. The exact controls may vary by project.',
  },
  {
    title: 'Third-party tools',
    body:
      'Project workflows may involve hosting, analytics, form tools, AI APIs, or other third-party platforms. Final production policies should list the exact services used once the stack is finalized.',
  },
  {
    title: 'Important note',
    body:
      'This page is a draft website policy for launch preparation and should be reviewed by legal counsel before the site goes live in production.',
  },
];

const Privacy = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Privacy policy"
        title="A draft privacy policy page for the new AKSS AI website."
        description="This version gives the site a clear, professional privacy page while keeping the copy general enough to be reviewed and finalized with legal guidance later."
        tone="light"
      />

      <PageSection tone="light" className="scene-grid-light">
        <div className="grid gap-4 lg:grid-cols-2">
          {privacySections.map((section) => (
            <div key={section.title} className="soft-card soft-card-light p-6" data-card>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default Privacy;
