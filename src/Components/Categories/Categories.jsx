import Container from "../Regular/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Categories.css";

import { FreeMode, Pagination } from "swiper/modules";

const Categories = () => {
  return (
    <div>
      <Swiper
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper md:max-w-[380px] mdx:max-w-[630px] elg:max-w-[668px]"
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
