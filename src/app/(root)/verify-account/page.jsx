import VerifyEmail from "@/Components/Authentication/VerifyEmail/VerifyEmail";
import React from "react";
import JIIBS from "@/assets/jiibs.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="flex justify-center py-[22px]">
        <div className="w-[50px] h-auto">
          <Image src={JIIBS} className="w-full h-auto" alt="" />
        </div>
      </div>

      <VerifyEmail />
    </div>
  );
}
