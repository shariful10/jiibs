"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const StudioBed = ({ betData = [] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="!w-full rounded-lg"
    >
      {betData?.map((bet, index) => (
        <SwiperSlide key={index} className="!w-[180px]">
          <div className="flex items-center justify-between gap-6 cursor-pointer">
            <BetStudio studio={bet} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StudioBed;

// bet studio components
function BetStudio({ studio }) {
  return (
    <div className="w-full capitalize border rounded-lg p-3 min-w-min">
      <h4 className="text-lg xxl:text-xl font-normal"> {studio?.space}</h4>
      <strong className="md:text-base text-sm font-normal">
        ${studio?.price?.min} - ${studio?.price?.max}
      </strong>
      <p className="md:text-base text-sm font-normal leading-[22px] text-primary">
        {studio?.available} Available
      </p>
    </div>
  );
}
