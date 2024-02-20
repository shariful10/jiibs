"use client";

import React from "react";
import Link from "next/link";
import heart from "@/assets/heart.svg";
import arrowTop from "@/assets/arrow-top.svg";
import sliderImage from "@/assets/slider.webp";
import angleLeft from "@/assets/angle-left.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
const images = [1, 2, 3, 4, 5];

export default function BuildingSliderMobile() {
  return (
    <div className="flex justify-center !gap-0 md:hidden h-[305px]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={false}
        modules={[Pagination]}
        className="!w-full !h-full !relative swiper_mobile_building_details"
      >
        <div className="absolute top-0 w-full bg-transparent flex items-center justify-between z-[1000] p-5">
          <div>
            <Link
              href="/"
              className="rounded-full bg-white flex justify-center items-center border border-softGray p-2"
            >
              <Image src={angleLeft} className="w-3 h-[11px]" alt="angleLeft" />
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <span className="rounded-full bg-white flex justify-center items-center border border-softGray p-2">
              <Image src={arrowTop} className="w-3 h-[11px]" alt="" />
            </span>
            <span className="rounded-full bg-white flex justify-center items-center border border-softGray p-2">
              <Image src={heart} className="w-3 h-[11px]" alt="heart" />
            </span>
          </div>
        </div>
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="!w-full !h-full">
            <Image src={sliderImage} className="w-full h-full" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
