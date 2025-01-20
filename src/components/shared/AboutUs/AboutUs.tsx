import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <section className="container md:mt-[140px] sm:mt-[70px] mt-[50px]">
      {/* Header Section */}
      <SectionHeader
        subtitle="ABOUT US"
        subtitleClass="white"
        title={
          <>
            We specialize in <span className="font-bold">delivering</span>{" "}
            tailored solutions that empower{" "}
            <span className="font-bold">businesses to</span>{" "}
            <span className="font-bold">achieve their</span> full potential.
          </>
        }
        titleClass="md:text-[44px] md:leading-[54px]"
        button={
          <button className="bg-yellow-primary text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition font-bold text-base font-satoshi">
            Contact With Us
          </button>
        }
      />

      {/* Statistics Section */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 border-blue-500">
        <div className="  p-6 md:p-12">
          <h3 className="font-bold text-center md:text-left tracking-[-0.02em]  text-[64px] leading-[64px]">
            98%
          </h3>
          <p className="text-black/50 font-medium text-sm leading-[22px] mt-4">
            Satisfied clients and reporting
          </p>
        </div>
        <div className="  p-6 md:p-12">
          <h3 className="font-bold text-center md:text-left tracking-[-0.02em]  text-[64px] leading-[64px]">
            12+
          </h3>
          <p className="text-black/50 font-medium text-sm leading-[22px] mt-4">
            Years of experience that we have
          </p>
        </div>
        <div className="  p-6 md:p-12">
          <h3 className="font-bold text-center md:text-left tracking-[-0.02em]  text-[64px] leading-[64px]">
            86+
          </h3>
          <p className="text-black/50 font-medium text-sm leading-[22px] mt-4">
            Successfull projects I completed
          </p>
        </div>
        <div className="  p-6 md:p-12">
          <h3 className="font-bold text-center md:text-left tracking-[-0.02em]  text-[64px] leading-[64px]">
            20+
          </h3>
          <p className="text-black/50 font-medium text-sm leading-[22px] mt-4">
            Awards won and more counting
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
