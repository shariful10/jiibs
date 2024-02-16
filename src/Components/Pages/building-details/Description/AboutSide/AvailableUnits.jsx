"use client";
import ButtonWhite from "@/Components/Regular/Buttons/ButtonWhite";
import { useEffect, useState } from "react";
import AvailableUnitsCart from "./AvailableUnitsCart";

// Available Units
export default function AvailableUnits() {
  const [demoData, setDemoData] = useState([
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
      type: "3 beds",
      unitsNumber: "3405",
      amount: { type: "month", price: 4495 },
      offer: "1 month free - 14 Month Lease",
      available: "Immediate",
      roomSize: ["1 bed", "1 bath", "600 sqft"],
      ArchitectImage:
        "https://i0.wp.com/laurylee.com/wp-content/uploads/2023/10/Featured-2023-10-19T083239.450.png",
    },
  ]);
  const [tabs, setTabs] = useState("all");
  const [showData, setShowData] = useState([]);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    if (tabs !== "all") {
      const filtered = demoData.filter((item) => item.type === tabs);
      // console.log("filtered ", filtered);
      setShowData(filtered);
    } else {
      setShowData(demoData);
    }
  }, [tabs]);

  return (
    <>
      {/* tabs */}
      <div className="flex items-center justify-start gap-3">
        <TabButton text="all" onClick={setTabs} active={tabs} />
        <TabButton text="studio" onClick={setTabs} active={tabs} />
        <TabButton text="1 bed" onClick={setTabs} active={tabs} />
        <TabButton text="2 beds" onClick={setTabs} active={tabs} />
        <TabButton text="3 beds+" onClick={setTabs} active={tabs} />
      </div>

      {/* content */}
      <div className="py-3 divide-y-2 flex flex-col">
        {showData?.length ? (
          <>
            {loadData ? (
              <>
                {showData?.map((item, idx) => (
                  <AvailableUnitsCart cart={item} key={idx} />
                ))}
              </>
            ) : (
              <>
                {showData
                  ?.map((item, idx) => (
                    <AvailableUnitsCart cart={item} key={idx} />
                  ))
                  ?.slice(0, 3)}
              </>
            )}

            <div className="py-6 border-t-2">
              {showData?.length > 3 ? (
                <button
                  className="border border-softGray py-2.5 px-6 rounded-md font-semibold text-[15px]"
                  onClick={() => setLoadData(!loadData)}
                >
                  {loadData ? "See Less " : "Load More"}
                </button>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <p className="text-base text-blackText text-center">
              Unit Not Available
            </p>
          </>
        )}
      </div>
    </>
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
