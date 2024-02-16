"use client";

import Image from "next/image";
import React, { useContext } from "react";
import building_image from "../assets/building_image.png";
import Context from "@/Context/Context";
import { ADD_WISHLIST } from "./Regular/Utils/constant";
import AddWishlist from "./wishlist/AddWishlist";

const UnitCard = () => {
  const { modal, setModal } = useContext(Context);

  const handleModal = ({
    modalType,
    modalLabel,
    isMobileModal,
    modalContent,
  }) => {
    setModal({
      ...modal,
      isOpen: !modal?.isOpen,
      modalType,
      isMobileModal,
      modalLabel,
      modalContent,
    });
  };
  return (
    <div className="relative col-span-1 cursor-pointer group">
      <button className="absolute top-[16px] left-[16px] bg-white text-black px-3 py-1 rounded-full h-[24px] w-[101px] text-[12px]">
        Special Deal
      </button>

      {/* Favorite Icon */}
      <div
        className="absolute top-[16px] right-[16px]"
        onClick={() =>
          handleModal({
            modalType: ADD_WISHLIST?.value,
            modalLabel: ADD_WISHLIST?.label,
            isMobileModal: false,
            modalContent: <AddWishlist />,
          })
        }
      >
        {/* Your favorite icon here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M21.75 8.8125C21.75 15 12 20.25 12 20.25C12 20.25 2.25 15 2.25 8.8125C2.25 7.46984 2.78337 6.18218 3.73277 5.23277C4.68218 4.28337 5.96984 3.75 7.3125 3.75C9.43031 3.75 11.2444 4.90406 12 6.75C12.7556 4.90406 14.5697 3.75 16.6875 3.75C18.0302 3.75 19.3178 4.28337 20.2672 5.23277C21.2166 6.18218 21.75 7.46984 21.75 8.8125Z"
            fill="#222222"
          />
          <path
            d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3063 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6938 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
            fill="white"
          />
        </svg>
      </div>

      <Image
        src={building_image}
        alt="Description of the image"
        width={500}
        height={300}
        className=" rounded-[20px] "
      ></Image>
      <div className="flex flex-col gap-1 mt-[10px]">
        <p className="text-sm font-semibold text-[#626262]">Midtown East</p>
        <h3 className="text-lg leading-6 font-semibold">The Somerset</h3>
        <p className="text-sm font-semibold leading-[20px] text-darkGray">
          Private rooftop terrace overlooking Central Park & world class
          concierge service
        </p>
        <p className="text-base">From $4456</p>
      </div>
    </div>
  );
};

export default UnitCard;
