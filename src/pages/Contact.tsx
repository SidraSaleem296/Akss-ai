import { FormEvent, useState, useRef } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import PageSection, { SectionHeading } from '../components/PageSection';
import { contactChannels } from '../content/siteContent';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSubmitted(false);

    const formData = new FormData(event.currentTarget);

    // Debug: Check if access key is loaded
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      setError('Form configuration error. Please contact us directly via email.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      console.log('Web3Forms response:', data); // Debug log

      // Check if submission was successful
      if (data.success === true || data.success === 'true') {
        setSubmitted(true);
        setError('');
        // Reset form using ref
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setSubmitted(false);
        setError(data.message || 'Something went wrong. Please try again.');
        console.error('Web3Forms error:', data);
      }
    } catch (err) {
      setSubmitted(false);
      setError('Failed to send message. Please try the direct email contact below.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 pb-8 sm:space-y-10 sm:pb-10">
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build."
        description="Share your workflow, product idea, or automation challenge and we will help shape the right direction for it."
        actions={[
          { label: 'See Solutions', to: '/solutions' },
          { label: 'Meet the Team', to: '/team', variant: 'secondary' },
        ]}
      >
        <div className="soft-card soft-card-dark p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.42]">
            Typical starting points
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/[0.62]">
            <li>Secure knowledge assistant for internal teams</li>
            <li>AI chatbot for customer support or lead capture</li>
            <li>Automation for repetitive operational workflows</li>
            <li>Custom GenAI SaaS product or internal portal</li>
          </ul>
        </div>
      </PageHero>

      <PageSection tone="light" className="scene-grid-light">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Project form"
              title="Start the conversation with the workflow, not just the feature list."
              tone="light"
            />

            <form ref={formRef} className="mt-8 grid gap-4" onSubmit={handleSubmit}>
              {/* Web3Forms Access Key - Loaded from environment variable */}
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Project Inquiry from AKSS AI Website" />
              <input type="hidden" name="from_name" value="AKSS AI Contact Form" />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input
                    className="rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-midnight"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Company</span>
                  <input
                    className="rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-midnight"
                    name="company"
                    placeholder="Your company"
                    disabled={isSubmitting}
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  className="rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-midnight"
                  name="email"
                  placeholder="you@company.com"
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">What are you trying to build?</span>
                <input
                  className="rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-midnight"
                  name="project_scope"
                  placeholder="Example: secure internal knowledge assistant"
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">
                  What workflow or pain point do you want to solve?
                </span>
                <textarea
                  className="min-h-[180px] rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-midnight"
                  name="message"
                  placeholder="Tell us where the current process feels slow, repetitive, disconnected, or hard to scale."
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Timeline</span>
                <input
                  className="rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-midnight"
                  name="timeline"
                  placeholder="Example: MVP in 6 weeks"
                  disabled={isSubmitting}
                />
              </label>

              <button
                type="submit"
                className="button-primary mt-2 w-full sm:w-fit justify-center sm:justify-start disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Start the Conversation'}
                <Send className="ml-2 h-4 w-4" />
              </button>

              {submitted && (
                <div className="soft-card soft-card-light flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="font-medium text-slate-900">Message sent successfully!</p>
                    <p className="mt-1 text-sm text-slate-600">
                      We'll review your inquiry and get back to you within 24-48 hours.
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="soft-card soft-card-light flex items-start gap-3 border-red-200 bg-red-50 p-4">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <p className="font-medium text-red-900">Failed to send message</p>
                    <p className="mt-1 text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="grid gap-4 self-start">
            <div className="soft-card soft-card-light p-6 shadow-float">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Direct contact
              </p>
              <div className="mt-5 space-y-3">
                {contactChannels.map((email) => (
                  <a
                    key={email}
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project Inquiry from AKSS AI Website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-card soft-card-light flex items-center gap-4 px-4 py-4 hover:border-midnight/20"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{email}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="soft-card soft-card-light p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Best fit projects
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>Teams that want custom AI around a real workflow</li>
                <li>Founders who need product thinking and build execution together</li>
                <li>Businesses with internal knowledge or repetitive process bottlenecks</li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default Contact;
