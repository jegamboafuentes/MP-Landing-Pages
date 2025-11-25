import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Bot, Cloud, Database, Workflow, Code, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "LLM & GenAI Integration",
    description: "Custom GPTs and Gemini-powered agents tailored to your business knowledge base for 24/7 intelligent support.",
    icon: Bot,
    color: "text-cyan-400"
  },
  {
    title: "Workflow Automation",
    description: "End-to-end automation using Zapier, Make, and n8n. We eliminate manual data entry and connect your siloed apps.",
    icon: Workflow,
    color: "text-fuchsia-400"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable architecture on AWS/GCP. Serverless deployments that grow with you without the overhead.",
    icon: Cloud,
    color: "text-violet-400"
  },
  {
    title: "Database Architecture",
    description: "High-performance vector databases for AI retrieval and structured SQL/NoSQL systems for business logic.",
    icon: Database,
    color: "text-emerald-400"
  },
  {
    title: "Low Code Solutions",
    description: "Rapid internal tool development using Retool or Bubble to empower your operations team quickly.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Custom Development",
    description: "When off-the-shelf tools fail, we write robust TypeScript/Python code to bridge the gaps.",
    icon: Code,
    color: "text-rose-400"
  }
];

const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
           <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
              Operational <span className="text-cyan-500">Upgrade</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We deploy enterprise-grade automation stacks for SMBs. Select a module to upgrade your business capability.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative p-8 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-600 group-hover:border-cyan-500 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-600 group-hover:border-cyan-500 transition-colors" />

                <div className={`${service.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-mono">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;