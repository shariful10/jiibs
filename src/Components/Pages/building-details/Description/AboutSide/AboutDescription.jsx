"use client";

import ButtonWhite from "@/Components/Regular/Buttons/ButtonWhite";
import { useState } from "react";

export default function AboutDescription() {
  const [lineCallUp, setLineCallUp] = useState(true);

  return (
    <>
      <h2 className="md:text-[26px] xxl:text-3xl font-semibold mb-6">About</h2>

      <p
        className={`text-base font-normal transition duration-300 ${
          lineCallUp ? "line-clamp-6" : null
        }`}
      >
        {textTemp}
      </p>

      <div className="mt-7">
        <ButtonWhite onclick={() => setLineCallUp(!lineCallUp)} icons={true}>
          Read Full Description
        </ButtonWhite>
      </div>
    </>
  );
}

// text
var textTemp = ` Residents of The Ashford will enj l ne of Manhattan’s most sought-after neighborhoods. With spacious studios, one, two, and three-bedroom apartments available, there is a home to suit every lifestyle. The building itself features an array of amenities designed to make residents feel pampered and taken care of. A 24-hour doorman ensures safety and security at all times while also providing assistance with any needs or requests that may arise. An on-site superintendent is available to promptly address any maintenance issues. In addition to the excellent service provided by the staff, The Ashford also offers a variety of resident events throughout the year. These events provide opportunities for residents to socialize with their neighbors and Residents of The Ashford will enj l ne of Manhattan’s most sought-after neighborhoods. With spacious studios, one, two, and three-bedroom apartments available, there is a home to suit every lifestyle.  Residents of The Ashford will enj l ne of Manhattan’s most sought-after neighborhoods. With spacious studios, one, two, and three-bedroom apartments available, there is a home to suit every lifestyle. The building itself features an array of amenities designed to make residents feel pampered and taken care of. A 24-hour doorman ensures safety and security at all times while also providing assistance with any needs or requests that may arise. An on-site superintendent is available to promptly address any maintenance issues. In addition to the excellent service provided by the staff, The Ashford also offers a variety of resident events throughout the year. These events provide opportunities for residents to socialize with their neighbors and Residents of The Ashford will enj l ne of Manhattan’s most sought-after neighborhoods. With spacious studios, one, two, and three-bedroom apartments available, there is a home to suit every lifestyle.`;
