import React from "react";
import Image from "next/image";
import tour1 from "@/assets/tour1.svg";
import tour2 from "@/assets/tour2.svg";
import arrow_right from "@/assets/arrow_right.svg";

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
	return (
		<div className="">
			{demoData.map(({ id, date, image, time, title, address }) => (
				<div key={id}>
               <div className="bg-lightGray p-3 md:p-4">
                  <p className="text-blackText">{date}</p>
               </div>
               <div className="p-4 flex justify-between items-start md:items-center">
                  <div className="md:flex items-center gap-20 text-blackText">
                     <div className="flex items-center gap-5">
                        <Image src={image} className="w-6 md:w-12 h-6 md:h-12" alt="" />
                        <h3 className="text-base md:text-lg">{time}</h3>
                     </div>
                     <div className="text-sm md:text-base mt-4 md:mt-0">
                        <p>{title}</p>
                        <span>{address}</span>
                     </div>
                  </div>
                  <button className="flex items-center gap-1 cursor-pointer">
                     <Image src={arrow_right} alt="arrow_right" />
                     <span className="text-primary font-semibold">
                        Details
                     </span>
                  </button>
               </div>
				</div>
			))}
		</div>
	);
};

export default UpcomingTab;
