import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="xs:max-md:relative w-[100vw] h-[110vh] xs:max-md:h-[230vh] flex flex-col pt-[10rem] items-center gap-10 xs:max-md:pt-[5vh]">
      
      <h1 className="text-[60px] font-extrabold xs:max-md:text-[45px]">
        PRODUCTS
      </h1>
      <p className="text-[22px] text-[#1B3C87] font-medium mt-[-3rem] tracking-wide xs:max-md:text-[13px] xs:max-md:mt-[-3rem] xs:max-md:text-center">
        Here you can see all our products
      </p>
      <div className="flex gap-12 xs:max-md:flex-col xs:max-md:items-center">
        <div className="video-card">
          <div className="flex flex-col gap-5 xs:max-md:items-center">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem] xs:max-md:w-[67vw] xs:max-md:h-[42vh]">
              <Image
                src="/papel-product-png.png"
                alt="product-1"
                width={400}
                height={400}
                className="pt-[1rem]"
              />
            </div>
            <div className="flex gap-10 px-[0.8rem] xs:max-md:gap-5">
              <div className="flex flex-col text-[20px] xs:max-md:text-[15px]">
                <h1>Product Name</h1>
                <h1>Quantity 6 Packs</h1>
                <h1>Cost &#8377;300</h1>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="xs:max-md:text-[11px]">Add to cart</h1>
                <div className="flex gap-4 xs:max-md:gap-2">
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]">
                    -
                  </div>
                  <div className="text-center text-[22px]">1</div>
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-card">
          <div className="flex flex-col gap-5 xs:max-md:items-center">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem] xs:max-md:w-[67vw] xs:max-md:h-[42vh]">
              <Image
                src="/papel-product-png.png"
                alt="product-1"
                width={400}
                height={400}
                className="pt-[1rem]"
              />
            </div>
            <div className="flex gap-10 px-[0.8rem] xs:max-md:gap-5">
              <div className="flex flex-col text-[20px] xs:max-md:text-[15px]">
                <h1>Product Name</h1>
                <h1>Quantity 12 Packs</h1>
                <h1>Cost &#8377;300</h1>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="xs:max-md:text-[11px]">Add to cart</h1>
                <div className="flex gap-4 xs:max-md:gap-2">
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]">
                    -
                  </div>
                  <div className="text-center text-[22px]">1</div>
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-card">
          <div className="flex flex-col gap-5 xs:max-md:items-center">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem] xs:max-md:w-[67vw] xs:max-md:h-[42vh]">
              <Image
                src="/papel-product-png.png"
                alt="product-1"
                width={400}
                height={400}
                className="pt-[1rem]"
              />
            </div>
            <div className="flex gap-10 px-[0.8rem] xs:max-md:gap-5">
              <div className="flex flex-col text-[20px] xs:max-md:text-[15px]">
                <h1>Product Name</h1>
                <h1>Quantity 24 Packs</h1>
                <h1>Cost &#8377;300</h1>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="xs:max-md:text-[11px]">Add to cart</h1>
                <div className="flex gap-4 xs:max-md:gap-2">
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]">
                    -
                  </div>
                  <div className="text-center text-[22px]">1</div>
                  <div className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]">
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
