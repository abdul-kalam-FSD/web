import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04070e] border-t border-slate-800/80 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Summary */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Abdul Kalam S</h4>
              <p className="text-xs text-slate-400 font-mono">IT Graduate & Aspiring Full-Stack Developer</p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#featured-project" className="hover:text-cyan-300 transition-colors">Featured Project</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Training</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
          <p>© {new Date().getFullYear()} Abdul Kalam S. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-cyan-400 font-semibold">React.js</span> & <span className="text-blue-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
