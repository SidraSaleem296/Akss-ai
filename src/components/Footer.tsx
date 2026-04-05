import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';
import { contactChannels, navItems, services } from '../content/siteContent';

const Footer = () => {
  return (
    <footer className="relative z-10 pb-8 pt-10 sm:pb-10">
      <div className="page-shell">
        <div className="scene-card scene-dark px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr] lg:gap-10">
            <div className="max-w-sm">
              <BrandMark />
              <p className="mt-5 text-sm leading-7 text-white/[0.62]">
                AKSS AI builds custom AI systems, secure RAG workflows, and full-stack
                GenAI products for modern businesses that want practical automation and
                stronger digital products.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="button-primary">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.48]">
                Navigation
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/[0.68]">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/elevator-pitch" className="hover:text-white">
                    Studio Model
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.48]">
                Core Services
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/[0.68]">
                {services.slice(0, 4).map((service) => (
                  <li key={service.title}>{service.title}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.48]">
                Contact
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/[0.68]">
                {contactChannels.map((email) => (
                  <li key={email}>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Inquiry from AKSS AI Website`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/[0.48]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} AKSS AI. All rights reserved.</p>
              <div className="flex gap-4">
                <Link to="/privacy" className="hover:text-white/[0.72]">
                  Privacy
                </Link>
                <Link to="/terms" className="hover:text-white/[0.72]">
                  Terms
                </Link>
                <Link to="/security" className="hover:text-white/[0.72]">
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
