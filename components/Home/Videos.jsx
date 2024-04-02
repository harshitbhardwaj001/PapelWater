import React from "react";

const Videos = () => {
  return (
    <div className="w-[100vw] h-[120vh] flex flex-col pt-[3rem] items-center gap-10">
      <h1 className="text-[60px] font-extrabold">VIDEOS</h1>
      <p className="text-[22px] text-[#1B3C87] font-medium mt-[-3.7rem]">
        Here you can see small videos we made with influencers
      </p>
      <div className="flex gap-12">
        <div className="video-card">
          <iframe
            width="350"
            height="550"
            src="https://www.youtube.com/embed/9Q9xJ3Hl1wA"
            className="rounded-[3rem] shadow-xl xs:max-md:w-[200px] xs:max-md:h-[300px]"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-card">
          <iframe
            width="350"
            height="550"
            src="https://www.youtube.com/embed/9Q9xJ3Hl1wA"
            className="rounded-[3rem] shadow-xl xs:max-md:w-[200px] xs:max-md:h-[300px]"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-card xs:max-md:hidden">
          <iframe
            width="350"
            height="550"
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

export default Videos;
