import React from "react";
import SignIn from "@/Components/Authentication/SignIn/SignIn";

export default function page() {
  return (
    <div>
      <h3 className="text-center font-semibold text-blackText pb-5 pt-8 text-[20px]">
        Login to Jibbs
      </h3>
      <SignIn />
    </div>
  );
}
