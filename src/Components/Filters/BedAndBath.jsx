import React from "react";

export default function BedAndBath() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <span className="block font-normal text-base leading-5 mb-3">
          Bedroom
        </span>
        <div className="flex w-full">
          {/* <span class="flex-1 border border-t-0 border-l-0 border-r-0 border-gray-300 rounded-tl-6">
            Studio
          </span>
          <span class="flex-1 border border-gray-300">1</span>
          <span class="flex-1 border border-gray-300">2</span>
          <span class="flex-1 border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-tr-6">
            3
          </span> */}
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3 rounded-s-lg">
            Studio
          </span>
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3">
            1
          </span>
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3">
            2
          </span>
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3">
            3
          </span>
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3 rounded-e-lg">
            4+
          </span>
        </div>
      </div>
      <div>
        <span className="block font-normal text-base leading-5 mb-3">
          Bathroom
        </span>
        <div className="flex w-full">
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3 rounded-s-lg">
            1
          </span>
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3">
            2
          </span>
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3">
            3
          </span>
          <span className="inline-block text-center w-full border border-[#ddd] font-normal text-base leading-5 py-3 rounded-e-lg">
            4+
          </span>
        </div>
      </div>
    </div>
  );
}
