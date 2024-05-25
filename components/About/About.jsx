"use client";

import Image from "next/image";

import React from "react";

const About = () => {
  return (
    <div className="w-full">
      <section className="flex justify-center items-center text-center py-16 gap-[6rem] ml-[10rem]">
        <h1 className="text-7xl font-bold mt-[-6rem] text-left">
          ABOUT <br /> PRODUCT
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
              width={400}
              height={100}
              className="absolute top-[33%] left-[17%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
            />
          </div>
        </div>
      </section>
      {/* <section>
        <p className="max-w-2xl mx-auto text-gray-700">
          High-quality water deserves high-quality packaging. Papel
          responsibly-sourced paperboard container is sealed with a paper
          folding cap. The eco-friendly packaging is recyclable and 80%
          renewable.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/slogan.jpg"
              alt="Papel Water Pack"
              width={500}
              height={500}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">PAPEL WATER</h2>
            <p className="text-gray-700">
              The content of our water provides you with an optimal supply of
              necessary nutrients for daily activity. It’s low in sodium and
              suitable for babies. The pH level is 7.5, which means it’s
              slightly alkaline. Alkaline water intake helps to restore balance
              to your inner system.
            </p>
            <div>
              <h3 className="text-lg font-bold">Content</h3>
              <ul className="text-gray-700">
                <li>Sodium: 14.07 mg</li>
                <li>Calcium: 3.89 mg</li>
                <li>Potassium: 11.04 mg</li>
                <li>Vitamin C: 1.32 mg</li>
                <li>Vitamin B12: 0.2 mcg</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">PACKAGING</h2>
            <p className="text-gray-700">
              The carton is made mostly from paper, and the cap is mostly made
              from sugarcane. The paperboard is recyclable, energy-efficient to
              transport, and certified by the Forest Stewardship Council (FSC).
            </p>
            <div>
              <h3 className="text-lg font-bold">Package properties</h3>
              <p className="text-gray-700">
                Package weight: 19 g<br />
                Cap/opening weight: 4 g
              </p>
              <h3 className="text-lg font-bold">Packaging materials & cap</h3>
              <p className="text-gray-700">
                Paperboard: 60%
                <br />
                Aluminum Foil: 5%
                <br />
                Plastics: 15%
                <br />
                Bio-based Plastics: 20%
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/9.png"
              alt="Packaging Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
