import Image from "next/image";
import React from "react";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import lauren from "@/assets/images/apartment/lauren.png";

export default function AddWishlist() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-3">
        <div className="w-full flex gap-6 overflow-x-auto">
            <div>
                <Image src={midtown} className="w-full"/>
            </div>
            <div>
                <Image src={lauren} className="w-full"/>
            </div>
            <div>
                <Image src={lauren} className="w-full"/>
            </div>
            <div>
                <Image src={lauren} className="w-full"/>
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
