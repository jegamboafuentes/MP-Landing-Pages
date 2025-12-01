import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (page: 'home' | 'details' | 'softwareSolutions' | 'softwareSolutionsEs' | 'privacy' | 'terms', sectionId?: string) => void;
  currentPage: 'home' | 'details' | 'softwareSolutions' | 'softwareSolutionsEs' | 'privacy' | 'terms';
}

type NavItem =
  | { name: string; href: string; external: true }
  | { name: string; page: 'home' | 'details'; section?: string; external?: false };

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigate, currentPage }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'details', section?: string) => {
    onNavigate(page, section);
    setIsOpen(false);
  };

  const navItems: NavItem[] = [
    { name: t.nav.home, page: 'home' },
    { name: t.nav.process, page: 'details', section: 'process' },
    { name: t.nav.technologies, page: 'details', section: 'technologies' },
    { name: t.nav.team, page: 'details', section: 'team' },
    { name: t.nav.findUs, page: 'details', section: 'find-us' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 relative transform group-hover:scale-110 transition-transform duration-500">
                <img
                  src="/assets/MPLOGOSVG.svg"
                  alt="Metaverse Professional Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Orbitron'] font-bold text-lg md:text-xl tracking-wider text-white">
                METAVERSE <span className="text-cyan-400"><br></br>PROFESSIONAL</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-2 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors group flex items-center gap-1"
                  >
                    {item.name}
                    <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.page, item.section)}
                    className={`relative px-2 py-2 rounded-md text-sm font-medium transition-colors group ${
                      currentPage === item.page && !item.section ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                )
              ))}

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors px-2 font-mono text-sm"
              >
                <Globe size={16} />
                <span>{language === 'en' ? 'ES' : 'EN'}</span>
              </button>

              <button
                onClick={onOpenContact}
                className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white px-5 py-2 rounded font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] cursor-pointer transform hover:scale-105"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors px-2 font-mono text-sm"
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 relative z-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Height Fix */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black border-b border-white/10 fixed top-20 left-0 w-full z-40 h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-20 space-y-2">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-3 py-4 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 flex items-center gap-2 border-b border-white/5"
                  >
                    {item.name} <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.page, item.section)}
                    className="block w-full text-left px-3 py-4 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 border-b border-white/5"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="pt-8 px-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact();
                  }}
                  className="block w-full text-center bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white px-5 py-4 rounded-lg font-bold shadow-lg text-lg"
                >
                  {t.nav.requestAudit}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
