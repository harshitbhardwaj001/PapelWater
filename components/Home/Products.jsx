import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="w-[100vw] h-[110vh] flex flex-col pt-[3rem] items-center gap-10">
      <div className="absolute top-[270%] bg-[#97D4E3] h-[60vh] w-[100vw] z-[-1]"></div>
      <h1 className="text-[60px] font-extrabold">PRODUCTS</h1>
      <p className="text-[22px] text-[#1B3C87] font-medium mt-[-3rem] tracking-wide">
        Here you can see all our products
      </p>
      <div className="flex gap-12 xs:max-md:flex-col">
        <div className="video-card">
          <div className="flex flex-col gap-5">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem]">
              <Image
                src="/papel-product-png.png"
                alt="product-1"
                width={400}
                height={400}
                className="pt-[1rem]"
              />
            </div>
            <div className="flex gap-10 px-[0.8rem]">
              <div className="flex flex-col text-[20px]">
                <h1>Product Name</h1>
                <h1>Quantity 6 Packs</h1>
                <h1>Cost &#8377;300</h1>
              </div>
              <div className="flex flex-col justify-center">
                <h1>Add to cart</h1>
                <div className="flex gap-4">
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-md text-center text-[22px]">
                    -
                  </div>
                  <div className="text-center text-[22px]">1</div>
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-md text-center text-[22px]">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-card">
          <div className="flex flex-col gap-5">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem]">
              <Image
                src="/papel-product-png.png"
                alt="product-1"
                width={400}
                height={400}
                className="pt-[1rem]"
              />
            </div>
            <div className="flex gap-10 px-[0.8rem]">
              <div className="flex flex-col text-[20px]">
                <h1>Product Name</h1>
                <h1>Quantity 12 Packs</h1>
                <h1>Cost &#8377;300</h1>
              </div>
              <div className="flex flex-col justify-center">
                <h1>Add to cart</h1>
                <div className="flex gap-4">
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-md text-center text-[22px]">
                    -
                  </div>
                  <div className="text-center text-[22px]">1</div>
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-md text-center text-[22px]">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-card">
          <div className="flex flex-col gap-5">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem]">
              <Image
                src="/papel-product-png.png"
                alt="product-1"
                width={400}
                height={400}
                className="pt-[1rem]"
              />
            </div>
            <div className="flex gap-10 px-[0.8rem]">
              <div className="flex flex-col text-[20px]">
                <h1>Product Name</h1>
                <h1>Quantity 24 Packs</h1>
                <h1>Cost &#8377;300</h1>
              </div>
              <div className="flex flex-col justify-center">
                <h1>Add to cart</h1>
                <div className="flex gap-4">
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-md text-center text-[22px]">
                    -
                  </div>
                  <div className="text-center text-[22px]">1</div>
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-md text-center text-[22px]">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#1B3C87] w-[16rem] py-[0.3rem] text-white text-[26px] font-extrabold">
        More Products
      </button>
    </div>
  );
};

export default Products;
