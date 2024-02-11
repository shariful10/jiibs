import React from "react";

export default function Seperator() {
	return (
		<div className="flex justify-center items-center gap-[15px] my-8">
			<span className="block w-full h-[1px] bg-softGray"></span>
			<span>OR</span>
			<span className="block w-full h-[1px] bg-softGray"></span>
		</div>
	);
}
