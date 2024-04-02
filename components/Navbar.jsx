"use client";

import Image from "next/image";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex gap-12 justify-center mr-[4rem]">
      <div className="flex gap-[5rem] md:max-xl:gap-[2rem] h-[11vh] justify-center items-center bg-[#fff]">
        <div className="nav-left">
          <nav>
            <ul className="flex gap-20 text-[18px] md:max-xl:text-[14px] md:max-xl:gap-12 font-medium ml-[2rem]">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Verify your Papel</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-center">
          <Image
            src="/papel-logo-black.png"
            alt="logo"
            width={180}
            height={180}
            className="md:max-xl:w-[130px]"
          />
        </div>
        <div className="nav-right">
          <nav>
            <ul className="flex gap-20 text-[18px] md:max-xl:text-[14px] md:max-xl:gap-12 font-medium">
              <li>
                <a href="#">B2B</a>
              </li>
              <li>
                <a href="#">Sustainaibility</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="corner-right flex gap-[3.5rem] items-center ml-[-2rem] md:max-xl:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <FaCartShopping size={28} className="" />
        </div>
      </div>
      <div className="corner-right flex gap-[2rem] items-center xl:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        <FaCartShopping size={20} className="" />
      </div>
    </div>
  );
};

export default Navbar;
