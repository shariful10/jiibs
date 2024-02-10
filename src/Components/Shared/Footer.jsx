import React from "react";
import Image from "next/image";
import vector from "@/assets/Vector.svg";
import FooterItems from "./FooterItems";
import twitter from "@/assets/twitter.svg";
import Container from "../Regular/Container";
import facebook from "@/assets/facebook.svg";
import instragram from "@/assets/instragram.svg";

const footerBottomData = [
  {
    id: 1,
    image: vector,
    title: "Terms",
  },
  {
    id: 2,
    image: vector,
    title: "Sitemap",
  },
  {
    id: 3,
    image: vector,
    title: "Privacy",
  },
  {
    id: 4,
    image: vector,
    title: "Contact",
  },
];

const Footer = () => {
  return (
    <footer className="pt-[60px] pb-28 md:pb-14 bg-[#F7F7F7]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid md:grid-cols-3 border-b pb-[32px]">
          <FooterItems />
        </div>
        <div className="mt-[22px] flex items-center justify-between flex-wrap space-y-6 md:space-y-0">
          <div className="flex items-center gap-10 flex-wrap">
            <p className="text-[#222]">© 2023 Laurylee. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {footerBottomData.map(({ id, image, title }) => (
                <p key={id} className="flex items-center gap-1">
                  <Image src={image} alt="vector" />
                  <span>{title}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 -mt-[22px]">
            <Image src={facebook} alt="" />
            <Image src={instragram} alt="" />
            <Image src={twitter} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
