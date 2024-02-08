"use client";
import conciergeIcon from "@/assets/icons/details/conciergeIcon.png";
import cycleIcon from "@/assets/icons/details/cycleIcon.png";
import elevatorIcon from "@/assets/icons/details/elevatorIcon.png";
import golfSimulatorIcon from "@/assets/icons/details/golfSmulatorIcon.png";
import laundryRoom from "@/assets/icons/details/laundryRoom.png";
import packageIcon from "@/assets/icons/details/packageIcon.png";
import screeningRoomIcon from "@/assets/icons/details/screeningRoomIcon.png";
import sundeckIcon from "@/assets/icons/details/sundeckIcon.png";
import yogaIcon from "@/assets/icons/details/yogaicon.png";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Amenities.css";

// images
import chadViewImg from "@/assets/chad-view.png";

export default function Amenities() {
  const swiperRef = useRef(null);

  const handlePrevButtonClick = () => {
    console.log("swiperRef ", swiperRef);
    // if (swiperRef.current) {
    //   swiperRef.current.slidePrev();
    // }
  };

  const handleNextButtonClick = () => {
    console.log("swiperRef ", swiperRef);
    // if (swiperRef.current) {
    //   swiperRef.current.slideNext();
    // }
  };

  return (
    <>
      {demoAmenities?.length ? (
        <>
          <div>
            <div className="mb-[1.3145rem] flex items-center justify-between gap-5">
              <h3 className="text-3xl font-semibold text-left"> Amenities </h3>
              <div className="flex items-center gap-4">
                {/* prev button */}
                <button
                  onClick={handlePrevButtonClick}
                  className="transition duration-300"
                >
                  <figure>{prevButtonIcons}</figure>
                </button>

                {/* next button */}
                <button
                  onClick={handleNextButtonClick}
                  className="transition duration-300"
                >
                  <figure>{nextButtonIcons}</figure>
                </button>
              </div>
            </div>

            {/* slider */}
            <div>
              <Swiper
                watchSlidesProgress={true}
                slidesPerView={2}
                className="amenities "
                ref={swiperRef}
              >
                {demoAmenities?.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div>
                      <figure className="w-full h-full rounded-[10px] overflow-hidden">
                        <Image
                          className="w-full h-full object-cover"
                          src={item?.image}
                          alt={item?.title}
                        />
                      </figure>

                      <article>
                        <h3 className="text-[1.375rem] font-semibold mt-4 mb-2.5">
                          {item?.title}
                        </h3>

                        <p className="text-base font-normal">
                          {item?.description}
                        </p>
                      </article>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="grid w-auto grid-cols-2 gap-6 mt-10">
            {/* left site */}
            <div className="space-y-6">
              <Items src={cycleIcon} text="Bike Room" />
              <Items src={conciergeIcon} text="Concierge" />
              <Items src={elevatorIcon} text="elevator" />
              <Items src={golfSimulatorIcon} text="golf simulator" />
              <Items src={laundryRoom} text="laundry room" />
              <Items src={packageIcon} text="package room" />
              <Items src={screeningRoomIcon} text="screening room" />
              <Items src={sundeckIcon} text="sundeck & outdoor patio" />
              <Items src={yogaIcon} text="yoga/pilates studio" />
            </div>

            {/* right side */}
            <div className="space-y-6">
              <Items src={cycleIcon} text="Bike Room" />
              <Items src={conciergeIcon} text="Concierge" />
              <Items src={elevatorIcon} text="elevator" />
              <Items src={golfSimulatorIcon} text="golf simulator" />
              <Items src={laundryRoom} text="laundry room" />
              <Items src={packageIcon} text="package room" />
              <Items src={screeningRoomIcon} text="screening room" />
              <Items src={yogaIcon} text="yoga/pilates studio" />
              <Items src={sundeckIcon} text="sundeck & outdoor patio" />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

// similar Components
function Items({ src, text }) {
  return (
    <div className="flex items-center justify-start gap-5">
      <figure className="flex items-center justify-center w-4 md:w-[1.375rem] h-5 md:h-[1.69rem] flex-shrink-0">
        <Image className="w-full h-full" src={src} alt="" />
      </figure>
      <p className="text-base md:text-xl font-normal capitalize"> {text}</p>
    </div>
  );
}

// demo data
var demoAmenities = [
  {
    image: chadViewImg,
    title: "Yoga Studio",
    description:
      "Michelin starred restaurant Crown Shy as well as fine dining experiences on 63rd floor, terrace and bar on the 64th floor.",
  },
  {
    image: chadViewImg,
    title: "Yoga bed",
    description:
      "Michelin starred restaurant Crown Shy as well as fine dining experiences on 63rd floor, terrace and bar on the 64th floor.",
  },
  {
    image: chadViewImg,
    title: "Yoga room",
    description:
      "starred restaurant Crown Shy as well as fine dining experiences on 63rd floor, terrace and bar on the 64th floor.",
  },
];
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
