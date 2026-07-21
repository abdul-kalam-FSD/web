import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Shield, Download, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'featured-project', 'experience', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Featured Project', href: '#featured-project', id: 'featured-project' },
    { name: 'Training', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleResumeDownload = () => {
    // Generate text/markdown format resume file dynamically for immediate download
    const resumeText = `====================================================
ABDUL KALAM S - RESUME
IT Graduate & Aspiring Full-Stack Developer
Email: ${portfolioData.personalInfo.email}
Phone: ${portfolioData.personalInfo.phone}
Location: ${portfolioData.personalInfo.location}
GitHub: ${portfolioData.personalInfo.github}
LinkedIn: ${portfolioData.personalInfo.linkedin}
====================================================

SUMMARY:
${portfolioData.summary}

EDUCATION:
${portfolioData.education.map(e => `- ${e.degree} | ${e.institution} (${e.period})`).join('\n')}

SKILLS:
- Frontend: ${portfolioData.skills.frontend.join(', ')}
- Programming & Backend: ${portfolioData.skills.programmingBackend.join(', ')}
- Tools & Environment: ${portfolioData.skills.toolsEnvironment.join(', ')}
- Areas of Interest: ${portfolioData.skills.areasOfInterest.join(', ')}

FEATURED PROJECT:
${portfolioData.featuredProject.title}
Key Capabilities:
${portfolioData.featuredProject.capabilities.map(c => ` * ${c}`).join('\n')}

TRAINING & CERTIFICATIONS:
${portfolioData.trainingCertifications.map(t => `- ${t.title} (${t.organization}, ${t.period})`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abdul_Kalam_S_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0a0f1d] rounded-[7px] flex items-center justify-center group-hover:bg-cyan-950/40 transition-colors">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 tracking-tight text-lg flex items-center gap-1.5">
              Abdul Kalam S
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Security Status: Active"></span>
            </span>
            <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider">FULL-STACK & ML/IDS</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/40 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-md shadow-cyan-500/10 group"
          >
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-cyan-500/20 text-cyan-300 border-l-4 border-cyan-400'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-cyan-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                handleResumeDownload();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/40 rounded-lg hover:bg-cyan-500 hover:text-black transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
