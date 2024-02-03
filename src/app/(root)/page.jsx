"use client";
import Categories from "@/Components/Categories/Categories";
import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import { data } from "@/Components/data";
import React, { useState } from "react";
import Modal from "@/Components/Regular/Modal/Modal";
import Filter from "@/Components/Filters/Filter";
import Checkbox from "@/Components/Regular/Toggle/Checkbox";
import Sorting from "@/Components/Filters/Sorting";
import BedAndBath from "@/Components/Filters/BedAndBath";
import MobileBottomMenu from "@/Components/MobileBottomMenu";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const apartments = data.apartments;
  return (
    <div className="w-full max-w-[1520px] mx-auto pb-20">
      <Categories handleFilterModal={handleFilterModal} />

      <Modal
        isOpen={isModalOpen}
        isMobileModal
        onClose={handleFilterModal}
        name="Filter"
        topRightContent={<h1>Reset</h1>}
      >
        <BedAndBath />
      </Modal>
      <div className="pt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 md:p-0">
        {apartments.map((apartment, index) => (
          <ApartmentCard key={index} apartment={apartment} />
        ))}
      </div>
      <MobileBottomMenu />
    </div>
  );
};

export default Home;
