"use client";

import React, { useContext } from "react";
import NotLogin from "@/Components/wishlist/NotLogin";
import Album from "@/Components/wishlist/Album";
import WishlistsMobile from "@/Components/wishlist/WishlistsMobile";
import Context from "@/Context/Context";
import { CREATE_WISHLIST } from "@/Components/Regular/Utils/constant";
import AddAlbum from "@/Components/wishlist/AddAlbum";

const whitePlusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <g clipPath="url(#clip0_1362_4564)">
      <path
        d="M18.9999 9.49997H11V1.49994C11 0.948058 10.552 0.5 9.99991 0.5C9.44803 0.5 8.99997 0.948058 8.99997 1.49994V9.49997H0.999936C0.448058 9.49997 0 9.94803 0 10.4999C0 11.052 0.448058 11.5 0.999936 11.5H8.99997V19.4999C8.99997 20.0519 9.44803 20.5 9.99991 20.5C10.552 20.5 11 20.0519 11 19.4999V11.5H18.9999C19.5519 11.5 20 11.052 20 10.4999C20 9.94803 19.5519 9.49997 18.9999 9.49997Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1362_4564">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default function page() {
  const { modal, setModal } = useContext(Context);
  const isLogin = false;

  const handleModal = ({ modalType, modalLabel, isWidth, modalContent }) => {
    setModal({
      ...modal,
      isOpen: !modal?.isOpen,
      modalType,
      modalLabel,
      isWidth,
      modalContent,
    });
  };

  return (
    <div className="w-full max-w-[1520px] mx-auto pt-10 pb-20">
      {isLogin ? (
        <NotLogin />
      ) : (
        <>
          {/* Wishlist mobile */}
          <div className="md:hidden">
            <WishlistsMobile />
          </div>
          {/* Wishlist desktop */}
          <div className="hidden md:block">
            <div className="hidden sm:flex justify-between items-center">
              <h1 className="font-semibold text-3xl text-blackText">
                Wishlist
              </h1>
              <button
                className="flex items-center gap-2 bg-primary rounded-lg py-4 px-7 text-white"
                onClick={() =>
                  handleModal({
                    modalType: CREATE_WISHLIST?.value,
                    modalLabel: CREATE_WISHLIST?.label,
                    isMobileModal: false,
                    isWidth: "max-w-[630px]",
                    modalContent: <AddAlbum />,
                  })
                }
              >
                <span>{whitePlusIcon}</span>
                <span>Create album</span>
              </button>
            </div>
            <div className="pt-4 md:pt-8 pb-20 grid md:grid-cols-3 lg:grid-cols-4 gap-10">
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
