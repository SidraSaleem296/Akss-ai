import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FaqAccordion from '../components/FaqAccordion';
import PageSection, { SectionHeading } from '../components/PageSection';
import MagneticButton from '../components/MagneticButton';
import {
  differentiators,
  faqs,
  industries,
  painPoints,
  processSteps,
  services,
  taglines,
} from '../content/siteContent';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        return;
      }

      gsap.to('.hero-spotlight', {
        xPercent: -18,
        yPercent: 12,
        rotation: -10,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <section className="page-shell overflow-visible pt-2 sm:pt-4">
        <div
          className="scene-card scene-card-hero scene-dark scene-grid-dark px-3 py-6 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 xl:px-12 xl:py-16"
          data-scene
        >
          <div className="hero-spotlight absolute right-[-8%] top-[-18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(184,203,196,0.55)_0%,rgba(21,45,53,0.14)_38%,transparent_72%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,203,196,0.12),transparent_26%)]" />

          <div className="relative overflow-visible">
            <div className="rounded-[32px] border border-white/40 bg-[linear-gradient(145deg,rgba(246,248,248,0.94),rgba(217,222,226,0.84)_48%,rgba(184,203,196,0.76))] p-4 text-slate-950 shadow-[0_30px_80px_rgba(5,6,7,0.22)] backdrop-blur-2xl sm:p-6 md:p-8 lg:p-10 xl:p-14">
              <div className="overflow-visible">
                <div className="relative z-0">
                  <h1 className="max-w-xl text-2xl font-semibold leading-[1.08] tracking-[-0.06em] text-slate-950 sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.8rem]">
                    <span className="hero-line block">{taglines.b2b}</span>
                  </h1>

                  <p data-hero-copy className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
                    {taglines.positioning}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                    <MagneticButton to="/contact" className="button-primary" data-hero-cta>
                      Book a Free Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                    <MagneticButton
                      to="/solutions"
                      className="button-secondary button-secondary-light"
                      data-hero-cta
                    >
                      See Solutions
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="Why most AI fails"
          title="Generic tools don't adapt to you. We build AI that does."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {painPoints.map((item) => (
            <div
              key={item.title}
              className="soft-card soft-card-dark px-5 py-5"
              data-card
            >
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/[0.62]">{item.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="The process"
          title="Listen. Design. Build."
          centered
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const gradients = [
              'bg-[radial-gradient(circle_at_top_right,rgba(184,203,196,0.14),transparent_65%)]',
              'bg-[radial-gradient(circle_at_top_right,rgba(21,45,53,0.16),transparent_65%)]',
              'bg-[radial-gradient(circle_at_top_right,rgba(15,32,38,0.14),transparent_65%)]',
              'bg-[radial-gradient(circle_at_top_right,rgba(217,222,226,0.16),transparent_65%)]',
            ];

            return (
              <div
                key={step.title}
                className="soft-card soft-card-dark relative overflow-hidden p-6"
                data-card
              >
                <div className={['absolute inset-0', gradients[index]].join(' ')} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.42]">
                      0{index + 1}
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-mist shadow-[0_0_12px_rgba(184,203,196,0.6)]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.62]">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="Services"
          title="Six capabilities. One connected delivery."
          tone="light"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="soft-card soft-card-light p-5 shadow-float"
                data-card
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.shortDescription}</p>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="Why us"
          title="One studio. Strategy, design, AI, and delivery — no handoffs."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="soft-card soft-card-dark flex items-start gap-4 p-5"
                data-card
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-mist">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/[0.62]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <SectionHeading
          eyebrow="Who we build for"
          title="Built for teams with real operational pressure, real customers, and real workflows."
          tone="light"
          centered
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="soft-card soft-card-light p-5 shadow-float"
                data-card
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
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

      <PageSection tone="dark" className="scene-grid-dark">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Common questions"
            title="Clear answers before we build anything."
          />
          <FaqAccordion items={faqs} />
        </div>
      </PageSection>

      <PageSection tone="light">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Show us your workflow. We'll show you the product.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <MagneticButton to="/contact" className="button-primary">
              Book a Free Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default Home;
