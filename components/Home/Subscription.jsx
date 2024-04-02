import Image from "next/image";
import React from "react";

const Subscription = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex bg-[#97D4E3] justify-center items-center">
      <div className="flex flex-col gap-5 w-[40vw] mt-[-1.5rem]">
        <div>
          <Image
            src="/wave-design-white.png"
            alt="wave"
            width={400}
            height={200}
            className="ml-[-0.8rem]"
          />
          <h1 className="text-[75px] font-extrabold">KEEP IN TOUCH</h1>
          <p className="text-[28px] text-[#1B3C87] w-[30vw]">
            Sign up with your email address to connect with us.
          </p>
        </div>
        <input
          type="email"
          placeholder="Email Id"
          className="w-[43rem] h-[3rem] px-[1rem] py-[1rem] text-[22px] font-medium"
        />
        <button className="bg-[#1B3C87] w-[10rem] py-[0.3rem] text-white text-[27px] font-extrabold">
          SIGN UP
        </button>
      </div>
      <div>
        <Image
          src="/character-with-product-1.png"
          alt="ModelImage"
          width={705}
          height={600}
        />
      </div>
    </div>
  );
};

export default Subscription;
