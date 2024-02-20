"use client";

import React, { useState } from "react";
import NavigationBar from "@/Components/Shared/NavigationBar";
import Context from "@/Context/Context";
import MobileBottomMenu from "@/Components/MobileBottomMenu";
import Modal from "@/Components/Regular/Modal/Modal";
import Container from "@/Components/Regular/Container";
import Footer from "@/Components/Shared/Footer";

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
      <NavigationBar />
      <MobileBottomMenu />
      {children}
      {/* <Footer /> */}
      {/* Modal  */}
      {modal?.isOpen && <Modal {...modal} />}
    </Context.Provider>
  );
};

export default Layout;
