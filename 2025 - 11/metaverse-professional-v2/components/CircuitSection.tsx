
import React from 'react';
import { motion } from 'framer-motion';

export const CircuitSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        
        {/* Circuit Animation Container */}
        <div className="relative w-full max-w-3xl h-[400px] flex items-center justify-center">
          
          {/* SVG Circuits - Left */}
          <svg className="absolute left-0 top-0 w-1/2 h-full opacity-60" viewBox="0 0 400 400" fill="none">
             <motion.path 
                d="M50 200 H 150 L 200 250 H 300" 
                stroke="#06b6d4" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatType: "loop", repeatDelay: 1 }}
             />
             <motion.path 
                d="M0 100 H 100 L 150 150 H 250 L 300 200" 
                stroke="#d946ef" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatType: "loop", delay: 0.5 }}
             />
             <motion.path 
                d="M50 300 H 120 L 180 240 H 280" 
                stroke="#06b6d4" 
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatType: "loop", delay: 1 }}
             />
             {/* Static grid elements */}
             <circle cx="50" cy="200" r="3" fill="#333" />
             <circle cx="0" cy="100" r="3" fill="#333" />
             <circle cx="50" cy="300" r="3" fill="#333" />
          </svg>

          {/* SVG Circuits - Right (Mirrored logic) */}
           <svg className="absolute right-0 top-0 w-1/2 h-full opacity-60 transform scale-x-[-1]" viewBox="0 0 400 400" fill="none">
             <motion.path 
                d="M50 200 H 150 L 200 250 H 300" 
                stroke="#d946ef" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatType: "loop", repeatDelay: 0.5 }}
             />
             <motion.path 
                d="M0 100 H 100 L 150 150 H 250 L 300 200" 
                stroke="#06b6d4" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatType: "loop", delay: 0.2 }}
             />
             <motion.path 
                d="M50 300 H 120 L 180 240 H 280" 
                stroke="#d946ef" 
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear", repeatType: "loop", delay: 1.2 }}
             />
              <circle cx="50" cy="200" r="3" fill="#333" />
             <circle cx="0" cy="100" r="3" fill="#333" />
             <circle cx="50" cy="300" r="3" fill="#333" />
          </svg>

          {/* Central Logo Placeholder Node */}
          <div className="relative z-20 w-32 h-32 md:w-40 md:h-40">
             {/* Pulsing rings */}
             <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-2 rounded-full border border-fuchsia-500/30 animate-[spin_8s_linear_infinite_reverse]" />
             
             {/* Core */}
             <div className="absolute inset-0 m-auto w-24 h-24 bg-black rounded-full border-2 border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-lg transform rotate-45 flex items-center justify-center shadow-lg">
                   <div className="w-6 h-6 bg-black rounded-sm" />
                </div>
             </div>
             
             {/* Connection Nodes */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-transparent to-cyan-500/50" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-transparent to-fuchsia-500/50" />
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-l from-transparent to-fuchsia-500/50" />
          </div>

        </div>
        
        <p className="mt-8 text-center text-gray-500 text-sm tracking-widest uppercase font-mono">
           Powered by Advanced Intelligence
        </p>

      </div>
    </section>
  );
};
