"use client";

import React from "react";
import sliderImage from "@/assets/slider.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const images = [1, 2, 3, 4, 5];

export default function BuildingSliderMobile() {
  return (
    <div className="flex justify-center md:hidden h-[375px]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="!w-full !h-full !m-0 !relative"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="!w-full !h-full !m-0 rounded-lg">
            <Image
              src={sliderImage}
              className="w-full h-full rounded-lg"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
