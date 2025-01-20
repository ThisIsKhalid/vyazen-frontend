import AboutUs from "@/components/shared/AboutUs/AboutUs";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

export default function AboutUsPage() {
  return (
    <div>
      <PageHeader title="About Us" subtitle="About Us" />
      <div className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <SectionHeader
          subtitle="ABOUT US"
          subtitleClass="white"
          title={
            <>
              <span className="font-bold">Building</span> Digital <br />
              <span className="font-bold">Futures</span> Together
            </>
          }
          titleClass="lg:text-[64px] lg:leading-[74px] md:text-[48px] md:leading-[58px]"
          align="center"
        />
      </div>
      <AboutUs />
      <FAQ />
      <CallToAction />
    </div>
  );
}
