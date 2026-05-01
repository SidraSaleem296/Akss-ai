import { useRef } from 'react';
import { ArrowRight, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FaqAccordion from '../components/FaqAccordion';
import PageSection, { SectionHeading } from '../components/PageSection';
import MagneticButton from '../components/MagneticButton';
import {
  differentiators,
  faqs,
  heroHighlights,
  heroNodes,
  industries,
  painPoints,
  processSteps,
  services,
  teamMembers,
} from '../content/siteContent';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        // Ensure elements are visible even without animations
        gsap.set('[data-node]', { opacity: 1 });
        gsap.set('.hero-orb', { opacity: 1 });
        return;
      }

      const introTimeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      introTimeline
        .from('.hero-line', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.1,
        })
        .from(
          '[data-hero-copy]',
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
          },
          0.3,
        )
        .from(
          '[data-hero-cta]',
          {
            opacity: 0,
            y: 18,
            duration: 0.5,
            stagger: 0.1,
          },
          0.45,
        )
        .from(
          '[data-hero-badge]',
          {
            opacity: 0,
            y: 12,
            duration: 0.42,
            stagger: 0.05,
          },
          0.2,
        )
        .from(
          '.hero-orb',
          {
            opacity: 0,
            scale: 0.9,
            duration: 1,
          },
          0.24,
        )
        .from(
          '[data-node]',
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.08,
          },
          0.4,
        );

      gsap.to('.hero-orbit', {
        rotation: 360,
        duration: 50,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('[data-node]', {
        rotation: -360,
        duration: 50,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('[data-node]', {
        scale: 1.05,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.2,
          from: 'start',
        },
      });

      gsap.to('.hero-spotlight', {
        xPercent: -18,
        yPercent: 12,
        rotation: -10,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.utils.toArray<HTMLElement>('[data-scene]').forEach((scene) => {
        gsap.from(scene, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: scene,
            start: 'top 82%',
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-card]').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <section className="page-shell overflow-visible pt-2 sm:pt-4">
        <div
          className="scene-card scene-card-hero scene-dark scene-grid-dark px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16"
          data-scene
        >
          <div className="hero-spotlight absolute right-[-8%] top-[-18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(138,163,255,0.55)_0%,rgba(76,47,207,0.12)_38%,transparent_72%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,168,150,0.08),transparent_26%)]" />

          <div className="relative grid gap-12 overflow-visible lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow-dark" data-hero-badge>
                Women-led AI product studio
              </span>

              <h1 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.06em] sm:text-4xl md:text-5xl lg:text-[3.8rem]">
                <span className="hero-line block">We build AI products</span>
                <span className="hero-line block">around the way</span>
                <span className="hero-line block text-white/[0.72]">
                  your business works.
                </span>
              </h1>

              <p data-hero-copy className="mt-6 max-w-xl text-base leading-7 text-white/[0.68] sm:text-lg">
                AKSS AI designs and builds secure RAG systems, AI chatbots, workflow
                automations, and full-stack GenAI products for startups, SMEs, and
                modern digital businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton to="/contact" className="button-primary" data-hero-cta>
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  to="/solutions"
                  className="button-secondary button-secondary-dark"
                  data-hero-cta
                >
                  Explore Solutions
                </MagneticButton>
              </div>

              <div className="mt-8 grid max-w-xl gap-3 grid-cols-1 sm:grid-cols-3">
                {[
                  'Custom-built around real workflows',
                  'Human-reviewed delivery paths',
                  'Security-conscious product design',
                ].map((item) => (
                  <div
                    key={item}
                    className="soft-card soft-card-dark px-4 py-4 text-sm leading-6 text-white/[0.66]"
                    data-card
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-[600px] items-center justify-center overflow-visible px-4 sm:px-0">
              <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(138,163,255,0.24),transparent_60%)] blur-3xl" />
              <div className="hero-orb relative z-10 flex h-48 w-48 items-center justify-center rounded-full border border-white/[0.12] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),rgba(76,47,207,0.18),rgba(6,8,22,0.9))] shadow-glow-strong sm:h-56 sm:w-56 md:h-64 md:w-64">
                <div className="absolute inset-4 sm:inset-5 rounded-full border border-white/[0.12]" />
                <div className="absolute inset-8 sm:inset-10 rounded-full border border-white/[0.08]" />
                <div className="absolute h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(138,163,255,0.32),transparent_72%)] blur-xl" />
                <div className="relative text-center px-4">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.48]">
                    AKSS AI
                  </span>
                  <p className="mt-2 sm:mt-3 text-base sm:text-xl font-semibold tracking-[-0.04em] text-white">
                    Workflow Core
                  </p>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/[0.55]">Design + automation + GenAI</p>
                </div>
              </div>

              <div className="hero-orbit absolute inset-0 pointer-events-none overflow-visible" style={{ zIndex: 100 }}>
                {heroNodes.map((node) => {
                  // Responsive radius: smaller on mobile, larger on desktop
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                  const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
                  const radius = isMobile ? 140 : isTablet ? 180 : 250;
                  const angleRad = (node.angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;

                  return (
                    <div
                      key={node.label}
                      className="soft-card soft-card-dark absolute px-2 py-1.5 text-[10px] sm:px-3 sm:py-2.5 sm:text-xs font-medium text-white pointer-events-auto shadow-glow-strong"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        zIndex: 100,
                        opacity: 1,
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.12), 0 0 40px rgba(138,163,255,0.4), 0 20px 50px rgba(5, 8, 22, 0.4)',
                      }}
                      data-node
                    >
                      <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                        <span className="block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal shadow-[0_0_16px_rgba(0,168,150,0.9)]" />
                        <span className="whitespace-nowrap text-center leading-tight">{node.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageSection tone="dark" className="scene-grid-dark">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Why teams come to AKSS AI"
              title="Most businesses know they need AI. Very few know how to apply it safely and well."
              description="Growing teams often deal with repetitive manual work, scattered knowledge, disconnected tools, and no clear path from AI idea to dependable product."
            />

            <div className="mt-8 space-y-4">
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
          </div>

          <div className="grid gap-4 self-start">
            <div className="soft-card soft-card-dark relative overflow-hidden p-6 sm:p-7" data-card>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,163,255,0.16),transparent_35%)]" />
              <div className="relative">
                <span className="eyebrow eyebrow-dark">What we ship</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                  Custom systems that connect business logic, interface, and AI behavior.
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {services.slice(0, 4).map((service) => (
                    <div
                      key={service.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="text-sm font-semibold text-white">{service.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/[0.58]">{service.bullets[0]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="soft-card soft-card-dark p-6" data-card>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-teal" />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.48]">
                    Security-aware
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/[0.62]">
                  Private documents, internal knowledge, and client-sensitive workflows are
                  handled through more deliberate system design.
                </p>
              </div>

              <div className="soft-card soft-card-dark p-6" data-card>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#8AA3FF]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.48]">
                    Human + AI
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/[0.62]">
                  Delivery stays practical because automation is paired with human review
                  where accuracy and tone matter most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection tone="dark" className="scene-grid-dark">
        <SectionHeading
          eyebrow="How the studio works"
          title="A workflow-first delivery system from discovery to launch."
          description="AKSS AI combines product strategy, interface design, AI engineering, and full-stack delivery in one connected flow."
          centered
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const gradients = [
              'bg-[radial-gradient(circle_at_top_right,rgba(138,163,255,0.14),transparent_65%)]',
              'bg-[radial-gradient(circle_at_top_right,rgba(76,47,207,0.16),transparent_65%)]',
              'bg-[radial-gradient(circle_at_top_right,rgba(0,168,150,0.14),transparent_65%)]',
              'bg-[radial-gradient(circle_at_top_right,rgba(93,116,255,0.12),transparent_65%)]',
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
                    <div className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_12px_rgba(0,168,150,0.6)]" />
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
          eyebrow="Industries and use cases"
          title="Built for teams with real operational pressure, real customers, and real workflows."
          description="The AKSS AI model fits businesses that need more than a simple chatbot or a generic automation template."
          tone="light"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const colors = [
              'bg-gradient-to-br from-royal to-purple',
              'bg-gradient-to-br from-teal to-[#00A896]',
              'bg-gradient-to-br from-purple to-royal',
              'bg-gradient-to-br from-amber to-[#FFB627]',
              'bg-gradient-to-br from-midnight to-royal',
              'bg-gradient-to-br from-[#00A896] to-teal',
            ];

            return (
              <div
                key={industry.title}
                className="soft-card soft-card-light p-5 shadow-float"
                data-card
              >
                <div className={['flex h-11 w-11 items-center justify-center rounded-2xl text-white', colors[index]].join(' ')}>
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
        <SectionHeading
          eyebrow="What we build"
          title="AI systems that move from idea to dependable product."
          description="From secure knowledge assistants to custom SaaS platforms, AKSS AI helps teams ship with fewer handoffs and stronger design quality."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;
            const isSecondary = index === 1 || index === 2;

            return (
              <div
                key={service.title}
                className={[
                  'soft-card soft-card-dark p-6',
                  isFeatured ? 'lg:col-span-2 xl:col-span-2' : '',
                ].join(' ')}
                data-card
              >
                <div className={[
                  'flex items-center justify-center rounded-2xl border border-white/10 bg-white/5',
                  isFeatured ? 'h-14 w-14 text-[#8AA3FF]' : 'h-12 w-12 text-white/70',
                ].join(' ')}>
                  <Icon className={isFeatured ? 'h-6 w-6' : 'h-5 w-5'} />
                </div>
                <h3 className={[
                  'font-semibold tracking-[-0.04em] text-white',
                  isFeatured ? 'mt-6 text-3xl' : 'mt-6 text-xl',
                ].join(' ')}>
                  {service.title}
                </h3>
                <p className={[
                  'leading-7 text-white/[0.62]',
                  isFeatured ? 'mt-4 text-base' : 'mt-3 text-sm',
                ].join(' ')}>
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-white/[0.62]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-teal" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="light" className="scene-grid-light">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Why AKSS AI"
              title="One studio for strategy, interface design, AI engineering, and delivery."
              description="The AKSS AI positioning is stronger than a standard agency model because the team listens to the workflow, shapes the product around it, and then builds the system end to end."
              tone="light"
            />

            <div className="mt-8 space-y-4">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                const iconColors = [
                  'bg-gradient-to-br from-purple to-royal text-white',
                  'bg-gradient-to-br from-teal to-[#00D9C3] text-white',
                  'bg-gradient-to-br from-royal to-midnight text-white',
                  'bg-gradient-to-br from-amber to-[#FFA000] text-white',
                ];

                return (
                  <div
                    key={item.title}
                    className="soft-card soft-card-light flex items-start gap-4 p-5"
                    data-card
                  >
                    <div className={['flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl', iconColors[index]].join(' ')}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {teamMembers.slice(0, 4).map((member) => (
              <div
                key={member.name}
                className="soft-card soft-card-light p-5"
                data-card
              >
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Core Team
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection tone="dark" className="scene-grid-dark">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Clear answers before we build anything."
            description="Most early-stage AI projects go wrong when the scope stays vague. These are the questions teams usually ask before starting."
          />
          <FaqAccordion items={faqs} />
        </div>
      </PageSection>

      <PageSection tone="light">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="eyebrow eyebrow-light">Ready when you are</span>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Ready to turn your workflow into a real AI product?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Whether you need a secure assistant, a customer-facing chatbot, or a full
              custom SaaS build, AKSS AI can help you move from scattered ideas to a
              product that actually works.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <MagneticButton to="/contact" className="button-primary">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
            <MagneticButton to="/solutions" className="button-secondary button-secondary-light">
              See Our Services
            </MagneticButton>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default Home;
