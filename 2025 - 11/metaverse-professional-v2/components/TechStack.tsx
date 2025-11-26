
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Database, Network, Layout, Smartphone, Server, Shield, Terminal } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Brain, Cloud, Database, Network, Layout, Smartphone, Server, Shield, Terminal];

  return (
    <section id="technologies" className="py-24 bg-black relative">
       {/* Decorative Lines */}
       <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50" />
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Orbitron']">{t.techStack.title}</h2>
          <p className="text-gray-400">{t.techStack.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.techStack.items.map((tech, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-cyan-500/40 group shadow-lg shadow-black/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded bg-zinc-800 text-fuchsia-400 group-hover:text-cyan-400 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">{tech.title}</h3>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
