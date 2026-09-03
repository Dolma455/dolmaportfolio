// Built using Hyperiux Vault: https://vault.hyperiux.com
'use client';

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1633493106115-fa66e9275141?auto=format&fit=crop&w=800&q=80',
];

const DEFAULT_META = [
  {
    alt: 'NAASA X Trading Cockpit',
    title: 'NAASA X',
    description: 'Fintech & Trading Platform',
    label: 'Trading Cockpit',
    number: '01',
    tags: ['Fintech', 'Trading', 'Web3'],
  },
  {
    alt: 'Agrilink IoT Dashboard',
    title: 'AGRILINK',
    description: 'Enterprise IoT & Telemetry',
    label: 'Control Center',
    number: '02',
    tags: ['IoT', 'SaaS', 'Telemetry'],
  },
  {
    alt: 'Connect Infinity Hub',
    title: 'CONNECT INFINITY',
    description: 'Spatial AI Knowledge Hub',
    label: 'Spatial Workspace',
    number: '03',
    tags: ['AI', 'Spatial UI', 'Productivity'],
  },
  {
    alt: 'NAASA Corporate Portal',
    title: 'NAASA WEBSITE',
    description: 'Website & Corporate Portal',
    label: 'Corporate Portal',
    number: '04',
    tags: ['Website', 'Finance', '2024'],
  },
  {
    alt: 'Self Service Mobile App',
    title: 'SELF SERVICE APP',
    description: 'Mobile App & Identity KYC',
    label: 'Mobile Client',
    number: '05',
    tags: ['Mobile App', 'Fintech', 'KYC'],
  },
  {
    alt: 'Sagar Distillery E-Commerce',
    title: 'SAGAR DISTILLERY',
    description: 'Brand & E-Commerce Platform',
    label: 'Digital Flagship',
    number: '06',
    tags: ['Branding', 'Luxury', 'E-Commerce'],
  },
];

export interface SmoothSliderItem {
  src: string;
  alt?: string;
  label?: string;
  title?: string;
  description?: string;
  number?: string;
  tags?: string[];
  project?: any;
  href?: string;
}

const defaultItems: SmoothSliderItem[] = DEFAULT_META.map((m, i) => ({
  src: UNSPLASH_IMAGES[i % UNSPLASH_IMAGES.length],
  ...m,
}));

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') return () => {};

      const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQueryList.addEventListener('change', callback);

      return () => mediaQueryList.removeEventListener('change', callback);
    },
    () =>
      typeof window === 'undefined'
        ? false
        : window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false,
    () => false,
  );
}

export interface ArcFlowCarouselCompProps {
  items?: SmoothSliderItem[];
  /** Circle radius as a multiple of the container width. Bigger = flatter arc. */
  radiusRatio?: number;
  /** Card width as a fraction of the container width (clamped by min/max). */
  cardRatio?: number;
  minCardWidth?: number;
  maxCardWidth?: number;
  /** Card width / height ratio. ~0.88 - 0.95 gives clean proportions with 16:10 media + footer. */
  cardAspect?: number;
  /** 0 = cards touch edge to edge, 0.3 = overlap by 30%, negative = a gap between them. */
  overlap?: number;
  /** Vertical position of the leading card's centre, as a fraction of height. */
  arcOffset?: number;
  /** Higher = the fan catches up to the pointer faster. 4–9 feels natural. */
  smoothing?: number;
  /** How far the fan travels per pixel dragged. 1 = 1:1 at the centre card, higher = more travel per drag. */
  dragSensitivity?: number;
  /** Flick distance multiplier after release. */
  momentum?: number;
  /** Snap to the nearest card once the flick settles. */
  snap?: boolean;
  /** How wheel / trackpad input is consumed. */
  wheelControl?: 'horizontal' | 'both' | 'off';
  /** Constant idle drift in rad/s. Positive drifts new cards in from the left. */
  autoRotateSpeed?: number;
  /** Pause the idle drift while a pointer hovers the carousel. */
  pauseOnHover?: boolean;
  /** Shared hex color used for both the page background and the wheel surface. */
  surfaceColor?: string;
  className?: string;
  onCardClick?: (item: SmoothSliderItem, index: number) => void;
}

const DRAG_SMOOTHING = 14;
const VELOCITY_WINDOW = 90;
const MAX_FLICK = 9;
const STAGGER_LAG_STRENGTH = 0.85;
const MIN_FOLLOW_FRACTION = 0.6;

