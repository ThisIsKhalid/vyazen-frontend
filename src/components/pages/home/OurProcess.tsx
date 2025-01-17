import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

const OurProcess = () => {
  return (
    <section className="bg-customGradient md:mt-[140px] sm:mt-[70px] mt-[50px]">
      <div className="container md:py-[140px] sm:py-[70px] py-[50px]">
        <SectionHeader
          subtitle="OUR PROCESS"
          subtitleClass="gradient"
          title={
            <>
              Our <span className="font-bold">process is</span> designed to{" "}
              <br />
              ensure seamless{" "}
              <span className="font-bold">
                collaboration and <br /> exceptional
              </span>{" "}
              results.
            </>
          }
          titleClass="md:text-[44px] md:leading-[54px] text-white"
        />
      </div>
    </section>
  );
};

export default OurProcess;
