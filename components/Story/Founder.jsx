"use client";

import Image from "next/image";

import React from "react";

const Founder = () => {
  return (
    <div>
      <section className="py-24 bg-[#79c6d6] mt-[-6rem] mb-[6rem]">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className=" mx-auto mb-8">
              <Image
                src="/wave-design-white.png"
                alt="wave"
                objectFit="contain"
                width={300}
                height={100}
                className="absolute top-[115%] left-[8%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
              />
            </div>
            <div className=" mx-auto mb-8">
              <Image
                src="/wave-design-white.png"
                alt="wave"
                objectFit="contain"
                width={300}
                height={100}
                className="absolute top-[167%] left-[43%] md:max-xl:left-[48%] z-30 md:max-xl:top-[17%] xs:max-md:hidden"
              />
            </div>

            <h2 className="text-5xl font-bold ml-[-12rem] ">
              FOUNDER <br /> STORY
            </h2>
            <p className="text-gray-800 ml-[-12rem]">
              The journey of Papel Alkaline Water began <br /> with a vision
              rooted in both sustainability <br /> and wellness. Its founders,
              Emily and Michael, <br /> were avid environmentalists and health
              <br /> enthusiasts who recognized a gap in the <br /> market for a
              truly eco-conscious hydration <br /> solution. Motivated by a
              desire to reduce <br /> plastic waste and promote health, they
              <br /> emarked on a quest to create a brand that <br /> not only
              delivered high-quality alkaline water <br /> but also prioritized
              environmental <br /> stewardship.
            </p>
          </div>
          <div className="w-[50vw] ml-[-15rem] mt-[-2rem]">
            <Image
              src="/about.jpg"
              alt="Papel Water Pack"
              width={600}
              height={600}
              className="mt-[4rem] w-[23vw]"
            />
          </div>
          <div className=" w-auto">
            <Image
              src="/character-with-product-2.png"
              alt="hero image"
              width={1107}
              height={1949}
              className="absolute top-[100%] left-[49%] w-[44vw]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
