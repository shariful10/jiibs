"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "./Studio.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const StudioBed = ({ betData = [] }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      className="w-full !flex rounded-lg studio_slider"
    >
      {/* <div className="swiper-button-next bg-slate-200" />
      <div className="swiper-button-prev bg-slate-200" /> */}

      {betData?.map((bet, index) => (
        <SwiperSlide
          key={index}
          className="max-w-[181px] !w-full flex items-center justify-between gap-6 studio_slider_slide !m-0 cursor-pointer"
        >
          <BetStudio studio={bet} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StudioBed;

// const StudioBed = ({ betData = [] }) => {
//   return (
//     <div className="min-w-[181px] w-full flex items-center justify-between gap-6">
//       {betData?.map((bet, index) => (
//         <BetStudio key={index} studio={bet} />
//       ))}
//     </div>
//   );
// };

// export default StudioBed;

// bet studio components
function BetStudio({ studio }) {
  return (
    <div className="w-full capitalize border rounded-lg p-3 min-w-min">
      <h4 className="text-lg xxl:text-xl font-normal"> {studio?.space}</h4>
      <strong className="md:text-base text-sm font-normal">
        ${studio?.price?.min} - ${studio?.price?.max}
      </strong>
      <p className="md:text-base text-sm font-normal leading-[22px] text-primary">
        {studio?.available} Available
      </p>
    </div>
  );
}
// style={{
//   "--swiper-navigation-color": "#fff",
//   "--swiper-pagination-color": "#fff",
// }}
