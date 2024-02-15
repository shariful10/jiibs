import React from "react";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/assets/person.svg";

const cardData = [
	{
		id: 1,
		url: "/account/personal-info",
		title: "Personal info",
		subtitle: "Edit your personal profiles",
	},
	{
		id: 2,
		url: "/tours-and-open-houses",
		title: "Tours & Open Houses",
		subtitle: "Manage your schedule",
	},
	{
		id: 3,
		url: "/account",
		title: "Inbox",
		subtitle: "Check and send all messages",
	},
	{
		id: 4,
		url: "/account",
		title: "Liked Properties",
		subtitle: "Manage all likes properties",
	},
	{
		id: 5,
		url: "/account",
		title: "Custom Optimization",
		subtitle: "Edit your personal profiles",
	},
	{
		id: 6,
		url: "/account",
		title: "Log Out",
		subtitle: "Edit your personal profiles",
	},
];

const AccountPageCard = () => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
			{cardData.map(({ id, url, title, subtitle }) => (
				<div
					key={id}
					className="p-4 md:p-6 border-2 border-lightGrayBorder hover:bg-lightGray rounded-md duration-[0.4s]"
				>
					<Link href={url}>
						<Image src={avatar} alt="avatar" />
						<div className="mt-6">
							<h1 className="text-2xl text-blackText font-semibold mb-2">
								{title}
							</h1>
							<p className="text-xl text-darkGray">{subtitle}</p>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default AccountPageCard;
