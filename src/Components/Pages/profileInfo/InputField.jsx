import React from "react";

const InputField = ({ lavel, name, defaultValue, children }) => {
	return (
		<div className="mt-5">
			<div className="border rounded-md">
				<p className="text-[10px] text-darkGray pt-2 px-3">{lavel}</p>
				<input
					type="text"
					name={name}
					defaultValue={defaultValue}
					className="outline-neme focus-within:outline-none pb-2 px-3 w-full rounded-md"
				/>
			</div>
			<div className="flex flex-col items-center md:items-start">
				{children}
			</div>
		</div>
	);
};

export default InputField;
