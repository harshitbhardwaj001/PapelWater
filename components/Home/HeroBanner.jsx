import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-[100vw] h-[89vh] bg-[#fff] flex justify-center px-[8rem]">
      <Image
        src="/wave-design-1.png"
        alt="wave"
        width={400}
        height={100}
        className="absolute top-[21%] left-[58%]"
      />
      <div className="flex flex-col mt-[4.5rem]">
        <h1 className="text-[3.2rem] font-bold">
          Imagine a world where hydration is the last thing that causes carbon
          emissions...
        </h1>
        <p className="text-[1.8rem] text-[#1B3C87] font-medium">
          We, at <strong className="text-[2.6rem]">PAPEL</strong> are trying to
          turn that <br /> into reality!
        </p>
        <div>
          <button className="bg-[#1B3C87] w-[12rem] py-[0.5rem] rounded-full text-white text-[28px] font-extrabold mt-[1.4rem]">
            MORE
          </button>
        </div>
        <Image
          src="/wave-design-1.png"
          alt="wave"
          width={400}
          height={100}
          className="absolute top-[86%] left-[-7%]"
        />
      </div>
      <div className="mt-[1rem]">
        <Image
          src="/papel-product-homepage.png"
          alt="product-homepage"
          width={1400}
          height={1300}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
