import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../Categories/categoriesData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import CategoryBox from "../Categories/CategoryBox";

export default function Categ() {
  return (
    <>
      <Swiper
        slidesPerView={10}
        modules={[FreeMode, Pagination]}
        className="w-[200px] my-[100px]"
      >
        {categories.map((category) => (
          <SwiperSlide>
            <CategoryBox
              key={category.label}
              label={category.label}
              icon={category.icon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
