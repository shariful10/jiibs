import React from "react";
import AddWishlistCard from "./AddWishlistCard";

export default function AddWishlist() {
  return (
    <div className="p-6 overflow-x-auto">
      <div className="w-[750px] flex gap-6 overflow-x-auto">
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
