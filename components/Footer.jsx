import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100vw] h-[80vh] flex gap-[8rem] bg-[#101821] px-[5rem] items-center">
      <div className="flex flex-col gap-3 w-[35vw] mt-[6rem]">
        <h1 className="text-[35px] font-semibold text-white">ABOUT PAPEL</h1>
        <p className="text-[18px] text-[#d6d6d6]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut pariatur
          porro a ad quasi veniam aliquid quaerat. Reiciendis vel accusamus
          beatae eum ea, dignissimos pariatur ipsa, veritatis ratione iusto
          maiores. Minus numquam incidunt corporis recusandae enim, iste aliquid
          possimus asperiores molestiae, molestias qui maxime quisquam! maiores.
          Minus numquam incidunt corporis recusandae enim, iste aliquid possimus
          asperiores molestiae, molestias qui maxime quisquam!
        </p>
        <Image
          src="/wave-design-white.png"
          alt="wave"
          width={400}
          height={200}
          className="ml-[-0.8rem]"
        />
        <div className="flex gap-5">
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center">
            <FaInstagram size={30} className="text-[#101821]" />
          </div>
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center">
            <FaFacebook size={30} className="text-[#101821]" />
          </div>
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center">
            <FaLinkedin size={30} className="text-[#101821]" />
          </div>
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center">
            <FaTwitter size={30} className="text-[#101821]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-[28px] font-medium text-white w-[20vw]">
        <h1>PAPEL FAQs</h1>
        <h1>INVESTORS</h1>
        <h1>PRIVACY POLICY</h1>
        <h1>TERMS OF USE</h1>
        <h1>CONTACT US</h1>
      </div>
      <div className="flex flex-col gap-[0.7rem] mt-[5.4rem]">
        <h1 className="font-medium text-[28px] text-white">Payment</h1>
        <h1 className="font-medium text-[22px] text-[#bebebe] leading-[1.5rem]">
          Secured payments <br /> powered by
        </h1>
        <div className="w-[17vw] h-[21vh] bg-[#d6d6d6] mt-[0.8rem]"></div>
        <h1 className="text-white text-[20px] text-right mt-[4rem]">
          &#169; PAPEL WATER
        </h1>
      </div>
    </div>
  );
};

export default Footer;
