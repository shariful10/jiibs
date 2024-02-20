"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import UnitCard from "@/Components/UnitCard";
import { data } from "@/Components/data";

// Import Swiper styles
import "swiper/css";

export default function SimilarSlider() {
  const apartments = data.apartments;

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="pt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 md:p-0"
      >
        {apartments?.map((apartment, index) => (
          <SwiperSlide key={index}>
            <UnitCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
