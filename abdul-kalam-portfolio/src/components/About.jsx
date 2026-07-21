import React from 'react';
import { User, GraduationCap, Code2, ShieldAlert, Cpu, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: "IT Background",
      description: "B.Sc. Information Technology graduate from Saradha Gangadharan College, Puducherry (2022–2025)."
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: "Web Development",
      description: "Hands-on skills in React.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS."
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Python & SQL",
      description: "Strong foundational programming in Python and database querying using SQL."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
      title: "Cybersecurity & ML",
      description: "Focus on Machine Learning Intrusion Detection Systems (IDS) for web application security."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional introduction based on academic foundation, core skills, and technical focus.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Summary Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-cyan-500/20">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>PROFESSIONAL SUMMARY</span>
              </div>
              <p className="text-slate-200 text-base leading-relaxed">
                {portfolioData.summary}
              </p>
            </div>

            {/* Quick Stat Tags */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-3 text-xs font-mono text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                📍 Based in: <strong className="text-cyan-300">{portfolioData.personalInfo.location}</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                🎓 Degree: <strong className="text-cyan-300">B.Sc. IT (2022–2025)</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                ⚡ Specialization: <strong className="text-emerald-300">Python, React & Cybersecurity ML</strong>
              </span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-5 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
