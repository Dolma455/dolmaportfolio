'use client';

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// High-quality curated Unsplash images replacing heavy base64 strings
const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', // Abstract 3D shape
  'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80', // Colorful glass
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', // Liquid flow
  'https://images.unsplash.com/photo-1633493106115-fa66e9275141?auto=format&fit=crop&w=600&q=80', // Modern architecture
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80', // Neon gradient
  'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80', // Minimal aesthetic
  'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=600&q=80', // Cyber wave
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80', // Tech retro
  'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=600&q=80', // Hologram prism
  'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80', // Prism sphere
];

export interface EllipseCarouselItem {
  src?: string;
  alt?: string;
  bgColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const defaultItems: EllipseCarouselItem[] = [
  { src: UNSPLASH_IMAGES[0], alt: 'Modern 3D Abstract' },
  { src: UNSPLASH_IMAGES[1], alt: 'Glassmorphic Sculpture' },
  { src: UNSPLASH_IMAGES[2], alt: 'Digital Waveform' },
  { src: UNSPLASH_IMAGES[3], alt: 'Futuristic Geometry' },
  { src: UNSPLASH_IMAGES[4], alt: 'Neon Ambient Glow' },
  { src: UNSPLASH_IMAGES[5], alt: 'Minimalist Architecture' },
  { src: UNSPLASH_IMAGES[6], alt: 'Cyber Fluid Texture' },
  { src: UNSPLASH_IMAGES[7], alt: 'Hardware Innovation' },
  { src: UNSPLASH_IMAGES[8], alt: 'Holographic Refraction' },
  { src: UNSPLASH_IMAGES[9], alt: 'Prismatic Sphere' },
];

const MOBILE_BREAKPOINT = 768;
const MOBILE_RADIUS_X_SCALE = 1.45;
const MOBILE_RADIUS_Y_SCALE = 0.82;
const MOBILE_CARD_SCALE = 0.75;

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.(REDUCED_MOTION_QUERY);
    if (!mediaQuery) return;

    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.('change', update);

    return () => mediaQuery.removeEventListener?.('change', update);
  }, []);

  return reducedMotion;
}

export interface EllipseCarouselProps {
  items?: EllipseCarouselItem[];
  backgroundColor?: string;
  centerLabel?: string;
  showCenterLabel?: boolean;
  cardWidth?: number;
  cardHeight?: number;
  cardAspect?: number;
  minScale?: number;
  radiusXRatio?: number;
  radiusYRatio?: number;
  autoPlay?: boolean;
  holdDuration?: number;
  stepDuration?: number;
  stepEase?: string;
  pauseOnHover?: boolean;
  draggable?: boolean;
  dragSensitivity?: number;
  className?: string;
}

