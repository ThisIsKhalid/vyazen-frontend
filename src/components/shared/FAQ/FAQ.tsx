import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const FAQ = () => {
  return (
    <section className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
      {/* Header Section */}
      <SectionHeader
        subtitle="FAQ"
        subtitleClass="white"
        title={
          <>
            <span className="font-bold">Frequently</span> asked <br />{" "}
            questions!
          </>
        }
        titleClass="md:text-[64px] md:leading-[74px]"
      />
    </section>
  );
};

export default FAQ;
