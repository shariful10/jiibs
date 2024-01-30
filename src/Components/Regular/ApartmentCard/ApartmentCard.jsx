import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import heartButton from "@/assets/images/heart-button.svg";

const ApartmentCard = ({
  location,
  price,
  image,
  title,
  bed,
  bath,
  squareFit,
}) => {
  return (
    <div>
      <Link href="/" className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-[20px]
            
          "
          >
            <Image
              className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              duration-300
            "
              src={image}
              alt="Room"
            />
            <div
              className="
            absolute
            top-3
            right-3
          "
            >
              <Image src={heartButton} alt="Heart button" />
            </div>
          </div>
          <p className="text-[15px] text-[#626262] font-semibold">{location}</p>
          <h4 className="text-blackText font-semibold text-xl ">{title}</h4>
          <div className="flex flex-row items-center gap-1">
            <p className="text-blackText font-semibold text-xl">${price}</p>
            <p className="font-semibold">/month</p>
          </div>
          <div className="flex items-center gap-2 text-[15px] font-semibold text-darkGray">
            <p>{bed} Bed</p>
            <span className="w-2.5 h-2.5 bg-darkGray rounded-full"></span>
            <p>{bath} Bath</p>
            <span className="w-2.5 h-2.5 bg-darkGray rounded-full"></span>
            <p>{squareFit} Sqft</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ApartmentCard;
