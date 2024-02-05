import React from "react";

export default function NotLogin() {
  return (
    <div>
      <div>
        <h3>Log in to view your wishlists</h3>
        <p>You can create, view, or edit wishlist once you're logged in</p>
      </div>
      <button className="font-semibold text-base leading-5 bg-primary py-4 px-8 outline-none border-none rounded-md text-white text-center">
        Login
      </button>
    </div>
  );
}
