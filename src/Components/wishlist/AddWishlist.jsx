import React from "react";
import AddWishlistCard from "./AddWishlistCard";

export default function AddWishlist() {
  return (
    <div className="w-full p-6 overflow-hidden">
      <div className="max-w-[500px] w-full flex gap-4 overflow-x-auto rounded-2xl pb-5 custom-scrollbar">
        <AddWishlistCard />
        <AddWishlistCard />
        <AddWishlistCard />
        <AddWishlistCard />
        <AddWishlistCard />
        <AddWishlistCard />
      </div>
      <div className="flex justify-center w-full mt-5">
        <button className="w-full font-semibold text-base leading-5 bg-primary py-3 px-8 outline-none border-none rounded-md text-white text-center">
          Create new wishlist
        </button>
      </div>
    </div>
  );
}
