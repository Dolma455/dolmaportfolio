'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Download, Palette } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Services', href: '#offerings' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#about' },
  { label: 'Clients', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('offerings');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const themeMenuRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  const { theme, setTheme, options } = useTheme();

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near the very top of the page
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY.current;

        // Threshold to avoid micro-jitter
        if (diff > 8) {
          // Scrolling down -> hide navbar & close any open menus
          setIsVisible(false);
          setThemeMenuOpen(false);
          setMobileMenuOpen(false);
        } else if (diff < -8) {
          // Scrolling up -> show navbar
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;

      const hashSections = [
        'home',
        'offerings',
        'work',
        'about',
        'testimonials',
        'contact',
      ];

      const current = hashSections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
        setThemeMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (!href || href === '#' || href === '#home') {
      e.preventDefault();
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    e.preventDefault();
    try {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/' + href;
      }
    } catch {
      window.location.href = '/' + href;
    }
  };

  return (
    <>
      {/* Floating Glassmorphic Top Navbar */}
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -90,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3.5 sm:top-5 inset-x-0 z-50 flex items-center justify-center px-4 pointer-events-none"
      >
        <nav
          className={`flex items-center gap-3.5 sm:gap-5 md:gap-6 h-12 sm:h-13 md:h-14 px-4 sm:px-6 rounded-full bg-[#0D1117]/65 backdrop-blur-2xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.55)] transition-all duration-300 w-auto whitespace-nowrap ${
            isVisible ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {/* Brand Logo: Dolma */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center group cursor-pointer select-none shrink-0 mr-1 sm:mr-2"
          >
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-pink-300 hover:text-pink-200 transition-colors font-display drop-shadow-[0_0_12px_rgba(var(--theme-glow),0.35)]">
              Dolma
            </span>
          </a>

          {/* Center Links: Services, Projects, Experience, Clients, Contact */}
          <div className="hidden md:flex items-center gap-1 shrink-0 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-normal transition-all shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'text-pink-300 bg-pink-500/10 shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Actions: Theme, CV, Let's Connect */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap ml-1 sm:ml-2">
            {/* Theme Picker */}
            <div className="relative shrink-0" ref={themeMenuRef}>
              <button
                type="button"
                onClick={() => setThemeMenuOpen((prev) => !prev)}
                className="h-8.5 w-8.5 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer shrink-0"
                title="Change Theme Color"
                aria-label="Change Theme Color"
              >
                <Palette className="w-4 h-4 text-pink-300" />
              </button>

              <AnimatePresence>
                {themeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 p-2.5 rounded-2xl bg-[#0D1117]/85 backdrop-blur-2xl border border-white/12 shadow-2xl flex items-center gap-2.5 z-50"
                  >
                    {options.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setTheme(option.id);
                          setThemeMenuOpen(false);
                        }}
                        className={`w-5 h-5 rounded-full transition-transform cursor-pointer ${
                          theme === option.id
                            ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-[#0D1117]'
                            : 'opacity-70 hover:opacity-100 hover:scale-110'
                        }`}
                        style={{ backgroundColor: option.preview }}
                        title={option.name}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CV Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 h-8.5 sm:h-9 md:h-10 px-3.5 sm:px-4 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-pink-300/40 text-xs sm:text-sm font-medium tracking-normal text-slate-200 hover:text-white transition-all backdrop-blur-md cursor-pointer shrink-0 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-pink-300 shrink-0" />
              <span>CV</span>
            </a>

            {/* Let's Connect Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-1.5 h-8.5 sm:h-9 md:h-10 px-4 sm:px-5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-semibold text-xs sm:text-sm tracking-normal transition-all shadow-[0_0_20px_rgba(var(--theme-glow),0.35)] hover:scale-105 backdrop-blur-md cursor-pointer shrink-0 whitespace-nowrap"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="h-8.5 w-8.5 sm:h-9 sm:w-9 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all md:hidden flex items-center justify-center cursor-pointer shrink-0"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-5 rounded-3xl bg-[#0D1117]/85 backdrop-blur-2xl border border-white/15 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for work
                </span>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-pink-300 font-bold hover:underline"
                >
                  <span>CV</span>
                  <Download className="w-3 h-3" />
                </a>
              </div>

              <div className="flex flex-col gap-1 py-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-pink-300 font-bold bg-pink-500/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-pink-300 hover:bg-pink-200 text-[#05070A] font-bold text-xs font-mono shadow-[0_0_20px_rgba(var(--theme-glow),0.35)] transition-all"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
