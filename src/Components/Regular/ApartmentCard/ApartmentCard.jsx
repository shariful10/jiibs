"use client";

import AddWishlist from "@/Components/wishlist/AddWishlist";
import Context from "@/Context/Context";
import theSun from "@/assets/images/apartment/the-sun.png";
import heartButton from "@/assets/images/heart-button.svg";
import Image from "next/image";
import { useContext } from "react";
import { ADD_WISHLIST } from "../Utils/constant";
import Link from "next/link";

const ApartmentCard = ({ apartment = {} }) => {
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
    <Link href={"/unit-details"} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col w-full">
        {/* image view */}
        <div className="aspect-square w-full relative overflow-hidden rounded-[15px]">
          <Image
            className="object-cover h-full w-full group-hover:scale-110 duration-300"
            src={theSun}
            alt="Room"
          />
          <div
            className=" absolute top-3 right-3"
            onClick={() =>
              handleModal({
                modalType: ADD_WISHLIST?.value,
                modalLabel: ADD_WISHLIST?.label,
                isMobileModal: false,
                modalContent: <AddWishlist />,
              })
            }
          >
            <Image src={heartButton} alt="Heart button" />
          </div>
        </div>

        {/* content */}
        <div className="space-y-[0px] mt-2.5">
          <p className="text-[14px] text-darkGray font-semibold">
            {apartment?.location}
          </p>
          <div className="flex flex-row md:flex-col justify-between items-start">
            <h4 className="text-blackText font-semibold text-[22px]">
              {apartment?.title}
            </h4>
            <div className="flex flex-row items-center gap-1">
              <p className="text-blackText font-semibold text-xl">
                ${apartment?.price}
              </p>
              <p className="font-semibold text-base">/month</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[14px] font-semibold text-darkGray mt-2">
            <p>{apartment?.bed} Bed</p>
            <span className="w-[5px] h-[5px] bg-darkGray rounded-full" />
            <p>{apartment?.bath} Bath</p>
            <span className="w-[5px] h-[5px] bg-darkGray rounded-full" />
            <p>{apartment?.squareFit} Sqft</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
