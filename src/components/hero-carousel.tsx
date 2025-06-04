"use client";

import React from 'react';
import Image from 'next/image';

const HeroCarousel = () => {
  return (
    <section className="w-full h-screen relative bg-black">
      {/* The bg-black on the section will provide a background if the image doesn't fill the entire viewport due to aspect ratio differences with 'contain' */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Placeholder hero image for video content"
        fill
        style={{ objectFit: 'contain' }} // Changed from 'cover' to 'contain'
        data-ai-hint="landscape nature"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <h2 className="text-4xl font-bold text-white text-center p-4">
          Dynamic Video Content Coming Soon
        </h2>
      </div>
    </section>
  );
};

export default HeroCarousel;
