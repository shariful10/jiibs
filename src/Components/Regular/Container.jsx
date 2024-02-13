import React from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={`px-4 md:px-10 lg:px-10 xl:max-w-[1140px] xl:px-0 xxl:max-w-[1380px] mx-auto w-full ${
        className ? className : null
      }`}
    >
      {children}
    </div>
  );
}
