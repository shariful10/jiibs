import UnitCard from "@/Components/UnitCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1382px]">
      <div className="flex flex-wrap justify-start gap-[33px] ">
        <UnitCard></UnitCard>
        <UnitCard></UnitCard>
        <UnitCard></UnitCard>
        <UnitCard></UnitCard>
        <UnitCard></UnitCard>
        <UnitCard></UnitCard>
      </div>
      <button className="my-[60px] h-[53px] w-[150px] border border-[#E4E4E4] rounded-[7px] m-auto">
        Load More
      </button>
    </div>
  );
};

export default page;
