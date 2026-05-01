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

      if (data.success === true || data.success === 'true') {
        setSubmitted(true);
        setError('');
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
        eyebrow="Let's talk"
        title="Tell us what you want to build."
        description="Share your workflow or challenge. We'll figure out the right direction together."
      />

      <PageSection tone="light" className="scene-grid-light">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Walk us through your workflow. We'll take it from there."
              tone="light"
            />

            <form ref={formRef} className="mt-8 grid gap-4" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Project Inquiry from AKSS AI Website" />
              <input type="hidden" name="from_name" value="AKSS AI Contact Form" />

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
                <span className="text-sm font-medium text-slate-700">
                  What do you want to build or solve?
                </span>
                <textarea
                  className="min-h-[180px] rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-midnight"
                  name="message"
                  placeholder="Tell us about your workflow, the friction points, or the product idea..."
                  required
                  disabled={isSubmitting}
                />
              </label>

              <button
                type="submit"
                className="button-primary mt-2 w-full justify-center disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit sm:justify-start"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send It Over'}
                <Send className="ml-2 h-4 w-4" />
              </button>

              {submitted && (
                <div className="soft-card soft-card-light flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-mist" />
                  <div>
                    <p className="font-medium text-slate-900">Got it!</p>
                    <p className="mt-1 text-sm text-slate-600">
                      We'll be back within 24–48 hours.
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="soft-card soft-card-light flex items-start gap-3 border-midnight/20 bg-white p-4">
                  <AlertCircle className="h-5 w-5 shrink-0 text-midnight" />
                  <div>
                    <p className="font-medium text-slate-950">Failed to send message</p>
                    <p className="mt-1 text-sm text-slate-700">{error}</p>
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
                Website
              </p>
              <p className="mt-4 text-sm font-medium text-slate-700">akss-ai.vercel.app</p>
            </div>

            <div className="soft-card soft-card-light p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Best fit for
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>Teams that need AI built around their actual workflow</li>
                <li>Founders who want product thinking and build execution together</li>
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
