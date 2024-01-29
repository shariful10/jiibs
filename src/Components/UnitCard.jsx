import Image from "next/image";
import React from "react";
import unitImage from "../../public/unitImage.jpeg";

const UnitCard = () => {
  return (
    <div className="h-[430px] w-[320px] me-[33px] mb-[40px]">
      <Image
        src={unitImage} // Path to your image file
        alt="Description of the image"
        width={500} // Desired width of the image
        height={300} // Desired height of the image
        className=" rounded-[20px] "
      ></Image>
      <div className="flex flex-col">
        <p className=" text-[15px] mt-[10px]">Midtown East</p>
        <p className=" text-[20px] mt-[4px]">Paragon #203</p>
        <p className=" text-[20px] mt-[4px]">$4456/month</p>
        <ul className="flex flex-row text-[15px] mt-[8px]">
          <li className="">1 bed</li>
          <li className="">1 Bath</li>
          <li className="">1230 sqft</li>
        </ul>
      </div>
    </div>
  );
};

export default UnitCard;
