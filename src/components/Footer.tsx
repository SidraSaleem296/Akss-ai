import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-[#50C878]" />
              <span className="text-xl font-bold">Akss AI</span>
            </div>
            <p className="text-sm text-gray-300">
              Empowering businesses with secure and innovative AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#00FFFF]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00FFFF]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00FFFF]">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-300 hover:text-[#00FFFF]">Finance</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-[#00FFFF]">Education</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-[#00FFFF]">Legal</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-[#00FFFF]">E-commerce</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#00FFFF]">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-[#00FFFF]">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#00FFFF]">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#00FFFF]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-[#00FFFF]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-[#00FFFF]">Terms of Service</Link></li>
              <li><Link to="/security" className="text-gray-300 hover:text-[#00FFFF]">Security</Link></li>
              <li><Link to="/compliance" className="text-gray-300 hover:text-[#00FFFF]">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Akss AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;