'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Company {
  name: string;
  logo: string | React.ReactNode;
}

const COMPANIES: Company[] = [
  {
    name: 'Naasa Securities',
    logo: '/logos/naasa-mark.png',
  },
  {
    name: 'Nepal Stock House',
    logo: '/logos/nepal-stock-house-mark.png',
  },
  {
    name: 'Cognix Insights',
    logo: '/logos/cognix-mark.png',
  },
  {
    name: 'Waterflow Technology',
    logo: '/logos/waterflow-mark.png',
  },
];

export default function LogoCloud() {
  return (
    <section className="relative w-full py-10 sm:py-14 bg-[#05070A] overflow-hidden select-none border-b border-white/5">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center">

        {/* Header: 'Trusted by' (smaller text) */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent text-center mb-8 sm:mb-10"
        >
          Trusted by
        </motion.h2>

        {/* Exact Aceternity Layout: Logo + Company Name only (no rectangle, no description) */}
        <div className="w-full flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 sm:gap-3.5 group cursor-default transition-transform"
            >
              {/* Logo Mark */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
                {typeof company.logo === 'string' ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain filter drop-shadow group-hover:brightness-110 transition-all"
                  />
                ) : (
                  company.logo
                )}
              </div>

              {/* Company Name */}
              <span className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-pink-200 transition-colors">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
