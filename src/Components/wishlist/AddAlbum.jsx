import React from "react";

export default function AddAlbum() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-3">
        <div className="w-full rounded-xl border border-[#E4E4E4] flex flex-col px-4 py-2">
          <label htmlFor="minimumPrice" className="font-normal text-xs">
            Minimum
          </label>
          <div className="flex gap-1">
            <span>$</span>
            <input
              type="number"
              id="priceRange"
              placeholder=""
              className="w-full outline-none border-non bg-transparent text-blackText leading-[22px] font-normal"
              // value={filters?.maxPrice}
              // onChange={(e) =>
              //   setFilter({ ...filters, maxPrice: e.target.value })
              // }
            />
          </div>
        </div>
        <span>18/53 characters</span>
      </div>
      <div className="flex justify-center w-full mt-5">
        <button className="w-full font-semibold text-base leading-5 bg-primary py-4 px-8 outline-none border-none rounded-md text-white text-center">
          Create & Add
        </button>
      </div>
    </div>
  );
}
