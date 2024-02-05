"use client";

import React, { useState } from "react";
import Modal from "@/Components/Regular/Modal/Modal";
import AddAlbum from "@/Components/wishlist/AddAlbum";
import NotLogin from "@/Components/wishlist/NotLogin";
import midtown from "@/assets/images/apartment/Midtown-East.png";
import lauren from "@/assets/images/apartment/lauren.png";
import Image from "next/image";
import AddWishlist from "@/Components/wishlist/AddWishlist";

const ThreeDot = <svg xmlns="http://www.w3.org/2000/svg" width="5" height="16" viewBox="0 0 5 16" fill="none">
<path d="M2.56901 0.223145C1.65234 0.223145 0.902344 0.973144 0.902344 1.88981C0.902344 2.80648 1.65234 3.55648 2.56901 3.55648C3.48568 3.55648 4.23568 2.80648 4.23568 1.88981C4.23568 0.973144 3.48568 0.223145 2.56901 0.223145ZM2.56901 11.8898C1.65234 11.8898 0.902344 12.6398 0.902344 13.5565C0.902344 14.4731 1.65234 15.2231 2.56901 15.2231C3.48568 15.2231 4.23568 14.4731 4.23568 13.5565C4.23568 12.6398 3.48568 11.8898 2.56901 11.8898ZM2.56901 6.05648C1.65234 6.05648 0.902344 6.80648 0.902344 7.72314C0.902344 8.63981 1.65234 9.38981 2.56901 9.38981C3.48568 9.38981 4.23568 8.63981 4.23568 7.72314C4.23568 6.80648 3.48568 6.05648 2.56901 6.05648Z" fill="black"/>
</svg>
const DeleteIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
<path d="M8.8125 2H6.75V1.625C6.75 1.00367 6.24633 0.5 5.625 0.5H4.125C3.50367 0.5 3 1.00367 3 1.625V2H0.9375C0.419742 2 0 2.41974 0 2.9375V3.6875C0 3.89462 0.167883 4.0625 0.375 4.0625H9.375C9.58212 4.0625 9.75 3.89462 9.75 3.6875V2.9375C9.75 2.41974 9.33026 2 8.8125 2ZM3.75 1.625C3.75 1.41828 3.91828 1.25 4.125 1.25H5.625C5.83172 1.25 6 1.41828 6 1.625V2H3.75V1.625Z" fill="#222222"/>
<path d="M0.710933 4.8125C0.644019 4.8125 0.590698 4.86842 0.593886 4.93527L0.903261 11.4284C0.931855 12.0294 1.42545 12.5 2.02685 12.5H7.7217C8.3231 12.5 8.8167 12.0294 8.84529 11.4284L9.15467 4.93527C9.15786 4.86842 9.10453 4.8125 9.03762 4.8125H0.710933ZM6.37428 5.75C6.37428 5.54281 6.54209 5.375 6.74928 5.375C6.95646 5.375 7.12428 5.54281 7.12428 5.75V10.625C7.12428 10.8322 6.95646 11 6.74928 11C6.54209 11 6.37428 10.8322 6.37428 10.625V5.75ZM4.49928 5.75C4.49928 5.54281 4.66709 5.375 4.87428 5.375C5.08146 5.375 5.24928 5.54281 5.24928 5.75V10.625C5.24928 10.8322 5.08146 11 4.87428 11C4.66709 11 4.49928 10.8322 4.49928 10.625V5.75ZM2.62428 5.75C2.62428 5.54281 2.79209 5.375 2.99928 5.375C3.20646 5.375 3.37428 5.54281 3.37428 5.75V10.625C3.37428 10.8322 3.20646 11 2.99928 11C2.79209 11 2.62428 10.8322 2.62428 10.625V5.75Z" fill="#222222"/>
</svg>
const editIcon = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<g clip-path="url(#clip0_1443_9295)">
<path d="M7.41065 2.51562L0.808079 9.11867C0.774861 9.15198 0.750876 9.19405 0.739455 9.23926L0.00762279 12.1767C-0.0142684 12.2651 0.0117155 12.3591 0.0762469 12.4237C0.125074 12.4725 0.191604 12.4995 0.259657 12.4995C0.280501 12.4995 0.301821 12.497 0.32257 12.4917L3.25999 11.7598C3.30577 11.7484 3.34736 11.7245 3.38058 11.6913L9.98372 5.0887L7.41065 2.51562Z" fill="#222222"/>
<path d="M11.6217 1.61542L10.8867 0.880443C10.3955 0.389224 9.53938 0.3897 9.04874 0.880443L8.14844 1.78074L10.7214 4.35372L11.6217 3.45342C11.8671 3.20814 12.0022 2.88168 12.0022 2.53446C12.0022 2.18725 11.8671 1.86079 11.6217 1.61542Z" fill="#222222"/>
</g>
<defs>
<clipPath id="clip0_1443_9295">
<rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
const CloseIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
<path d="M5.74434 5L9.84585 0.898477C10.0514 0.69293 10.0514 0.359688 9.84585 0.15416C9.64031 -0.0513868 9.30705 -0.0513868 9.10152 0.15416L4.99999 4.25569L0.898474 0.15416C0.692928 -0.0513868 0.359687 -0.0513868 0.15416 0.15416C-0.0513671 0.359707 -0.0513866 0.69295 0.15416 0.898477L4.25567 5L0.15416 9.10153C-0.0513866 9.30708 -0.0513866 9.64032 0.15416 9.84585C0.359706 10.0514 0.692948 10.0514 0.898474 9.84585L4.99999 5.74432L9.10148 9.84585C9.30703 10.0514 9.64029 10.0514 9.84582 9.84585C10.0513 9.6403 10.0513 9.30706 9.84582 9.10153L5.74434 5Z" fill="#222222"/>
</svg>

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
  }else if(modal?.modalType === "addWishlist"){
    modalContent = <AddWishlist/>
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
            <div className="relative">
              <div className="absolute right-2 top-2 z-10">
              <span className="absolute top-0 right-0 w-8 h-8  block bg-transparent hover:bg-white rounded-full  flex justify-center items-center">
                {ThreeDot}
              </span>
              <div className="relative top-[10px] right-0 rounded-lg max-w-[132px] w-full bg-white p-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span>{CloseIcon}</span>
                      <span>Settings</span>
                    </div>
                    <div className="flex items-center gap-3" onClick={()=> handleModal("addWishlist", "Add to wishlist")}>
                      <span>{editIcon}</span>
                      <span>Edit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{DeleteIcon}</span>
                      <span>Delete</span>
                    </div>
                  </div>
              </div>
              </div>
              
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
