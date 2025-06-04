"use client";

import React from 'react';
import Image from 'next/image';

const HeroCarousel = () => {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Placeholder hero image"
        fill
        style={{ objectFit: 'cover' }}
        data-ai-hint="landscape nature"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <h2 className="text-4xl font-bold text-white text-center">
          Dynamic Video Content Coming Soon
        </h2>
      </div>
    </section>
  );
};

export default HeroCarousel;
