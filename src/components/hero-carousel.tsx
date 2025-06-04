"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const videos = [
  { src: '/videos/video1.mp4', title: 'Delicious Dish Preparation' },
  { src: '/videos/video2.mp4', title: 'Restaurant Ambiance Tour' },
  { src: '/videos/video3.mp4', title: 'Chef Cooking Speciality' },
];

const HeroCarousel = () => {
  return (
    <section className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        className="w-full h-full"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <video
              className="w-full h-full object-cover"
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              title={video.title}
              aria-label={video.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
