"use client"
import React from 'react'
import Image from "next/image";


const Packaging = () => {
  return (
    <div>
      <section className="py-16 ">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/9.png"
              alt="Packaging Image"
              width={500}
              height={500}
            />
          </div>

          <div className="space-y-4 mt-[6rem] ml-[2rem]">
            <h1 className="text-5xl font-bold">PACKAGING</h1>
            <p className="text-gray-700">
              The carton is made mostly from paper, and the cap is mostly
              made from sugarcane. The paperboard is recyclable,
              energy-efficient to transport, and certified by the Forest
              Stewardship Council (FSC). Fancy, huh?
            </p>
            <h2 className="text-3xl font-bold">
              Biogenic carbon <br /> uptake in the material:
            </h2>
            <p className="text-gray-700">
              31g CO<sub>2</sub>/package
            </p>
            <div>
              <h3 className="text-3xl font-bold">Package properties</h3>
              <p className="text-gray-700 mb-4">
                Package weight: 19 g<br />
                Cap/opening weight: 4 g
              </p>
              <h3 className="text-3xl font-bold">Packaging materials & cap</h3>
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
          <div className=" mx-auto mb-8">
            <Image
              src="/wave-design-2.png"
              alt="wave"
              objectFit="contain"
              width={350}
              height={100}
              className="absolute top-[325%] left-[52%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
            />
          </div>
          <div className=" mx-auto mb-8">
            <Image
              src="/wave-design-1.png"
              alt="wave"
              objectFit="contain"
              width={350}
              height={100}
              className="absolute top-[400%] left-[29%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packaging