import Image from "next/image";
import React from "react";

const AboutPapel = () => {
  return (
    <div className="w-[100vw] h-[150vh] flex flex-col justify-center items-center pt-[50vh] relative">
      <div className="flex flex-col gap-[1rem] justify-center items-center">
        <h1 className="text-[60px] font-black xs:max-md:text-[45px] text-center font-gilroybold leading-[4rem]">
          ABOUT PRODUCT
        </h1>
        <p className="w-[61vw] text-[22px] text-[#1B3C87] font-medium text-center tracking-wide xs:max-md:text-[13px] xs:max-md:mt-[-3rem] xs:max-md:text-center">
          High-quality water deserves high-quality packaging papel
          responsibly-sourced paperboard container in sealed with a paper
          folding cap.The eco-friendly packaging is recyclable and 80%
          renewable.
        </p>
        <button className="bg-[#1B3C87] w-[16rem] py-[0.3rem] text-white text-[26px] font-extrabold">
          More Products
        </button>
      </div>

      <div>
        <Image src="/Asset_20.svg" alt="product" width={900} height={500} />
        <Image
          src="/product.png"
          alt="product"
          width={700}
          height={500}
          className="absolute top-[45%] left-[25.5%]"
        />
      </div>
    </div>
  );
};

export default AboutPapel;
