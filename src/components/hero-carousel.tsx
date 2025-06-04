
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
    src: "/images/all-star.jpeg",
    alt: "All-Star Special Offer",
    hint: "food promotion",
    title: "Our All-Star Deal!",
  },
  {
    src: "/images/bogof.jpeg",
    alt: "Buy One Get One Free Offer",
    hint: "discount offer",
    title: "BOGOF! Don't Miss Out!",
  },
  {
    src: "/images/burger-era.jpeg",
    alt: "Delicious Burger from Burger Era",
    hint: "burger meal",
    title: "Welcome to the Burger Era",
  },
  {
    src: "/images/family-fiesta.jpeg",
    alt: "Family Fiesta Meal Deal",
    hint: "family meal",
    title: "Family Fiesta: Fun for All!",
  },
  {
    src: "/images/monday.jpeg",
    alt: "Special Monday Deal",
    hint: "weekday special",
    title: "Make Your Monday Special",
  },
  {
    src: "/images/streetwise.jpeg",
    alt: "Streetwise Meal Combo",
    hint: "street food",
    title: "Get Streetwise with Our Combo",
  },
];

const HeroCarousel = () => {
  return (
    <section className="w-full relative bg-black">
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
        autoHeight={true} // Adjust height to current slide
        className="w-full"
      >
        {carouselImages.map((item, index) => {
          return (
            <SwiperSlide key={index} className="relative w-full bg-black">
              <Image
                src={item.src}
                alt={item.alt}
                width={2000} // Defines aspect ratio: 2000/400 = 5:1
                height={400}
                style={{ objectFit: 'contain' }} // Ensures entire image is visible within the 5:1 aspect ratio
                className="w-full h-auto" // Ensures image scales to width, height is auto based on aspect ratio
                data-ai-hint={item.hint}
                priority={index === 0}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-md">
                  {item.title}
                </h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
