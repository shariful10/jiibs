import React, { useContext } from "react";
import Categories from "../Categories/Categories";
import Link from "next/link";
import Context from "@/Context/Context";
import {
  FILTERING,
  FURTHER_OPTIMIZE,
} from "@/Components/Regular/Utils/constant";
import Filter from "../Filters/Filter";
import Optimized from "../Authentication/VerifyEmail/Optimised";

const filterIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="0.8em"
    width="0.8em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path>
  </svg>
);

export default function CategoriesAndFilter() {
  const { modal, setModal } = useContext(Context);
  const handleModal = ({
    modalType,
    modalLabel,
    isWidth,
    topRightContent,
    modalContent,
  }) => {
    setModal({
      ...modal,
      isOpen: !modal?.isOpen,
      modalType,
      isMobileModal: false,
      modalLabel,
      isWidth,
      topRightContent,
      modalContent,
    });
  };
  const handleCloseModal = () => {
    setModal({
      isOpen: false,
      modalType: "",
      isMobileModal: "",
      modalLabel: "",
      topRightContent: "",
      modalContent: "",
    });
  };
  return (
    <div className="w-full hidden md:flex items-center justify-between gap-5 pt-10">
      <Categories />
      <div className="hidden md:flex flex-nowrap justify-end whitespace-nowrap gap-3 items-center">
        <button
          className="px-[15px] py-2.5 rounded-[5px] border-[1px] border-[#D3D3D3] flex gap-2 items-center text-[14px] font-semibold text-[#414143] bg-white"
          onClick={() =>
            handleModal({
              modalType: FILTERING?.value,
              modalLabel: FILTERING?.label,
              isWidth: "max-w-[750px]",
              modalContent: <Filter />,
              topRightContent: (
                <span className="inline-block font-semibold text-xl leading-6 text-primary">
                  Reset
                </span>
              ),
            })
          }
        >
          <span>{filterIcon}</span>
          Filters
        </button>
        <button
          className="px-[15px] py-2.5 rounded-[5px] border-[1px] border-[#D3D3D3] flex gap-2 items-center text-[14px] font-semibold text-[#414143] bg-white"
          onClick={() =>
            handleModal({
              modalType: FURTHER_OPTIMIZE?.value,
              modalLabel: FURTHER_OPTIMIZE?.label,
              isWidth: "max-w-[480px]",
              modalContent: <Optimized />,
              topRightContent: (
                <span
                  className="inline-block font-semibold text-xl leading-6 cursor-pointer text-blackText"
                  onClick={handleCloseModal}
                >
                  Skip
                </span>
              ),
            })
          }
        >
          Optimize
        </button>
        <button className="px-[15px] py-2.5 rounded-[5px] border-[1px] border-[#D3D3D3] flex gap-2 items-center text-[14px] font-semibold text-[#414143] bg-white">
          <Link href={"/wishlists"}>Sort By</Link>
        </button>
      </div>
    </div>
  );
}
