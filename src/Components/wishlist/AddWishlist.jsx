import React from "react";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import Image from "next/image";

export default function AddWishlist() {
  return (
    <div className="w-full p-6 overflow-hidden">
      <div className="max-w-[750px] w-full">
        <div className="flex flex-nowrap gap-6 overflow-x-auto rounded-2xl pb-5 custom-scrollbar">
          <div className=" bg-slate-200 p-2 rounded-lg min-w-[325px]">
            <Image
              src={midtown}
              alt="image"
              width="325px"
              height="250px"
              className="w-full"
            />
            <h4>sdsd</h4>
            <p>sdsd</p>
          </div>
          <div className=" bg-slate-200 p-2 rounded-lg min-w-[325px]">
            <Image
              src={midtown}
              alt="image"
              width="325px"
              height="250px"
              className="w-full"
            />
            <h4>sdsd</h4>
            <p>sdsd</p>
          </div>
          <div className=" bg-slate-200 p-2 rounded-lg min-w-[325px]">
            <Image
              src={midtown}
              alt="image"
              width="325px"
              height="250px"
              className="w-full"
            />
            <h4>sdsd</h4>
            <p>sdsd</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-5">
        <button className="w-full font-semibold text-base leading-5 bg-primary py-4 px-8 outline-none border-none rounded-md text-white text-center">
          Create new wishlist
        </button>
      </div>
    </div>
  );
}
