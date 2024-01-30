import React from "react";

export default function Container({ children, className }) {
  return (
    <>
      <section>
        <div
          className={`container py-7 px-5 sm:px-2 mx-auto w-full max-w-[1380px] ${
            className ? className : null
          }`}
        >
          {children}
        </div>
      </section>
    </>
  );
}
