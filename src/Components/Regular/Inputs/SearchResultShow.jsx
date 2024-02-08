import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Container from "../Container";

import building1 from "@/assets/building-1.jpg";
import building2 from "@/assets/building-2.jpg";
import building3 from "@/assets/building-3.jpg";
import roadUnit from "@/assets/road.jpg";
import Image from "next/image";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const { default: Logo } = require("../Logo");

export default function SearchResultShow({ data = [] }) {
  const [tabs, setTabs] = useState("building");
  console.log("data ", data);

  return (
    <>
      <div className="bg-white w-full absolute top-0 inset-x-0 z-50 shadow-md">
        <Container>
          {/* logo, search, close */}
          <div className="flex items-center justify-between gap-4">
            <div className="">
              <Logo />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search Apartments, Neighborhoods, Etc."
                className={`w-full bg-lightGray text-blackText focus:outline-none border-none p-3 text-sm rounded-full`}
              />
            </div>
            <div>
              <button className="w-5 h-5 rounded-full flex items-center justify-center font-extrabold text-3xl">
                <RxCross1 />
              </button>
            </div>
          </div>

          {/* show items */}
          <div className="py-5 ">
            <div className="flex items-center justify-start gap-3 border-b-[4px] border-b-softGray ">
              <TabItems tabs={tabs} handle={setTabs} title="building" />
              <TabItems tabs={tabs} handle={setTabs} title="unit" />
            </div>

            {/* search items */}
            <div className="w-full flex flex-col items-center justify-start gap-4 py-8">
              {demoData?.length ? (
                <>
                  {demoData?.map((item, idx) => (
                    <SearchItem item={item} key={idx} />
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </Container>
        {/* clear & show button */}
        <div className="py-5 border-t-2 border-lightGray">
          <Container>
            <div className="flex items-center justify-between gap-4">
              <button>Clear all </button>
              <ButtonPrimary className="!w-max !py-2">
                <span> {`Show ${demoData?.length} Rentals`} </span>
              </ButtonPrimary>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

// Search Item
function SearchItem({ item }) {
  return (
    <>
      <div
        className={`flex items-center justify-between gap-4 rounded-[20px] py-1 px-3 w-full cursor-pointer hover:bg-darkGray/30 transition duration-200 ${
          item?.select ? "bg-lightGray" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-start gap-4">
          <figure className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              className="w-full h-full bg-cover"
              src={item?.image}
              alt={item?.name}
            />
          </figure>
          <div>
            <h2 className="font-semibold text-base"> {item?.name} </h2>
            <p className="text-darkGray"> {item?.available} available </p>
          </div>
        </div>

        <button className="text-darkGray hover:text-black transition duration-200">
          {item?.select ? "Unselect" : "Select"}
        </button>
      </div>
    </>
  );
}

// tab items
function TabItems({ title, handle, tabs }) {
  return (
    <>
      <button
        onClick={() => handle(title)}
        className={`font-semibold px-4 py-1.5 border-b-[4px]  flex justify-center gap-2 items-center capitalize -mb-1 ${
          tabs === title ? "border-b-primary" : "border-b-transparent"
        }`}
      >
        {title}
      </button>
    </>
  );
}

var demoData = [
  {
    id: 1,
    name: "Im flexible",
    image: roadUnit,
    available: 234,
    select: false,
    type: "unit",
  },
  {
    id: 2,
    name: "soho",
    image: building1,
    available: 234,
    select: true,
    type: "unit",
  },
  {
    id: 3,
    name: "Financial District",
    image: building2,
    available: 234,
    select: true,
    type: "building",
  },
  {
    id: 4,
    name: "Morningside heights",
    image: building3,
    available: 234,
    select: false,
    type: "building",
  },
  {
    id: 5,
    name: "Morningside heights",
    image: building3,
    available: 234,
    select: true,
    type: "building",
  },
];
