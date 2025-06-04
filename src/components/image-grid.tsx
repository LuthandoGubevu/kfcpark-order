import React from 'react';
import Image from 'next/image';

const imagePlaceholders = Array.from({ length: 12 }, (_, i) => ({
  src: `https://placehold.co/1080x1920.png`,
  alt: `Placeholder Park & Order Image ${i + 1}`,
  hint: i % 2 === 0 ? "food photography" : "restaurant ambiance",
}));

const ImageGrid = () => {
  return (
    <section className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {imagePlaceholders.map((image, index) => (
          <div key={index} className="w-full overflow-hidden rounded-lg shadow-lg aspect-[9/16] relative">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{objectFit: 'cover'}}
              className="transition-transform duration-300 ease-in-out hover:scale-105"
              data-ai-hint={image.hint}
              priority={index < 3} // Prioritize loading for images initially in viewport
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
