import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative border-t border-slate-800/60 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED SKILL BADGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Training credentials and technical certificates earned.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {portfolioData.trainingCertifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-cyan-500/20 relative overflow-hidden group hover:border-cyan-400 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="flex items-center gap-1 text-emerald-400 text-xs font-mono bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Completion
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{cert.organization}</p>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Duration: {cert.period}</span>
                <span className="text-cyan-400">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
