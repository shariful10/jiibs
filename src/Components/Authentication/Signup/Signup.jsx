import React from "react";
import SquareCheckbox from "../../Regular/Toggle/SquareCheckbox";
import LoginWithGoogleAndApple from "../helper/LoginWithGoogleAndApple";
import Seperator from "../helper/Seperator";

export default function SignUp() {
  return (
    <div className="p-10">
      <h3 className="font-semibold text-[36px] leading-[45px] text-blackText text-center mb-5">
        Sign up to JIIBS
      </h3>
      <LoginWithGoogleAndApple />
      <Seperator />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-2">
          <input
            type="text"
            placeholder="First name"
            className="border border-[#ddd] w-full sm:w-1/2 py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-[#ddd] w-full sm:w-1/2 py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="text"
            placeholder="Email address"
            className="border border-[#ddd] w-full py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="Password"
            placeholder="Email address"
            className="border border-[#ddd] w-full py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-[#ddd] w-full py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <SquareCheckbox label="Agree to Terms & Conditions" />
        <SquareCheckbox
          label="Subscribe to our newsletter for New York City updates and apartment
            searching tips"
        />
      </div>
      <div className="flex justify-center w-full mt-5">
        <button className="w-full font-semibold text-base leading-5 bg-primary py-4 px-8 outline-none border-none rounded-md text-white text-center">
          Create my account
        </button>
      </div>
    </div>
  );
}
