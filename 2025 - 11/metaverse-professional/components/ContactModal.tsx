import React, { useState, useRef } from 'react';
import { X, Send, FileUp, CheckCircle, Sparkles, Loader2 } from 'lucide-react';
import NeonButton from './ui/NeonButton';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  // --- AI GENERATION LOGIC ---
  const generateWithAI = async () => {
    if (!formData.message && !formData.name) {
      alert("Please enter a few keywords or a rough idea in the 'Query Data' box first.");
      return;
    }

    setIsGenerating(true);

    try {
      // Ensure your vite.config.ts is set up to expose this key
      const apiKey = process.env.GEMINI_API_KEY; 
      
      if (!apiKey) {
        console.error("Gemini API Key missing");
        alert("API Key not configured.");
        setIsGenerating(false);
        return;
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are an expert Automation Architect. The user has a rough idea: "${formData.message}". 
                Rewrite this into a professional, technical project requirement description for an automation agency (Metaverse Professional). 
                Focus on potential tools (like Zapier, Python, AI) they might need. Keep it under 100 words.`
              }]
            }]
          })
        }
      );

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        setFormData(prev => ({ ...prev, message: generatedText }));
      }

    } catch (error) {
      console.error("AI Generation failed:", error);
      alert("AI Neural Link failed. Please type manually.");
    } finally {
      setIsGenerating(false);
    }
  };

  // --- EMAILJS SENDING LOGIC ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setFormData({ name: '', email: '', message: '' });
          setFile(null);
        }, 3000);
      }, (error) => {
        console.log(error.text);
        setIsSubmitting(false);
        alert("Transmission Error. Check console for details.");
      });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] p-8 md:p-10 clip-path-slant animate-[float_0.5s_ease-out] overflow-hidden">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-fuchsia-500/50"></div>

        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
        >
          <X />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-tight">
              Request <span className="text-cyan-400">Info</span>
            </h2>
            <p className="text-slate-400 mb-6 text-sm">
              Describe your automation needs. Use our AI assistant to refine your request.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">Identifier</label>
                  <input 
                    type="text" 
                    name="user_name" // Required for EmailJS
                    required
                    placeholder="NAME / ALIAS"
                    className="w-full bg-slate-950 border border-slate-700 text-white p-3 text-sm focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all placeholder:text-slate-700"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">Comms Channel</label>
                  <input 
                    type="email" 
                    name="user_email" // Required for EmailJS
                    required
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-slate-950 border border-slate-700 text-white p-3 text-sm focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all placeholder:text-slate-700"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                   <label className="block text-cyan-400 text-[10px] font-bold uppercase tracking-widest">Query Data</label>
                   
                   <button 
                     type="button"
                     onClick={generateWithAI}
                     disabled={isGenerating}
                     className="flex items-center gap-1 text-[10px] font-bold text-fuchsia-400 hover:text-fuchsia-300 uppercase tracking-widest transition-colors disabled:opacity-50"
                   >
                     {isGenerating ? <Loader2 className="animate-spin w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                     {isGenerating ? 'Generating...' : 'Refine with AI'}
                   </button>
                </div>
                
                <textarea 
                  rows={4}
                  name="message" // Required for EmailJS
                  required
                  placeholder="Describe your objective (e.g. 'I need to automate my invoices')..."
                  className="w-full bg-slate-950 border border-slate-700 text-white p-3 text-sm focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all placeholder:text-slate-700 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div 
                className={`relative border-2 border-dashed transition-all duration-300 rounded p-4 text-center cursor-pointer group ${file ? 'border-cyan-500 bg-cyan-900/10' : 'border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800'}`}
                onClick={() => fileInputRef.current?.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  {file ? (
                    <>
                      <CheckCircle className="text-cyan-400 w-6 h-6" />
                      <span className="text-cyan-400 font-mono text-xs">{file.name}</span>
                      <span className="text-slate-500 text-[10px]">Ready for transmission</span>
                    </>
                  ) : (
                    <>
                      <FileUp className="text-slate-500 group-hover:text-cyan-400 transition-colors w-6 h-6" />
                      <span className="text-slate-500 group-hover:text-cyan-300 font-mono text-xs uppercase tracking-wider">
                        Upload Schematics / Docs
                      </span>
                    </>
                  )}
                </div>
              </div>

              <NeonButton type="submit" glow className="w-full flex justify-center items-center gap-2" disabled={isSubmitting}>
                {isSubmitting ? 'Transmitting...' : (
                  <>
                    Transmit Request <Send size={16} />
                  </>
                )}
              </NeonButton>
            </form>
            
            {/* ... Trusted Partners section remains the same ... */}
            <div className="mt-8 pt-6 border-t border-slate-800">
               <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest mb-4">Trusted Protocols</p>
               <div className="flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 px-4">
                  <div className="flex items-center gap-2 group cursor-default">
                    <div className="w-5 h-5 bg-cyan-500 rounded-sm rotate-45 group-hover:animate-spin"></div>
                    <span className="font-bold text-slate-300 text-xs tracking-tighter">NEXUS</span>
                  </div>
                  <div className="flex items-center gap-2 group cursor-default">
                    <div className="w-5 h-5 rounded-full border-2 border-fuchsia-500 group-hover:bg-fuchsia-500/20"></div>
                    <span className="font-bold text-slate-300 text-xs tracking-tighter">ORBITAL</span>
                  </div>
                  <div className="flex items-center gap-2 group cursor-default">
                     <div className="w-4 h-4 bg-white transform skew-x-12"></div>
                    <span className="font-bold text-slate-300 text-xs tracking-tighter">BLOC</span>
                  </div>
                  <div className="flex items-center gap-2 group cursor-default hidden sm:flex">
                     <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-emerald-400 border-r-[10px] border-r-transparent"></div>
                    <span className="font-bold text-slate-300 text-xs tracking-tighter">APEX</span>
                  </div>
               </div>
            </div>

          </>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500/10 text-cyan-400 mb-6 animate-bounce border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">Signal Received</h3>
            <p className="text-slate-400">Our agents will analyze your data and respond shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;