"use client";

import Context from "@/Context/Context";
import { useContext, useState } from "react";
import SearchResultShow from "../Regular/Inputs/SearchResultShow";
import {
  BED_AND_BATHROOM,
  LIFESTYLE,
  PRICE,
  SORT_BY,
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
      strokeLinecap="round"
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

export default function MobileFiltering() {
  const { modal, setModal } = useContext(Context);
  const handleModal = ({
    modalType,
    modalLabel,
    isMobileModal,
    isWidth,
    modalContent,
  }) => {
    setModal({
      ...modal,
      isOpen: !modal?.isOpen,
      modalType,
      isMobileModal,
      modalLabel,
      isWidth,
      modalContent,
    });
  };

  const [openDropDown, setOpenDropDown] = useState(false);
  const [searchResult, setSearchResult] = useState({
    data: [],
    type: "",
  });

  return (
    <>
      {openDropDown ? (
        <SearchResultShow
          data={searchResult}
          setOpenDropDown={setOpenDropDown}
        />
      ) : (
        <>
          <div className="md:hidden pt-6">
            <div className="flex justify-between items-center bg-lightGray px-[14px] py-2 rounded-full mb-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M15 8.5H1M1 8.5L8 15.5M1 8.5L8 1.5"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
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
                <button
                  onClick={() => setOpenDropDown(true)}
                  className="block p-2 rounded-full border border-lightGrayBorder cursor-pointer"
                >
                  {magnifyGlassIcon}
                </button>
                {/* <span className="block p-2 rounded-full border border-lightGrayBorder">
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
          </span> */}
              </div>
            </div>

            <div className="flex justify-center items-center gap-[5px]">
              <div
                className="flex items-center gap-[6px] border border-lightGrayBorder py-[6px] px-2 rounded-full cursor-pointer"
                onClick={() =>
                  handleModal({
                    modalType: SORT_BY,
                    modalLabel: "Sort by",
                    isMobileModal: true,
                  })
                }
              >
                <span>{sortIcon}</span>
                <span className="font-semibold text-sm leading-4 text-darkGray">
                  Sort
                </span>
              </div>
              <div
                className="flex items-center gap-[6px] border border-lightGrayBorder py-[6px] px-2 rounded-full cursor-pointer"
                onClick={() =>
                  handleModal({
                    modalType: LIFESTYLE,
                    modalLabel: "Lifestyle",
                    isMobileModal: true,
                  })
                }
              >
                <span className="font-semibold text-sm leading-4 text-darkGray">
                  Lifestyle
                </span>
                <span>{arrowIcon}</span>
              </div>
              <div
                className="flex items-center gap-[6px] border border-lightGrayBorder py-[6px] px-2 rounded-full cursor-pointer"
                onClick={() =>
                  handleModal({
                    modalType: PRICE,
                    modalLabel: "Price",
                    isMobileModal: true,
                  })
                }
              >
                <span className="font-semibold text-sm leading-4 text-darkGray">
                  price
                </span>
                <span>{arrowIcon}</span>
              </div>
              <div
                className="flex items-center gap-[6px] border border-lightGrayBorder py-[6px] px-2 rounded-full cursor-pointer"
                onClick={() =>
                  handleModal({
                    modalType: BED_AND_BATHROOM,
                    modalLabel: "Bed & Bath",
                    isMobileModal: true,
                  })
                }
              >
                <span className="font-semibold text-sm leading-4 text-darkGray">
                  Bed & Bath
                </span>
                <span>{arrowIcon}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// icons
var magnifyGlassIcon = (
  <svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="1.43024"
      height="7.73143"
      rx="0.71512"
      transform="matrix(0.707045 -0.707168 0.696812 0.717254 9.125 11.249)"
      fill="#222222"
    />
    <path
      d="M11.8528 6.54377C11.8528 9.64038 9.38155 12.132 6.35606 12.132C3.33057 12.132 0.859375 9.64038 0.859375 6.54377C0.859375 3.44717 3.33057 0.955566 6.35606 0.955566C9.38155 0.955566 11.8528 3.44717 11.8528 6.54377Z"
      stroke="#222222"
      strokeWidth="1.5"
    />
  </svg>
);
