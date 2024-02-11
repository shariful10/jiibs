import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const InputProfileCard = ({
	image,
	title,
	subTitle,
	selectValue,
	setSelectValue,
}) => {
	return (
		<div
			className={`border border-gray-300 rounded-lg p-6 bg-white relative ${
				selectValue === title && "border-primary border"
			}`}
			onClick={() => {
				setSelectValue(title);
			}}
		>
			{selectValue === title && (
				<div className="absolute right-5 top-5 text-primary">
					<MdCheckCircle size={25} />
				</div>
			)}
			<Image src={image} alt={title} />
			<h3 className="text-2xl font-semibold text-blackText mt-3 mb-2">
				{title}
			</h3>
			<p className="text-darkGray">{subTitle}</p>
		</div>
	);
};

export default InputProfileCard;
