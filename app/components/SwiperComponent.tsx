"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { carusel } from "../lib/interface";
import { urlFor } from "../lib/sanity";

interface SwiperComponentProps {
  data: carusel[];
}

export default function SwiperComponent({ data }: SwiperComponentProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={40} 
      slidesPerView='auto'
      autoplay={{
        delay: 1,
        disableOnInteraction: false, 
      }}
      speed={8000}
      loop={true}
      freeMode={true}
      allowTouchMove={true}
      className="mt-20"
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: "var(--swiper-slide-width)",
            height: "var(--swiper-slide-height)",
          }}
          className=" md:w-[200px] md:h-[200px] flex justify-center items-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md transition-opacity duration-500"
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
      ))}
    </Swiper>
  );
}
