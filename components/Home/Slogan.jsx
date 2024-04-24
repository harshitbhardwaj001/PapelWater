import Image from "next/image";
import React from "react";

const Slogan = () => {
  return (
    <div className="relative w-[100%] min-h-[125vh] flex px-[8rem] xs:max-md:px-[2rem] justify-start xs:max-md:flex-col xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-start xs:max-md:h-auto xs:max-md:mt-[3rem] items-center bg-[url('/drink-the-change.png')] bg-cover bg-no-repeat bg-bottom">
      {/* <div className="absolute top-[88%] left-[13%] xs:max-md:hidden flex flex-col gap-0">
        <Image src="/Asset_5.png" alt="wave" width={400} height={100} />
      </div> */}
      <div className="flex flex-col gap-[1rem] ml-[5rem]">
        {/* <h1 className="text-[70px] font-extrabold leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center xs:max-md:leading-[2rem]">
          DRINK <br className="xs:max-md:hidden" />
          THE <br /> CHANGE
        </h1> */}
        <div>
          <p className="text-[30px] text-[#1B3C87] xs:max-md:text-[20px] xs:max-md:text-center font-gilroymedium leading-3 ml-[1rem]">
            Here&apos;s your chance to
          </p>
          <h1 className="text-[65px] text-[#000] font-gilroybold italic xs:max-md:text-[28px] xs:max-md:text-center">
            Drink The Change
          </h1>
        </div>
        <p className="text-[25px] text-[#1B3C87] xs:max-md:text-[20px] xs:max-md:text-center font-gilroymedium w-[40vw] xs:max-md:w-auto">
          You must&apos;ve felt that guilt while grabbing a plastic water bottle
          in your hands...
        </p>
        <p className="text-[28px] text-[#1B3C87] xs:max-md:text-[20px] xs:max-md:text-center font-gilroybold w-[40vw] xs:max-md:w-auto">
          We know the feeling!
        </p>
        <p className="text-[25px] text-[#1B3C87] xs:max-md:text-[20px] xs:max-md:text-center font-gilroymedium w-[40vw] xs:max-md:w-auto">
          And that&apos;s why, we believe that
          <span className="font-gilroybold">
            {" "}
            our hydration shouldn&apos;t hurt our home.
          </span>
        </p>
        {/* <p className="text-[25px] text-[#1B3C87] xs:max-md:text-[16px] xs:max-md:text-center">
          With{" "}
          <strong className="text-[32px] xs:max-md:text-[23px] italic">
            PAPEL
          </strong>
          , here&apos;s your chance to
        </p>
        <h1 className="text-[35px] text-[#1B3C87] font-bold italic xs:max-md:text-[23px] xs:max-md:text-center">
          Drink The Change
        </h1> */}
      </div>
      {/* <div className="overflow-hidden flex items-center justify-start">
        <Image
          src="/papel-product-png.png"
          alt="slogan"
          width={500}
          height={300}
          className="w-[35vw] xs:max-md:w-[75vw] xs:max-md:rounded-none rotate-[-15deg]"
        />
      </div> */}
    </div>
  );
};

export default Slogan;
