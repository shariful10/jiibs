import classIcons from "@/assets/icons/classicsIcons.png";
import marketIcons from "@/assets/icons/marketStoreIcons.png";
import plateIcons from "@/assets/icons/plateIcons.png";
import Image from "next/image";
import AboutDescription from "./AboutDescription";
import Amenities from "./Amenities";
import AvailableUnits from "./AvailableUnits";
import StudioBed from "./StudioBed";
import Transportation from "./Transportation";
import StudioBedSlide from "./StudioBed";

export default function AboutSide() {
  const studioBed = [
    {
      space: "studio",
      price: { min: 3975, max: 4350 },
      available: 2,
    },
    {
      space: "1 bed",
      price: { min: 450, max: 4750 },
      available: 2,
    },
    {
      space: "2 bed",
      price: { min: 3975, max: 4350 },
      available: 2,
    },
    {
      space: "3 bed+",
      price: { min: 3975, max: 4350 },
      available: 2,
    },
  ];

  return (
    <>
      <div className="w-full space-y-8 md:space-y-[3.25rem] mb-5">
        {/* bet studio */}
        <div className="flex items-center justify-between gap-6">
          <StudioBed betData={studioBed} />
        </div>

        {/* <StudioBedSlide betData={studioBed} /> */}

        {/* About Description */}
        <div>
          <AboutDescription />
        </div>

        {/* dining & class */}
        <div className="space-y-4">
          <DiningClass
            icons={plateIcons}
            title="Dining & Drinking"
            paragraph="Includes Michelin starred restaurant Crown Shy as well as fine dining experiences on 63rd floor, terrace and bar on the 64th floor."
          />
          <DiningClass
            icons={classIcons}
            title="world class amenities"
            paragraph="NYSC's 22,000-square-foot Elite Club offers a full roster of daily classes, a turf track, and Pilates and yoga studios."
          />
          <DiningClass
            icons={marketIcons}
            title="In-Building Groceries & Market"
            paragraph="City Acres, a gourmet grocer and curated food hall, is at your door step."
          />
        </div>

        {/* Transportation */}
        <div>
          <Transportation />
        </div>

        {/* Amenities */}
        <div>
          <Amenities />
        </div>

        {/* Available Units */}
        <div>
          <AvailableUnits />
        </div>
      </div>
    </>
  );
}

// similar Components
function DiningClass({ icons = null, title = null, paragraph = null }) {
  return (
    <>
      <div className="flex gap-6 justify-start items-start">
        {icons ? (
          <figure className="w-6 h-6">
            <Image className="w-full h-full object-cover" src={icons} />
          </figure>
        ) : null}

        <div className="flex flex-col gap-1 justify-start items-start">
          {title ? (
            <h4 className="text-xl font-semibold leading-none">{title}</h4>
          ) : null}

          {paragraph ? (
            <p className="text-sm leading-[26px] font-normal"> {paragraph} </p>
          ) : null}
        </div>
      </div>
    </>
  );
}
