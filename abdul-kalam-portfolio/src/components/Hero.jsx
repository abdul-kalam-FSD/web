import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, ShieldCheck, MapPin, Code, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export const Hero = () => {
  const handleResumeDownload = () => {
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
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center cyber-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Entry-Level & Fresher Roles</span>
            </div>

            {/* Greeting & Main Headline */}
            <div className="space-y-2">
              <p className="text-cyan-400 font-mono text-sm sm:text-base tracking-wide font-medium">
                {portfolioData.personalInfo.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {portfolioData.personalInfo.headline}
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {portfolioData.personalInfo.supportingText}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#featured-project"
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-cyan-300 bg-slate-900/80 border border-cyan-500/40 rounded-xl hover:bg-cyan-950/50 hover:border-cyan-400 transition-all duration-300 shadow-md shadow-cyan-950/40"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Buttons & Location */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-mono">CONNECT:</span>
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  aria-label="Email Contact"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{portfolioData.personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: User Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            {/* Cyber Glassmorphism Profile Portrait Card */}
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 opacity-30 blur-lg group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative glass-card rounded-2xl p-4 overflow-hidden border border-cyan-500/30">
                <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={profileImg}
                    alt="Abdul Kalam S"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Cyber Grid Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Portrait Floating Badges */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                    <Code className="w-3 h-3 text-cyan-400" />
                    <span>Python & React</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-white">Abdul Kalam S</h3>
                      <p className="text-[10px] text-slate-400 font-mono">Saradha Gangadharan College</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3" /> Cyber IDS Project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

