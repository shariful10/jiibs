"use client";

import CategoriesAndFilter from "@/Components/CategoriesAndFilter";
import MobileFiltering from "@/Components/Filters/MobileFiltering";
import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import Container from "@/Components/Regular/Container";
import { data } from "@/Components/data";

const Home = () => {
  const apartments = data.apartments;

  return (
    <>
      {/* Desktop categories and filtering  */}
      <CategoriesAndFilter />
      {/* Mobile categories and filtering  */}
      <MobileFiltering />

      <div className="pb-[60px] pt-[55px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
        {apartments.map((apartment, index) => (
          <ApartmentCard key={index} apartment={apartment} />
        ))}
      </div>
    </>
  );
};

export default Home;
