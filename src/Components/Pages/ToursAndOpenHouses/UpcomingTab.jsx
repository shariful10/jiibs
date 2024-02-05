"use client";
import Image from "next/image";
import { useState } from "react";
import sync from "@/assets/sync.svg";
import close from "@/assets/x.svg";
import tour1 from "@/assets/tour1.svg";
import tour2 from "@/assets/tour2.svg";
import arrow_right from "@/assets/arrow_right.svg";
import arrow_bottom from "@/assets/arrow_bottom.svg";

const demoData = [
	{
		id: 1,
		date: "Sunday, January 14, 2024",
		image: tour1,
		time: "09:00am - 09:15 am",
		title: "The Sun",
		address: "506 Drew Circle, New York, New York 10006",
	},
	{
		id: 2,
		date: "Monday, January 15, 2024",
		image: tour2,
		time: "02:00am - 03:15 pm",
		title: "121 Founders",
		address: "121 Founders, New York, New York 10003",
	},
];

const UpcomingTab = () => {
	const [openState, setOpenState] = useState(null);

   const toggleOpenState = (id) => {
      setOpenState((prevState) => (prevState === id ? null : id));
    };

	return (
		<div className="">
			{demoData.map(({ id, date, image, time, title, address }) => (
				<div key={id}>
					<div className="bg-lightGray p-3 md:p-4">
						<p className="text-blackText">{date}</p>
					</div>
					<div className="px-1 py-4 md:py-4 md:px-4 flex justify-between items-start md:items-center">
						<div className="md:flex items-center gap-20 text-blackText">
							<div className="flex items-center gap-5">
								<Image
									src={image}
									className="w-6 md:w-12 h-6 md:h-12"
									alt=""
								/>
								<h3 className="text-base md:text-lg">{time}</h3>
							</div>
							<div className="text-sm md:text-base mt-4 md:mt-0">
								<p>{title}</p>
								<span>{address}</span>
							</div>
						</div>
						<div className="relative" onClick={() => toggleOpenState(id)}>
							<button className="flex items-center gap-1 cursor-pointer">
								{openState === id ? (
									<Image src={arrow_bottom} alt="arrow_bottom" />
								) : (
									<Image src={arrow_right} alt="arrow_right" />
								)}
								<span className="text-primary font-semibold">
									Details
								</span>
							</button>
							{openState === id && (
								<div className="absolute top-7 right-0 rounded-md border p-2 md:p-3 flex flex-col gap-2 bg-white z-10">
									<button className="font-semibold w-[140px] py-1.5 rounded-full border flex justify-center gap-2 items-center">
                              <Image src={sync} className="h-5 w-5" alt="sync" />
                              Reschedule
                           </button>
                           <button className="font-semibold px-4 py-1.5 rounded-full border border-lightRed text-lightRed flex justify-center gap-2 items-center">
                              <Image src={close} className="h-5 w-5" alt="close" />
                              Cancel
                           </button>
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default UpcomingTab;
