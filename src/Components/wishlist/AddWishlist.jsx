import React from "react";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import Image from "next/image";

export default function AddWishlist() {
  return (
    <div className="w-[750px] p-6 overflow-x-auto">
      <div className="w-[950px] flex gap-6 overflow-x-auto rounded-2xl">
        <div className="w-[325px] h-[250px] bg-slate-200 p-2 rounded-lg">
          <Image
            src={midtown}
            alt="image"
            width="325px"
            height="250px"
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <div className="w-[325px] h-[250px] bg-slate-200 p-2 rounded-lg">
          <Image
            src={midtown}
            alt="image"
            width="325px"
            height="250px"
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <div className="w-[325px] h-[250px] bg-slate-200 p-2 rounded-lg">
          <Image
            src={midtown}
            alt="image"
            width="325px"
            height="250px"
            objectFit="contain"
            layout="responsive"
          />
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
