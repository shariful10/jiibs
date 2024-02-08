import Image from "next/image";
import Link from "next/link";
import React from "react";
import VerifyEmailImg from "@/assets/verifyEmail.png";
import JIIBS from "@/assets/jiibs.png";

export default function page() {
  return (
    <div>
      <div className="flex justify-center pt-6 pb-20">
        <div className="max-w-[50px] h-auto">
          <Image src={JIIBS} className="w-full h-full object-cover" />
        </div>
      </div>

      <h3 className="hidden sm:block font-semibold text-[36px] leading-[45px] text-blackText text-center mb-5">
        Login to JIBBS
      </h3>
      <div className="flex justify-center ">
        <div className="max-w-[270px] h-[200px]">
          <Image src={VerifyEmailImg} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="mb-8 flex flex-col justify-center">
        <h3 className="font-semibold text-center text-[20px] leading-6 text-black">
          Further Optimize
        </h3>
        <p className="font-semibold text-[14px] text-center my-3">
          Answer a few questions & personalize your search
        </p>
        <p className="font-normal text-sm leading-6 text-[#565656] text-center">
          Discover your next NYC apartment
        </p>
      </div>
      <div className="flex flex-col gap-3 px-4">
        <Link
          href={"/optimised-mobile"}
          className="w-full font-semibold text-base leading-5 bg-primary py-3 px-8 outline-none border-none rounded-md text-white text-center"
        >
          Change Email
        </Link>
      </div>
    </div>
  );
}
