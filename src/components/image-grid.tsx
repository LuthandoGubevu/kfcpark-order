import React from 'react';
import Image from 'next/image';

const specificImages = [
  {
    src: "/images/1.1.1.png",
    alt: "Park & Order Image 1.1.1",
    hint: "food item",
  },
  {
    src: "/images/1.1.2.png",
    alt: "Park & Order Image 1.1.2",
    hint: "food item",
  },
  {
    src: "/images/1.1.3.png",
    alt: "Park & Order Image 1.1.3",
    hint: "food item",
  },
  {
    src: "/images/1.2.1.png",
    alt: "Park & Order Image 1.2.1",
    hint: "restaurant setting",
  },
  {
    src: "/images/1.2.2.png",
    alt: "Park & Order Image 1.2.2",
    hint: "restaurant setting",
  },
  {
    src: "/images/1.2.3.png",
    alt: "Park & Order Image 1.2.3",
    hint: "restaurant setting",
  },
  {
    src: "/images/3.1.1.png",
    alt: "Park & Order Image 3.1.1",
    hint: "menu item",
  },
  {
    src: "/images/3.1.2.png",
    alt: "Park & Order Image 3.1.2",
    hint: "special offer",
  },
  {
    src: "/images/3.1.3.png",
    alt: "Park & Order Image 3.1.3",
    hint: "drink selection",
  },
  {
    src: "/images/3.2.1.png",
    alt: "Park & Order Image 3.2.1",
    hint: "dessert option",
  },
  {
    src: "/images/3.2.2.png",
    alt: "Park & Order Image 3.2.2",
    hint: "happy customers",
  },
  {
    src: "/images/3.2.3.png",
    alt: "Park & Order Image 3.2.3",
    hint: "restaurant exterior",
  },
];

const ImageGrid = () => {
  return (
    <section className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {specificImages.map((image, index) => (
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
