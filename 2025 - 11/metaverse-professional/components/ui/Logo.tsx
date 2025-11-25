import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Neck */}
      <rect x="40" y="70" width="20" height="20" rx="4" fill="#64748b" />
      
      {/* Head Base */}
      <rect x="25" y="30" width="50" height="45" rx="10" fill="#e2e8f0" />
      
      {/* Ear Phones */}
      <rect x="18" y="40" width="8" height="20" rx="2" fill="#94a3b8" />
      <rect x="74" y="40" width="8" height="20" rx="2" fill="#94a3b8" />
      
      {/* Brain (Pink/Magenta) */}
      <path d="M35 30C35 20 40 15 50 15C60 15 65 20 65 30" stroke="#d946ef" strokeWidth="20" strokeLinecap="round" />
      <path d="M35 30C35 20 40 15 50 15C60 15 65 20 65 30" stroke="url(#brain-gradient)" strokeWidth="20" strokeLinecap="round" strokeOpacity="0.5"/>
      
      {/* Brain Details */}
      <path d="M35 25C38 20 45 20 48 28" stroke="#be185d" strokeWidth="2" fill="none" />
      <path d="M52 28C55 20 62 20 65 25" stroke="#be185d" strokeWidth="2" fill="none" />
      <path d="M50 15V30" stroke="#be185d" strokeWidth="2" />

      {/* Visor (Cyan) */}
      <path d="M30 45C30 40 35 38 50 38C65 38 70 40 70 45V55C70 60 65 62 50 62C35 62 30 60 30 55V45Z" fill="#22d3ee" />
      <path d="M30 45C30 40 35 38 50 38C65 38 70 40 70 45V55C70 60 65 62 50 62C35 62 30 60 30 55V45Z" fill="url(#visor-glow)" fillOpacity="0.5" />
      
      {/* Visor Bridge */}
      <path d="M45 62C45 58 55 58 55 62" stroke="#000" strokeWidth="2" fill="none" opacity="0.2"/>

      {/* Defs for Gradients */}
      <defs>
        <linearGradient id="brain-gradient" x1="35" y1="15" x2="65" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0abfc" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
        <linearGradient id="visor-glow" x1="30" y1="38" x2="70" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67e8f9" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
