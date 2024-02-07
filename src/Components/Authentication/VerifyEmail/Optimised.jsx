import Image from "next/image";
import VerifyEmailImg from "@/assets/verifyEmail.png";

export default function Optimized() {
  return (
    <div className="p-6">
      <h3 className="font-semibold text-[36px] leading-[45px] text-blackText text-center mb-5">
        Login to JIBBS
      </h3>
      <div className="flex justify-center ">
        <div className="max-w-[270px] h-[200px]">
          <Image src={VerifyEmailImg} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="mb-8 flex flex-col justify-center">
        <h3 className="text-center font-normal text-[24px] leading-6 text-black mb-6">
          Answer a few questions & personalize your search
        </h3>
        <p className="text-center font-normal text-base leading-6 text-black">
          Discover your next NYC apartment
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <button className="w-full font-semibold text-base leading-5 bg-primary py-3 px-8 outline-none border-none rounded-md text-white text-center">
          Continue
        </button>
      </div>
    </div>
  );
}
