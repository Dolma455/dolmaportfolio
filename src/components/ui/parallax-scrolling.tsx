'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { Sparkles } from 'lucide-react';

export interface ParallaxComponentProps {
  title?: string;
  images?: {
    layer1?: string;
    layer2?: string;
    layer4?: string;
  };
  className?: string;
}

export function ParallaxComponent({
  title = 'Parallax',
  images = {
    layer1:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    layer2:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    layer4:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
  },
  className = '',
}: ParallaxComponentProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 0%',
          end: '100% 0%',
          scrub: 0,
        },
      });

      const layers = [
        { layer: '1', yPercent: 70 },
        { layer: '2', yPercent: 55 },
        { layer: '3', yPercent: 40 },
        { layer: '4', yPercent: 10 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: 'none',
          },
          idx === 0 ? undefined : '<'
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`parallax ${className}`} ref={parallaxRef}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers">
            <img
              src={
                images.layer1 ||
                'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'
              }
              loading="eager"
              width="800"
              data-parallax-layer="1"
              alt="Parallax Background Layer"
              className="parallax__layer-img"
            />
            <img
              src={
                images.layer2 ||
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80'
              }
              loading="eager"
              width="800"
              data-parallax-layer="2"
              alt="Parallax Midground Layer"
              className="parallax__layer-img"
            />
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">{title}</h2>
            </div>
            <img
              src={
                images.layer4 ||
                'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80'
              }
              loading="eager"
              width="800"
              data-parallax-layer="4"
              alt="Parallax Foreground Layer"
              className="parallax__layer-img"
            />
          </div>
          <div className="parallax__fade"></div>
        </div>
      </section>
      <section className="parallax__content">
        <Sparkles className="osmo-icon-svg text-pink-300 w-16 h-16 mb-4 animate-pulse" />
        <h3 className="text-xl font-bold text-slate-200 mb-2">Immersive Multi-Layer Parallax</h3>
        <p className="text-sm text-slate-400 max-w-md text-center">
          Scroll-driven velocity layers powered by GSAP ScrollTrigger and smooth inertia scrolling.
        </p>
      </section>
    </div>
  );
}

export default ParallaxComponent;
