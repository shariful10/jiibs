"use client";

import React, { useState } from "react";
import Footer from "@/Components/Shared/Footer";
import NavigationBar from "@/Components/Shared/NavigationBar";
import Context from "@/Context/Context";
import MobileBottomMenu from "@/Components/MobileBottomMenu";
import Modal from "@/Components/Regular/Modal/Modal";
import Container from "@/Components/Regular/Container";

const Layout = ({ children }) => {
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
      </Container>
      <Footer />
      {/* Modal  */}
      {modal?.isOpen && <Modal {...modal} />}
    </Context.Provider>
  );
};

export default Layout;
