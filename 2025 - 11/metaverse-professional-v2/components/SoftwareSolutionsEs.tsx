import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Sparkles, Brain, Code, ArrowRight, Linkedin, Github } from 'lucide-react';

interface SoftwareSolutionsEsProps {
  onOpenContact: () => void;
}

export const SoftwareSolutionsEs: React.FC<SoftwareSolutionsEsProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      title: 'Automatizaciones',
      icon: Workflow,
      desc: 'Reemplaza hojas de cálculo y trabajo manual con flujos orquestados que mantienen ventas, operaciones y finanzas alineadas.',
    },
    {
      title: 'IA',
      icon: Brain,
      desc: 'Implementa copilotos, chatbots y sistemas de recuperación que entienden tus documentos, clientes y procesos internos.',
    },
    {
      title: 'Software a Medida',
      icon: Code,
      desc: 'Construye dashboards, microservicios e integraciones que tu negocio necesita para escalar de forma confiable en AWS, GCP o Azure.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-semibold uppercase tracking-[0.2em] mb-4">Soluciones de Software</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Orbitron'] leading-tight mb-6">
              Automatización, IA y software a medida para negocios en crecimiento.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Metaverse Professional ayuda a pequeñas y medianas empresas a dejar atrás el trabajo manual. Diseñamos
              sistemas de punta a punta que conectan tus herramientas, aprovechan la IA de forma segura y mantienen a los equipos alineados.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <ArrowRight size={16} className="text-cyan-400" />
              <span>Planificamos, construimos y lanzamos rápido con un equipo experto en IA y automatización.</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl"
          >
            <div className="relative">
              <img src="/assets/eliasMP.jpeg" alt="Elías Ordaz" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
            <div className="p-8">
              <p className="text-sm font-mono text-fuchsia-400 mb-2">Arquitecto Backend y Frontend</p>
              <h2 className="text-2xl font-bold mb-3">Elías Ordaz</h2>
              <p className="text-gray-300">
                Construye APIs robustas e interfaces elegantes que hacen que los sistemas complejos se sientan simples
                para tu equipo y tus clientes.
              </p>
              <div className="mt-6 flex gap-2 text-xs text-gray-500">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Backend & Frontend</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Integraciones</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">UX / Dashboards</span>
              </div>
              <div className="mt-6 flex items-center gap-4 text-gray-400">
                <a
                  href="https://www.linkedin.com/in/el%C3%ADas-ordaz-s%C3%A1nchez-5905881a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Elias0109"
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
          <h3 className="text-3xl font-bold mb-4 font-['Orbitron']">Construye una operación más inteligente</h3>
          <p className="text-gray-300 mb-8">
            Ya sea que necesites copilotos de IA, automatización de flujos o un producto a medida, diseñamos, construimos
            y desplegamos con seguridad y confiabilidad incorporadas.
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-cyan-400 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Solicitar info / agendar llamada
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
