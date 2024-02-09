import React from "react";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import Image from "next/image";

export default function AddWishlist() {
  return (
    <div className="w-full p-6 overflow-hidden">
      <div className="w-[750px] grid grid-cols-2 gap-6 overflow-x-auto rounded-2xl">
        <div className="w-[325px] bg-slate-400 p-2 rounded-lg">
          <Image
            src={midtown}
            alt="image"
            width="100%"
            height="250px"
            objectFit="contain"
            layout="responsive"
            className="w-full"
          />
          <h4>sdsd</h4>
          <p>sdsd</p>
        </div>
        <div className="w-[325px] bg-slate-200 p-2 rounded-lg">
          <Image
            src={midtown}
            alt="image"
            width="325px"
            height="250px"
            objectFit="contain"
            layout="responsive"
          />
          <h4>sdsd</h4>
          <p>sdsd</p>
        </div>
        <div className="w-[325px] bg-slate-200 p-2 rounded-lg">
          <Image
            src={midtown}
            alt="image"
            width="325px"
            height="250px"
            objectFit="contain"
            layout="responsive"
          />
          <h4>sdsd</h4>
          <p>sdsd</p>
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
