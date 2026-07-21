import React from 'react';
import { Code, Terminal, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const categories = [
    {
      name: "Frontend Development",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      skills: portfolioData.skills.frontend,
      borderColor: "border-cyan-500/30",
      badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-500/30",
    },
    {
      name: "Programming & Backend",
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      skills: portfolioData.skills.programmingBackend,
      borderColor: "border-blue-500/30",
      badgeColor: "bg-blue-950/60 text-blue-300 border-blue-500/30",
    },
    {
      name: "Tools & Environment",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      skills: portfolioData.skills.toolsEnvironment,
      borderColor: "border-emerald-500/30",
      badgeColor: "bg-emerald-950/60 text-emerald-300 border-emerald-500/30",
    },
    {
      name: "Areas of Interest",
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      skills: portfolioData.skills.areasOfInterest,
      borderColor: "border-purple-500/30",
      badgeColor: "bg-purple-950/60 text-purple-300 border-purple-500/30",
    },
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/60 bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Code className="w-3.5 h-3.5" />
            <span>TECHNICAL KNOWLEDGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Core technologies, programming languages, development tools, and security focus areas.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 border ${cat.borderColor} hover:scale-[1.01] transition-transform`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium border ${cat.badgeColor} hover:border-cyan-400 transition-colors cursor-default`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 opacity-80" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
