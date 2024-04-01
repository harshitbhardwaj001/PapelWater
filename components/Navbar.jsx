"use client";

import Image from "next/image";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex gap-[5rem] h-[11vh] justify-center items-center bg-[#fff]">
      <div className="nav-left">
        <nav>
          <ul className="flex gap-20 text-[18px] font-medium ml-[2rem]">
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
        />
      </div>
      <div className="nav-right">
        <nav>
          <ul className="flex gap-20 text-[18px] font-medium">
            <li>
              <a href="#">B2B</a>
            </li>
            <li>
              <a href="#">Sustainaibility</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="corner-right flex gap-[3.5rem] items-center ml-[-2rem]">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <FaCartShopping size={28} className="" />
      </div>
    </div>
  );
};

export default Navbar;
