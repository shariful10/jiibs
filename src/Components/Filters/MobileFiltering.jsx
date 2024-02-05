import React from "react";
import {
  SORT_BY,
  LIFESTYLE,
  PRICE,
  BED_AND_BATHROOM,
} from "../Regular/Utils/constant";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="#626262"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const sortIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
  >
    <path
      d="M0 8H4V6.66667H0V8ZM0 0V1.33333H12V0H0ZM0 4.66667H8V3.33333H0V4.66667Z"
      fill="#626262"
    />
  </svg>
);

export default function MobileFiltering({ modal, setModal }) {
  const handleModal = (modalValue, modalLabel) => {
    setModal({
      ...modal,
      isModalOpen: !modal?.isModalOpen,
      modalType: modalValue,
      isMobileModal: true,
      modalLabel: modalLabel,
    });
  };

  return (
    <div className="sm:hidden pt-6 px-4">
      <div className="flex justify-between items-center bg-[#F7F7F7] px-[14px] py-2 rounded-full mb-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M15 8.5H1M1 8.5L8 15.5M1 8.5L8 1.5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h3 className="font-semibold text-sm leading-4 text-blackText">
              Soho, Financial District, 2 More
            </h3>
            <span className="font-normal text-xs leading-4 text-darkGray">
              Buildings, Neighborhoods, Etc.
            </span>
          </div>
        </div>
        <div>
          <span className="block p-2 rounded-full border border-[#D1D5DB]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M2.66667 5.83301H10.6667M10.6667 5.83301C10.6667 6.93758 11.5621 7.83301 12.6667 7.83301C13.7712 7.83301 14.6667 6.93758 14.6667 5.83301C14.6667 4.72844 13.7712 3.83301 12.6667 3.83301C11.5621 3.83301 10.6667 4.72844 10.6667 5.83301ZM6 11.1663H13.3333M6 11.1663C6 12.2709 5.10457 13.1663 4 13.1663C2.89543 13.1663 2 12.2709 2 11.1663C2 10.0618 2.89543 9.16634 4 9.16634C5.10457 9.16634 6 10.0618 6 11.1663Z"
                stroke="#111111"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[5px]">
        <div
          className="flex items-center gap-[6px] border border-[#D1D5DB] py-[6px] px-2 rounded-full cursor-pointer"
          onClick={() => handleModal(SORT_BY, "Sort by")}
        >
          <span>{sortIcon}</span>
          <span className="font-semibold text-sm leading-4 text-[#626262]">
            Sort
          </span>
        </div>
        <div
          className="flex items-center gap-[6px] border border-[#D1D5DB] py-[6px] px-2 rounded-full cursor-pointer"
          onClick={() => handleModal(LIFESTYLE, "Lifestyle")}
        >
          <span className="font-semibold text-sm leading-4 text-[#626262]">
            Lifestyle
          </span>
          <span>{arrowIcon}</span>
        </div>
        <div
          className="flex items-center gap-[6px] border border-[#D1D5DB] py-[6px] px-2 rounded-full cursor-pointer"
          onClick={() => handleModal(PRICE, "Price")}
        >
          <span className="font-semibold text-sm leading-4 text-[#626262]">
            price
          </span>
          <span>{arrowIcon}</span>
        </div>
        <div
          className="flex items-center gap-[6px] border border-[#D1D5DB] py-[6px] px-2 rounded-full cursor-pointer"
          onClick={() => handleModal(BED_AND_BATHROOM, "Bed & Bath")}
        >
          <span className="font-semibold text-sm leading-4 text-[#626262]">
            Bed & Bath
          </span>
          <span>{arrowIcon}</span>
        </div>
      </div>
    </div>
  );
}