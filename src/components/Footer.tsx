import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:contact@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Fullstack developer passionate about creating innovative digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 hover:bg-white/5 rounded-lg"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-dark-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart size={14} className="text-red-500 animate-pulse" />
            <span>using React & TypeScript</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 