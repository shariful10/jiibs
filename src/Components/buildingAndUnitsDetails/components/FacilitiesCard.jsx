import Image from "next/image";
import React from "react";

export default function FacilitiesCard({
  icons = null,
  title = null,
  paragraph = null,
}) {
  return (
    <>
      <div className="flex gap-4 md:gap-6 justify-start items-start">
        {icons ? (
          <div className="w-8">
            <Image
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] object-cover"
              src={icons}
              alt=""
            />
          </div>
        ) : null}

        <div className="flex flex-col gap-1 justify-start items-start w-[98%]">
          {title ? (
            <h4 className="text-lg font-semibold leading-none">{title}</h4>
          ) : null}

          {paragraph ? (
            <p className="text-sm xxl:text-base leading-[26px] font-normal">
              {" "}
              {paragraph}{" "}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}
