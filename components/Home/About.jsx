import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative w-[100vw] h-[120vh] flex gap-[8rem] px-[8rem] pt-[12rem] justify-center xs:max-md:px-[2rem] xs:max-md:pt-0 xs:max-md:flex-col xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-center xs:max-md:h-[130vh] items-center overflow-hidden bg-[url('/about-us.png')] bg-cover bg-no-repeat bg-top">
      <div className="w-[30vw] h-[90vh] rounded-[3rem] shadow-lg bg-[#fff] xs:max-md:hidden overflow-hidden">
        <Image
          src="/9.png"
          alt="about"
          width={500}
          height={500}
          className="w-[30vw] h-[95vh] xs:max-md:w-[75vw] xs:max-md:h-[40vh]"
        />
      </div>
      <div className="flex flex-col gap-[1rem] mt-[-5rem]">
        <h1 className="text-[70px] text-black font-extrabold leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center">
          ABOUT US
        </h1>
        <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[16px] xs:max-md:text-center font-gilroymedium">
          We started{" "}
          <span className="xs:max-md:text-[23px] font-gilroyboldx xs:max-md:font-gilroybold">
            PAPEL
          </span>{" "}
          with one single goal: <br className="xs:max-md:hidden" />{" "}
          <span className="text-[24px] xs:max-md:text-[23px] font-gilroyboldx xs:max-md:font-gilroybold">
            To make India&apos;s most eco-friendly
          </span>
          <br className="xs:max-md:hidden" />{" "}
          <span className="xs:max-md:text-[23px] font-gilroyboldx xs:max-md:font-gilroybold">
            functional beverage.
          </span>
          <br className="xs:max-md:hidden" /> Enriched with vitamins & minerals,
          this is
          <br className="xs:max-md:hidden" />{" "}
          <span className="xs:max-md:text-[23px] font-gilroyboldx">
            India&apos;s first paper-based Alkaline water,
          </span>
          <br className="xs:max-md:hidden" />
          which means
          <br className="xs:max-md:hidden" />
          <span className="xs:max-md:text-[23px] font-gilroyboldx xs:max-md:font-gilroybold">
            you can&apos;t see the water, but you&apos;ll feel the change...
          </span>
          {/* <br className="xs:max-md:hidden" /> That&apos;s how we&apos;ve crafted
          PAPEL for you...
          <br className="xs:max-md:hidden" /> So you get nothing less than
          <br className="xs:max-md:hidden" />
          <span className="xs:max-md:text-[23px] font-gilroyboldx xs:max-md:font-gilroybold">
            a refreshing, crisp sipeach time.
          </span> */}
        </p>
        <button className="bg-[#1B3C87] w-[16rem] xs:max-md:text-[18px] xs:max-md:w-[12rem] py-[0.3rem] text-white text-[22px] font-gilroybold capitalize mt-[1rem]">
          Click to dive deeper
        </button>
      </div>
      <div className="w-[35vw] h-[95vh] rounded-[3rem] shadow-lg bg-[#fff] md:hidden xs:max-md:w-[65vw] xs:max-md:h-[50vh] xs:max-md:rounded-none">
        <Image
          src="/9.png"
          alt="about"
          width={500}
          height={500}
          className="w-[35vw] h-[95vh] xs:max-md:w-[65vw] xs:max-md:h-[50vh]"
        />
      </div>
      <Image
        src="/Asset_5.png"
        alt="about"
        width={400}
        height={500}
        className="absolute top-[84%] left-[31%] xs:max-md:w-[250px] xs:max-md:top-[80%] xs:max-md:left-[51%]"
      />
    </div>
  );
};

export default About;
