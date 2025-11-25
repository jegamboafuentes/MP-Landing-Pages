import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

const steps = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    content: "We begin with a deep-dive audit of your current operations. We map out data flows, identify bottlenecks, and create a comprehensive architectural blueprint for your automated future.",
    tags: ["Audit", "Strategy", "Architecture"]
  },
  {
    number: "02",
    title: "Agile Development",
    content: "Our team builds your solution using a modular approach. We combine pre-built AI components with custom code to deliver rapid value. You see progress in days, not months.",
    tags: ["Development", "Integration", "Testing"]
  },
  {
    number: "03",
    title: "Training & Handover",
    content: "Technology is useless without adoption. We train your team, provide detailed documentation, and ensure you have full control over the new systems.",
    tags: ["Documentation", "Workshops", "Access Control"]
  },
  {
    number: "04",
    title: "Monitoring & Evolution",
    content: "Post-launch, we keep an eye on system health. As AI models improve, we upgrade your agents to ensure you stay ahead of the curve.",
    tags: ["Maintenance", "Scaling", "Optimization"]
  }
];

const Process: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-black min-h-screen relative overflow-hidden">
        {/* Background Grid Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-900 to-transparent hidden md:block" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase">Execution <span className="text-fuchsia-500">Protocol</span></h2>
              <p className="text-slate-400 max-w-xl mx-auto">From chaos to order. Our proven methodology ensures successful digital transformation.</p>
            </ScrollReveal>
          </div>

          <div className="space-y-12 md:space-y-32">
            {steps.map((step, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Number Display */}
                  <div className="flex-1 flex justify-center md:justify-end px-12 group">
                     <div className="relative">
                        <span className="text-9xl font-black text-slate-800/50 select-none font-mono stroke-text group-hover:text-cyan-900/20 transition-colors duration-500">
                           {step.number}
                        </span>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-cyan-500/20 rounded-full animate-pulse-slow"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-fuchsia-500/10 rounded-full"></div>
                     </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-3xl font-bold text-cyan-400 mb-6 font-mono">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-lg mb-6">
                      {step.content}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
                      {step.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-fuchsia-400 uppercase tracking-wider rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Process;
