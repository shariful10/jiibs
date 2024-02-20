"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "@/Components/data";
import "swiper/css";
import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";

export default function SimilarUnitsSlider() {
  const apartments = data.apartments;

  return (
    <div className="mb-[120px] sm:pb-0">
      <Swiper slidesPerView={"auto"} spaceBetween={30}>
        {apartments?.map((apartment, index) => (
          <SwiperSlide
            key={index}
            className="!max-w-[320px] min-[1200px]:!max-w-[260px] xxl:!max-w-[320px] !w-full"
          >
            <ApartmentCard apartment={apartment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
