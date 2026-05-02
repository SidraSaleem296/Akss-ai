import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[6%] top-24 h-56 w-56 rounded-full bg-[#B8CBC4]/12 blur-2xl" />
        <div className="absolute right-[8%] top-32 h-72 w-72 rounded-full bg-[#152D35]/12 blur-2xl" />
        <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0F2026]/8 blur-2xl" />
      </div>

      <ScrollToTop />
      <Navbar />
      <main className="relative z-10 flex-1 pt-28 sm:pt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personal-ai" element={<PersonalAI />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
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
