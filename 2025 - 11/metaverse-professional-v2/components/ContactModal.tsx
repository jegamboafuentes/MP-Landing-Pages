import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Access environment variables securely
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
const TEMPLATE_CUSTOMER = import.meta.env.VITE_EMAILJS_TEMPLATE_CUSTOMER;

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    user_name: '',
    user_company: '',
    user_email: '',
    user_phone: '',
    interest: t.contact.options[0], // Default to first option
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Verify keys exist before sending
    if (!SERVICE_ID || !PUBLIC_KEY || !TEMPLATE_ADMIN || !TEMPLATE_CUSTOMER) {
      console.error("EmailJS environment variables are missing.");
      setErrorMessage("Configuration error. Please contact us directly.");
      setIsSubmitting(false);
      return;
    }

    // Prepare data to match your EmailJS template variables
    const templateParams = {
      user_name: formData.user_name,
      user_company: formData.user_company,
      user_email: formData.user_email,
      user_phone: formData.user_phone,
      interest: formData.interest,
      message: formData.message,
    };

    try {
      // Send both emails in parallel
      await Promise.all([
        // 1. Send Notification to You
        emailjs.send(SERVICE_ID, TEMPLATE_ADMIN, templateParams, PUBLIC_KEY),
        // 2. Send Auto-Reply to Customer
        emailjs.send(SERVICE_ID, TEMPLATE_CUSTOMER, templateParams, PUBLIC_KEY)
      ]);

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        user_name: '',
        user_company: '',
        user_email: '',
        user_phone: '',
        interest: t.contact.options[0],
        message: ''
      });

      // Auto close modal after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      setErrorMessage('Transmission failed. Please check your connection or try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-black/20 shrink-0">
                <h3 className="text-xl font-['Orbitron'] font-bold text-white">
                  {t.contact.title}
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form Scrollable Area */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500/20">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">{t.contact.successTitle}</h4>
                    <p className="text-gray-400">
                      {t.contact.successMessage}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">{t.contact.labels.name}</label>
                        <input
                          required
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          placeholder={t.contact.placeholders.name}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">{t.contact.labels.company}</label>
                        <input
                          required
                          type="text"
                          name="user_company"
                          value={formData.user_company}
                          onChange={handleChange}
                          placeholder={t.contact.placeholders.company}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">{t.contact.labels.email}</label>
                        <input
                            required
                            type="email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            placeholder={t.contact.placeholders.email}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                        />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">{t.contact.labels.phone}</label>
                            <input
                                required
                                type="tel"
                                name="user_phone"
                                value={formData.user_phone}
                                onChange={handleChange}
                                placeholder={t.contact.placeholders.phone}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Interest Select */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">{t.contact.labels.interest}</label>
                      <select 
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all appearance-none cursor-pointer"
                      >
                        {t.contact.options.map((option, i) => (
                           <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">{t.contact.labels.details}</label>
                      <textarea
                        required
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.placeholders.details}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Error Message Display */}
                    {errorMessage && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/10 p-3 rounded border border-red-500/20">
                        <AlertCircle size={16} />
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          {t.contact.submitting}
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          {t.contact.submit}
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center text-gray-600 mt-2">
                      {t.contact.privacy}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};