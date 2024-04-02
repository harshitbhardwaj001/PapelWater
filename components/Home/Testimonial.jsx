import React from "react";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-20 w-[100vw] h-[110vh] bg-[#97D4E3] items-center justify-center">
      <h1 className="text-[70px] font-extrabold leading-[5rem]">
        TESTIMONIALS
      </h1>
      <div className="flex gap-[4rem]">
        <div className="flex flex-col gap-3 justify-center items-center w-[30vw]">
          <div className="w-[100px] h-[100px] rounded-full bg-[white]"></div>
          <h1 className="text-[28px] font-semibold text-center text-[#1B3C87]">
            Great Cause, Great People & Absolutely Great For The Environment.
          </h1>
          <p className="text-[22px] text-[#1B3C87]">NAME</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center w-[30vw]">
          <div className="w-[100px] h-[100px] rounded-full bg-[white]"></div>
          <h1 className="text-[28px] font-semibold text-center text-[#1B3C87]">
            Great Cause, Great People & Absolutely Great For The Environment.
          </h1>
          <p className="text-[22px] text-[#1B3C87]">NAME</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
