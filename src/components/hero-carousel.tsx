
"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const carouselImages = [
  {
    src: "https://placehold.co/2000x400.png",
    alt: "Hero Image 1 - Placeholder (2000x400) for exciting restaurant scene",
    hint: "restaurant food",
    title: "Experience Our Culinary Delights",
  },
  {
    src: "https://placehold.co/2000x400.png",
    alt: "Hero Image 2 - Placeholder (2000x400) for vibrant dining atmosphere",
    hint: "dining atmosphere",
    title: "A Perfect Ambiance For You",
  },
  {
    src: "https://placehold.co/2000x400.png",
    alt: "Hero Image 3 - Placeholder (2000x400) for special dish feature",
    hint: "special dish",
    title: "Discover Your New Favorite",
  },
];

const HeroCarousel = () => {
  return (
    <section className="w-full h-screen relative bg-black">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {carouselImages.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint={item.hint}
              priority={index === 0} // Prioritize the first image
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-md">
                {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
