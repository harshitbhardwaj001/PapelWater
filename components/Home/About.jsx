import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative w-[100vw] h-[130vh]  flex gap-[8rem] px-[8rem] pt-[12rem] justify-center xs:max-md:px-[2rem] xs:max-md:pt-[7vh] xs:max-md:flex-col xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-start xs:max-md:h-[112vh] items-center">
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
        <h1 className="text-[70px] font-extrabold leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center">
          ABOUT US
        </h1>
        <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[16px] xs:max-md:text-center font-gilroymedium">
          We started{" "}
          <strong className="xs:max-md:text-[23px] font-gilroyboldx">
            PAPEL
          </strong>{" "}
          with one single goal: <br className="xs:max-md:hidden" />{" "}
          <strong className="text-[24px] xs:max-md:text-[23px] font-gilroyboldx ">
            To make India&apos;s most eco-friendly
          </strong>
          <br className="xs:max-md:hidden" />{" "}
          <strong className="xs:max-md:text-[23px] font-gilroyboldx">
            functional beverage.
          </strong>
          <br className="xs:max-md:hidden" /> Enriched with vitamins & minerals,
          this is
          <br className="xs:max-md:hidden" />{" "}
          <strong className="xs:max-md:text-[23px] font-gilroyboldx">
            India&apos;s first paper-based Alkaline water,
          </strong>
          <br className="xs:max-md:hidden" />
          which means
          <br className="xs:max-md:hidden" />
          <strong className="xs:max-md:text-[23px] font-gilroyboldx">
            you can&apos;t see the water, but you&apos;ll feel the change...
          </strong>
          <br className="xs:max-md:hidden" /> That&apos;s how we&apos;ve crafted
          PAPEL for you...
          <br className="xs:max-md:hidden" /> So you get nothing less than
          <br className="xs:max-md:hidden" />
          <strong className="xs:max-md:text-[23px] font-gilroyboldx">
            a refreshing, crisp sipeach time.
          </strong>
        </p>
      </div>
      <div className="w-[35vw] h-[95vh] rounded-[3rem] shadow-lg bg-[#fff] md:hidden xs:max-md:w-[75vw] xs:max-md:h-[40vh] xs:max-md:rounded-none">
        <Image
          src="/9.png"
          alt="about"
          width={500}
          height={500}
          className="w-[35vw] h-[95vh] xs:max-md:w-[75vw] xs:max-md:h-[40vh]"
        />
      </div>
      <Image
        src="/Asset_5.png"
        alt="about"
        width={400}
        height={500}
        className="absolute top-[84%] left-[31%]"
      />
    </div>
  );
};

export default About;
