
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Home } from './components/Home';
import { Details } from './components/Details';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { LanguageProvider } from './components/LanguageContext';
import { SoftwareSolutions } from './components/SoftwareSolutions';
import { SoftwareSolutionsEs } from './components/SoftwareSolutionsEs';

type Page = 'home' | 'details' | 'privacy' | 'terms' | 'softwareSolutions' | 'softwareSolutionsEs';

const getInitialPage = (): Page => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/pages/software-solutions')) return 'softwareSolutions';
    if (path.includes('/pages/soluciones-de-software-innovadoras-para-un-mundo-web-3-0')) return 'softwareSolutionsEs';
    if (path.includes('/privacy')) return 'privacy';
    if (path.includes('/terms')) return 'terms';
  }
  return 'home';
};

const AppContent: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleNavigate = (page: Page, sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'home' || page === 'privacy' || page === 'terms' || page === 'softwareSolutions' || page === 'softwareSolutionsEs') {
      setTargetSection(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTargetSection(sectionId || null);
    }
  };

  useEffect(() => {
    const pathMap: Record<Page, string> = {
      home: '/',
      details: '/',
      privacy: '/privacy',
      terms: '/terms',
      softwareSolutions: '/pages/software-solutions',
      softwareSolutionsEs: '/pages/soluciones-de-software-innovadoras-para-un-mundo-web-3-0',
    };
    const targetPath = pathMap[currentPage];
    if (typeof window !== 'undefined' && window.location.pathname !== targetPath) {
      window.history.replaceState(null, '', targetPath);
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-100 flex flex-col">
      <Navbar onOpenContact={handleOpenContact} onNavigate={handleNavigate} currentPage={currentPage as 'home' | 'details'} />
      
      <main className="flex-grow">
        {currentPage === 'softwareSolutions' && (
          <SoftwareSolutions onOpenContact={handleOpenContact} />
        )}
        {currentPage === 'softwareSolutionsEs' && (
          <SoftwareSolutionsEs onOpenContact={handleOpenContact} />
        )}
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
