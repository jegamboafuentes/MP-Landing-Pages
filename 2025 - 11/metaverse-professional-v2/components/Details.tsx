import React, { useEffect } from 'react';
import { Process } from './Process';
import { TechStack } from './TechStack';
import { Team } from './Team';
import { Socials } from './Socials';

interface DetailsProps {
  scrollToSection: string | null;
}

export const Details: React.FC<DetailsProps> = ({ scrollToSection }) => {
  
  useEffect(() => {
    if (scrollToSection) {
      const element = document.getElementById(scrollToSection);
      if (element) {
        // Add a slight delay to ensure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollToSection]);

  return (
    <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-screen">
      <Process />
      <TechStack />
      <Team />
      <Socials />
    </div>
  );
};