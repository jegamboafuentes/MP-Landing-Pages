import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NeonButton from './ui/NeonButton';
import Logo from './ui/Logo';

interface NavbarProps {
  onRequestInfo: () => void;
  onNavigate: (view: 'home' | 'process' | 'technologies') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onRequestInfo, onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: 'home' | 'process' | 'technologies') => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }

  const navLinks: { label: string; view: 'home' | 'process' | 'technologies' }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Process', view: 'process' },
    { label: 'Technologies', view: 'technologies' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-cyan-900/30 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={() => handleNav('home')}
        >
          <div className="relative transform transition-transform group-hover:scale-110">
            <Logo className="w-10 h-10" />
            <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter text-white">
            METAVERSE<span className="text-cyan-400">.PROFESSIONAL</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.view)}
              className={`text-sm uppercase tracking-widest transition-colors relative group ${currentView === item.view ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${currentView === item.view ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
          <NeonButton variant="outline" onClick={onRequestInfo} className="scale-90">
            Request Info
          </NeonButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-cyan-900/50 p-6 flex flex-col space-y-4 shadow-2xl h-screen">
           {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.view)}
              className={`text-xl font-mono text-left ${currentView === item.view ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-8">
            <NeonButton onClick={() => {
              onRequestInfo();
              setMobileMenuOpen(false);
            }} className="w-full">
              Request Info
            </NeonButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
