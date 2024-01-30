import React from "react";
import Link from "next/link";

const FooterItems = ({ className, title, item1, item2, item3, item4, item5, item6 }) => {
	return (
		<div className={`${className}`}>
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
	);
};

export default FooterItems;
