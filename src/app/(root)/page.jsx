"use client";

import Categories from "@/Components/Categories/Categories";
import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import { data } from "@/Components/data";
import React from "react";

const Home = () => {
  const apartments = data.apartments;
  return (
    <div className="w-full max-w-[1520px] mx-auto pb-20">
      <Categories />
      <div className="pt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 md:p-0">
        {apartments.map((apartment, index) => (
          <ApartmentCard
            key={index}
            image={apartment.image}
            location={apartment.location}
            title={apartment.title}
            price={apartment.price}
            bed={apartment.bed}
            bath={apartment.bath}
            squareFit={apartment.squareFit}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
