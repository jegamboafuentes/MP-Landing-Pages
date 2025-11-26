
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Server } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Bot, Workflow, Server];
  const colors = ['text-cyan-400', 'text-fuchsia-400', 'text-red-400'];
  const borderColors = ['group-hover:border-cyan-400/50', 'group-hover:border-fuchsia-400/50', 'group-hover:border-red-400/50'];

  return (
    <section className="py-20 bg-black relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 whitespace-pre-line">{t.services.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group p-8 rounded-xl bg-zinc-900/40 border border-white/10 hover:bg-zinc-900/80 transition-all duration-300 ${borderColors[index]}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colors[index]}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-['Orbitron']">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
