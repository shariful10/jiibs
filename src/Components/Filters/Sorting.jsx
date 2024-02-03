import React, { useState } from "react";
import Checkbox from "../Regular/Toggle/Checkbox";

export default function Sorting() {
  const [sorting, setSorting] = useState([
    {
      label: "Relevance",
      isFiltered: false,
    },
    {
      label: "Default",
      isFiltered: false,
    },
    {
      label: "Date followed: latest",
      isFiltered: false,
    },
    {
      label: "Date followed: earliest",
      isFiltered: true,
    },
  ]);

  const handleChecked = (option) => {
    const index = sorting.indexOf(option);
    console.log(index);
    if (index !== -1 && index?.isFiltered) {
      const updatedFiltering = sorting[option?.isFiltered];
      console.log(updatedFiltering);
      //   setSorting(updatedFiltering);
    }
  };

  return (
    <div className="flex flex-col gap-6 py-3">
      {sorting?.map((option, index) => (
        <div className="flex items-center justify-between py-0 px-4">
          <span>{option?.label}</span>
          <Checkbox
            isChecked={option?.isFiltered}
            onChecked={() => {
              handleChecked(index);
            }}
          />
        </div>
      ))}
    </div>
  );
}
