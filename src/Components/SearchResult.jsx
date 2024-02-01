import React from "react";
import Image from "next/image";

function SearchResult({ searchResult }) {
  console.log(searchResult);

  return (
    <div className="h-[64px] w-[1300px] mb-4 rounded-3xl ">
      <div className="flex items-center p-2">
         <Image
              className="object-cover w-12 h-12 mr-4 rounded-full"
              src={searchResult.imageSrc}
              alt="Room"
            />
        <div className="flex flex-col flex-1">
          <span className="text-lg font-semibold">{searchResult.name}</span>
          <span className="text-sm text-gray-500">{searchResult.availability}</span>
        </div>
        <button className="ml-auto px-4 py-2 text-gray-700 rounded-md">
          Select
        </button>
      </div>
    </div>
  );
}

export default SearchResult;