export default function ArcFlowCarousel({
  items = defaultItems,
  radiusRatio = 0.92,
  cardRatio = 0.28,
  minCardWidth = 260,
  maxCardWidth = 390,
  cardAspect = 0.9,
  overlap = -0.04,
  arcOffset = 0.38,
  smoothing = 5.5,
  dragSensitivity = 1.2,
  momentum = 1,
  snap = false,
  wheelControl = 'horizontal',
  autoRotateSpeed = 0.08,
  pauseOnHover = true,
  surfaceColor = '#05070a',
  className = '',
  onCardClick,
}: ArcFlowCarouselCompProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const discRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const reduceMotion = usePrefersReducedMotion();

  const [slotCount, setSlotCount] = useState(() => Math.max(items.length, 12));

  const layoutRef = useRef({
    radius: 950,
    cardWidth: 320,
    cardHeight: 355,
    step: 0.16,
    centerX: 0,
    centerY: 0,
    maxAngle: 1,
  });

  const currentRef = useRef(0);
  const targetRef = useRef(0);
  const slotOffsetsRef = useRef<number[]>([]);
  const draggingRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const pointerIdRef = useRef<number | null>(null);
  const lastXRef = useRef(0);
  const samplesRef = useRef<{ t: number; value: number }[]>([]);
  const revealRef = useRef(reduceMotion ? 1 : 0);
  const revealStartRef = useRef(0);
  const wheelSettleRef = useRef(0);
  const hoveredRef = useRef(false);

  const total = items.length;

  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage || !total) return;

    const width = stage.offsetWidth;
    const height = stage.offsetHeight;

    const cardWidth = gsap.utils.clamp(minCardWidth, maxCardWidth, width * cardRatio);
    const cardHeight = cardWidth / cardAspect;
    const radius = Math.max(width * radiusRatio, cardWidth * 3.8);

    const step = (cardWidth * (1 - gsap.utils.clamp(-0.5, 0.85, overlap))) / radius;
    const centerX = width / 2;
    const centerY = height * arcOffset + radius;
    const discRadius = radius - cardHeight * 0.6;

    const reach = Math.min(1, (width / 2 + cardWidth * 1.2) / radius);
    const maxAngle = Math.asin(reach) + 0.12;

    layoutRef.current = { radius, cardWidth, cardHeight, step, centerX, centerY, maxAngle };

    const disc = discRef.current;
    if (disc) {
      disc.style.width = `${discRadius * 2}px`;
      disc.style.height = `${discRadius * 2}px`;
      disc.style.left = `${centerX}px`;
      disc.style.top = `${centerY - discRadius}px`;
    }

    const needed = Math.ceil((maxAngle * 2) / step) + 2;
    setSlotCount((prev) => {
      const next = Math.max(total, Math.ceil(needed / total) * total);
      return next === prev ? prev : next;
    });
  }, [arcOffset, cardAspect, cardRatio, maxCardWidth, minCardWidth, overlap, radiusRatio, total]);

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

  useEffect(() => {
    if (!total) return;

    const draw = (dt: number) => {
      const { radius, cardWidth, cardHeight, step, centerX, centerY, maxAngle } = layoutRef.current;
      const span = slotCount * step;
      const half = span / 2;
      const reveal = revealRef.current;
      const rate = draggingRef.current ? DRAG_SMOOTHING : reduceMotion ? DRAG_SMOOTHING : smoothing;
      const useUnifiedOffset = reduceMotion;

      const slotOffsets = slotOffsetsRef.current;
      if (slotOffsets.length !== slotCount) {
        slotOffsets.length = slotCount;
        slotOffsets.fill(currentRef.current);
      }

      for (let i = 0; i < slotCount; i += 1) {
        const card = cardRefs.current[i];
        if (!card) continue;

        if (useUnifiedOffset) {
          slotOffsets[i] = currentRef.current;
        } else {
          let rankAngle = (i * step - slotOffsets[i]) % span;
          if (rankAngle < -half) rankAngle += span;
          else if (rankAngle >= half) rankAngle -= span;
          const distanceFactor = gsap.utils.clamp(0, 1, Math.abs(rankAngle) / maxAngle);

          const followRate = Math.max(
            rate * (1 - distanceFactor * STAGGER_LAG_STRENGTH),
            rate * MIN_FOLLOW_FRACTION,
          );
          const followLerp = 1 - Math.exp(-followRate * dt);
          slotOffsets[i] += (currentRef.current - slotOffsets[i]) * followLerp;
        }

        let baseAngle = (i * step - slotOffsets[i]) % span;
        if (baseAngle < -half) baseAngle += span;
        else if (baseAngle >= half) baseAngle -= span;

        if (Math.abs(baseAngle) > maxAngle) {
          if (card.style.visibility !== 'hidden') card.style.visibility = 'hidden';
          continue;
        }
        if (card.style.visibility === 'hidden') card.style.visibility = 'visible';

        const x = centerX + radius * Math.sin(baseAngle) - cardWidth / 2;
        const y = centerY - radius * Math.cos(baseAngle) - cardHeight / 2;

        card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${baseAngle}rad)`;
        card.style.width = `${cardWidth}px`;
        card.style.height = `${cardHeight}px`;
        card.style.zIndex = `${Math.round((baseAngle + half) * 1000)}`;

        const inner = innerRefs.current[i];
        if (inner && reveal < 1) {
          const delay = Math.min(1, Math.abs(baseAngle) / maxAngle) * 0.45;
          const p = gsap.utils.clamp(0, 1, (reveal - delay) / (1 - delay || 1));
          const eased = 1 - Math.pow(1 - p, 3);
          inner.style.opacity = `${eased}`;
          inner.style.transform = `translate3d(0, ${(1 - eased) * cardHeight * 0.35}px, 0)`;
        } else if (inner && inner.style.opacity !== '1') {
          inner.style.opacity = '1';
          inner.style.transform = 'translate3d(0, 0, 0)';
        }
      }
    };

    const tick = (_time: number, deltaTime: number) => {
      const dt = Math.min(deltaTime, 50) / 1000;
      const rate = draggingRef.current ? DRAG_SMOOTHING : reduceMotion ? DRAG_SMOOTHING : smoothing;
      const lerp = 1 - Math.exp(-rate * dt);

      const delta = targetRef.current - currentRef.current;
      currentRef.current += delta * lerp;

      if (Math.abs(delta) < 0.00002) currentRef.current = targetRef.current;

      if (revealRef.current < 1) {
        const now = performance.now();
        if (!revealStartRef.current) revealStartRef.current = now;
        revealRef.current = Math.min(1, (now - revealStartRef.current) / 1100);
      }

      if (
        autoRotateSpeed &&
        !reduceMotion &&
        !draggingRef.current &&
        !(pauseOnHover && hoveredRef.current)
      ) {
        targetRef.current += autoRotateSpeed * dt;
      }

      draw(dt);
    };

    draw(1);
    gsap.ticker.add(tick);

    return () => gsap.ticker.remove(tick);
  }, [autoRotateSpeed, pauseOnHover, reduceMotion, slotCount, smoothing, total]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !total) return;

    const pushSample = () => {
      const now = performance.now();
      const samples = samplesRef.current;
      samples.push({ t: now, value: targetRef.current });
      while (samples.length > 2 && now - samples[0].t > VELOCITY_WINDOW) samples.shift();
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      draggingRef.current = true;
      dragDistanceRef.current = 0;
      pointerIdRef.current = e.pointerId;
      lastXRef.current = e.clientX;
      samplesRef.current = [{ t: performance.now(), value: targetRef.current }];
      targetRef.current = currentRef.current;
      stage.setPointerCapture(e.pointerId);
      stage.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current || e.pointerId !== pointerIdRef.current) return;
      const dx = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
      dragDistanceRef.current += Math.abs(dx);
      targetRef.current -= (dx * dragSensitivity) / layoutRef.current.radius;
      pushSample();
    };

    const endDrag = (e: PointerEvent) => {
      if (!draggingRef.current || e.pointerId !== pointerIdRef.current) return;
      draggingRef.current = false;
      pointerIdRef.current = null;
      stage.style.cursor = 'grab';
      if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);

      pushSample();

      const { step } = layoutRef.current;
      let projected = targetRef.current;

      if (!reduceMotion) {
        const samples = samplesRef.current;
        const first = samples[0];
        const last = samples[samples.length - 1];
        const dt = last && first ? (last.t - first.t) / 1000 : 0;

        if (dt > 0.008) {
          const velocity = (last.value - first.value) / dt;
          const throw_ = gsap.utils.clamp(-MAX_FLICK, MAX_FLICK, velocity / smoothing) * momentum;
          projected = targetRef.current + throw_;
        }
      }

      targetRef.current = snap ? gsap.utils.snap(step, projected) : projected;
      samplesRef.current = [];
    };

    const onWheel = (e: WheelEvent) => {
      if (wheelControl === 'off') return;
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (wheelControl === 'horizontal' && !horizontal) return;

      const delta = horizontal ? e.deltaX : e.deltaY;
      e.preventDefault();
      targetRef.current += (delta * dragSensitivity) / layoutRef.current.radius;

      if (snap) {
        window.clearTimeout(wheelSettleRef.current);
        wheelSettleRef.current = window.setTimeout(() => {
          targetRef.current = gsap.utils.snap(layoutRef.current.step, targetRef.current);
        }, 140);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const { step } = layoutRef.current;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        targetRef.current += step;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        targetRef.current -= step;
      }
    };

    const onPointerEnter = () => {
      hoveredRef.current = true;
    };
    const onPointerLeave = () => {
      hoveredRef.current = false;
    };

    stage.addEventListener('pointerdown', onPointerDown);
    stage.addEventListener('pointermove', onPointerMove);
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    stage.addEventListener('pointerenter', onPointerEnter);
    stage.addEventListener('pointerleave', onPointerLeave);
    stage.addEventListener('wheel', onWheel, { passive: false });
    stage.addEventListener('keydown', onKeyDown);

    return () => {
      stage.removeEventListener('pointerdown', onPointerDown);
      stage.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerup', endDrag);
      stage.removeEventListener('pointercancel', endDrag);
      stage.removeEventListener('pointerenter', onPointerEnter);
      stage.removeEventListener('pointerleave', onPointerLeave);
      stage.removeEventListener('wheel', onWheel);
      stage.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(wheelSettleRef.current);
    };
  }, [dragSensitivity, momentum, reduceMotion, smoothing, snap, total, wheelControl]);

  if (!total) return null;

  const slots = Array.from({ length: slotCount }, (_, i) => items[i % total]);

  return (
    <section
      className={`relative bg-transparent h-[560px] sm:h-[620px] md:h-[680px] w-full overflow-hidden select-none ${className}`}
      style={{ backgroundColor: surfaceColor }}
    >
      <div
        ref={stageRef}
        tabIndex={0}
        role="region"
        aria-label="Draggable image carousel"
        className="absolute inset-0 cursor-grab outline-none"
        style={{ touchAction: 'pan-y' }}
      >
        <div
          ref={discRef}
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 rounded-full border border-white/5"
          style={{
            backgroundColor: surfaceColor,
            boxShadow: '0 -20px 80px rgba(0,0,0,0.85) inset',
          }}
        />

        {slots.map((item, i) => {
          const originalIndex = i % total;
          return (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onClick={() => {
                if (dragDistanceRef.current < 6 && onCardClick) {
                  onCardClick(item, originalIndex);
                }
              }}
              className="group absolute top-0 left-0 will-change-transform cursor-pointer"
              style={{ visibility: 'hidden' }}
            >
              <div
                ref={(el) => {
                  innerRefs.current[i] = el;
                }}
                className="relative h-full w-full flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden rounded-2xl bg-[#0D1117] border border-white/10 group-hover:border-pink-300/60 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_35px_rgba(244,114,182,0.25)] backdrop-blur-xl"
                style={{
                  opacity: reduceMotion ? 1 : 0,
                }}
              >
                {/* 1. Structured 16:10 Screenshot Frame */}
                <div className="relative aspect-[16/10] w-full rounded-xl bg-black/80 border border-white/10 overflow-hidden shadow-inner flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt ?? item.title ?? `Project screenshot`}
                    draggable={false}
                    className="pointer-events-none block h-full w-full object-cover object-top select-none group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle Gradient vignette along the bottom of the image frame */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Center Action Badge on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-200 text-[#05070A] font-bold text-xs shadow-[0_0_20px_rgba(251,207,232,0.6)] backdrop-blur-md">
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#05070A]" />
                    </div>
                  </div>
                </div>

                {/* 2. Project Title & Small Chips Only */}
                <div className="pt-2 px-1 flex flex-col gap-1.5">
                  {item.title ? (
                    <h4 className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-pink-200 transition-colors truncate">
                      {item.title}
                    </h4>
                  ) : null}

                  {item.tags && item.tags.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                      {item.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.05] border border-white/10 text-slate-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
