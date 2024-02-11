import React from "react";

export default function AddAlbum() {
	return (
		<div className="w-full p-6 overflow-hidden">
			<div className="flex flex-col gap-3">
				<div className="w-full rounded-xl border border-[#E4E4E4] flex flex-col px-4 py-2">
					<label htmlFor="minimumPrice" className="font-normal text-xs">
						Minimum
					</label>
					<div className="w-full flex gap-1">
						<span>$</span>
						<input
							type="text"
							id="priceRange"
							placeholder=""
							className="block w-full outline-none border-non bg-transparent text-blackText leading-[22px] font-normal"
						/>
					</div>
				</div>
				<span className="text-darkGray font-normal text-sm sm:text-base sm:leading-6">
					18/53 characters
				</span>
			</div>
			<div className="flex justify-center w-full mt-5">
				<button className="w-full font-semibold text-base leading-5 bg-primary py-4 px-8 outline-none border-none rounded-md text-white text-center">
					Create & Add
				</button>
			</div>
		</div>
	);
}
