"use client";

import React, { useState } from "react";
import Footer from "@/Components/Shared/Footer";
import NavigationBar from "@/Components/Shared/NavigationBar";
import Context from "@/Context/Context";
import MobileBottomMenu from "@/Components/MobileBottomMenu";
import Modal from "@/Components/Regular/Modal/Modal";
import Sorting from "@/Components/Filters/Sorting";
import Price from "@/Components/Filters/Price";
import BedAndBath from "@/Components/Filters/BedAndBath";
import LifeStyle from "@/Components/Filters/LifeStyle";
import Filter from "@/Components/Filters/Filter";
import AddWishlist from "@/Components/wishlist/AddWishlist";
import SignUp from "@/Components/Authentication/Signup/Signup";
import SignIn from "@/Components/Authentication/SignIn/SignIn";
import Optimized from "@/Components/Authentication/VerifyEmail/Optimised";
import {
  BED_AND_BATHROOM,
  LIFESTYLE,
  PRICE,
  SORT_BY,
} from "@/Components/Regular/Utils/constant";

const Layout = ({ children }) => {
  const [modal, setModal] = useState({
    isModalOpen: false,
    modalType: "",
    isMobileModal: false,
    modalLabel: "",
    isWidth: "",
  });

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
  } else if (modal?.modalType === "addWishlist") {
    modalContent = <AddWishlist />;
  } else if (modal?.modalType === "signup") {
    modalContent = <SignUp />;
  } else if (modal?.modalType === "signin") {
    modalContent = <SignIn />;
  } else if (modal?.modalType === "furtherOptimize") {
    modalContent = <Optimized />;
  }
  const handleCloseModal = () => {
    setModal({ ...modal, isModalOpen: !modal?.isModalOpen });
  };

  return (
    <Context.Provider value={{ modal: modal, setModal: setModal }}>
      <NavigationBar />
      <MobileBottomMenu />
      {children}
      <Footer />

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
    </Context.Provider>
  );
};

export default Layout;
