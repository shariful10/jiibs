"use client";

import React from "react";
import sliderImage from "@/assets/slider.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
const images = [1, 2, 3, 4, 5];

export default function BuildingSliderMobile() {
  return (
    <div className="flex justify-center !gap-0 md:hidden h-[375px]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={false}
        modules={[Pagination]}
        className="!w-full !h-full rounded-lg !relative swiper_mobile_building_details"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="!w-full !h-full rounded-lg">
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
