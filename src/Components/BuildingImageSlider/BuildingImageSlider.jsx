"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import sliderImage from "@/assets/slider.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const images = [
  {
    name: "image-1",
    image: "/@/assets/nature-1.jpg",
  },
  {
    name: "image-2",
    image: "/@/assets/nature-1.jpg",
  },
  {
    name: "image-3",
    image: "/@/assets/nature-1.jpg",
  },
  {
    name: "image-4",
    image: "/@/assets/nature-1.jpg",
  },
  {
    name: "image-5",
    image: "@/assets/nature-1.jpg",
  },
];

// import required modules
import { Navigation } from "swiper/modules";

export default function BuildingImageSlider() {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      navigation={true}
      modules={[Navigation]}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      className="w-full rounded-lg mySwiper"
    >
      {images?.map((img, index) => (
        <SwiperSlide
          key={index}
          className="min-w-full h-[600px] rounded-lg overflow-hidden"
        >
          <Image
            src={sliderImage}
            className="w-full h-full rounded-lg"
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
