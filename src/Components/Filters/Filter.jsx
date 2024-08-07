"use client";
import ToggleButton from "@/Components/Regular/Toggle/ToggleButton";
import React, { useState } from "react";
import concierge from "@/assets/images/filters/concierge.png";
import elevator from "@/assets/images/filters/elevator.png";
import golf from "@/assets/images/filters/golf.png";
import laundry_basket from "@/assets/images/filters/laundry_basket.png";
import package_room from "@/assets/images/filters/package.png";
import Image from "next/image";

export default function Filter() {
  const [filters, setFilter] = useState({
    maxPrice: "",
    minPrice: "",
    bedroom: ["Any", "Studio"],
    bathroom: ["Any"],
    petFriendly: false,
    instantMove: true,
    specialOffer: true,
  });
  const bedroom = ["Any", "Studio", 1, 2, 3, "4+"];
  const bathroom = ["Any", 1, 2, 3, "4+"];

  const handleSelectBedroom = (value) => {
    const index = filters.bedroom.indexOf(value);
    if (index !== -1) {
      const newArr = [...filters.bedroom];
      newArr.splice(index, 1);
      setFilter({ ...filters, bedroom: newArr });
    } else {
      setFilter({ ...filters, bedroom: [...filters.bedroom, value] });
    }
  };

  const handleSelectBathroom = (value) => {
    const index = filters.bathroom.indexOf(value);
    if (index !== -1) {
      const newArr = [...filters.bathroom];
      newArr.splice(index, 1);
      setFilter({ ...filters, bathroom: newArr });
    } else {
      setFilter({ ...filters, bathroom: [...filters.bathroom, value] });
    }
  };

  return (
    <div className="bg-white py-7 px-10">
      <div className="mb-10">
        <span className="block font-semibold text-xl leading-5 text-darkGray mb-6">
          Price range
        </span>
        <div className="flex items-center gap-[10px]">
          <div className="w-full rounded-xl border border-[#E4E4E4] flex flex-col px-4 py-2">
            <label htmlFor="minimumPrice" className="font-normal text-xs">
              Minimum
            </label>
            <div className="flex gap-1">
              <span>$</span>
              <input
                type="number"
                id="priceRange"
                placeholder=""
                className="w-full outline-none border-non bg-transparent text-blackText leading-[22px] font-normal"
                value={filters?.maxPrice}
                onChange={(e) =>
                  setFilter({ ...filters, maxPrice: e.target.value })
                }
              />
            </div>
          </div>
          <span className="block w-[18px] h-[1.5px] bg-[#E4E4E4]"></span>
          <div className="w-full rounded-xl border border-[#E4E4E4] flex flex-col px-4 py-2">
            <label htmlFor="minimumPrice" className="font-normal text-xs">
              Maximum
            </label>
            <div className="flex gap-1">
              <span>$</span>
              <input
                type="number"
                id="priceRange"
                placeholder=""
                className="w-full outline-none border-non bg-transparent text-blackText leading-[22px] font-normal"
                value={filters?.minPrice}
                onChange={(e) =>
                  setFilter({ ...filters, minPrice: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <span className="block font-semibold text-xl leading-5 text-darkGray mb-6">
          Bedrooms
        </span>
        <div className="flex flex-wrap gap-3">
          {bedroom?.map((option, index) => (
            <span
              key={index}
              onClick={() => handleSelectBedroom(option)}
              className={`block border border-softGray py-[10px] px-[25px] rounded-full text-sm leading-4 hover:cursor-pointer ${
                filters.bedroom.includes(option)
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              {option}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="block font-semibold text-xl leading-5 text-darkGray mb-6">
          Bathroom
        </span>
        <div className="flex flex-wrap gap-3">
          {bathroom?.map((option, index) => (
            <span
              key={index}
              onClick={() => handleSelectBathroom(option)}
              className={`block border border-softGray py-[10px] px-[25px] rounded-full text-sm leading-4 hover:cursor-pointer ${
                filters.bathroom.includes(option)
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              {option}
            </span>
          ))}
        </div>
      </div>

      <div>
        <span className="block font-semibold text-xl leading-5 text-darkGray mb-6">
          Features & Amenities
        </span>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center gap-2 max-w-[195px] w-full shrink border border-softGray py-[10px] px-[25px] rounded-lg text-[18px] leading-6">
            <Image src={concierge} alt="" />
            <span className="text-base text-center">Bike room</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[195px] w-full shrink border border-softGray py-[10px] px-[25px] rounded-lg text-[18px] leading-6">
            <Image src={concierge} alt="" />
            <span className="text-base text-center">Concierge</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[195px] w-full shrink border border-softGray py-[10px] px-[25px] rounded-lg">
            <Image src={elevator} alt="" />
            <span className="text-base text-center">Elevator</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[195px] w-full shrink border border-softGray py-[10px] px-[25px] rounded-lg">
            <Image src={golf} alt="" />
            <span className="text-base text-center">Golf simulators</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[195px] w-full shrink border border-softGray py-[10px] px-[25px] rounded-lg">
            <Image src={laundry_basket} alt="" />
            <span className="text-base text-center">Laundry Room</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[195px] w-full shrink border border-softGray py-[10px] px-[25px] rounded-lg">
            <Image src={package_room} alt="" />
            <span className="text-base text-center">Package Room</span>
          </div>
        </div>

        <div className="flex items-center gap-[10px] mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z"
              fill="#222222"
            />
          </svg>
          <span className="inline-block font-semibold text-base leading-3 text-blackText">
            Show More
          </span>
        </div>
      </div>

      <div className="mb-10">
        <span className="block font-semibold text-xl leading-5 text-darkGray mb-6">
          Additional
        </span>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-[15px] sm:text-[18px] leading-4 sm:leading-5 text-blackText mb-[10px]">
                Instant Move-In
              </h3>
              <p className="text-sm leading-4 sm:text-base sm:leading-6 font-normal text-blackText">
                Listings you can book without waiting for Host approval
              </p>
            </div>
            <ToggleButton
              isToggled={filters?.instantMove}
              onToggle={() =>
                setFilter({
                  ...filters,
                  instantMove: !filters?.instantMove,
                })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-[15px] sm:text-[18px] leading-4 sm:leading-5 text-blackText mb-[10px]">
                Pet-Friendly
              </h3>
              <p className="text-sm leading-4 sm:text-base sm:leading-6 font-normal text-blackText">
                Listings you can book without waiting for Host approval
              </p>
            </div>
            <ToggleButton
              isToggled={filters?.petFriendly}
              onToggle={() =>
                setFilter({
                  ...filters,
                  petFriendly: !filters?.petFriendly,
                })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-[15px] sm:text-[18px] leading-4 sm:leading-5 text-blackText mb-[10px]">
                Special Offers
              </h3>
              <p className="text-sm leading-4 sm:text-base sm:leading-6 font-normal text-blackText">
                Listings you can book without waiting for Host approval
              </p>
            </div>
            <ToggleButton
              isToggled={filters?.specialOffer}
              onToggle={() =>
                setFilter({
                  ...filters,
                  specialOffer: !filters?.specialOffer,
                })
              }
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-end mt-5">
        <button className="border border-softGray py-2.5 px-6 rounded-md font-semibold text-[15px] bg-primary text-white">
          Show 9999 rental
        </button>
      </div>
    </div>
  );
}
