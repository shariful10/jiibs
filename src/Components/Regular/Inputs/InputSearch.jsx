"use client";

import building1 from "@/assets/building-1.jpg";
import building2 from "@/assets/building-2.jpg";
import building3 from "@/assets/building-3.jpg";
import roadUnit from "@/assets/road.jpg";
import { useEffect, useState } from "react";

export default function InputSearch({ setResult = {}, setOpenDropDown }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectType, setSelectType] = useState("units");
  const [inputSearch, setInputSearch] = useState("");
  //   console.log("selectType ", selectType);
  //   console.log("inputSearch ", inputSearch);

  useEffect(() => {
    // setResult((pre) => {
    //   return {
    //     ...pre,
    //     data: demoData,
    //   };
    // });
  }, []);

  return (
    <>
      <div className="flex-none gap-2">
        <div className="m-auto flex flex-row items-center border border-gray-500 rounded-full h-[45px] px-[24px] relative divide-x">
          <div className="flex-1 flex items-center justify-start gap-5">
            <figure>{magnifyGlassIcons}</figure>
            <input
              type="text"
              placeholder="Search Apartments "
              className="outline-none text-[17px] font-normal"
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </div>

          <select
            className="ml-1 focus:outline-none pl-6 flex items-center justify-end gap-2 capitalize bg-white"
            name="searchType"
            id="searchType"
            // onChange={(e) => setSelectType(e.target.value)}
            onChange={() => setOpenDropDown(true)}
            defaultValue={selectType}
          >
            <option value="units"> units </option>
            <option value="building"> building </option>
          </select>
        </div>
      </div>
    </>
  );
}

// icons
var magnifyGlassIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 23 22"
    fill="none"
  >
    <rect
      x="0.719395"
      y="0.00516561"
      width="2.75919"
      height="9.03236"
      rx="0.5"
      transform="matrix(0.724382 -0.689399 0.714407 0.69973 12.7493 14.978)"
      fill="#626262"
      stroke="#626262"
    />
    <path
      d="M16.1755 8.52356C16.1755 12.3697 12.936 15.5471 8.86511 15.5471C4.79427 15.5471 1.55469 12.3697 1.55469 8.52356C1.55469 4.67738 4.79427 1.5 8.86511 1.5C12.936 1.5 16.1755 4.67738 16.1755 8.52356Z"
      stroke="#626262"
      strokeWidth="2"
    />
  </svg>
);

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
