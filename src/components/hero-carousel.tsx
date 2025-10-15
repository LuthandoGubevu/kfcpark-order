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
    src: "/images/Double-Deal.jpg",
    alt: "Double Deal Offer",
    hint: "discount offer",
    title: "Double Deal",
  },
];

const HeroCarousel = () => {
  const [cacheBuster, setCacheBuster] = React.useState('');

  React.useEffect(() => {
    setCacheBuster(`?v=${new Date().getTime()}`);
  }, []);

  if (!cacheBuster) {
    return null; // Or a loading spinner
  }

  return (
    <section className="w-full relative bg-black aspect-[2000/400]">
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
        {carouselImages.map((item, index) => {
          const imageSrc = `${item.src}${cacheBuster}`;
          return (
            <SwiperSlide key={index} className="relative w-full h-full bg-black">
              <Image
                src={imageSrc}
                alt={item.alt}
                fill
                style={{ objectFit: 'contain' }} 
                className="w-full h-full"
                data-ai-hint={item.hint}
                priority={index === 0}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
