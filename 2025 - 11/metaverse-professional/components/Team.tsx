import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Github, Linkedin, Cpu, Terminal, Sparkles } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex 'Cyber' Chen",
    role: "Lead AI Architect",
    specialty: "LLM Fine-tuning & Agents",
    icon: Cpu,
    color: "text-cyan-400"
  },
  {
    name: "Sarah 'Flux' Jenkins",
    role: "Automation Engineer",
    specialty: "Enterprise Workflow Systems",
    icon: Terminal,
    color: "text-fuchsia-400"
  },
  {
    name: "Marcus 'Node' Vance",
    role: "Cloud Infrastructure",
    specialty: "Serverless & Scalability",
    icon: Sparkles,
    color: "text-emerald-400"
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
              The <span className="text-fuchsia-500">Operators</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Humans supervising the machines. Our experts bridge the gap between biological intent and digital execution.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="group relative bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-cyan-500 transition-all duration-300">
                {/* Holographic header */}
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4 group-hover:border-cyan-500/30 transition-colors">
                  <div className={`p-3 bg-slate-950 rounded border border-slate-800 ${member.color}`}>
                    <member.icon size={24} />
                  </div>
                  <div className="flex space-x-2">
                     <Github size={18} className="text-slate-600 hover:text-white cursor-pointer" />
                     <Linkedin size={18} className="text-slate-600 hover:text-white cursor-pointer" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white font-mono uppercase tracking-wider mb-1">{member.name}</h3>
                <p className="text-sm text-cyan-500 font-mono mb-4">{member.role}</p>
                
                <div className="bg-slate-950 p-4 rounded border border-slate-800/50">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Core Specialty</span>
                  <p className="text-slate-300">{member.specialty}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-slate-800 rounded-tr-3xl group-hover:border-fuchsia-500/50 transition-colors pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-700 group-hover:text-cyan-500/50">
                  ID: 00{index + 1}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
