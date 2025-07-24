import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Merera Garoma Wakuma</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Software Engineer and Odoo ERP Developer passionate about building innovative solutions 
              for businesses across Africa. Currently completing my internship at Purpose Black Ethiopia, 
              specializing in ERP systems and full-stack development.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:merera@example.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Mail size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Me</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">ERP Development</li>
              <li className="text-gray-300">Python Development</li>
              <li className="text-gray-300">Web Applications</li>
              <li className="text-gray-300">System Integration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Merera Garoma Wakuma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;