import React from "react";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import Image from "next/image";

export default function AddWishlistCard() {
  return (
    <div
      style={{
        boxShadow: "0px 0px 17px 4px #B1B1B140",
      }}
      className="w-[325px] h-[275px] p-1 rounded-2xl shrink"
    >
      <Image
        src={midtown}
        className="w-full h-full object-cover rounded-2xl"
        alt="image"
      />
    </div>
  );
}
