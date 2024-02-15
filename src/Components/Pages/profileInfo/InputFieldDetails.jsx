import React from "react";

const InputFieldDetails = ({ lavel, type, name, defaultValue, children }) => {
	return (
		<div className="mt-5">
			<p className="text-sm text-darkGray pt-2 px-3">{lavel}</p>
			<div className="border rounded-md">
				<input
					type={type}
					name={name}
					defaultValue={defaultValue}
					className="outline-neme focus-within:outline-none p-3 w-full rounded-md"
				/>
			</div>
			<div className="flex flex-col items-center md:items-start">
				{children}
			</div>
		</div>
	);
};

export default InputFieldDetails;
