
import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-['Orbitron'] font-bold mb-4 text-cyan-400">
          {t.privacy.title}
        </h1>
        <p className="text-gray-400 mb-12 border-b border-white/10 pb-8">
          {t.privacy.lastUpdated}
        </p>

        <div className="space-y-12">
          {t.privacy.sections.map((section, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                {section.heading}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
