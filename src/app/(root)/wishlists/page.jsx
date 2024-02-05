"use client";

import React, { useState } from "react";
import Modal from "@/Components/Regular/Modal/Modal";
import AddAlbum from "@/Components/wishlist/AddAlbum";
import NotLogin from "@/Components/wishlist/NotLogin";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import lauren from "@/assets/images/apartment/lauren.png";
import Image from "next/image";

export default function page() {
  const [modal, setModal] = useState({
    isModalOpen: false,
    modalType: "",
    isMobileModal: false,
    modalLabel: "",
  });
  const isLogin = false;

  // setting modal content
  let modalContent;

  if (modal?.modalType === "album") {
    modalContent = <AddAlbum />;
  }

  const handleModal = (modalValue, modalLabel) => {
    setModal({
      ...modal,
      isModalOpen: !modal?.isModalOpen,
      modalType: modalValue,
      isMobileModal: true,
      modalLabel: modalLabel,
    });
  };

  const handleCloseModal = () => {
    setModal({ ...modal, isModalOpen: !modal?.isModalOpen });
  };

  return (
    <div className="p-6">
      <h1>Wishlist</h1>
      {isLogin ? (
        <NotLogin />
      ) : (
        <>
          <button onClick={() => handleModal("album", "Create album")}>
            Create album
          </button>
          <div className="pt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 md:p-0">
            <div>
              <div className="aspect-square w-full relative overflow-hidden rounded-[20px]">
                <Image
                  className="object-cover h-full w-full group-hover:scale-110 duration-300"
                  src={midtown}
                  alt="Room"
                />
              </div>
              <h4>Building</h4>
              <span>2</span>
            </div>
          </div>
          {modal?.isModalOpen && (
            <Modal
              isOpen={modal?.isModalOpen}
              onClose={handleCloseModal}
              name={modal?.modalLabel}
              isMobileModal={modal?.isMobileModal}
            >
              {modalContent}
            </Modal>
          )}
        </>
      )}
    </div>
  );
}
