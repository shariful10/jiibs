import React from "react";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/assets/person.svg";

const AccountPageCard = ({ title, subtitle, url }) => {
	return (
		<Link href={url} className="p-4 md:p-6 border-2 border-[#D1D5DB] hover:border-primary rounded-md">
			<Image src={avatar} alt="avatar" />
			<div className="mt-6">
				<h1 className="text-2xl text-[#222] font-semibold mb-2">{title}</h1>
				<p className="text-xl text-[#626262]">{subtitle}</p>
			</div>
		</Link>
	);
};

export default AccountPageCard;
