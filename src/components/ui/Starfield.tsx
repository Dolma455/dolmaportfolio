'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
}

export default function Starfield({ density = 70 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars: Star[] = [];
    const count = Math.floor((width * height) / (1920 * 1080) * density);

    for (let i = 0; i < count; i++) {
      const baseAlpha = Math.random() * 0.6 + 0.2;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw and connect stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move
        star.x += star.vx;
        star.y += star.vy;

        // Wrap edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle
        star.alpha = star.baseAlpha + Math.sin(time * 3 + i) * 0.2;

        // Mouse proximity interaction
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let currentSize = star.size;

        if (dist < 120) {
          const force = (120 - dist) / 120;
          star.x -= (dx / dist) * force * 1.2;
          star.y -= (dy / dist) * force * 1.2;
          currentSize += force * 1.5;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, Math.max(0.2, currentSize), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 220, 255, ${Math.max(0.1, star.alpha)})`;
        ctx.fill();

        // Connect nearby stars with subtle cyan/violet threads
        for (let j = i + 1; j < stars.length; j++) {
          const star2 = stars[j];
          const distBetween = Math.hypot(star.x - star2.x, star.y - star2.y);
          if (distBetween < 80) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.strokeStyle = `rgba(110, 231, 249, ${0.12 * (1 - distBetween / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}
