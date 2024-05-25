"use client";

import Image from "next/image";

import React from "react";

const Content = () => {
  return (
    <div>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className=" mx-auto mb-8">
              <Image
                src="/wave-design-2.png"
                alt="wave"
                objectFit="contain"
                width={300}
                height={100}
                className="absolute top-[232%] left-[17.5%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
              />
            </div>
            <div className=" mx-auto mb-8">
              <Image
                src="/wave-design-1.png"
                alt="wave"
                objectFit="contain"
                width={350}
                height={100}
                className="absolute top-[285%] left-[47%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
              />
            </div>
            <div className=" mx-auto mb-8">
              <Image
                src="/wave-design-1.png"
                alt="wave"
                objectFit="contain"
                width={350}
                height={100}
                className="absolute top-[240%] left-[67%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
              />
            </div>
            <h2 className="text-5xl font-bold ml-[-3rem] ">
              PAPEL <br /> WATER
            </h2>
            <p className="text-gray-700 font-bold ml-[-3rem]">
              The content of our water provides you with an optimal supply of
              necessary nutrients for daily activity. It’s low in sodium and
              suitable for babies. The pH level is 7.5, which means it’s
              slightly alkaline. Alkaline water intake helps to restore balance
              to your inner system.
            </p>
            <div>
              <h3 className="text-4xl mb-2 mt-6  font-bold ml-[-3rem]">
                Content
              </h3>
              <ul className="text-gray-700 font-bold ml-[-3rem]">
                <li>Sodium 14.07 mg</li>
                <li>Calcium 3.89 mg</li>
                <li>Potassium 11.04 mg</li>
                <li>Vitamin C 1.32 mg</li>
                <li>Vitamin B12 0.2 mcg</li>
              </ul>
            </div>
          </div>
          <div className="w-[50vw]">
            <Image
              src="/drink-the-change.png"
              alt="Papel Water Pack"
              width={800}
              height={800}
              className="mt-[4rem] w-[35vw]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
