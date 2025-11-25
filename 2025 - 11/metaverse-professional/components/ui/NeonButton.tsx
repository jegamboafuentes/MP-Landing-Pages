import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  glow?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glow = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-6 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 focus:outline-none";
  
  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400 border-2 border-transparent",
    secondary: "bg-fuchsia-600 text-white hover:bg-fuchsia-500 border-2 border-transparent",
    outline: "bg-transparent text-cyan-400 border-2 border-cyan-500 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
  };

  const glowStyle = glow ? "shadow-[0_0_15px_rgba(6,182,212,0.6)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${glowStyle} ${className} clip-path-slant`}
      style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;