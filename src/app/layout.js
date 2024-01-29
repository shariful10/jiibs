import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/Components/Shared/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1380px] m-auto`}>
        <NavigationBar></NavigationBar>
        {children}
      
      </body>
    </html>
  );
}
