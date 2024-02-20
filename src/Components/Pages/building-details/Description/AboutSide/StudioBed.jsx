"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function StudioBed({ betData = [] }) {
  return (
    <div>
      <Swiper slidesPerView={"auto"} spaceBetween={10}>
        {betData?.map((bet, index) => (
          <SwiperSlide
            key={index}
            className="!max-w-[180px] min-[1200px]:!max-w-[160px] xxl:!max-w-[190px] !w-full"
          >
            <div className="flex items-center justify-between gap-5 cursor-pointer">
              <BetStudio studio={bet} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

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
