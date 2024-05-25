"use client";

import Image from "next/image";

import React from "react";

const Product = () => {
  return (
    <div>
      <section className="bg-[#79c6d6] mt-[-6rem] py-16">
        <p className="max-w-2xl mx-auto text-gray-700 pt-[2rem] text-center" >
          High-quality water deserves high-quality packaging. Papel
          responsibly-sourced paperboard container is sealed with a paper
          folding cap. The eco-friendly packaging is recyclable and 80%
          renewable.
        </p>
        <Image
          src="/about.png"
          alt="about"
          width={800}
          height={500}
          className="mx-auto"
        />
      </section>
    </div>
  );
};

export default Product;
