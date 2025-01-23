"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { carusel } from "../lib/interface";
import { urlFor } from "../lib/sanity";

import { useState } from "react";

interface SwiperComponentProps {
  data: carusel[];
}

export default function SwiperComponent({ data }: SwiperComponentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={40}
      slidesPerView="auto"
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={8000}
      loop={true}
      centeredSlides={true}
      freeMode={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="mt-10"
    >
      {data.map((item, index) => {
        const isActive = Math.abs(activeIndex - index) <= 1;
        const opacity = isActive ? 1 : 0.7;

        return (
          <SwiperSlide
            key={index}
            style={{
              width: "300px",
              height: "300px",
              opacity,
            }}
            className="flex justify-center items-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md transition-opacity duration-500"
          >
            <div className="w-full h-full flex justify-center items-center bg-gray-100 dark:bg-gray-400 rounded-xl">
              <Image
                src={urlFor(item.titleImage).url()}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
