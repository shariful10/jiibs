"use client";

import SignIn from "@/Components/Authentication/SignIn/SignIn";
import SignUp from "@/Components/Authentication/Signup/Signup";
import Optimized from "@/Components/Authentication/VerifyEmail/Optimised";
import CategoriesAndFilter from "@/Components/CategoriesAndFilter";
import BedAndBath from "@/Components/Filters/BedAndBath";
import Filter from "@/Components/Filters/Filter";
import LifeStyle from "@/Components/Filters/LifeStyle";
import MobileFiltering from "@/Components/Filters/MobileFiltering";
import Price from "@/Components/Filters/Price";
import Sorting from "@/Components/Filters/Sorting";
import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import Container from "@/Components/Regular/Container";
import Modal from "@/Components/Regular/Modal/Modal";
import { data } from "@/Components/data";
import AddWishlist from "@/Components/wishlist/AddWishlist";
import Context from "@/Context/Context";
import { useContext } from "react";
import {
  BED_AND_BATHROOM,
  LIFESTYLE,
  PRICE,
  SORT_BY,
} from "../../Components/Regular/Utils/constant";

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
    <Container className="py-10">
      {/* Desktop categories and filtering  */}
      <CategoriesAndFilter />
      {/* Mobile categories and filtering  */}
      <MobileFiltering />

      <div className="pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:max-w-[1280px] mx-auto">
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
    </Container>
  );
};

export default Home;
