import React from "react";

const Products = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col pt-[3rem] items-center gap-10">
      <div className="absolute top-[270%] bg-[#97D4E3] h-[50vh] w-[100vw] z-[-1]"></div>
      <h1 className="text-[60px] font-extrabold">PRODUCTS</h1>
      <p className="text-[22px] text-[#1B3C87] font-medium mt-[-3rem] tracking-wide">
        Here you can see all our products
      </p>
      <div className="flex gap-12">
        <div className="video-card">
          <iframe
            width="350"
            height="420"
            src="https://www.youtube.com/embed/9Q9xJ3Hl1wA"
            className="rounded-[3rem] shadow-xl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-card">
          <iframe
            width="350"
            height="420"
            src="https://www.youtube.com/embed/9Q9xJ3Hl1wA"
            className="rounded-[3rem] shadow-xl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-card">
          <iframe
            width="350"
            height="420"
            src="https://www.youtube.com/embed/9Q9xJ3Hl1wA"
            className="rounded-[3rem] shadow-xl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Products;
