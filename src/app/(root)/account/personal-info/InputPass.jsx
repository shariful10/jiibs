import React from "react";

const InputPass = ({ lavel }) => {
	return (
		<div className=" mt-2">
			<h2 className="text-lg text-darkGray">{lavel}  Password?</h2>
			<input
				type="password"
				name="password"
				className="border border-softGray w-full rounded-[6px] mt-2 py-4 px-4 focus:outline-primary"
				id=""
			/>
		</div>
	);
};

export default InputPass;