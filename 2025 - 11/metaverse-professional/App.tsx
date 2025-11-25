import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Process from './components/Process';
import Technologies from './components/Technologies';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'process' | 'technologies'>('home');

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // Define the tech list once to ensure consistency
  const techList = [
    'OPENAI', 'ZAPIER', 'GEMINI', 'AWS', 'PINECONE', 'PYTHON', 'REACT', 
    'MAKE.COM', 'RETOOL', 'CLAUDE', 'GCP', 'AZURE', 'WORKATO', 'SHOPIFY', 'WIX'
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'process':
        return <Process />;
      case 'technologies':
        return <Technologies />;
      case 'home':
      default:
        return (
          <>
            <Hero onRequestInfo={openContact} onExplore={() => setCurrentView('technologies')} />
            
            {/* Tech Marquee */}
            <div className="bg-cyan-950/20 border-y border-cyan-900/30 py-6 overflow-hidden whitespace-nowrap backdrop-blur-sm">
               <div className="inline-block animate-[scroll_40s_linear_infinite]">
                 {/* Main List */}
                 {techList.map((tech, i) => (
                   <span key={i} className="mx-8 font-mono text-cyan-500/40 font-bold tracking-widest hover:text-cyan-400 transition-colors cursor-default">{tech}</span>
                 ))}
                 {/* Duplicate for seamless loop */}
                 {techList.map((tech, i) => (
                   <span key={`dup-${i}`} className="mx-8 font-mono text-cyan-500/40 font-bold tracking-widest hover:text-cyan-400 transition-colors cursor-default">{tech}</span>
                 ))}
               </div>
               <style>{`
                 @keyframes scroll {
                   0% { transform: translateX(0); }
                   100% { transform: translateX(-50%); }
                 }
               `}</style>
            </div>

            <Team />
            
            {/* Call To Action Banner */}
            <section className="py-20 relative bg-slate-900 border-t border-cyan-900/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-slate-950 to-slate-950"></div>
              <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to <span className="text-cyan-400">Upgrade</span>?</h2>
                <div className="max-w-xl mx-auto mb-8">
                   <p className="text-slate-400">Stop wasting human potential on robotic tasks. Let us build the machine that builds your business.</p>
                </div>
                <button 
                   onClick={openContact}
                   className="group relative px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 font-bold uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-cyan-500 transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10">Start Transformation</span>
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar 
        onRequestInfo={openContact} 
        onNavigate={setCurrentView}
        currentView={currentView}
      />
      
      <main>
        {renderContent()}
      </main>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;