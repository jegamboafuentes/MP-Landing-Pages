
import React from 'react';
import { useLanguage } from './LanguageContext';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate: (page: 'home' | 'details' | 'privacy' | 'terms', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-zinc-950 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Final CTA */}
        <div className="mb-20 p-8 md:p-12 bg-gradient-to-b from-zinc-900 to-black rounded-3xl border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
            {t.footer.ctaTitle}
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {t.footer.ctaSubtitle}
          </p>
          
          <button 
            onClick={onOpenContact}
            className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            {t.footer.ctaButton}
          </button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 gap-6">
          <div className="mb-4 md:mb-0 text-left flex flex-col md:items-start items-center">
             {/* Matching Header Logo Style */}
             <div className="flex items-center gap-2 group mb-2 cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="w-6 h-6 border-2 border-red-500 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
                  <div className="w-3 h-3 bg-cyan-400" />
                </div>
                <span className="font-['Orbitron'] font-bold text-lg tracking-wider text-white">
                  METAVERSE <span className="text-cyan-400">PROFESSIONAL</span>
                </span>
            </div>
            <p className="text-sm text-gray-500">{t.footer.tagline}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
             <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">{t.footer.links.privacy}</button>
             <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">{t.footer.links.terms}</button>
             <span className="opacity-50">© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
