import React from "react";

export default function Container({ children, className }) {
  return (
    <>
      <section>
        <div
          className={`w-full px-6 md:px-20 xl:max-w-[1280px] xxl:max-w-xl xxl:px-20 exl:max-w-[1520px]  mx-auto ${
            className ? className : null
          }`}
        >
          {children}
        </div>
      </section>
    </>
  );
}
