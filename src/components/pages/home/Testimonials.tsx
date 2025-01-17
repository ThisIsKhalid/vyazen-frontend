import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

const Testimonials = () => {
  return (
    <section className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
      {/* Header Section */}
      <SectionHeader
        subtitle="TESTIMONIALS"
        subtitleClass="white"
        title={
          <>
            <span className="font-bold">Trusted</span> Partner <br /> in Digital{" "}
            <span className="font-bold">Excellence.</span>
          </>
        }
        titleClass="md:text-[64px] md:leading-[74px]"
      />
    </section>
  );
};

export default Testimonials;
