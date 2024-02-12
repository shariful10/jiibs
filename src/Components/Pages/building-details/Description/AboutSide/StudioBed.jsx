"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const StudioBedSlide = ({ betData = [] }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      modules={[Navigation]}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className="w-full rounded-lg studio_slider"
    >
      <div className="swiper-button-next bg-slate-200" />
      <div className="swiper-button-prev bg-slate-200" />
      {betData?.map((bet, index) => (
        <SwiperSlide
          key={index}
          className="max-w-[181px] !w-full flex items-center justify-between gap-6 studio_slider_slide !m-0 cursor-pointer"
        >
          <BetStudio studio={bet} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StudioBedSlide;

// // mini components
function BetStudio({ studio }) {
  return (
    <div className="capitalize border rounded-lg p-3 min-w-min">
      <h4 className="text-xl md:text-[21px] font-normal"> {studio?.space}</h4>
      <strong className="md:text-base text-xs font-normal">
        ${studio?.price?.min} - ${studio?.price?.max}
      </strong>
      <p className="text-[8px] md:text-[15px] font-semibold leading-[22px] text-primary">
        {studio?.available} Available
      </p>
    </div>
  );
}
