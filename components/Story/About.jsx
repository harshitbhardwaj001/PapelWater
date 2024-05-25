"use client";

import Image from "next/image";

import React from "react";

const About = () => {
  return (
    <div>
      <section className="py-24 bg-white mt-[-6rem]">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className=" mx-auto mb-8">
              <Image
                src="/wave-design-2.png"
                alt="wave"
                objectFit="contain"
                width={300}
                height={100}
                className="absolute top-[203%] left-[8%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
              />
            </div>
            <div className=" mx-auto mb-8">
              <Image
                src="/wave-design-1.png"
                alt="wave"
                objectFit="contain"
                width={350}
                height={100}
                className="absolute top-[257%] left-[33%] md:max-xl:left-[48%] z-30 md:max-xl:top-[17%] xs:max-md:hidden"
              />
            </div>
            <div className=" mx-auto mb-8">
              <Image
                src="/wave-design-1.png"
                alt="wave"
                objectFit="contain"
                width={350}
                height={100}
                className="absolute top-[207%] left-[70%] md:max-xl:left-[48%] z-30 md:max-xl:top-[17%] xs:max-md:hidden"
              />
            </div>

            <h2 className="text-6xl font-bold ml-[-12rem] ">
              ABOUT<br /> PAPEL
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
          <div className="w-[50vw] ml-[-10rem] mt-[-2rem]">
            <Image
              src="/drink-the-change.png"
              alt="Papel Water Pack"
              width={600}
              height={600}
              className="mt-[5rem] w-[40vw]"
            />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
