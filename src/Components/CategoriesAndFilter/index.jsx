import React, { useContext } from "react";
import Categories from "../Categories/Categories";
import Link from "next/link";
import Context from "@/Context/Context";

const filterIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path>
  </svg>
);

export default function CategoriesAndFilter() {
  const { modal, setModal } = useContext(Context);

  const handleModal = (modalValue, modalLabel, isWidth) => {
    setModal({
      ...modal,
      isOpen: !modal?.isOpen,
      modalType: modalValue,
      isMobileModal: false,
      modalLabel: modalLabel,
      isWidth: isWidth,
    });
  };

  return (
    <div>
      <div className="hidden md:flex items-center justify-between gap-12 overflow-x-auto overflow-y-hidden mb-8">
        <Categories />
        <div className="hidden md:flex flex-nowrap justify-end whitespace-nowrap gap-3 items-center max-w-[350px] w-full">
          <button
            className="px-5 py-3 rounded-[7px] border-[1.5px] border-softGray flex gap-2 items-center text-[17px] font-semibold"
            onClick={() => handleModal("filtering", "Filter", "max-w-[750px]")}
          >
            <span>{filterIcon}</span>
            Filters
          </button>
          <button className="px-5 py-3 rounded-[7px] border-[1.5px] border-softGray flex gap-2 items-center text-[17px] font-semibold">
            Optimize
          </button>
          <button className="px-5 py-3 rounded-[7px] border-[1.5px] border-softGray flex gap-2 items-center text-[17px] font-semibold">
            <Link href={"/wishlists"}>Sort By</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
