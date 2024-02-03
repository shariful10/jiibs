import React from "react";

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
      stroke-linejoin="round"
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
  return (
    <div className="flex justify-center items-center gap-[5px]">
      <div className="flex items-center gap-[6px] border border-[#D1D5DB] py-[6px] px-2 rounded-full cursor-pointer">
        <span>{sortIcon}</span>
        <span className="font-semibold text-sm leading-4 text-[#626262]">
          Sort
        </span>
      </div>
      <div className="flex items-center gap-[6px] border border-[#D1D5DB] py-[6px] px-2 rounded-full cursor-pointer">
        <span className="font-semibold text-sm leading-4 text-[#626262]">
          Lifestyle
        </span>
        <span>{arrowIcon}</span>
      </div>
      <div className="flex items-center gap-[6px] border border-[#D1D5DB] py-[6px] px-2 rounded-full cursor-pointer">
        <span className="font-semibold text-sm leading-4 text-[#626262]">
          price
        </span>
        <span>{arrowIcon}</span>
      </div>
      <div className="flex items-center gap-[6px] border border-[#D1D5DB] py-[6px] px-2 rounded-full cursor-pointer">
        <span className="font-semibold text-sm leading-4 text-[#626262]">
          Bed & Bath
        </span>
        <span>{arrowIcon}</span>
      </div>
    </div>
  );
}
