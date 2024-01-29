import React from "react";

export default function Container({ children, className }) {
  return (
    <>
      <section>
        <div className={`container mx-auto ${className ? className : null}`}>
          {children}
        </div>
      </section>
    </>
  );
}
