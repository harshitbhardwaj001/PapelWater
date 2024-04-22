import Image from "next/image";
import React from "react";

const Videos = () => {
  return (
    <div className="relative w-[100vw] h-[120vh] flex flex-col pt-[28vh] items-center gap-10 xs:max-md:pt-[5vh] xs:max-md:h-[100vh]">
      <div className="absolute top-[75%] h-[500vh] w-[100vw] z-[-1] xs:max-md:top-[45%] xs:max-md:h-[140vh] overflow-hidden">
        <Image
          src="/Asset_3.png"
          alt="bg"
          width={1519}
          height={1000}
          className="w-[100vw]"
        />
      </div>
      <h1 className="text-[60px] font-black xs:max-md:text-[45px] text-center font-gilroybold leading-[4rem]">
        WE GOT THE &apos;GRAM TALKING <br /> ABOUT PAPEL...
      </h1>
      {/* <p className="text-[22px] text-[#1B3C87] font-medium mt-[-3.7rem] xs:max-md:text-[13px] xs:max-md:mt-[-3rem] xs:max-md:text-center xs:max-md:px-[1rem] xs:max-md:leading-[2.5vh]">
        Here you can see small videos we made with influencers
      </p> */}
      <div className="flex gap-12 xs:max-md:gap-5">
        <div className="video-card">
          <iframe
            width="305"
            height="542"
            src="/video_1.mp4"
            className="rounded-[3rem] shadow-xl xs:max-md:w-[249px] xs:max-md:h-[442px]"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-card xs:max-md:hidden">
          <iframe
            width="305"
            height="542"
            src="/video_2.mp4"
            className="rounded-[3rem] shadow-xl xs:max-md:w-[200px] xs:max-md:h-[300px]"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-card xs:max-md:hidden">
          <iframe
            width="305"
            height="542"
            src="/video_3.mp4"
            className="rounded-[3rem] shadow-xl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
