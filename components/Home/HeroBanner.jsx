import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-[100vw] h-[89vh] bg-[#fff] flex justify-center px-[4rem] mx-auto md:max-xl:px-[6rem] ml-[2rem] xs:max-md:flex-col xs:max-md:px-[0.2rem]">
      <Image
        src="/wave-design-1.png"
        alt="wave"
        width={400}
        height={100}
        className="absolute top-[21%] left-[58%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
      />
      <div className="flex flex-col mt-[5.5rem] md:max-xl:mt-[3.4rem] xs:max-md:mt-0">
        <h1 className="text-[3.2rem] font-bold md:max-xl:text-[2rem] xs:max-md:text-[2rem] xs:max-md:text-center">
          Imagine a world where hydration is the last thing that causes carbon
          emissions...
        </h1>
        <p className="text-[1.8rem] text-[#1B3C87] font-medium md:max-xl:text-[1.2rem] xs:max-md:text-[1.2rem] xs:max-md:text-center">
          We, at{" "}
          <strong className="text-[2.2rem] xs:max-xl:text-[1.5rem]">
            PAPEL
          </strong>{" "}
          are trying to turn that <br className="xs:max-md:hidden" /> into
          reality!
        </p>
        <div>
          <button className="bg-[#1B3C87] w-[12rem] py-[0.5rem] rounded-full text-white text-[28px] font-extrabold mt-[1.4rem] xs:max-md:mx-auto">
            MORE
          </button>
        </div>
        <Image
          src="/wave-design-1.png"
          alt="wave"
          width={400}
          height={100}
          className="absolute top-[86%] left-[-7%] xs:max-md:hidden"
        />
      </div>
      <div className="mt-[1rem]">
        <Image
          src="/character-with-product-2.png"
          alt="product-homepage"
          width={1550}
          height={1300}
          className="md:max-xl:w-[1200px] relative z-2 xs:max-md:w-[100px]"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
