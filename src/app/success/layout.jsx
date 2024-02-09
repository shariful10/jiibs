"use client";

import NavigationBar from "@/Components/Shared/NavigationBar";
import React, { useState } from "react";
import Context from "@/Context/Context";
import MobileBottomMenu from "@/Components/MobileBottomMenu";

const layout = ({ children }) => {
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
      {children}
      <MobileBottomMenu />
    </Context.Provider>
  );
};

export default layout;
