import React from "react";
import avatar from "@/assets/person.svg";
import Image from "next/image";

const AccountPageCard = ({ title, subtitle }) => {
	return (
		<div className="p-4 md:p-6 border border-[#D1D5DB] rounded-md">
			<Image src={avatar} alt="avatar" />
			<div className="mt-6">
				<h1 className="text-2xl text-[#222] font-semibold mb-2">{title}</h1>
				<p className="text-xl text-[#626262]">{subtitle}</p>
			</div>
		</div>
	);
};

export default AccountPageCard;
