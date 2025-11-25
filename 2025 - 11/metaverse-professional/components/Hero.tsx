import React from 'react';
import NeonButton from './ui/NeonButton';
import InteractiveRobot from './ui/InteractiveRobot';

interface HeroProps {
  onRequestInfo: () => void;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestInfo, onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 grid-bg opacity-20 animate-pulse-slow"></div>
        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[128px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-left space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">Neural Link Established</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white cyber-glitch" data-text="AUTOMATE YOUR REALITY">
            AUTOMATE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">REALITY</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
            We engineer the digital brain of your business. Seamlessly integrating <span className="text-cyan-400">AI Agents</span> and <span className="text-fuchsia-400">Cloud Automation</span> to scale your operations infinitely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <NeonButton onClick={onRequestInfo} glow>
              Initialize Protocol
            </NeonButton>
            <NeonButton variant="outline" onClick={onExplore}>
              Access Database
            </NeonButton>
          </div>
        </div>

        {/* Interactive Robot Element */}
        <div className="order-1 md:order-2 flex justify-center items-center">
           <InteractiveRobot />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-cyan-400">Scroll to Decrypt</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
