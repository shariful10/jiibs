"use client";

import { useEffect, useState } from "react";
import AvailableUnitsCart from "./components/AvailableUnitsCart";

// Available Units
export default function AvailableUnits() {
  const demoData = [
    {
      type: "studio",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "2 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "800 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083217.455.png",
    },
    {
      type: "1 bed",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "1 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "600 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083239.450.png?w=1000&ssl=1",
    },
    {
      type: "1 bed",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "1 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "600 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083217.455.png",
    },
    {
      type: "1 beds",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "1 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "600 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083239.450.png?w=1000&ssl=1",
    },
    {
      type: "2 beds",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "1 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "600 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083239.450.png?w=1000&ssl=1",
    },
    {
      type: "2 beds",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "1 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "600 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083239.450.png",
    },
    {
      type: "2 beds",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "1 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "600 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083217.455.png",
    },
    {
      type: "2 beds",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "1 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "600 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083239.450.png",
    },
  ];
  const [tabs, setTabs] = useState("all");
  const [tabLoadData, setTabLoadData] = useState({});
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const filteredData =
      tabs !== "all" ? demoData.filter((item) => item.type === tabs) : demoData;
    setShowData(filteredData);
  }, [tabs]);

  const renderUnits = () => {
    const displayedData = tabLoadData[tabs] ? showData : showData.slice(0, 3);
    return displayedData.map((item, idx) => (
      <AvailableUnitsCart cart={item} key={idx} />
    ));
  };

  const shouldShowLoadMoreButton = showData.length > 3;

  const handleLoadMore = () => {
    setTabLoadData((prev) => ({ ...prev, [tabs]: !prev[tabs] }));
  };

  return (
    <div>
      <h3 className="text-xl md:text-[26px] xxl:text-3xl font-semibold mb-6">
        Available Units
      </h3>
      {/* tabs */}
      <div className="flex items-center justify-start gap-3">
        {["all", "studio", "1 bed", "2 beds", "3 beds+"].map((tab) => (
          <TabButton key={tab} text={tab} onClick={setTabs} active={tabs} />
        ))}
      </div>

      {/* content */}
      <div className="py-3 divide-y-2 flex flex-col">
        {showData.length ? (
          <>
            {renderUnits()}
            {shouldShowLoadMoreButton && (
              <div className="py-6 border-t-2">
                <button
                  className="border border-softGray py-2.5 px-6 rounded-md font-semibold text-sm"
                  onClick={handleLoadMore}
                >
                  {tabLoadData[tabs] ? "See Less" : "Load More"}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-base text-blackText text-center">
            Unit Not Available
          </p>
        )}
      </div>
    </div>
  );
}

// tab button
function TabButton({ text, onClick, active }) {
  return (
    <button
      onClick={() => onClick(text)}
      className={`capitalize border-b-[2.5px] transition duration-300 text-base font-normal py-[5px] px-1 md:px-5 min-w-max ${
        text === active ? "border-primary" : "border-transparent"
      } `}
    >
      {text}
    </button>
  );
}
