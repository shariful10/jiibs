import React from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={`w-full max-[1128px]:max-w-[1024px] max-[1368px]:max-w-[1120px] xl:max-w-[1280px] max-[1920px]:max-w-[1520px] mx-auto px-6 md:px-0 ${
        className ? className : null
      }`}
    >
      {children}
    </div>
  );
}
