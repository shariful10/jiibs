"use client";

import React, { useRef, useState } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./styles.css";

import nature1 from "@/assets/nature-1.jpg";
import nature2 from "@/assets/nature-2.jpg";
import nature3 from "@/assets/nature-3.jpg";
import nature4 from "../../../assets/nature-4.jpg";
import nature5 from "../../../assets/nature-5.jpg";

const sliderData = [
  {
    name: "image-1",
    image: nature1,
  },
  {
    name: "image-2",
    image: nature2,
  },
  {
    name: "image-3",
    image: nature3,
  },
  {
    name: "image-4",
    image: nature4,
  },
  {
    name: "image-5",
    image: nature5,
  },
];

function Slider() {
  const swiperRef = useRef(null);
  const [firstRowSlideIndex, setFirstRowSlideIndex] = useState(0);
  const [secondRowSlideIndex, setSecondRowSlideIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        loop: true, // Ensure looping for both rows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        onSlideChange: (swiper) => {
          setFirstRowSlideIndex(swiper.realIndex); // Update state on slide change
          // Calculate and update secondRowSlideIndex dynamically
          setSecondRowSlideIndex((swiper.realIndex % 3) - 1); // Assuming 3 items per row
        },
      });
    }
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.firstRowContainer}>
        <Swiper ref={swiperRef}>
          {sliderData.map((item, index) => (
            <SwiperSlide key={index} className={styles.firstRowSlide}>
              <img src={item.url} alt={item.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.secondRowContainer}>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          //   navigation= {
          //     nextEl:'.second-row-swiper-button-next',
          //     prevEl:'.second-row-swiper-button-prev',
          //   }
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index} className={styles.secondRowSlide}>
              <img src={item.url} alt={item.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
