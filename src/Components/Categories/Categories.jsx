import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Categories.css";

import { Navigation } from "swiper/modules";

const Categories = () => {
  return (
    <div className="relative w-full md:max-w-[380px] lg:max-w-[630px] elg:max-w-[700px] xl:max-w-[800px] xxl:max-w-[1040px]">
      <Swiper
        slidesPerView={7}
        modules={[Navigation]}
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
