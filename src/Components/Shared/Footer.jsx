import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-[#626262] text-[16px] font-normal">
      <nav>
        <h6 className=" font-semibold text-black text-[18px]">Support</h6>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">AirCover</a>
        <a className="link link-hover">Anti-discrimination</a>
        <a className="link link-hover">Disability Support</a>
        <a className="link link-hover">Cancellation Option</a>
        <a className="link link-hover">Report neighborhood concern</a>
      </nav>
      <nav>
        <h6 className=" font-semibold text-black text-[18px]">Hosting</h6>
        <a className="link link-hover">Laurylee your home</a>
        <a className="link link-hover">AirCover for Hosts</a>
        <a className="link link-hover">Hosting resources</a>
        <a className="link link-hover">Community forum</a>
        <a className="link link-hover">Hosting responsibly</a>
        <a className="link link-hover">Laurylee-friendly apartments</a>
      </nav>
      <nav>
        <h6 className=" font-semibold text-black text-[18px]">Laurylee</h6>
        <a className="link link-hover">Newsroom</a>
        <a className="link link-hover">New features</a>
        <a className="link link-hover">Career resources</a>
        <a className="link link-hover">Investors</a>
        <a className="link link-hover">Gift cards</a>
        <a className="link link-hover">laurylee.com emergency stays</a>
      </nav>
      
    </footer>
  );
};

export default Footer;
