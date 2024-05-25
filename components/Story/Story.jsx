"use client";

import Image from "next/image";

import React from "react";

const Story = () => {
  return (
    <div className="w-full">
      <section className="flex justify-center items-center text-center py-16 gap-[6rem] ml-[10rem]">
        <h1 className="text-7xl font-bold mt-[-9rem] text-left ml-[-3rem]">
          OUR <br /> STORY
        </h1>
        <div>
          <div className="relative w-auto">
            <Image
              src="/character-with-product-2.png"
              alt="hero image"
              width={1107}
              height={1949}
              className="w-[45vw]"
            />
          </div>
          <div className=" mx-auto mb-8">
            <Image
              src="/wave-design-2.png"
              alt="wave"
              objectFit="contain"
              width={300}
              height={100}
              className="absolute top-[33%] left-[19%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;