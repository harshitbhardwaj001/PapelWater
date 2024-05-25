import About from "@/components/Story/About";
import Founder from "@/components/Story/Founder";
import Story from "@/components/Story/Story";
import React from "react";

const page = () => {
  return (
    <div>
      <Story />
      <Founder/>
      <About/>
    </div>
  );
};

export default page;
