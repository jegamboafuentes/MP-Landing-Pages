
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Users, Rocket } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Search, Code2, Users, Rocket];

  return (
    <section id="process" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold mb-4 font-['Orbitron']"
          >
            {t.process.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">{t.process.titleHighlight}</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {t.process.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-black border border-white/10 hover:border-cyan-500/50 group transition-all duration-300"
              >
                {/* Background Number */}
                <div className="absolute right-4 top-4 text-8xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors pointer-events-none select-none font-['Orbitron']">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-['Orbitron'] text-white group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {step.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
