import React, { useContext } from "react";
import Context from "@/Context/Context";

const Modal = ({
  isOpen,
  isMobileModal,
  modalLabel,
  topRightContent,
  modalContent,
  isWidth,
}) => {
  const { setModal } = useContext(Context);

  const handleCloseModal = () => {
    setModal({
      isOpen: !isOpen,
      modalType: "",
      isMobileModal: "",
      modalLabel: "",
      topRightContent: "",
    });
  };

  const desktopModalContent = (
    <div
      className={`${isWidth ? `${isWidth} w-full` : "w-fit"} ${
        isMobileModal ? "hidden" : "block"
      } mx-5 h-auto rounded-2xl bg-white overflow-hidden`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center border-b border-[#E4E4E4] py-4 px-10">
        <span onClick={handleCloseModal} className="cursor-pointer">
          {closeIcon}
        </span>
        <h3 className="font-semibold text-2xl text-blackText">{modalLabel}</h3>
        <div>{topRightContent && topRightContent}</div>
      </div>
      <div className="w-full max-h-[80vh] h-full overflow-y-auto custom-scrollbar">
        {modalContent}
      </div>
    </div>
  );

  const mobileModalContent = (
    <div
      className={`w-full max-h-[80%] h-auto md:hidden absolute left-0 bottom-0 overflow-hidden rounded-tl-xl rounded-tr-xl transition-all duration-700 ease-linear overflow-y-auto ${
        isOpen ? "bottom-0" : "bottom-28"
      } bg-white`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center border border-[#E4E4E4] p-4">
        <h3 className="text-[20px] leading-6">{modalLabel}</h3>
        <span onClick={handleCloseModal} className="cursor-pointer">
          {closeIcon}
        </span>
      </div>
      {modalContent}
    </div>
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed w-full h-full top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 z-50 overflow-x-hidden overflow-y-auto flex justify-center items-center scrollbar-hide"
          onClick={handleCloseModal}
        >
          {/* Modal content  */}
          {desktopModalContent}
          {isMobileModal && mobileModalContent}
        </div>
      )}
    </>
  );
};

export default Modal;

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M7.5 9.09696L1.91065 14.6863C1.70152 14.8954 1.43536 15 1.11217 15C0.788973 15 0.522814 14.8954 0.313688 14.6863C0.104563 14.4772 0 14.211 0 13.8878C0 13.5646 0.104563 13.2985 0.313688 13.0894L5.90304 7.5L0.313688 1.91065C0.104563 1.70152 0 1.43536 0 1.11217C0 0.788973 0.104563 0.522814 0.313688 0.313688C0.522814 0.104563 0.788973 0 1.11217 0C1.43536 0 1.70152 0.104563 1.91065 0.313688L7.5 5.90304L13.0894 0.313688C13.2985 0.104563 13.5646 0 13.8878 0C14.211 0 14.4772 0.104563 14.6863 0.313688C14.8954 0.522814 15 0.788973 15 1.11217C15 1.43536 14.8954 1.70152 14.6863 1.91065L9.09696 7.5L14.6863 13.0894C14.8954 13.2985 15 13.5646 15 13.8878C15 14.211 14.8954 14.4772 14.6863 14.6863C14.4772 14.8954 14.211 15 13.8878 15C13.5646 15 13.2985 14.8954 13.0894 14.6863L7.5 9.09696Z"
      fill="#5D5D5D"
    />
  </svg>
);
