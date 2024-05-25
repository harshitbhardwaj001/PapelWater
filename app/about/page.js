import About from "@/components/About/About";
import Product from "@/components/About/Product";
import Content from "@/components/About/Content";
import Packaging from "@/components/About/Packaging";
import React from "react";

const page = () => {
  return (
    <div>
      <About />
      <Product />
      <Content/>
      <Packaging/>
    </div>
  );
};

export default page;
