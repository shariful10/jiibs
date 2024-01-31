import React from "react";
import dot from "@/assets/Vector.svg"
import Image from "next/image";

const Dot = ({ title }) => {
	return (
		<p className="flex items-center gap-1">
         <Image src={dot} alt="dot" />
			<span>{title}</span>
		</p>
	);
};

export default Dot;
