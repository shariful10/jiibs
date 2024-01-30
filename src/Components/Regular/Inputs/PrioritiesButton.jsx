import React from "react";

const PrioritiesButton = ({ title, selectValue, setSelectValue }) => {
  return (
    <button
      className={`px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white ${
        selectValue === title && "bg-darkGray text-white"
      }`}
      onClick={() => {
        setSelectValue(title);
      }}
    >
      {" "}
      {title}
    </button>
  );
};

export default PrioritiesButton;
