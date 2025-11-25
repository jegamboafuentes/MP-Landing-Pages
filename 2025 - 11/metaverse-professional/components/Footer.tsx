import React from 'react';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="font-mono text-lg font-bold text-white">
                METAVERSE<span className="text-cyan-400">.PROFESSIONAL</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Automating the future, one node at a time.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-fuchsia-400 transition-colors transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-mono">
          <p>© 2024 Metaverse Professional. All systems operational.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Protocol</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;