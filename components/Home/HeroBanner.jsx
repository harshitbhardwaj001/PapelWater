import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <div className="xs:max-md:hidden">
        <Image
          src="/heroimg_1.png"
          alt="hero image"
          width={1917}
          height={1049}
          className="w-[88%] pt-[2rem]"
        />
      </div>
      <div className="w-[100vw] h-[89vh] bg-[#fff] flex justify-center px-[4rem] mx-auto md:max-xl:px-[6rem] ml-[2rem] xs:max-md:flex-col xs:max-md:px-[0.8rem] pt-[6rem] xs:max-md:ml-0 xs:max-md:items-center xs:max-md:justify-start md:hidden">
        <Image
          src="/wave-design-1.png"
          alt="wave"
          width={400}
          height={100}
          className="absolute top-[21%] left-[58%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
        />
        <div className="flex flex-col mt-[5.5rem] md:max-xl:mt-[3.4rem] xs:max-md:mt-[1rem] xs:max-md:items-center">
          <h1 className="text-[3.2rem] font-bold md:max-xl:text-[2rem] xs:max-md:text-[2.8rem] xs:max-md:text-center tracking-wide font-gilroybold leading-[2.7rem]">
            BETTER HYDRATION GREENER PLANET.
          </h1>
          {/* <p className="text-[1.8rem] text-[#1B3C87] font-medium md:max-xl:text-[1.2rem] xs:max-md:text-[0.9rem] xs:max-md:text-center xs:max-md:w-[75vw] xs:max-md:mt-[0.4rem]">
            We, at{" "}
            <strong className="text-[2.2rem] md:max-xl:text-[1.5rem] xs:max-md:text-[1.2rem]">
              PAPEL
            </strong>{" "}
            are trying to turn that <br className="xs:max-md:hidden" /> into
            reality!
          </p> */}
          <div>
            <Link href="#product">
              <button className="bg-[#1B3C87] w-[12rem] py-[0.5rem] rounded-full text-white text-[28px] font-extrabold mt-[1.4rem] xs:max-md:w-[32vw] xs:max-md:text-[18px] xs:max-md:py-[0.3rem]">
                BUY NOW
              </button>
            </Link>
          </div>
          <Image
            src="/wave-design-1.png"
            alt="wave"
            width={400}
            height={100}
            className="absolute top-[86%] left-[-7%] xs:max-md:hidden"
          />
        </div>
        <div className="mt-[1rem] xs:max-md:mt-[-0.8rem]">
          <Image
            src="/character-with-product-1.png"
            alt="product-homepage"
            width={1550}
            height={1300}
            className="md:max-xl:w-[1200px] relative z-2 xs:max-md:w-[50vh] xs:max-md:absolute xs:max-md:left-[50%] xs:max-md:ml-[-25vh] xs:max-md:bottom-0"
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
