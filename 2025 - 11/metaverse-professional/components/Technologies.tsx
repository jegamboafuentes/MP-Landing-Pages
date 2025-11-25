import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Bot, Cloud, Database, Workflow, Code, Zap, Server, Shield, Smartphone } from 'lucide-react';
import { ServiceItem } from '../types';

const techs: ServiceItem[] = [
  {
    title: "LLM & GenAI",
    description: "OpenAI GPT-4, Google Gemini, Anthropic Claude. Fine-tuned models for specific business logic.",
    icon: Bot,
    color: "text-fuchsia-400"
  },
  {
    title: "Cloud Native",
    description: "AWS Lambda, Google Cloud Functions, Azure Logic Apps. Serverless scale without the management headache.",
    icon: Cloud,
    color: "text-cyan-400"
  },
  {
    title: "Data Pipeline",
    description: "Snowflake, BigQuery, Pinecone Vector DB. We build the data backbone that feeds your AI agents.",
    icon: Database,
    color: "text-emerald-400"
  },
  {
    title: "Orchestration",
    description: "n8n, Make (Integromat), Zapier. Visual workflow builders for rapid iteration and deployment.",
    icon: Workflow,
    color: "text-violet-400"
  },
  {
    title: "Frontend & App",
    description: "React, Next.js, React Native, Flutter. Beautiful interfaces for your internal tools or customer apps.",
    icon: Smartphone,
    color: "text-blue-400"
  },
  {
    title: "Low Code",
    description: "Retool, Bubble, PowerApps. Empower your team to maintain systems with minimal engineering oversight.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Backend API",
    description: "Python (FastAPI), Node.js, Go. Robust microservices that handle the heavy lifting.",
    icon: Server,
    color: "text-slate-200"
  },
  {
    title: "Security & Auth",
    description: "Auth0, AWS Cognito, Enterprise SSO. Bank-grade security for your automated systems.",
    icon: Shield,
    color: "text-red-400"
  },
  {
    title: "Custom Scripting",
    description: "TypeScript, Python. Glue code that binds the impossible together.",
    icon: Code,
    color: "text-orange-400"
  }
];

const Technologies: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
           <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              Technology <span className="text-cyan-500">Stack</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We leverage best-in-class tools to build resilient, scalable, and future-proof automation systems.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techs.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="group relative p-8 bg-slate-900/50 border border-slate-800 hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 grid-bg opacity-10" />
                
                <div className="relative z-10">
                  <div className={`${tech.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon size={48} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 font-mono">{tech.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {tech.description}
                  </p>
                </div>

                {/* Corner Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-fuchsia-500/20 transition-colors duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
