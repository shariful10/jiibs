import React from "react";
import AddWishlistCard from "./AddWishlistCard";

export default function AddWishlist() {
  return (
    <div className="w-full p-6 overflow-hidden">
      <div className="w-[750px] h-[280px] flex items-start gap-6 overflow-x-auto my-8 rounded-2xl custom-scrollbar">
        <AddWishlistCard />
        <AddWishlistCard />
        <AddWishlistCard />
        <AddWishlistCard />
      </div>
      <div className="flex justify-center w-full mt-5">
        <button className="w-full font-semibold text-base leading-5 bg-primary py-4 px-8 outline-none border-none rounded-md text-white text-center">
          Create new wishlist
        </button>
      </div>
    </div>
  );
}
