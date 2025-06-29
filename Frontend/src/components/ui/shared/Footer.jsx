import React from 'react';
import { Github, Linkedin, Heart, Briefcase } from 'lucide-react'; // Import Briefcase icon for the portal name

const Footer = () => {
  return (

    <footer className="bg-gray-900 text-gray-200 py-10 mt-16 shadow-inner border-t border-gray-700">
      <div className="container mx-auto px-6 text-center">
        {/* Portal Name and Copyright */}
        <p className="text-xl font-bold mb-4 flex items-center justify-center">
          <Briefcase className="h-7 w-7 text-yellow-400 mr-2" />
          <span className=''> Talent<span className='text-yellow-400'>Stack</span> </span> Portal &copy; {new Date().getFullYear()}
        </p>

        {/* Project Description */}
        <p className='text-md mb-6 font-semibold max-w-2xl mx-auto'>
            <span className='text-red-400'>MERN Stack</span> | Complete <span className='text-yellow-400'>Job Portal Project</span> With <span className='text-green-400'>Admin Panel Dashboard</span>
        </p>

        {/* Developer Info */}
        <p className="text-sm italic mb-6 flex items-center justify-center text-gray-400">
          Developed with <Heart className='h-4 w-4 text-red-500 mx-1' /> by Owais Nadeem
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-6">
          <a
            href="https://github.com/owaisnadeem18" // Your actual GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300 flex items-center transform hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github className="h-7 w-7 mr-2" /> <span className="text-lg">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/owais-nadeem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300 flex items-center transform hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-7 w-7 mr-2" /> <span className="text-lg">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
