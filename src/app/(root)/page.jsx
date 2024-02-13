"use client";

import CategoriesAndFilter from "@/Components/CategoriesAndFilter";
import MobileFiltering from "@/Components/Filters/MobileFiltering";
import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import Container from "@/Components/Regular/Container";
import { data } from "@/Components/data";

const Home = () => {
  const apartments = data.apartments;

  return (
    <Container>
      {/* Desktop categories and filtering  */}
      <CategoriesAndFilter />
      {/* Mobile categories and filtering  */}
      <MobileFiltering />

      <div className="pt-6 md:pb-[60px] md:pt-[55px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
        {apartments.map((apartment, index) => (
          <ApartmentCard key={index} apartment={apartment} />
        ))}
      </div>

      <div className="py-5 md:py-10 lg:pb-[3.75rem] text-center">
        {/* load more */}
        <button className="border border-softGray py-3 px-4 rounded-[7px] font-semibold text-xl">
          Load More
        </button>
      </div>
    </Container>
  );
};

export default Home;
