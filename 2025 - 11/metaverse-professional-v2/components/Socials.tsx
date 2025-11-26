
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, MessageSquare, Twitter, Instagram, Gem, Box } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Socials: React.FC = () => {
  const { t } = useLanguage();

  const socialConfig = [
    { name: 'YouTube', icon: Youtube, color: 'hover:text-red-500' },
    { name: 'Discord', icon: MessageSquare, color: 'hover:text-indigo-400' },
    { name: 'Twitter', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'OpenSea', icon: Box, color: 'hover:text-cyan-400' },
    { name: 'Rarible', icon: Gem, color: 'hover:text-yellow-400' },
  ];

  return (
    <section id="find-us" className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-2 font-['Orbitron']">{t.socials.title}</h2>
        <p className="text-gray-400 mb-12">{t.socials.subtitle}</p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {socialConfig.map((social, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              className={`flex flex-col items-center gap-3 group`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 transition-colors duration-300 ${social.color} group-hover:border-current group-hover:shadow-[0_0_15px_currentColor]`}>
                <social.icon size={32} />
              </div>
              <div className="text-center">
                <div className="font-bold text-white">{social.name}</div>
                <div className="text-xs text-gray-500">{t.socials.labels[i]}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
