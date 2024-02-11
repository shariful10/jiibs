"use client";

import MobileBottomMenu from "@/Components/MobileBottomMenu";
import Container from "@/Components/Regular/Container";
import Modal from "@/Components/Regular/Modal/Modal";
import NavigationBar from "@/Components/Shared/NavigationBar";
import Context from "@/Context/Context";
import { useState } from "react";

const SuccessLayout = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    modalType: "",
    isMobileModal: false,
    modalLabel: "",
    isWidth: "",
    topRightContent: "",
  });

  return (
    <Context.Provider value={{ modal, setModal }}>
      <Container>
        <NavigationBar />
        <MobileBottomMenu />
        {children}
        {/* Modal  */}
        {modal?.isOpen && <Modal {...modal} />}
      </Container>
    </Context.Provider>
  );
};

export default SuccessLayout;
