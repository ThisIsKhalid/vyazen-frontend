import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import InfoCard from "./InfoCard";

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
              <br className="hidden md:block" />
              ensure seamless{" "}
              <span className="font-bold">
                collaboration and <br /> exceptional
              </span>{" "}
              results.
            </>
          }
          titleClass="md:text-[44px] md:leading-[54px] text-white"
          button={
            <button className="bg-yellow-primary text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition font-bold text-base font-satoshi">
              Contact With Us
            </button>
          }
        />

        <div className="mt-24">
          {/* info card */}
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
