import React from "react";
import SquareCheckbox from "../../Regular/Toggle/SquareCheckbox";
import LoginWithGoogleAndApple from "../helper/LoginWithGoogleAndApple";
import Seperator from "../helper/Seperator";

export default function SignUp() {
  return (
    <div className="max-w-400 w-full p-10 overflow-hidden">
      <LoginWithGoogleAndApple />
      <Seperator />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <input
            type="text"
            placeholder="First name"
            className="border border-[#ddd] w-full py-[12px] xxl:py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-[#ddd] w-full py-[12px] xxl:py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="text"
            placeholder="Email address"
            className="border border-[#ddd] w-full py-[12px] xxl:py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="Password"
            placeholder="Email address"
            className="border border-[#ddd] w-full py-[12px] xxl:py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-[#ddd] w-full py-[12px] xxl:py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
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
        <button className="w-full font-semibold text-base leading-5 bg-primary py-3 px-8 outline-none border-none rounded-md text-white text-center">
          Create my account
        </button>
      </div>
    </div>
  );
}
