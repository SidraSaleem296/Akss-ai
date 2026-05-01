import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type HeroAction = {
  label: string;
  to: string;
  variant?: 'primary' | 'secondary';
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: 'dark' | 'light';
  actions?: HeroAction[];
  children?: ReactNode;
};

const PageHero = ({
  eyebrow,
  title,
  description,
  tone = 'dark',
  actions = [],
  children,
}: PageHeroProps) => {
  const isLight = tone === 'light';

  return (
    <section className="page-shell pt-2 sm:pt-4">
      <div
        className={[
          'scene-card px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16',
          isLight ? 'scene-light' : 'scene-dark',
        ].join(' ')}
      >
        <div className="absolute inset-0 opacity-60">
          <div className={isLight ? 'scene-grid-light h-full w-full' : 'scene-grid-dark h-full w-full'} />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <span className={isLight ? 'eyebrow eyebrow-light' : 'eyebrow eyebrow-dark'}>
              {eyebrow}
            </span>
            <h1 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p
              className={[
                'mt-5 max-w-2xl text-base leading-7 sm:text-lg',
                isLight ? 'text-muted-light' : 'text-muted-dark',
              ].join(' ')}
            >
              {description}
            </p>

            {actions.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <Link
                    key={action.label}
                    to={action.to}
                    className={
                      action.variant === 'secondary'
                        ? [
                            'button-secondary',
                            isLight ? 'button-secondary-light' : 'button-secondary-dark',
                          ].join(' ')
                        : 'button-primary'
                    }
                  >
                    {action.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {children ? <div className="relative">{children}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
