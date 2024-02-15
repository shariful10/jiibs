import Image from "next/image";
import React from "react";
import earth from "@/assets/images/create-profile-success.svg";
import Link from "next/link";

const RegistrationSuccess = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] px-5 md:px-0 py-20 md:py-0">
      <div className="flex justify-center items-center flex-col">
        <Image
          src={earth}
          width={250}
          height={250}
          alt="Earth emote"
          className=""
        />
        <div className="text-center my-5 md:my-10">
          <h3 className="text-3xl font-bold lg:text-[36px] text-blackText">
            Congratulations
          </h3>
          <p className="text-darkGray mt-3">
            You’ve successfully created your organization {"JD Mobbin"} and your
            first project App analytics
          </p>
        </div>
        <Link
          href="/"
          className="font-semibold text-white bg-primary py-3.5 px-5 rounded-lg cursor-pointer"
        >
          Let's Get Started
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
