
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const teamImages = [
  'https://picsum.photos/400/400?grayscale&blur=2',
  'https://picsum.photos/401/401?grayscale&blur=2',
  'https://picsum.photos/402/402?grayscale&blur=2',
  'https://picsum.photos/403/403?grayscale&blur=2',
  'https://picsum.photos/404/404?grayscale&blur=2',
];

export const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 font-['Orbitron']">{t.team.title} <span className="text-red-500">{t.team.titleHighlight}</span></h2>
          <p className="text-gray-400 max-w-2xl">{t.team.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {t.team.members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[250px] max-w-[300px]"
            >
              {/* Image Container with Neon Border Effect */}
              <div className="relative mb-6 overflow-hidden rounded-lg aspect-square border-2 border-transparent group-hover:border-cyan-500 transition-colors duration-300">
                 <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                 <img 
                    src={teamImages[i] || teamImages[0]} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                 />
                 
                 {/* Social Overlay */}
                 <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur z-20 flex gap-4 justify-center">
                    <a href="#" className="text-white hover:text-cyan-400"><Github size={20} /></a>
                    <a href="#" className="text-white hover:text-cyan-400"><Linkedin size={20} /></a>
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{member.name}</h3>
              <p className="text-sm text-fuchsia-400 font-mono mb-3">{member.role}</p>
              <p className="text-sm text-gray-500 leading-snug">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
