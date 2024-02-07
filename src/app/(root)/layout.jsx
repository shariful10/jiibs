"use client";

import React, { useState } from "react";
import Footer from "@/Components/Shared/Footer";
import NavigationBar from "@/Components/Shared/NavigationBar";
import Context from "@/Context/Context";

const Layout = ({ children }) => {
  const [value, setvalue] = useState({
    modal: {
      isModalOpen: false,
      modalType: "",
      isMobileModal: false,
      modalLabel: "",
      isWidth: "",
    },
  });

  return (
    <div>
      <Context.Provider value={(value, setvalue)}>
        <NavigationBar />
        {children}
        <Footer />
      </Context.Provider>
    </div>
  );
};

export default Layout;
