"use client";

import React from "react";
import Image from "next/image";
import JIIBS from "@/assets/jiibs.png";
import SignUp from "@/Components/Authentication/Signup/Signup";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="flex justify-between items-center pt-5 px-5">
        <Link href={"/"} className="w-[50px] h-auto">
          <Image src={JIIBS} className="w-full h-auto" />
        </Link>
        <Link
          href={"/signin-mobile"}
          className="text-primary font-semibold text-base leading-5"
        >
          Log in
        </Link>
      </div>
      <h3 className="text-center font-semibold text-blackText pb-5 pt-8 text-[20px]">
        Sign up to hire talent
      </h3>
      <SignUp />
    </div>
  );
}
