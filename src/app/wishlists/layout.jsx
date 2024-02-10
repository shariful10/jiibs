"use client";

import MobileBottomMenu from "@/Components/MobileBottomMenu";
import Modal from "@/Components/Regular/Modal/Modal";
import NavigationBar from "@/Components/Shared/NavigationBar";
import Context from "@/Context/Context";
import { useState } from "react";

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
      {/* Modal  */}
      {modal?.isOpen && <Modal {...modal} />}
    </Context.Provider>
  );
};

export default Layout;
