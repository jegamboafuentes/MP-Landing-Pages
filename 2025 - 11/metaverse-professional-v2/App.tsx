
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Home } from './components/Home';
import { Details } from './components/Details';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { LanguageProvider } from './components/LanguageContext';

type Page = 'home' | 'details' | 'privacy' | 'terms';

const AppContent: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleNavigate = (page: Page, sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'home' || page === 'privacy' || page === 'terms') {
      setTargetSection(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTargetSection(sectionId || null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-100 flex flex-col">
      <Navbar onOpenContact={handleOpenContact} onNavigate={handleNavigate} currentPage={currentPage as 'home' | 'details'} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home onOpenContact={handleOpenContact} onNavigate={handleNavigate} />
        )}
        {currentPage === 'details' && (
          <Details scrollToSection={targetSection} />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPolicy />
        )}
        {currentPage === 'terms' && (
          <TermsOfService />
        )}
      </main>

      <Footer onOpenContact={handleOpenContact} onNavigate={handleNavigate} />
      
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
