"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import UnitCard from "@/Components/UnitCard";
import { data } from "@/Components/data";
import "swiper/css";

export default function SimilarSlider() {
  const apartments = data.apartments;

  return (
    <div className="mb-[120px] sm:pb-0">
      <Swiper slidesPerView={"auto"} spaceBetween={30}>
        {apartments?.map((apartment, index) => (
          <SwiperSlide
            key={index}
            className="!max-w-[320px] min-[1200px]:!max-w-[260px] xxl:!max-w-[320px] !w-full"
          >
            <UnitCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
