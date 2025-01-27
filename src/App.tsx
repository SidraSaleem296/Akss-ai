import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Security from './pages/Security';
import Contact from './pages/Contact';
import Team from './pages/Team';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
// import Compliance from './pages/Compliance';
import ElevatorPitch from './pages/ElevatorPitch';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* <Route path="/compliance" element={<Compliance />} /> */}
            <Route path="/elevator-pitch" element={<ElevatorPitch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;