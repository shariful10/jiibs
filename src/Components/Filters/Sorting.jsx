import React, { useState } from "react";
import CircleCheckbox from "../Regular/Toggle/CircleCheckbox";

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

  const handleChecked = (index) => {
    const updatedSorting = [...sorting];
    updatedSorting[index].isFiltered = !updatedSorting[index].isFiltered;
    setSorting(updatedSorting);
  };

  return (
    <div className="flex flex-col gap-6 py-3">
      {sorting?.map((option, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-0 px-4"
        >
          <span>{option?.label}</span>
          <CircleCheckbox
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
