
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Cloud, Zap, Database } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface HeroProps {
  onOpenContact: () => void;
  onNavigate: (page: 'home' | 'details', sectionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 z-0 cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Animated HUD / Logo Area */}
        <div className="relative w-64 h-64 mb-12">
          {/* Orbiting Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-cyan-500/30 border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-fuchsia-500/30 border-dotted"
          />
          
          {/* Floating Icons on Orbit */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black p-1 rounded-full border border-cyan-500/50">
               <Cpu size={20} className="text-cyan-400" />
             </div>
             <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-black p-1 rounded-full border border-fuchsia-500/50">
               <Cloud size={20} className="text-fuchsia-400" />
             </div>
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black p-1 rounded-full border border-cyan-500/50">
               <Database size={20} className="text-cyan-400" />
             </div>
             <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-black p-1 rounded-full border border-fuchsia-500/50">
               <Zap size={20} className="text-fuchsia-400" />
             </div>
          </motion.div>

          {/* Central Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-black border-2 border-red-500 flex items-center justify-center relative shadow-[0_0_30px_rgba(239,68,68,0.4)]">
               <div className="w-16 h-16 bg-cyan-400/90 shadow-[0_0_20px_rgba(6,182,212,0.6)] animate-pulse" />
               <div className="absolute top-0 right-0 w-2 h-2 bg-white" />
               <div className="absolute bottom-0 left-0 w-2 h-2 bg-white" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs tracking-[0.2em] font-bold mb-6 uppercase">
            {t.hero.eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            {t.hero.title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-6 tracking-wide font-['Orbitron']">
            {t.hero.slogan}
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            {t.hero.description} <span className="text-white font-medium">{t.hero.descriptionHighlight}</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {t.hero.tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded bg-white/5 text-sm text-gray-300 border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-fuchsia-600 rounded-lg font-bold text-lg tracking-wide hover:scale-105 transition-transform duration-200 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -ml-4" />
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={() => onNavigate('details', 'process')}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group px-6 py-4"
            >
              {t.hero.ctaSecondary}
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
