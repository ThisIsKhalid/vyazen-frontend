import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

const OurProducts = () => {
  return (
    <section className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
      <SectionHeader
        subtitle="OUR PRODUCTS"
        subtitleClass="white"
        title={
          <>
            <span className="font-bold">Turning</span> Ideas into <br />
            Tangible <span className="font-bold">Outcomes</span>
          </>
        }
        titleClass="lg:text-[64px] lg:leading-[74px] md:text-[48px] md:leading-[58px]"
      />
    </section>
  );
};

export default OurProducts;
