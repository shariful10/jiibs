"use client";

import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import { data } from "@/Components/data";
import React, { useContext, useState } from "react";
import Modal from "@/Components/Regular/Modal/Modal";
import MobileBottomMenu from "@/Components/MobileBottomMenu";
import MobileFiltering from "@/Components/Filters/MobileFiltering";
import CategoriesAndFilter from "@/Components/CategoriesAndFilter";
import Sorting from "@/Components/Filters/Sorting";
import Price from "@/Components/Filters/Price";
import BedAndBath from "@/Components/Filters/BedAndBath";
import LifeStyle from "@/Components/Filters/LifeStyle";
import {
  SORT_BY,
  LIFESTYLE,
  PRICE,
  BED_AND_BATHROOM,
} from "../../Components/Regular/Utils/constant";
import Filter from "@/Components/Filters/Filter";
import AddWishlist from "@/Components/wishlist/AddWishlist";
import SignUp from "@/Components/Authentication/Signup/Signup";
import SignIn from "@/Components/Authentication/SignIn/SignIn";
import VerifyEmail from "@/Components/Authentication/VerifyEmail/VerifyEmail";
import Context from "@/Context/Context";

const Home = () => {
  const { modal, setModal } = useContext(Context);
  const apartments = data.apartments;
  // setting modal content
  let modalContent;

  if (modal?.modalType === SORT_BY) {
    modalContent = <Sorting />;
  } else if (modal?.modalType === PRICE) {
    modalContent = <Price />;
  } else if (modal?.modalType === BED_AND_BATHROOM) {
    modalContent = <BedAndBath />;
  } else if (modal?.modalType === LIFESTYLE) {
    modalContent = <LifeStyle />;
  } else if (modal?.modalType === "filtering") {
    modalContent = <Filter />;
  } else if (modal?.modalType === "wishlist") {
    modalContent = <Filter />;
  } else if (modal?.modalType === "addWishlist") {
    modalContent = <AddWishlist />;
  } else if (modal?.modalType === "signup") {
    modalContent = <SignUp />;
  } else if (modal?.modalType === "signin") {
    modalContent = <VerifyEmail />;
  }
  const handleCloseModal = () => {
    setModal({ ...modal, isModalOpen: !modal?.isModalOpen });
  };

  return (
    <div className="w-full max-w-[1520px] mx-auto pb-20 p-10">
      {/* Desktop categories and filtering  */}
      <CategoriesAndFilter />
      {/* Mobile categories and filtering  */}
      <MobileFiltering />

      <div className="pt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {apartments.map((apartment, index) => (
          <ApartmentCard
            key={index}
            apartment={apartment}
            modal={modal}
            setModal={setModal}
          />
        ))}
      </div>
      {/* Modal  */}
      {modal?.isModalOpen && (
        <Modal
          isOpen={modal?.isModalOpen}
          onClose={handleCloseModal}
          name={modal?.modalLabel}
          isMobileModal={modal?.isMobileModal}
          isWidth={modal?.isWidth}
        >
          {modalContent}
        </Modal>
      )}
      <MobileBottomMenu />
    </div>
  );
};

export default Home;
