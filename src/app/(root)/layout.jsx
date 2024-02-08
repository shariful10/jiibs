"use client";

import React, { useState } from "react";
import Footer from "@/Components/Shared/Footer";
import NavigationBar from "@/Components/Shared/NavigationBar";
import Context from "@/Context/Context";
import MobileBottomMenu from "@/Components/MobileBottomMenu";

const Layout = ({ children }) => {
  const [modal, setModal] = useState({
    isModalOpen: false,
    modalType: "",
    isMobileModal: false,
    modalLabel: "",
    isWidth: "",
  });

  return (
    <Context.Provider value={{ modal: modal, setModal: setModal }}>
      <NavigationBar />
      <MobileBottomMenu />
      {children}
      <Footer />
    </Context.Provider>
  );
};

export default Layout;
