import React, { useState, useRef } from 'react';
import { X, Send, FileUp, CheckCircle } from 'lucide-react';
import NeonButton from './ui/NeonButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', message: '' });
        setFile(null);
      }, 2000);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] p-8 md:p-10 clip-path-slant animate-[float_0.5s_ease-out] overflow-hidden">
        {/* Decorative corner accents */}
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
              Request <span className="text-cyan-400">Access</span>
            </h2>
            <p className="text-slate-400 mb-6 text-sm">
              Initiate secure connection. Upload project schematics if available.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">Identifier</label>
                  <input 
                    type="text" 
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
                    required
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-slate-950 border border-slate-700 text-white p-3 text-sm focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all placeholder:text-slate-700"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">Query Data</label>
                <textarea 
                  rows={3}
                  required
                  placeholder="DESCRIBE YOUR OBJECTIVE..."
                  className="w-full bg-slate-950 border border-slate-700 text-white p-3 text-sm focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all placeholder:text-slate-700 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {/* File Upload Section */}
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

            {/* Trusted Partners / Logos */}
            <div className="mt-8 pt-6 border-t border-slate-800">
               <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest mb-4">Trusted Protocols</p>
               <div className="flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 px-4">
                  {/* Logo 1 */}
                  <div className="flex items-center gap-2 group cursor-default">
                    <div className="w-5 h-5 bg-cyan-500 rounded-sm rotate-45 group-hover:animate-spin"></div>
                    <span className="font-bold text-slate-300 text-xs tracking-tighter">NEXUS</span>
                  </div>
                  {/* Logo 2 */}
                  <div className="flex items-center gap-2 group cursor-default">
                    <div className="w-5 h-5 rounded-full border-2 border-fuchsia-500 group-hover:bg-fuchsia-500/20"></div>
                    <span className="font-bold text-slate-300 text-xs tracking-tighter">ORBITAL</span>
                  </div>
                  {/* Logo 3 */}
                  <div className="flex items-center gap-2 group cursor-default">
                     <div className="w-4 h-4 bg-white transform skew-x-12"></div>
                    <span className="font-bold text-slate-300 text-xs tracking-tighter">BLOC</span>
                  </div>
                  {/* Logo 4 */}
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
              <Send size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">Transmission Received</h3>
            <p className="text-slate-400">Our agents will establish a secure connection shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;