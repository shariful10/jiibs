import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";
import { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Categories.css";

import { Navigation } from "swiper/modules";

const Categories = () => {
  const swiperRef = useRef(null);
  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="relative w-full md:max-w-[380px] lg:max-w-[630px] elg:max-w-[700px] xl:max-w-[800px] xxl:max-w-[1040px]">
      {/* prev button */}
      <button
        onClick={handlePrevButtonClick}
        className="absolute left-1 top-2 transition duration-300 z-40 rounded-full"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <figure>{prevButtonIcons}</figure>
      </button>

      {/* next button */}
      <button
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        onClick={handleNextButtonClick}
        className="absolute right-1 top-2 transition duration-300 z-40 rounded-full"
      >
        <figure>{nextButtonIcons}</figure>
      </button>
      <Swiper
        slidesPerView={7}
        modules={[Navigation]}
        ref={swiperRef}
        className="mySwiper px-5"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.label}>
            <CategoryBox label={category.label} icon={category.icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
// icons
var nextButtonIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
  >
    <rect
      x="-0.5"
      y="0.5"
      width={35}
      height={35}
      rx="17.5"
      transform="matrix(-1 0 0 1 35 0)"
      fill="white"
    />
    <rect
      x="-0.5"
      y="0.5"
      width={35}
      height={35}
      rx="17.5"
      transform="matrix(-1 0 0 1 35 0)"
      stroke="#E4E4E4"
    />
    <path
      d="M16.4414 22.9277L21.4414 17.9277L16.4414 12.9277"
      stroke="#626262"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
var prevButtonIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
  >
    <rect x="0.5" y="0.5" width={35} height={35} rx="17.5" fill="white" />
    <rect x="0.5" y="0.5" width={35} height={35} rx="17.5" stroke="#E4E4E4" />
    <path
      d="M19.5586 22.9277L14.5586 17.9277L19.5586 12.9277"
      stroke="#626262"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
