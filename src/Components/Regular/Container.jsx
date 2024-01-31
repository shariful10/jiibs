import React from "react";

export default function Container({ children, className }) {
  return (
    <>
      <section>
        <div
          className={`w-full px-5 xl:px-0 xl:max-w-[1280px] xxl:max-w-xl exl:max-w-[1520px] mx-auto ${
            className ? className : null
          }`}
        >
          {children}
        </div>
      </section>
    </>
  );
}
