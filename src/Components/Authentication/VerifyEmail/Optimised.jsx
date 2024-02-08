import Image from "next/image";
import JIIBS from "@/assets/jiibs.png";

export default function Optimized() {
  return (
    <div className="p-6">
      <div className="flex justify-center my-6">
        <div className="max-w-[110px]">
          <Image src={JIIBS} className="w-full h-auto object-cover" />
        </div>
      </div>
      <div className="mb-8 flex flex-col items-center justify-center">
        <h3 className="w-[280px] text-center font-semibold text-[24px] leading-6 text-black mb-2">
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
