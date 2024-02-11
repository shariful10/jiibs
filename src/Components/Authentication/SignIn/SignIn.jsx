import React from "react";
import Seperator from "../helper/Seperator";
import LoginWithGoogleAndApple from "../helper/LoginWithGoogleAndApple";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="p-10 w-full">
      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          placeholder="Email or phone number"
          className="border border-[#ddd] w-full py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
        />
      </div>
      <div className="flex justify-center w-full mt-5">
        <button className="w-full font-semibold text-base leading-5 bg-primary py-4 px-8 outline-none border-none rounded-md text-white text-center">
          Continue with email
        </button>
      </div>
      <Seperator />
      <LoginWithGoogleAndApple />
      <h4 className="font-normal text-base leading-6 text-blackText pt-8 pb-6 text-center">
        Don’t have an Upwork account?
      </h4>
      <div className="hidden md:flex justify-center">
        <button className="text-[#2AB7DD] py-3 px-10 border rounded-md border-[#2AB7DD]">
          Sign up
        </button>
      </div>
      <div className="flex md:hidden justify-center">
        <Link
          href={"/signup-mobile"}
          className="text-[#2AB7DD] py-3 px-10 border rounded-md border-[#2AB7DD]"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
