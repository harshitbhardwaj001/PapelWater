import React from "react";

const testimonials = [
  {
    id: 1,
    text: "Great Cause, Great People & Absolutely Great For The Environment.",
    name: "John Doe"
  },
  {
    id: 2,
    text: "Another great testimonial.",
    name: "Jane Smith"
  },
  {
    id: 3,
    text: "Yet another amazing testimonial.",
    name: "Alice Johnson"
  },
  {
    id: 4,
    text: "One more testimonial.",
    name: "Bob Brown"
  },
  {
    id: 5,
    text: "Last testimonial.",
    name: "Emily Wilson"
  }
];

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-20 w-[100vw] h-auto md:py-[8rem] items-center justify-center xs:max-md:px-[2rem] xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-start xs:max-md:h-auto bg-[url('/testimonial.png')] bg-cover bg-no-repeat bg-center">
      <h1 className="text-[70px] font-extrabold leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center">
        TESTIMONIALS
      </h1>
      <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap lg:px-6 gap-[4rem] xs:max-md:flex-col xs:max-md:gap-[2rem]">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="flex flex-col gap-3 justify-center items-center w-[30vw] xs:max-md:w-full">
            <div className="w-[100px] h-[100px] rounded-full bg-[white] xs:max-md:w-[60px] xs:max-md:h-[60px]"></div>
            <h1 className="text-[28px] font-semibold text-center text-[#1B3C87] xs:max-md:text-[20px]">
              {testimonial.text}
            </h1>
            <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[18px]">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap lg:px-6 gap-[4rem] xs:max-md:flex-col xs:max-md:gap-[2rem]">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="flex flex-col gap-3 justify-center items-center w-[30vw] xs:max-md:w-full">
            <div className="w-[100px] h-[100px] rounded-full bg-[white] xs:max-md:w-[60px] xs:max-md:h-[60px]"></div>
            <h1 className="text-[28px] font-semibold text-center text-[#1B3C87] xs:max-md:text-[20px]">
              {testimonial.text}
            </h1>
            <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[18px]">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Testimonial;




// import React from "react";

// const Testimonial = () => {
//   return (
//     <div className="flex flex-col gap-20 w-[100vw] h-auto md:py-[8rem] items-center justify-center xs:max-md:px-[2rem] xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-start xs:max-md:h-auto bg-[url('/testimonial.png')] bg-cover bg-no-repeat bg-center">
//       <h1 className="text-[70px] font-extrabold leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center">
//         TESTIMONIALS
//       </h1>
//       <div className="flex gap-[4rem] xs:max-md:flex-col xs:max-md:gap-[2rem]">
//         <div className="flex flex-col gap-3 justify-center items-center w-[30vw] xs:max-md:w-full">
//           <div className="w-[100px] h-[100px] rounded-full bg-[white] xs:max-md:w-[60px] xs:max-md:h-[60px]"></div>
//           <h1 className="text-[28px] font-semibold text-center text-[#1B3C87] xs:max-md:text-[20px]">
//             Great Cause, Great People & Absolutely Great For The Environment.
//           </h1>
//           <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[18px]">
//             NAME
//           </p>
//         </div>
//         <div className="flex flex-col gap-3 justify-center items-center w-[30vw] xs:max-md:w-full">
//           <div className="w-[100px] h-[100px] rounded-full bg-[white] xs:max-md:w-[60px] xs:max-md:h-[60px]"></div>
//           <h1 className="text-[28px] font-semibold text-center text-[#1B3C87] xs:max-md:text-[20px]">
//             Great Cause, Great People & Absolutely Great For The Environment.
//           </h1>
//           <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[18px]">
//             NAME
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
