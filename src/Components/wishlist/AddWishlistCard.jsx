import React from "react";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import Image from "next/image";

export default function AddWishlistCard() {
  return (
    <div className="min-w-[325px] rounded-lg">
      <Image
        src={midtown}
        style={{ boxShadow: "5px 5px 17px 4px #B1B1B140" }}
        className="w-full h-[250px] border-lightGray border-[5px] object-cover rounded-xl"
        alt="image"
      />
      <h2>Buildings</h2>
      <p>Saved 1</p>
    </div>
  );
}
