import React from "react";

const testimonials = [
  {
    id: 1,
    text: "Since switching to Papel alkaline water, I've felt more energized throughout the day. It's become an essential part of my routine, keeping me refreshed and focused during workouts and at work.",
    name: "Aakash Shah",
  },
  {
    id: 2,
    text: "Papel alkaline water isn't just about hydration; it's about feeling good from the inside out. The smooth taste and balanced pH have made a noticeable difference in how I feel every day",
    name: "Diana D'souza",
  },
  {
    id: 3,
    text: "Papel alkaline water has become a staple in my wellness journey. Its high pH and clean taste make staying hydrated a pleasure, helping me maintain my overall health and well-being",
    name: "Rahul Malhotra",
  },
  {
    id: 4,
    text: "Choosing Papel alkaline water was a game-changer for me. It's not just water; it's a commitment to staying healthy and hydrated, no matter where life takes me.",
    name: "Jenny Barucha",
  },
  {
    id: 5,
    text: "Papel alkaline water has redefined my hydration experience. Its smooth taste and alkaline properties make me feel revitalized and balanced, making it a must-have in my daily routine",
    name: "Celina Mathew",
  },
  {
    id: 6,
    text: "Switching to Papel alkaline water was a game-changer for me. The taste and alkaline benefits have transformed my hydration routine, leaving me feeling refreshed and ready to conquer each day.",
    name: "Pratham Kapoor",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-20 w-[100vw] h-auto md:py-[8rem] items-center justify-center xs:max-md:px-[2rem] xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-start xs:max-md:h-auto bg-[url('/testimonial.png')] bg-cover bg-no-repeat bg-center">
      <h1 className="text-[70px] font-gilroybold tracking-wide leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center">
        TESTIMONIALS
      </h1>
      <div className="relative">
        <div className="flex animate-marquee lg:px-6 gap-[10rem] xs:max-md:flex-col xs:max-md:gap-[2rem]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-3 justify-top items-center w-[30vw] xs:max-md:w-full"
            >
              <div className="w-[100px] h-[100px] rounded-full bg-[white] xs:max-md:w-[60px] xs:max-md:h-[60px]"></div>
              <h1 className="text-[18px] font-gilroybold text-center text-[#1B3C87] xs:max-md:text-[20px]">
                {testimonial.text}
              </h1>
              <p className="text-[16px] font-gilroyregular text-[#1B3C87] xs:max-md:text-[18px]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 lg:px-6 gap-[10rem] xs:max-md:flex-col xs:max-md:gap-[2rem]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-3 justify-top items-center w-[30vw] xs:max-md:w-full"
            >
              <div className="w-[100px] h-[100px] rounded-full bg-[white] xs:max-md:w-[60px] xs:max-md:h-[60px]"></div>
              <h1 className="text-[18px] font-gilroybold text-center text-[#1B3C87] xs:max-md:text-[20px]">
                {testimonial.text}
              </h1>
              <p className="text-[16px] font-gilroyregular text-[#1B3C87] xs:max-md:text-[18px]">
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
