import Image from "next/image";
import React from "react";

const Subscription = () => {
  return (
    <div className="w-[100vw] h-auto flex justify-center items-center xs:max-md:px-[2rem] xs:max-md:overflow-hidden xs:max-md:justify-end xs:max-md:h-[70vh] xs:max-md:mt-[-3rem] bg-[#78C7D7]">
      <div className="flex flex-col gap-5 w-[40vw] mt-[-1.5rem] xs:max-md:w-full">
        <div>
          <Image
            src="/wave-design-white.png"
            alt="wave"
            width={400}
            height={200}
            className="ml-[-0.8rem] xs:max-md:w-[200px] xs:max-md:ml-[-0.45rem]"
          />
          <h1 className="text-[75px] font-extrabold xs:max-md:text-[30px] ">
            KEEP IN TOUCH
          </h1>
          <p className="text-[28px] text-[#1B3C87] w-[30vw] xs:max-md:text-[22px] xs:max-md:w-full">
            Sign up with your email address to connect with us.
          </p>
        </div>
        <div className="xs:max-md:flex xs:max-md:flex-col xs:max-md:relative">
          <div className="flex flex-col gap-5 xs:max-md:gap-3">
            <input
              type="email"
              placeholder="Email Id"
              className="w-[43rem] h-[3rem] px-[1rem] py-[1rem] text-[22px] font-medium xs:max-md:w-[70vw] "
            />
            <button className="bg-[#1B3C87] w-[10rem] py-[0.3rem] text-white text-[27px] font-extrabold xs:max-md:w-[5.5rem] xs:max-md:text-[15px]">
              SIGN UP
            </button>
          </div>
          <div>
            <Image
              src="/character-with-product-1.png"
              alt="ModelImage"
              width={705}
              height={600}
              className="md:hidden absolute top-[-20%] xs:max-md:left-[25%]"
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/character-with-product-1.png"
          alt="ModelImage"
          width={705}
          height={600}
          className="xs:max-md:hidden"
        />
      </div>
    </div>
  );
};

export default Subscription;
