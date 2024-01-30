import React from "react";
import Footer from "@/Components/Shared/Footer";
import NavigationBar from "@/Components/Shared/NavigationBar";

const Layout = ({ children }) => {
	return (
		<div>
			<NavigationBar />
         {children}
			<Footer />
		</div>
	);
};

export default Layout;
