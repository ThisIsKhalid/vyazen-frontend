import OurProducts from "@/components/pages/home/OurProducts";
import AboutUs from "@/components/shared/AboutUs/AboutUs";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <AboutUs />
      <OurProducts />
      <CallToAction />
    </div>
  );
};

export default HomePage;
