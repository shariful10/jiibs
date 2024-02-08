import Image from "next/image";
import React from "react";
import earth from "@/assets/images/create-profile-success.svg";

const Success = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Image src={earth} width={315} height={320} alt="Earth emote" />
        <h3 className="">Congratulations</h3>
        <p>
          You’ve successfully created your organization JD Mobbin and your first
          project App analytics
        </p>
      </div>
    </div>
  );
};

export default Success;
