import CategoriesAndFilter from "@/Components/CategoriesAndFilter";
import MobileFiltering from "@/Components/Filters/MobileFiltering";
import UnitCard from "@/Components/UnitCard";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      {/* Desktop categories and filtering  */}
      <CategoriesAndFilter />
      {/* Mobile categories and filtering  */}
      <MobileFiltering />
      <div className="pt-5 md:pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-9">
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
      </div>
      <div className="pt-10 pb-[60px]  text-center">
        {/* load more */}
        <button className="border border-softGray py-2.5 px-6 rounded-md font-semibold text-[15px]">
          Load More
        </button>
      </div>
    </React.Fragment>
  );
};

export default page;
