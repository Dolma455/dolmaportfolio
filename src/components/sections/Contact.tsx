'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  X,
  Sparkles,
  Linkedin,
  Instagram,
  Github,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Magnetic from '@/components/ui/Magnetic';
import Starfield from '@/components/ui/Starfield';
import { PERSONAL_INFO } from '@/data/portfolioData';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  tiktok: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
};

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Close modal on Escape key press and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FDE047', '#38BDF8', '#34D399', '#F472B6'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FDE047', '#38BDF8', '#34D399', '#F472B6'],
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#05070A] overflow-hidden flex flex-col justify-center items-center border-t border-white/5 text-center"
    >
      {/* Background Starfield & Deep Radial Glow bound to dynamic theme */}
      <Starfield density={50} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-t from-[rgba(var(--theme-glow),0.12)] via-cyan-500/5 to-transparent blur-[180px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-semibold text-pink-300 tracking-wide mb-5">
          <span>Get in Touch</span>
        </div>

        {/* Grand Headline Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-5 font-display"
        >
          Let&apos;s build something <br className="hidden sm:inline" />
          <span className="text-pink-300">exceptional together.</span>
        </motion.h2>

        {/* Short Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          Have an open full-time role, contract opportunity, or a project in mind? Let&apos;s connect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 sm:mb-16">
          <Magnetic strength={0.3}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-9 sm:px-10 py-4 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(var(--theme-glow),0.4)] hover:shadow-[0_0_35px_rgba(var(--theme-glow),0.6)] hover:scale-105 active:scale-98 cursor-pointer"
            >
              <span>Send Message</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </Magnetic>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all cursor-pointer backdrop-blur-md hover:scale-105"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Network - Pure Icons */}
        <div className="pt-10 border-t border-white/10 w-full flex items-center justify-center gap-3.5 sm:gap-5">
          {PERSONAL_INFO.socials.map((social) => (
            <Magnetic key={social.label} strength={0.3}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                aria-label={social.label}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-pink-300/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm group hover:scale-110 active:scale-95"
              >
                <span className="text-pink-300 group-hover:scale-110 transition-transform [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  {SOCIAL_ICONS[social.id || '']}
                </span>
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Location & Status Info */}
        <div className="mt-8 text-xs sm:text-sm text-slate-400 font-medium flex items-center justify-center gap-3 select-none">
          <span>Bradford, United Kingdom</span>
          <span className="text-white/20">•</span>
          <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CONTACT FORM MODAL POPUP                                                  */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-3xl bg-[#0D1117] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 text-left overflow-hidden"
            >
              {/* Modal Top Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(var(--theme-glow),0.12)] blur-[100px] pointer-events-none rounded-full" />

              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-pink-300 tracking-wide mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                    <span>Direct Message</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                    Let&apos;s Connect
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Contact Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Body or Success State */}
              {formSubmitted ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center mx-auto mb-4 border border-pink-500/30">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight font-display">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed mb-6 font-normal">
                    Thank you for reaching out. I look forward to connecting with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-semibold text-xs transition-all cursor-pointer shadow-lg"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-300 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-300 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your product, timeline, or open role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-300 focus:outline-none text-white text-sm transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Email Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(var(--theme-glow),0.35)] transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
