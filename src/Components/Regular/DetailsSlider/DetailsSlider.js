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
          <SwiperSlide>
            <Image src={nature1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nature2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nature3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nature4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nature5} />
          </SwiperSlide>
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
          <SwiperSlide>
            <Image src={nature1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nature2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nature3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nature4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nature5} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
