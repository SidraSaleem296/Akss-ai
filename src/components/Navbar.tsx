import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-[#50C878]" />
              <span className="text-xl font-bold">Akss AI</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-[#00FFFF] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/features" className="hover:text-[#00FFFF] px-3 py-2 rounded-md text-sm font-medium">Features</Link>
              <Link to="/solutions" className="hover:text-[#00FFFF] px-3 py-2 rounded-md text-sm font-medium">Solutions</Link>
              <Link to="/elevator-pitch" className="hover:text-[#00FFFF] px-3 py-2 rounded-md text-sm font-medium">Pitch Deck</Link>
              <Link to="/team" className="hover:text-[#00FFFF] px-3 py-2 rounded-md text-sm font-medium">Team</Link>
              <Link to="/security" className="hover:text-[#00FFFF] px-3 py-2 rounded-md text-sm font-medium">Security</Link>
              <Link to="/contact" className="hover:text-[#00FFFF] px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <button className="bg-[#50C878] hover:bg-[#FFD700] text-white font-bold px-4 py-2 rounded-md transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00FFFF] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:text-[#00FFFF] px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/features" className="block hover:text-[#00FFFF] px-3 py-2 rounded-md text-base font-medium">Features</Link>
            <Link to="/solutions" className="block hover:text-[#00FFFF] px-3 py-2 rounded-md text-base font-medium">Solutions</Link>
            <Link to="/elevator-pitch" className="block hover:text-[#00FFFF] px-3 py-2 rounded-md text-base font-medium">Pitch Deck</Link>
            <Link to="/team" className="block hover:text-[#00FFFF] px-3 py-2 rounded-md text-base font-medium">Team</Link>
            <Link to="/security" className="block hover:text-[#00FFFF] px-3 py-2 rounded-md text-base font-medium">Security</Link>
            <Link to="/contact" className="block hover:text-[#00FFFF] px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <button className="w-full bg-[#50C878] hover:bg-[#FFD700] text-white font-bold px-4 py-2 rounded-md transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;