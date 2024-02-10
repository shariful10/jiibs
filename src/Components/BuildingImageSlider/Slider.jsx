"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import sliderImage from "@/assets/slider.webp";
// import BuildingImageSlider from "@/Components/BuildingImageSlider/BuildingImageSlider";

const images = [1, 2, 3, 4, 5];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./styles.css";
export default function BuildingSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex justify-between gap-3 h-[650px]">
      {/* <BuildingImageSlider /> */}
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
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

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="md:w-3/12 flex flex-row md:!flex-col sliderPreviewTabs"
      >
        {images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image src={sliderImage} className="w-full h-8" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
