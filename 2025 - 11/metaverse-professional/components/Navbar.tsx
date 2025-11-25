import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
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
  
  // State to manage the mobile dropdown toggle
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
  };

  // Define navigation structure with mixed types
  const navStructure = [
    { type: 'view', label: 'Home', target: 'home' },
    { type: 'view', label: 'Process', target: 'process' },
    { type: 'view', label: 'Technologies', target: 'technologies' },
    { type: 'link', label: 'Merchandise', target: '#' }, // Add your shop URL here
    { 
      type: 'dropdown', 
      label: 'Find us in', 
      items: [
        { label: 'Youtube', href: 'https://youtube.com' },
        { label: 'RapidAPI', href: 'https://rapidapi.com' },
        { label: 'OpenSea', href: 'https://opensea.io' },
        { label: 'Rarible', href: 'https://rarible.com' },
        { label: 'ETC', href: '#' }
      ]
    },
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
        <div className="hidden lg:flex items-center space-x-8">
          {navStructure.map((item, index) => {
            if (item.type === 'view') {
              return (
                <button
                  key={index}
                  onClick={() => handleNav(item.target as any)}
                  className={`text-sm uppercase tracking-widest transition-colors relative group ${currentView === item.target ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${currentView === item.target ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              );
            }

            if (item.type === 'link') {
              return (
                <a
                  key={index}
                  href={item.target as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors relative group flex items-center gap-1"
                >
                  {item.label}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            }

            if (item.type === 'dropdown') {
              return (
                <div key={index} className="relative group">
                  <button className="flex items-center gap-1 text-sm uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                    {item.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-slate-900 border border-slate-700 w-48 shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden clip-path-slant">
                      {item.items?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-6 py-3 text-sm text-slate-400 hover:text-white hover:bg-cyan-900/20 border-l-2 border-transparent hover:border-cyan-400 transition-all font-mono"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
          })}

          <NeonButton variant="outline" onClick={onRequestInfo} className="scale-90 ml-4">
            Request Info
          </NeonButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-cyan-900/50 p-6 flex flex-col space-y-6 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto">
           {navStructure.map((item, index) => {
             if (item.type === 'view') {
               return (
                 <button
                   key={index}
                   onClick={() => handleNav(item.target as any)}
                   className={`text-xl font-mono text-left ${currentView === item.target ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
                 >
                   {item.label}
                 </button>
               );
             }
             if (item.type === 'link') {
               return (
                 <a
                    key={index}
                    href={item.target as string}
                    className="text-xl font-mono text-left text-slate-300 hover:text-cyan-400 flex items-center gap-2"
                 >
                   {item.label} <ExternalLink size={16} />
                 </a>
               );
             }
             if (item.type === 'dropdown') {
               return (
                 <div key={index} className="space-y-4">
                    <button 
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="text-xl font-mono text-left text-slate-300 hover:text-white flex items-center justify-between w-full"
                    >
                      {item.label}
                      <ChevronDown size={20} className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Submenu */}
                    {mobileDropdownOpen && (
                      <div className="pl-4 space-y-3 border-l border-cyan-900/30 ml-2">
                        {item.items?.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block text-slate-400 hover:text-cyan-400 font-mono text-sm"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                 </div>
               );
             }
           })}
          <div className="pt-4">
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

export default Navbar