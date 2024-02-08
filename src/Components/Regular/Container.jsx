import React from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={`w-full xl:max-w-[1280px] exl:max-w-[1520px] mx-auto ${
        className ? className : null
      }`}
    >
      {children}
    </div>
  );
}
