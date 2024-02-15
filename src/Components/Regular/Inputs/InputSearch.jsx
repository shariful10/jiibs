"use client";
import { useEffect, useState } from "react";
import { LuBuilding2 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCommunityLine } from "react-icons/ri";

export default function InputSearch({ setResult = {}, setOpenDropDown }) {
  const [openOptions, setOpenOptions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([
    { _id: 1, title: "building", icons: <LuBuilding2 /> },
    { _id: 2, title: "unit", icons: <RiCommunityLine /> },
  ]);
  const [selectType, setSelectType] = useState("units");
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    // setResult((pre) => {
    //   return {
    //     ...pre,
    //     data: demoData,
    //   };
    // });
  }, []);

  // outside click close dropdown
  const handleOutsideClick = (event) => {
    if (event.target.closest(".dropdown-container") === null) {
      setOpenOptions(false);
    }
  };
  useEffect(() => {
    if (openOptions) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openOptions]);

  return (
    <>
      {/* <div className="flex-none gap-2  w-full max-w-[350px]"> */}
      <div className="w-full md:max-w-[230px] lg:max-w-[350px] absolute top-[28px] left-1/2 -translate-x-1/2 z-10">
        <div className="m-auto flex flex-row items-center  rounded-full px-[15px] relative divide-x h-[40px] border border-lightGrayBorder">
          {/* search input */}
          <div className="flex-1 flex items-center justify-start gap-0 w-full">
            <figure
              className="hover:!text-primary transition duration-200 rounded-lg cursor-pointer h-[15px] w-[15px]"
              onClick={() => setOpenDropDown(true)}
            >
              <span className="h-[15px] w-[15px]">{magnifyGlassIcons}</span>
            </figure>
            <input
              type="text"
              onClick={() => setOpenDropDown(true)}
              placeholder="Search Apartments "
              className="outline-none text-[14px] font-normal px-[15px] w-full"
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </div>

          {/* select options */}
          <div className=" focus:outline-none pl-2.5 flex items-center justify-end gap-2 capitalize bg-white relative z-[999999]">
            {/* search unit options */}
            <button
              className={`bg-transparent capitalize cursor-pointer`}
              onClick={() => {
                setOpenOptions(!openOptions);
              }}
            >
              <span className="flex items-center gap-0.5 min-w-20 text-center justify-center text-sm">
                <span>{selectType}</span> <MdKeyboardArrowDown />
              </span>
            </button>

            <div
              className={`transition-all left-0 top-9 duration-200 absolute z-[99999] 
              ${openOptions ? "block" : "hidden"}
              `}
            >
              <div className="bg-white shadow-md shadow-black/30 py-0 w-[14rem] space-y-1 rounded-md">
                {options?.map((option) => (
                  <button
                    className="capitalize flex gap-4 items-center px-3 py-3 cursor-pointer hover:bg-primary/10 transition duration-200  w-full"
                    key={option?._id}
                    onClick={() => {
                      setOpenOptions(false);
                      setSelectType(option?.title);
                    }}
                  >
                    <figure className="inline-block text-xl">
                      {option?.icons}
                    </figure>
                    <p className="text-sm">{option?.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// icons
var magnifyGlassIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
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
