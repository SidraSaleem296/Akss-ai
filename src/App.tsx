import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Security from './pages/Security';
import Contact from './pages/Contact';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import PersonalAI from './pages/PersonalAI';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const AppShell = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[6%] top-24 h-56 w-56 rounded-full bg-[#B8CBC4]/24 blur-3xl" />
        <div className="absolute right-[8%] top-32 h-72 w-72 rounded-full bg-[#152D35]/24 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0F2026]/12 blur-3xl" />
      </div>

      <ScrollToTop />
      <Navbar />
      <main className="relative z-10 flex-1 pt-28 sm:pt-32">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
            <Route path="/security" element={<PageTransition><Security /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/personal-ai" element={<PageTransition><PersonalAI /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <AppShell />
      </div>
    </Router>
  );
}

export default App;
