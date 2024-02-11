"use client";
import { useState } from "react";
import InputSearch from "./InputSearch";
import SearchResultShow from "./SearchResultShow";

export default function InputSearchBar() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [searchResult, setSearchResult] = useState({
    data: [],
    type: "",
  });

  return (
    <>
      {openDropDown ? (
        <SearchResultShow
          data={searchResult}
          setOpenDropDown={setOpenDropDown}
        />
      ) : (
        <>
          <InputSearch
            setResult={setSearchResult}
            setOpenDropDown={setOpenDropDown}
          />
        </>
      )}
    </>
  );
}
