import React, { useState } from "react";

export default function SquareCheckbox({ label }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className="flex items-center gap-3"
      onClick={() => setIsSelected(!isSelected)}
    >
      <div
        className={`relative max-w-[20px] w-full h-[20px] rounded-md border hover:cursor-pointer ${
          isSelected
            ? "bg-primary border-[#2AB7DD] after:absolute after:contents[' '] after:left-[6px] after:top-[2px] after:w-[6px] after:h-[12px] after:border-white after:border-s-[0px] after:border-b-[2.8px] after:border-r-[2.8px] after:rotate-45 after:rounded-sm"
            : "bg-transparent border-[#D0D5DD]"
        }`}
      ></div>
      <span className="font-normal text-sm leading-4 cursor-pointer text-blackText">
        {label}
      </span>
    </div>
  );
}
