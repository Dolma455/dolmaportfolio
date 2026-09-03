'use client';

import React from 'react';
import EllipseCarousel from '@/components/ui/ellipse-carousel';

export default function EllipseCarouselDemo() {
  return (
    <div className="w-full min-h-screen bg-[#05070a] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <EllipseCarousel
          backgroundColor="transparent"
          centerLabel="Ellipse Carousel"
          showCenterLabel
          cardWidth={140}
          cardHeight={190}
          minScale={0.35}
          radiusXRatio={0.28}
          radiusYRatio={0.34}
          autoPlay
          holdDuration={1}
          stepDuration={0.7}
          pauseOnHover
          draggable
          dragSensitivity={1}
        />
      </div>
    </div>
  );
}
