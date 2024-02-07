"use client";

import React from "react";
import Image from "next/image";
import JIIBS from "@/assets/jiibs.png";
import SignUp from "@/Components/Authentication/Signup/Signup";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="flex justify-between items-center pb-8 pt-5 px-5">
        <div className="w-[50px] h-auto">
          <Image src={JIIBS} className="w-full h-auto" />
        </div>
        <Link
          href={"/signin-mobile"}
          className="text-primary font-semibold text-base leading-5"
        >
          Log in
        </Link>
      </div>
      <SignUp />
    </div>
  );
}
