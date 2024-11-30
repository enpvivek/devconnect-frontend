"use client";

import Image from "next/image";
import whatsappHeader from "../../../assets/whatsappHeader.png";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0  z-50  bg-white border-b border-[#f0f0f0]">
      <div className="hidden md:block">
        <DesktopNavbar></DesktopNavbar>
      </div>
      {/* for mobile design */}
      <div className="md:hidden">
        <MobileNavbar></MobileNavbar>
      </div>
    </nav>
  );
};

export default Navbar;
