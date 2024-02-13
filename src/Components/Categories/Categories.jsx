import Container from "../Regular/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Categories.css";

import { FreeMode, Navigation } from "swiper/modules";

const Categories = () => {
  return (
    <div>
      <Swiper
        slidesPerView={7}
        // navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper w-full md:max-w-[380px] mdx:max-w-[630px] lg:max-w-[720px] elg:max-w-[960px]"
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
