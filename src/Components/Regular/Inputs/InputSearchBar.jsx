"use client";
import { useState } from "react";
import InputSearch from "./InputSearch";
import SearchResultShow from "./SearchResultShow";

export default function InputSearchBar() {
  const [searchResult, setSearchResult] = useState({
    data: [],
    type: "",
  });

  return (
    <>
      {searchResult ? (
        <SearchResultShow
          data={searchResult?.data}
          selectType={searchResult?.type}
        />
      ) : (
        <>
          <InputSearch setResult={setSearchResult} />
        </>
      )}
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
