import React from "react";
import Image from "next/image";
import dot from "@/assets/Vector.svg";
import FooterItems from "./FooterItems";
import twitter from "@/assets/twitter.svg";
import Container from "../Regular/Container";
import facebook from "@/assets/facebook.svg";
import instragram from "@/assets/instragram.svg";

const Footer = () => {
	return (
		<footer className="pt-[60px] pb-[30px] bg-[#F7F7F7] px-5">
			<Container>
				<div className="grid md:grid-cols-3 border-b pb-[52px]">
					<FooterItems
						title="Support"
						item1="Help Center"
						item2="AirCover"
						item3="Anti-discrimination"
						item4="Disability support"
						item5="Cancellation options"
						item6="Report neighborhood concern"
					/>
					<FooterItems
						className="mt-5 md:mt-0"
						title="Hosting"
						item1="Laurylee your home"
						item2="AirCover for Hosts"
						item3="Hosting resources"
						item4="Community forum"
						item5="Hosting responsibly"
						item6="Laurylee-friendly apartments"
					/>
					<FooterItems
						className="mt-5 md:mt-0"
						title="Laurylee"
						item1="Newsroom"
						item2="New features"
						item3="Careers resources"
						item4="Investors"
						item5="Gift cards"
						item6="laurylee.com emergency stays"
					/>
				</div>
				<div className="mt-[22px] flex items-center justify-between flex-wrap space-y-6 md:space-y-0">
					<div className="flex items-center gap-10 flex-wrap">
						<p className="text-[#222]">
							© 2023 Laurylee. All rights reserved.
						</p>
						<div className="flex items-center gap-4">
							<p className="flex items-center gap-1">
								<Image src={dot} alt="dot" />
								<span>Terms</span>
							</p>
							<p className="flex items-center gap-1">
								<Image src={dot} alt="dot" />
								<span>Sitemap</span>
							</p>
							<p className="flex items-center gap-1">
								<Image src={dot} alt="dot" />
								<span>Privacy</span>
							</p>
							<p className="flex items-center gap-1">
								<Image src={dot} alt="dot" />
								<span>Contact</span>
							</p>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<Image src={facebook} alt="" />
						<Image src={instragram} alt="" />
						<Image src={twitter} alt="" />
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
