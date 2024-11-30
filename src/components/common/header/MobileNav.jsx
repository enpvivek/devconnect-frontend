"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import navLinks from "@/data/navLinks";
import close from "../../../assets/hamburger_menu.png";
import dropDownArrow from "../../../assets/arrow_drop_down.png";
import hamburger_menu from "../../../assets/hamburger_menu.png";
import svodLogo from "../../../assets/svod-advisory-logo-1.png";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accordion, setAccordion] = useState(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Effect to toggle scrollbar visibility
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("hide-scrollbar");
    } else {
      document.body.classList.remove("hide-scrollbar");
    }

    return () => {
      // Clean up the effect by removing the class when component unmounts
      document.body.classList.remove("hide-scrollbar");
    };
  }, [isOpen]);

  return (
    <div className="relative z-50 flex flex-row items-center justify-between px-4 h-14">
      {/* logo */}
      <Link href="/">
        <Image
          src={svodLogo}
          alt="SVOD Logo"
          className="w-[35px] h-[45px] relative opacity-95"
        />
      </Link>

      {/* Toggle Button */}
      <div className="flex flex-row justify-end gap-3 items-center">
        <Link
          href="/contactus"
          className="h-[22px] px-2 py-3 bg-dark-teal border gap-2  rounded-sm flex items-center"
        >
          <div className="text-mint-green text-xs font-medium font-poppins capitalize leading-3 tracking-wide">
            Contact Us
          </div>
        </Link>
        <div onClick={toggleMenu} className="cursor-pointer">
          {!isOpen ? (
            <span className="w-[50px] h-[50px]">
              <Image
                src={hamburger_menu}
                alt="Menu Icon"
                width={30}
                height={30}
              />
            </span>
          ) : (
            <Image src={close} alt="Close Icon" width={25} height={25} />
          )}
        </div>
      </div>

      {/* Side Navigation Bar */}
      <div
        className={`fixed inset-0 top-20 transition-transform duration-500 ease-in ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white h-full top-20 w-[100vw] p-6  shadow-lg overflow-y-auto">
          {/* Main Content */}
          {Links.map((data, index) => (
            <div key={index}>
              <div
                onClick={() => setAccordion(accordion === index ? null : index)}
                className="text-center flex justify-between items-center cursor-pointer mb-4"
              >
                <div
                  className={`${
                    accordion === index ? "text-[#6226ed]" : "text-neutral-700"
                  } text-base font-medium  font-poppins tracking-tight`}
                >
                  {data.subpages ? (
                    data.title
                  ) : (
                    <Link href={data.href || "#"}>
                      <div className="text-neutral-700 cursor-pointer hover:text-[#6226ed]">
                        {data.title}
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {data.subpages && (
                    <Image
                      src={dropDownArrow}
                      className="w-6 h-6 mx-auto"
                      alt="Subpage Icon"
                    />
                  )}
                </div>
              </div>
              {accordion === index && data.subpages && (
                <ul className="border-solid flex-col border-2 border-gray-100 p-5">
                  {data.subpages.map((innerData, innerIndex) => (
                    <li
                      onClick={() => (
                        setIsOpen(false),
                        setAccordion(accordion === index ? null : index)
                      )}
                      key={innerIndex}
                      className="flex items-center gap-4 mb-4"
                    >
                      {innerData.img && (
                        <Image
                          src={innerData.img}
                          className="w-6 h-6 mr-3"
                          alt="Subpage Icon"
                        />
                      )}
                      <Link href={innerData.href || "#"}>
                        <div className="text-neutral-700 cursor-pointer hover:text-[#6226ed]">
                          {innerData.title}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;