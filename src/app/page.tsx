'use client';

import Hero from '@/components/sections/Hero';
import WhatIOffer from '@/components/sections/WhatIOffer';
import SelectedWork from '@/components/sections/SelectedWork';
import Philosophy from '@/components/sections/Philosophy';
import Testimonial from '@/components/sections/Testimonial';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <WhatIOffer />
      <SelectedWork />
      <Philosophy />
      <Testimonial />
      <Contact />
    </div>
  );
}
