import React from "react";
import Container from "../Regular/Container";

const Footer = () => {
  return (
    <Container>
      <footer className="flex flex-col justify-between p-10 bg-base-300 text-[#626262] text-[16px] divide-y-2 space-y-10 font-normal bg-[#F7F7F7] py-14 px-[131px]">
        <div className="flex justify-between ">
          <nav className="flex flex-col gap-2">
            <h6 className=" mb-3 font-semibold text-black text-[18px]">
              Support
            </h6>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">AirCover</a>
            <a className="link link-hover">Anti-discrimination</a>
            <a className="link link-hover">Disability Support</a>
            <a className="link link-hover">Cancellation Option</a>
            <a className="link link-hover">Report neighborhood concern</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className=" mb-3 font-semibold text-black text-[18px]">
              Hosting
            </h6>
            <a className="link link-hover">Laurylee your home</a>
            <a className="link link-hover">AirCover for Hosts</a>
            <a className="link link-hover">Hosting resources</a>
            <a className="link link-hover">Community forum</a>
            <a className="link link-hover">Hosting responsibly</a>
            <a className="link link-hover">Laurylee-friendly apartments</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className=" mb-3 font-semibold text-black text-[18px]">
              Laurylee
            </h6>
            <a className="link link-hover">Newsroom</a>
            <a className="link link-hover">New features</a>
            <a className="link link-hover">Career resources</a>
            <a className="link link-hover">Investors</a>
            <a className="link link-hover">Gift cards</a>
            <a className="link link-hover">laurylee.com emergency stays</a>
          </nav>
        </div>

        <div className="flex flex-row gap-14  space-y-7">
          <p>© 2023 Laurylee. All rights reserved.</p>
          <ul className=" list-disc flex flex-row gap-7 ">
            <li>Terms</li>
            <li>Sitemap</li>
            <li>privacy</li>
            <li>contact</li>
          </ul>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
