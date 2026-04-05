import type { ReactNode } from 'react';

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
};

const PageSection = ({
  children,
  className = '',
  tone = 'dark',
}: PageSectionProps) => {
  const toneClass = tone === 'light' ? 'scene-light' : 'scene-dark';

  return (
    <section className="page-shell mt-8 sm:mt-10">
      <div className={['scene-card p-8 sm:p-10 lg:p-12', toneClass, className].join(' ')} data-scene>
        {children}
      </div>
    </section>
  );
};

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: 'dark' | 'light';
  centered?: boolean;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  tone = 'dark',
  centered = false,
}: SectionHeadingProps) => {
  const eyebrowClass = tone === 'light' ? 'eyebrow eyebrow-light' : 'eyebrow eyebrow-dark';
  const titleClass = tone === 'light' ? 'text-slate-950' : 'text-white';
  const descriptionClass = tone === 'light' ? 'text-muted-light' : 'text-muted-dark';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <span className={eyebrowClass}>{eyebrow}</span> : null}
      <h2 className={['mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl', titleClass].join(' ')}>
        {title}
      </h2>
      {description ? (
        <p className={['mt-4 max-w-2xl text-base leading-7 sm:text-lg', descriptionClass, centered ? 'mx-auto' : ''].join(' ')}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default PageSection;
