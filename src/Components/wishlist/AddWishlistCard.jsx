import React from "react";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import Image from "next/image";

export default function AddWishlistCard() {
  return (
    <span className="block w-[325px] h-[250px]">
      <Image
        src={midtown}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
        alt="image"
      />
    </span>
  );
}
