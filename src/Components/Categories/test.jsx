"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../Categories/categoriesData";
import "swiper/css";
import CategoryBox from "../Categories/CategoryBox";

export default function CatSlider() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper.activeIndex < categories.length - 1
    ) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="bg-slate-200">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.label} className="!w-[50px]">
            <CategoryBox label={category.label} icon={category.icon} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      {!isBeginning && (
        <button
          onClick={handlePrevButtonClick}
          className="absolute left-1 top-2 transition duration-300 z-40 rounded-full"
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          Previous
        </button>
      )}

      {swiperRef.current &&
        swiperRef.current.swiper.activeIndex < categories.length - 1 && (
          <button
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            onClick={handleNextButtonClick}
            className="absolute right-1 top-2 transition duration-300 z-40 rounded-full"
          >
            Next
          </button>
        )}
    </div>
  );
}