const EllipseCarousel = ({
  items = defaultItems,
  backgroundColor = 'transparent',
  centerLabel = 'Expertise Tools & Tech',
  showCenterLabel = true,
  cardWidth = 140,
  cardHeight = 180,
  cardAspect = 0.85,
  minScale = 0.35,
  radiusXRatio = 0.3,
  radiusYRatio = 0.34,
  autoPlay = true,
  holdDuration = 1.2,
  stepDuration = 0.75,
  stepEase = 'power2.inOut',
  pauseOnHover = true,
  draggable = true,
  dragSensitivity = 1,
  className = 'h-[440px] sm:h-[520px] md:h-[580px]',
}: EllipseCarouselProps) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = usePrefersReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const total = items.length;

  const rotationRef = useRef(0);
  const hoveredRef = useRef(false);
  const hoverCountRef = useRef(0);
  const draggingRef = useRef(false);
  const lastAngleRef = useRef(0);
  const dragOriginRef = useRef({ left: 0, top: 0 });
  const settleTweenRef = useRef<gsap.core.Tween | null>(null);
  const autoplayTweenRef = useRef<gsap.core.Tween | null>(null);
  const autoplayDelayRef = useRef<gsap.core.Tween | null>(null);

  const geometryRef = useRef({
    cx: 0,
    cy: 0,
    radiusX: 320,
    radiusY: 260,
    cardW: cardWidth,
    cardH: cardHeight ?? cardWidth / cardAspect,
  });

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const width = stage.offsetWidth;
    const height = stage.offsetHeight;
    const cardScale = isMobile ? MOBILE_CARD_SCALE : 1;
    const radiusXScale = isMobile ? MOBILE_RADIUS_X_SCALE : 1;
    const radiusYScale = isMobile ? MOBILE_RADIUS_Y_SCALE : 1;

    geometryRef.current = {
      cx: width / 2,
      cy: height / 2,
      radiusX: width * radiusXRatio * radiusXScale,
      radiusY: height * radiusYRatio * radiusYScale,
      cardW: cardWidth * cardScale,
      cardH: (cardHeight ?? cardWidth / cardAspect) * cardScale,
    };
  }, [cardAspect, cardHeight, cardWidth, isMobile, radiusXRatio, radiusYRatio]);

  useLayoutEffect(() => {
    measure();
    const stage = stageRef.current;
    if (!stage || typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [measure]);

  const render = useCallback(() => {
    if (!total) return;
    const { cx, cy, radiusX, radiusY, cardW, cardH } = geometryRef.current;
    const rotation = rotationRef.current;
    const step = (Math.PI * 2) / total;

    for (let i = 0; i < total; i += 1) {
      const card = cardRefs.current[i];
      if (!card) continue;

      const theta = i * step + rotation;
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);

      const scale = minScale + (1 - minScale) * ((cosT + 1) / 2);
      const w = cardW * scale;
      const h = cardH * scale;

      const x = cx + radiusX * cosT - w / 2;
      const y = cy + radiusY * sinT - h / 2;

      card.style.width = `${w}px`;
      card.style.height = `${h}px`;
      card.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      card.style.zIndex = `${Math.round(scale * 1000)}`;
      card.style.opacity = `${Math.max(0.35, scale)}`;
    }
  }, [minScale, total]);

  const stopAutoplay = useCallback(() => {
    autoplayDelayRef.current?.kill();
    autoplayTweenRef.current?.kill();
    autoplayDelayRef.current = null;
    autoplayTweenRef.current = null;
  }, []);

  const scheduleNextStep = useCallback(() => {
    if (!autoPlay || reducedMotion || !total) return;

    autoplayDelayRef.current = gsap.delayedCall(holdDuration, () => {
      if (draggingRef.current || (pauseOnHover && hoveredRef.current)) {
        scheduleNextStep();
        return;
      }

      const step = (Math.PI * 2) / total;
      const state = { r: rotationRef.current };
      autoplayTweenRef.current = gsap.to(state, {
        r: state.r - step,
        duration: stepDuration,
        ease: stepEase,
        onUpdate: () => {
          rotationRef.current = state.r;
          render();
        },
        onComplete: scheduleNextStep,
      });
    });
  }, [autoPlay, holdDuration, pauseOnHover, reducedMotion, render, stepDuration, stepEase, total]);

  useEffect(() => {
    render();
    scheduleNextStep();
    return () => stopAutoplay();
  }, [render, scheduleNextStep, stopAutoplay]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !draggable || !total) return;

    const pointerAngle = (e: PointerEvent) => {
      const { cx, cy, radiusX, radiusY } = geometryRef.current;
      const rect = dragOriginRef.current;
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      return Math.atan2((localY - cy) / radiusY, (localX - cx) / radiusX);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      stopAutoplay();
      settleTweenRef.current?.kill();
      settleTweenRef.current = null;
      draggingRef.current = true;
      const rect = stage.getBoundingClientRect();
      dragOriginRef.current = { left: rect.left, top: rect.top };
      lastAngleRef.current = pointerAngle(e);
      stage.setPointerCapture(e.pointerId);
      stage.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const angle = pointerAngle(e);
      let delta = angle - lastAngleRef.current;
      delta = ((((delta + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
      lastAngleRef.current = angle;
      rotationRef.current += delta * dragSensitivity;
      render();
    };

    const endDrag = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      stage.style.cursor = 'grab';
      if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);

      const step = (Math.PI * 2) / total;
      const target = Math.round(rotationRef.current / step) * step;
      const state = { r: rotationRef.current };

      if (reducedMotion) {
        rotationRef.current = target;
        render();
        scheduleNextStep();
        return;
      }

      settleTweenRef.current = gsap.to(state, {
        r: target,
        duration: 0.5,
        ease: 'power3.out',
        onUpdate: () => {
          rotationRef.current = state.r;
          render();
        },
        onComplete: () => {
          settleTweenRef.current = null;
          scheduleNextStep();
        },
      });
    };

    stage.addEventListener('pointerdown', onPointerDown);
    stage.addEventListener('pointermove', onPointerMove);
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);

    return () => {
      stage.removeEventListener('pointerdown', onPointerDown);
      stage.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerup', endDrag);
      stage.removeEventListener('pointercancel', endDrag);
      settleTweenRef.current?.kill();
    };
  }, [dragSensitivity, draggable, reducedMotion, render, scheduleNextStep, stopAutoplay, total]);

  const onCardPointerEnter = useCallback(() => {
    hoverCountRef.current += 1;
    hoveredRef.current = true;
  }, []);

  const onCardPointerLeave = useCallback(() => {
    hoverCountRef.current = Math.max(0, hoverCountRef.current - 1);
    hoveredRef.current = hoverCountRef.current > 0;
  }, []);

  if (!total) return null;

  return (
    <section
      className={`relative w-full overflow-hidden select-none ${className}`}
      style={{ backgroundColor }}
    >
      <div
        ref={stageRef}
        tabIndex={0}
        role="region"
        aria-label="Ellipse card carousel"
        className={`absolute inset-0 touch-pan-y outline-none ${draggable ? 'cursor-grab' : ''}`}
      >
        {showCenterLabel && centerLabel ? (
          <div className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-pink-300 font-semibold mb-1">
              Interactive 3D Orbit
            </span>
            <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white/90 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              {centerLabel}
            </span>
          </div>
        ) : null}

        {items.map((item, i) => {
          const isLogoOnly = Boolean(item.icon && !item.subtitle && !item.title);
          return (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              title={item.alt || item.title || ''}
              onPointerEnter={onCardPointerEnter}
              onPointerLeave={onCardPointerLeave}
              className={`absolute left-0 top-0 overflow-hidden ${
                isLogoOnly ? 'rounded-full' : 'rounded-2xl'
              } border border-white/12 shadow-[0_10px_32px_rgba(0,0,0,0.65)] backdrop-blur-xl will-change-transform transition-all duration-200 group/card hover:border-pink-300/60 hover:shadow-[0_0_24px_rgba(244,114,182,0.3)]`}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt ?? ''}
                  draggable={false}
                  className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center p-2.5 text-center transition-colors hover:bg-white/10"
                  style={{
                    backgroundColor: item.bgColor ?? 'rgba(13, 17, 23, 0.85)',
                    color: item.textColor ?? '#ffffff',
                  }}
                >
                  {item.icon ? (
                    <div className="flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/card:scale-115">
                      {item.icon}
                    </div>
                  ) : null}
                  {item.title ? (
                    <span className="text-base sm:text-lg font-bold leading-tight tracking-tight">
                      {item.title}
                    </span>
                  ) : null}
                  {item.subtitle ? (
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] opacity-60 font-mono">
                      {item.subtitle}
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EllipseCarousel;
