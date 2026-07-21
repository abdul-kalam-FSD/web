import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative border-t border-slate-800/60 bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal education credentials and academic institutions.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]">
                    {edu.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{edu.institution}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  Puducherry
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
