import React from 'react';
import { Github, Linkedin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo / Portal Name */}
          <div className="flex items-center mb-4 md:mb-0">
            <Briefcase className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="font-semibold text-lg">
              Talent<span className="text-yellow-400">Stack</span> Portal
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <Link
              to="https://github.com/owaisnadeem18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              to="https://linkedin.com/in/owais-nadeem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} TalentStack Portal. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built with <span className="text-red-500">❤</span> by <span className="font-medium text-gray-300">Owais Nadeem</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
