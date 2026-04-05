import PageHero from '../components/PageHero';
import PageSection from '../components/PageSection';

const termSections = [
  {
    title: 'Use of the site',
    body:
      'Visitors may use the AKSS AI website to learn about the studio, review service information, and contact the team about potential work. The site should not be used for unlawful or abusive activity.',
  },
  {
    title: 'Project scoping',
    body:
      'Information on the website is general and does not create a binding project agreement by itself. Final scope, delivery terms, timelines, and payment details should be defined in separate commercial documents.',
  },
  {
    title: 'Client responsibilities',
    body:
      'Clients are generally responsible for providing accurate project information, timely feedback, and any required access, content, or approvals needed to keep delivery moving.',
  },
  {
    title: 'Intellectual property and confidentiality',
    body:
      'Ownership, licensing, and confidentiality terms should be clearly defined for each project engagement. This public website page should be treated as a high-level draft, not a substitute for signed contractual terms.',
  },
  {
    title: 'Important note',
    body:
      'This terms page is a draft website version prepared for the site rebuild and should be reviewed by legal counsel before production launch.',
  },
];

const Terms = () => {
  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Terms"
        title="A clear draft terms page for the AKSS AI website."
        description="This page is designed to replace the old placeholder and give the site a more credible legal framework until final legal review is completed."
        tone="light"
      />

      <PageSection tone="light" className="scene-grid-light">
        <div className="grid gap-4 lg:grid-cols-2">
          {termSections.map((section) => (
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

export default Terms;
