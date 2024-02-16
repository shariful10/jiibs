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
        <div className="absolute top-0 w-full bg-transparent flex items-center justify-between z-[1000] p-5">
          <div>
            <span className="w-6 h-6 rounded-full bg-white flex justify-center items-center border border-softGray p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.04674 5.4357C2.44481 3.85007 3.81129 2.30225 5.14615 0.793606C5.21602 0.710555 5.25498 0.600316 5.25498 0.485691C5.25498 0.371066 5.21602 0.260826 5.14615 0.177776C4.9571 -0.0600335 4.65804 -0.0394142 4.52187 0.122791C3.13838 1.69123 1.69107 3.33047 0.179927 5.04118C0.0601782 5.15253 0 5.28449 0 5.4357C0 5.58759 0.0601782 5.72299 0.179927 5.84259L4.72855 10.8641C4.8158 10.9548 4.93092 11.0035 5.04943 10.9998C5.16794 10.9961 5.28049 10.9402 5.36315 10.8441C5.58077 10.5974 5.49688 10.3541 5.39841 10.2386C3.94557 8.64006 2.49542 7.03908 1.04674 5.4357Z"
                  fill="#222222"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-6 h-6 rounded-full bg-white flex justify-center items-center border border-softGray p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <path
                  d="M1 8.85714V12H13V8.85714M7 1V9.90476M7 1L3.18182 4.66667M7 1L10.8182 4.66667"
                  stroke="#222222"
                />
              </svg>
            </span>
            <span className="w-6 h-6 rounded-full bg-white flex justify-center items-center border border-softGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M10.125 0C8.83438 0 7.70438 0.555131 7 1.49348C6.29562 0.555131 5.16563 0 3.875 0C2.84764 0.00115823 1.86269 0.409884 1.13624 1.13651C0.409788 1.86313 0.00115796 2.84831 0 3.87591C0 8.25195 6.48688 11.794 6.76312 11.9403C6.83594 11.9795 6.91732 12 7 12C7.08268 12 7.16406 11.9795 7.23687 11.9403C7.51312 11.794 14 8.25195 14 3.87591C13.9988 2.84831 13.5902 1.86313 12.8638 1.13651C12.1373 0.409884 11.1524 0.00115823 10.125 0ZM7 10.9276C5.85875 10.2624 1 7.23233 1 3.87591C1.00099 3.11354 1.30421 2.38268 1.84316 1.8436C2.38212 1.30452 3.11281 1.00123 3.875 1.00024C5.09062 1.00024 6.11125 1.64789 6.5375 2.68813C6.57517 2.77986 6.63925 2.85832 6.7216 2.91353C6.80396 2.96874 6.90086 3 7 3C7.09914 3 7.19604 2.96874 7.2784 2.91353C7.36075 2.85832 7.42483 2.77986 7.4625 2.68813C7.88875 1.64601 8.90938 1.00024 10.125 1.00024C10.8872 1.00123 11.6179 1.30452 12.1568 1.8436C12.6958 2.38268 12.999 3.11354 13 3.87591C13 7.22733 8.14 10.2618 7 10.9276Z"
                  fill="#222222"
                />
              </svg>
            </span>
          </div>
        </div>
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
