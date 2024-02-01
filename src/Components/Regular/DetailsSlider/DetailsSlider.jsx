"use client";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./DetailsSlider.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import Image from "next/image";
import nature1 from "../../../assets/nature-1.jpg";
import nature2 from "../../../assets/nature-2.jpg";
import nature3 from "../../../assets/nature-3.jpg";
import nature4 from "../../../assets/nature-4.jpg";
import nature5 from "../../../assets/nature-5.jpg";

// Initialize Swiper modules
// SwiperCore.use([Navigation, Thumbs]);

export default function DetailsSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
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

  return (
    <>
      <div className="max-h-[600px] h-full min-h-full w-full flex gap-3">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="md:max-w-10/12 w-full sliderPreview"
        >
          {/* view port */}
          {images?.length
            ? images?.map((image, idx) => (
                <SwiperSlide className="w-full h-full" key={idx}>
                  <Image
                    className="w-full h-full object-cover"
                    src={image?.image}
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>

        {/* tabs */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="md:w-3/12 flex flex-row md:!flex-col sliderPreviewTabs"
        >
          {images?.length
            ? images?.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <Image src={image?.image} />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </>
  );
}
