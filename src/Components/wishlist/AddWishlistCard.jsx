import React from "react";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import Image from "next/image";

export default function AddWishlistCard() {
  return (
    <div className="w-[325px] h-[250px] bg-slate-200 p-3">
      <Image
        src={midtown}
        className="w-full h-full object-cover rounded-lg"
        alt="image"
      />
    </div>
  );
}
