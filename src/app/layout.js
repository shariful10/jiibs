// pages/_app.js
import "./globals.css";

export const metadata = {
	title: "JIIBS (NYC Real Estate Marketplace)",
	description: "JIIBS (NYC Real Estate Marketplace)",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`source-sans-pro w-full max-w-[1520px] mx-auto`}>
				{children}
			</body>
		</html>
	);
}
