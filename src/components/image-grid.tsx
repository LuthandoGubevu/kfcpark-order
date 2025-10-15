import React from 'react';
import Image from 'next/image';

const imageFiles = [
    'New-1.1.1.png', 'New-1.1.2.png', 'New-1.1.3.png',
    'New-1.2.1.png', 'New-1.2.2.png', 'New-1.2.3.png',
    'New-3.1.1.png', 'New-3.1.2.png', 'New-3.1.3.png',
    'New-3.2.1.png', 'New-3.2.2.png', 'New-3.2.3.png'
];

const imagePlaceholders = imageFiles.map((file, index) => ({
    src: `/images/${file}`,
    alt: `Menu item ${index + 1}`,
    hint: 'food item',
    width: 540,
    height: 960
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
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
