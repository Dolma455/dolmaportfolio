'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface AnimatedTestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
}: {
  testimonials: AnimatedTestimonialItem[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  // Stable pseudo-random rotation per index so cards don't jitter during re-renders
  const rotations = [-6, 5, -4, 7, -3, 6];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left: Stacked 3D Image Cards */}
        <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-md mx-auto">
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimonial, index) => {
              const rot = rotations[index % rotations.length];
              return (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rot,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.65,
                    scale: isActive(index) ? 1 : 0.94,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rot,
                    zIndex: isActive(index)
                      ? 30
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rot,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0D1117]">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      className="h-full w-full object-cover object-center select-none"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right: Testimonial Details & Animated Quote */}
        <div className="flex flex-col justify-between py-2 text-left">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
            }}
          >
            {/* Author Name */}
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {testimonials[active].name}
            </h3>

            {/* Designation */}
            <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
              {testimonials[active].designation}
            </p>

            {/* Word-by-word Animated Quote */}
            <motion.p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: 'blur(8px)',
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.015 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 pt-8 md:pt-10">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 text-white transition-all hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 text-white transition-all hover:scale-105 active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Indicator dots */}
            <div className="flex items-center gap-1.5 ml-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    active === idx
                      ? 'w-6 bg-pink-300'
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
