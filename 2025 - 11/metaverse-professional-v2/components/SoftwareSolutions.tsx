import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Sparkles, Brain, Code, ArrowRight, Linkedin, Github } from 'lucide-react';

interface SoftwareSolutionsProps {
  onOpenContact: () => void;
}

export const SoftwareSolutions: React.FC<SoftwareSolutionsProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      title: 'Automations',
      icon: Workflow,
      desc: 'Replace manual spreadsheets and busywork with orchestrated workflows that keep sales, ops, and finance in sync.',
    },
    {
      title: 'AI',
      icon: Brain,
      desc: 'Deploy copilots, chatbots, and retrieval systems that understand your documents, customers, and internal processes.',
    },
    {
      title: 'Custom Software',
      icon: Code,
      desc: 'Build the dashboards, microservices, and integrations your business needs to scale reliably on AWS, GCP, or Azure.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-semibold uppercase tracking-[0.2em] mb-4">Software Solutions</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Orbitron'] leading-tight mb-6">
              Automation, AI, and custom software for growing businesses.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Metaverse Professional helps small and medium businesses move past manual work. We design end-to-end
              systems that connect your tools, leverage AI safely, and keep teams aligned.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <ArrowRight size={16} className="text-cyan-400" />
              <span>Blueprint, build, and launch faster with an expert AI and automation team.</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl"
          >
            <div className="relative">
              <img src="/assets/jegf_mp.jpeg" alt="Enrique Gamboa" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
            <div className="p-8">
              <p className="text-sm font-mono text-fuchsia-400 mb-2">AI & Cloud Architect</p>
              <h2 className="text-2xl font-bold mb-3">Enrique Gamboa</h2>
              <p className="text-gray-300">
                Designs AI agents, data pipelines, and cloud architectures that keep everything fast, secure, and scalable
                for your team.
              </p>
              <div className="mt-6 flex gap-2 text-xs text-gray-500">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">LLM & GenAI</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Cloud Architecture</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Data Pipelines</span>
              </div>
              <div className="mt-6 flex items-center gap-4 text-gray-400">
                <a
                  href="https://www.linkedin.com/in/jegamboafuentes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/jegamboafuentes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-cyan-400 group-hover:text-fuchsia-400 transition-colors">
                <pillar.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="p-10 rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black shadow-lg">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-cyan-400" />
          </div>
          <h3 className="text-3xl font-bold mb-4 font-['Orbitron']">Build a smarter operation</h3>
          <p className="text-gray-300 mb-8">
            Whether you need AI copilots, workflow automation, or a custom product, we blueprint, build, and deploy with
            security and reliability baked in.
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-cyan-400 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Request info / book a call
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
