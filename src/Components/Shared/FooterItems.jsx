import React from "react";
import Link from "next/link";

const footerData = [
	{
		id: 1,
		title: "Support",
		item1: "Help Center",
		item2: "AirCover",
		item3: "Anti-discrimination",
		item4: "Disability support",
		item5: "Cancellation options",
		item6: "Report neighborhood concern",
	},
	{
		id: 2,
		title: "Hosting",
		item1: "Laurylee your home",
		item2: "AirCover for Hosts",
		item3: "Hosting resources",
		item4: "Community forum",
		item5: "Hosting responsibly",
		item6: "Laurylee-friendly apartments",
	},
	{
		id: 3,
		title: "Laurylee",
		item1: "Newsroom",
		item2: "New features",
		item3: "Careers resources",
		item4: "Investors",
		item5: "Gift cards",
		item6: "laurylee.com emergency stays",
	},
];

const FooterItems = () => {
	return (
		<>
			{footerData.map(
				({ id, title, item1, item2, item3, item4, item5, item6 }) => (
					<div className="mt-5 md:mt-0">
						<h2 className="text-lg font-semibold">{title}</h2>
						<div className="flex flex-col gap-2 mt-3">
							<Link href="#">{item1}</Link>
							<Link href="#">{item2}</Link>
							<Link href="#">{item3}</Link>
							<Link href="#">{item4}</Link>
							<Link href="#">{item5}</Link>
							<Link href="#">{item6}</Link>
						</div>
					</div>
				)
			)}
		</>
	);
};

export default FooterItems;
