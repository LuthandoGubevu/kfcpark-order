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
                src={`${item.src}${cacheBuster}`}
                alt={item.alt}
                width={2000} // Defines aspect ratio: 2000/400 = 5:1
                height={400}
                style={{ objectFit: 'contain' }} // Ensures entire image is visible within the 5:1 aspect ratio
                className="w-full h-auto" // Ensures image scales to width, height is auto based on aspect ratio
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
