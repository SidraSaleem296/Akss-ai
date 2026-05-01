import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BrandMark from './BrandMark';
import { navItems } from '../content/siteContent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    [
      'rounded-full px-3 py-2 text-sm font-medium transition-all duration-300',
      isActive ? 'bg-white/10 text-white shadow-[0_0_12px_rgba(184,203,196,0.16)]' : 'text-white/[0.68] hover:text-white hover:bg-white/[0.06] hover:shadow-[0_0_12px_rgba(21,45,53,0.18)]',
    ].join(' ');

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50">
      <div className="page-shell">
        <div className="pointer-events-auto rounded-[28px] border border-white/10 bg-[rgba(5,6,7,0.72)] px-4 py-3 shadow-glow backdrop-blur-2xl sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <BrandMark compact />

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {({ isActive }) => (
                    <motion.div
                      className={linkClassName({ isActive })}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                      <motion.div
                        className="h-[2px] bg-gradient-to-r from-mist to-midnight"
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Link to="/elevator-pitch" className="button-secondary button-secondary-dark">
                Studio Model
              </Link>
              <Link to="/contact" className="button-primary">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:shadow-[0_0_12px_rgba(184,203,196,0.18)] lg:hidden"
              aria-label="Toggle navigation"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="mt-4 space-y-2 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-3 lg:hidden"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <NavLink
                      to={item.path}
                      className={linkClassName}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                  className="flex flex-col gap-2 pt-2"
                >
                  <Link
                    to="/elevator-pitch"
                    className="button-secondary button-secondary-dark text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Studio Model
                  </Link>
                  <Link
                    to="/contact"
                    className="button-primary justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Book a Discovery Call
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
