import React from "react";

const PrioritiesButton = ({ title, priorities, setPriorities }) => {
  return (
    <button
      className={`px-5 py-3 rounded-md text-darkGray capitalize hover:bg-darkGray hover:text-white ${
        priorities[title] ? "bg-darkGray text-white" : "bg-softGray"
      }`}
      onClick={() => {
        // Toggle selection state
        setPriorities((prevPriorities) => {
          return {
            ...prevPriorities,
            [title]: !prevPriorities[title],
          };
        });
      }}
    >
      {" "}
      {title}
    </button>
  );
};

export default PrioritiesButton;
