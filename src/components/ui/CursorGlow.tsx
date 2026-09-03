'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(-500, springConfig);
  const mouseY = useSpring(-500, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          background: 'radial-gradient(circle, rgba(110, 231, 249, 0.07) 0%, rgba(129, 140, 248, 0.03) 40%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
