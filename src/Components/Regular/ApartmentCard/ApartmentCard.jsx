"use client";

import heartButton from "@/assets/images/heart-button.svg";
import Image from "next/image";
import theSun from "@/assets/images/apartment/the-sun.png";
import Context from "@/Context/Context";
import { useContext } from "react";
import AddWishlist from "@/Components/wishlist/AddWishlist";
import { ADD_WISHLIST } from "../Utils/constant";

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
    <div>
      <div className="col-span-1 cursor-pointer group">
        <div className="flex flex-col w-full">
          <div className="aspect-square w-full relative overflow-hidden rounded-[20px]">
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
          <p className="text-[15px] text-[#626262] font-semibold mt-[10px]">
            {apartment?.location}
          </p>
          <h4 className="text-blackText font-semibold text-xl my-1">
            {apartment?.title}
          </h4>
          <div className="flex flex-row items-center gap-1">
            <p className="text-blackText font-semibold text-xl">
              ${apartment?.price}
            </p>
            <p className="font-semibold">/month</p>
          </div>
          <div className="flex items-center gap-2 text-[15px] font-semibold text-darkGray mt-2">
            <p>{apartment?.bed} Bed</p>
            <span className="w-[5px] h-[5px] bg-darkGray rounded-full" />
            <p>{apartment?.bath} Bath</p>
            <span className="w-[5px] h-[5px] bg-darkGray rounded-full" />
            <p>{apartment?.squareFit} Sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
