import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ShieldCheck, Play, RotateCcw, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TerminalWidget = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'AGY Security & ML Console v2.5.0-Release' },
    { type: 'system', text: 'Type "help" to list commands or "scan" to test the ML Intrusion Detection System.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `Available commands:
  - help      : Show this help menu
  - summary   : Display professional summary
  - skills    : View technical skills breakdown
  - scan      : Run ML Cyber Attack Intrusion Detection Scan
  - education : Show B.Sc IT & Schooling history
  - contact   : Display direct contact information
  - clear     : Clear terminal screen`,
        });
        break;

      case 'summary':
        newHistory.push({ type: 'response', text: portfolioData.summary });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: `Frontend  : ${portfolioData.skills.frontend.join(', ')}
Programming: ${portfolioData.skills.programmingBackend.join(', ')}
Tools      : ${portfolioData.skills.toolsEnvironment.join(', ')}
Interests  : ${portfolioData.skills.areasOfInterest.join(', ')}`,
        });
        break;

      case 'scan':
        newHistory.push({
          type: 'response',
          text: `[+] Initializing Machine Learning IDS Model...
[+] Analyzing incoming web request payloads...
[✓] Normal HTTP GET /index.html -> STATUS: 200 OK (Clean)
[!] Malicious Payload Detected: "SELECT * FROM users WHERE '1'='1'" -> ALERT: SQL Injection attack neutralized!
[✓] Traffic Classification Complete. Web application status: SECURE.`,
        });
        break;

      case 'education':
        newHistory.push({
          type: 'response',
          text: portfolioData.education
            .map(e => `${e.degree} - ${e.institution} (${e.period})`)
            .join('\n'),
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `Name    : ${portfolioData.personalInfo.name}
Email   : ${portfolioData.personalInfo.email}
Phone   : ${portfolioData.personalInfo.phone}
Location: ${portfolioData.personalInfo.location}`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-[#080d19] shadow-2xl shadow-cyan-950/20 font-mono-code text-xs sm:text-sm">
      {/* Terminal Header */}
      <div className="bg-[#0f172a] px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            abdul@dev-ids:~ (bash)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3 h-3" /> IDS ACTIVE
          </span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 h-64 overflow-y-auto space-y-2 text-slate-300 scrollbar-thin scrollbar-thumb-slate-800">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed whitespace-pre-wrap">
            {item.type === 'user' && (
              <span className="text-cyan-400 font-semibold">{item.text}</span>
            )}
            {item.type === 'system' && (
              <span className="text-slate-400 italic">{item.text}</span>
            )}
            {item.type === 'response' && (
              <span className="text-emerald-300">{item.text}</span>
            )}
            {item.type === 'error' && (
              <span className="text-rose-400">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleCommand} className="bg-[#0b1329] border-t border-slate-800/80 px-4 py-2 flex items-center gap-2">
        <span className="text-cyan-400 font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder='Type "help" or "scan"...'
          className="w-full bg-transparent text-slate-100 focus:outline-none font-mono-code text-xs sm:text-sm placeholder:text-slate-600"
        />
        <button
          type="submit"
          className="px-2.5 py-1 text-[11px] bg-cyan-950 text-cyan-400 rounded border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-colors"
        >
          Run
        </button>
      </form>
    </div>
  );
};
