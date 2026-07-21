import React from 'react';
import { Briefcase, Calendar, Building, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Training & Technical Programs
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional skill building programs completed at R&D institutions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {portfolioData.trainingCertifications.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono text-[11px] mb-1.5 border border-cyan-500/30">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-300 text-sm flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-slate-400" />
                    <span>{item.organization}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs md:text-sm bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start md:self-center">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
