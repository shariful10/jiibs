"use client";

import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import { data } from "@/Components/data";
import React, { useState } from "react";
import Modal from "@/Components/Regular/Modal/Modal";
import MobileBottomMenu from "@/Components/MobileBottomMenu";
import MobileFiltering from "@/Components/Filters/MobileFiltering";
import CategoriesAndFilter from "@/Components/CategoriesAndFilter";
import Filter from "@/Components/Filters/Filter";

const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const apartments = data.apartments;
  let mobileModal;

  const handleFilterModal = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleFilteringModal = (
    isOpenModal,
    handleModalClose,
    isMobileModal,
    modalLabel,
    modalContent
  ) => {
    console.log(isMobileModal);
    mobileModal = (
      <Modal
        isOpen={isOpenModal}
        isMobileModal={isMobileModal}
        onClose={() => handleModalClose("sortBy")}
        name={modalLabel}
      >
        {modalContent}
      </Modal>
    );
  };

  return (
    <div className="w-full max-w-[1520px] mx-auto pb-20">
      {/* Desktop categories and filtering  */}
      <CategoriesAndFilter handleFilterModal={handleFilterModal} />
      {/* Mobile categories and filtering  */}
      <MobileFiltering handleFilteringModal={handleFilteringModal} />

      <div className="pt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 md:p-0">
        {apartments.map((apartment, index) => (
          <ApartmentCard key={index} apartment={apartment} />
        ))}
      </div>
      {mobileModal}
      {/* <Modal
        isOpen={isFilterOpen}
        onClose={handleFilterModal}
        name="Filter"
        topRightContent={<h1>Reset</h1>}
      >
        <Filter />
      </Modal> */}
      <MobileBottomMenu />
    </div>
  );
};

export default Home;
