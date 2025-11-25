import React, { useEffect, useRef, useState } from 'react';

const InteractiveRobot: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate normalized position (-1 to 1)
        const x = (e.clientX - centerX) / (window.innerWidth / 2);
        const y = (e.clientY - centerY) / (window.innerHeight / 2);
        
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
      {/* Holographic Base */}
      <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Data Stream Rings */}
      <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
      <div className="absolute inset-4 border border-fuchsia-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

      {/* Floating Elements */}
      <div className="absolute top-0 right-0 text-[10px] font-mono text-cyan-500 opacity-60 animate-pulse">
        LEARNING_RATE: 0.003
      </div>
      <div className="absolute bottom-10 left-0 text-[10px] font-mono text-fuchsia-500 opacity-60">
        NEURAL_NET: ACTIVE
      </div>

      {/* Robot SVG with transforms */}
      <div 
        className="w-64 h-64 relative transition-transform duration-100 ease-out"
        style={{ 
          transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)` 
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
           {/* Neck */}
           <rect x="42" y="75" width="16" height="20" rx="2" fill="#475569" />

           {/* Head Base */}
           <rect x="20" y="25" width="60" height="55" rx="12" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
           
           {/* Ear Phones */}
           <rect x="12" y="38" width="8" height="25" rx="2" fill="#64748b" />
           <rect x="80" y="38" width="8" height="25" rx="2" fill="#64748b" />

           {/* Brain (Pink) - Pulses */}
           <g className="animate-pulse">
             <path d="M30 25C30 12 40 5 50 5C60 5 70 12 70 25" fill="#d946ef" fillOpacity="0.8" />
             <path d="M30 25C30 12 40 5 50 5C60 5 70 12 70 25" stroke="#be185d" strokeWidth="2" fill="none" />
             {/* Brain Convolutions */}
             <path d="M35 15C40 10 45 20 50 15C55 10 60 15 65 12" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
           </g>

           {/* Visor Container */}
           <g transform={`translate(${mousePos.x * 2}, ${mousePos.y * 2})`}>
             <rect x="25" y="40" width="50" height="20" rx="5" fill="#000" />
             <rect x="25" y="40" width="50" height="20" rx="5" fill="#22d3ee" fillOpacity="0.8" className="animate-glow" />
             
             {/* Eyes / Scanning Line */}
             <rect x="28" y="48" width="44" height="2" fill="#ccfbf1" className="animate-[pulse_0.5s_infinite]" opacity="0.8" />
             
             {/* Reflection */}
             <path d="M30 42 L40 42 L35 58 L28 58 Z" fill="white" fillOpacity="0.2" />
           </g>

           {/* Mouth Area */}
           <rect x="40" y="70" width="20" height="2" rx="1" fill="#94a3b8" />
        </svg>
      </div>
    </div>
  );
};

export default InteractiveRobot;
