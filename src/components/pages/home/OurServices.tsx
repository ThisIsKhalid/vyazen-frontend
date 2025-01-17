import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

const OurServices = () => {
  return (
    <section className="bg-customGradient md:mt-[140px] sm:mt-[70px] mt-[50px]">
      <div className="container md:py-[140px] sm:py-[70px] py-[50px]">
        <SectionHeader
          subtitle="OUR SERVICES"
          subtitleClass="gradient"
          title={
            <>
              <span className="font-bold">Innovative</span> Solutions for <br />
              Modern <span className="font-bold">Challenges.</span>
            </>
          }
          titleClass="md:text-[64px] md:leading-[74px] text-white"
        />
      </div>
    </section>
  );
};

export default OurServices;
