"use client";

import CategoriesAndFilter from "@/Components/CategoriesAndFilter";
import MobileFiltering from "@/Components/Filters/MobileFiltering";
import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import Container from "@/Components/Regular/Container";
import { data } from "@/Components/data";

const Home = () => {
  const apartments = data.apartments;

  return (
    <Container className="py-10 px-6 md:px-0">
      {/* Desktop categories and filtering  */}
      <CategoriesAndFilter />
      {/* Mobile categories and filtering  */}
      <MobileFiltering />

      <div className="pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:max-w-[1280px] mx-auto">
        {apartments.map((apartment, index) => (
          <ApartmentCard key={index} apartment={apartment} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
