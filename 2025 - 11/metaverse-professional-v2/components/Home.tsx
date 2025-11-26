
import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { CircuitSection } from './CircuitSection';

interface HomeProps {
  onOpenContact: () => void;
  onNavigate: (page: 'home' | 'details', sectionId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenContact, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero onOpenContact={onOpenContact} onNavigate={onNavigate} />
      <Services />
      <CircuitSection />
    </div>
  );
};
