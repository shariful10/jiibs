import React from "react";

export default function NotLogin() {
  return (
    <div>
      <h3 className="font-semibold text-[20px] leading-6 text-blackText">
        Wishlists
      </h3>
      <div className="mb-6">
        <h3 className="font-semibold text-[18px] leading-5 text-blackText mt-2 mb-3">
          Log in to view your wishlists
        </h3>
        <p className="font-normal text-xs leading-4 text-darkGray">
          You can create, view, or edit wishlist once you're logged in
        </p>
      </div>
      <button className="font-semibold text-base leading-5 bg-primary py-[8px] px-8 outline-none border-none rounded-md text-white text-center">
        Login
      </button>
    </div>
  );
}
