import CallToAction from "@/components/shared/CallToAction/CallToAction";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import Services from "../../../components/pages/services/Services";

export default function OurServicesPage() {
  return (
    <div>
      <PageHeader title="Services" subtitle="Services" />
      <div className="container md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <SectionHeader
          subtitle="WHAT WE DO"
          subtitleClass="white"
          title={
            <>
              <span className="font-bold">Innovative </span> Solutions for
              <br />
              Modern<span className="font-bold"> Challenges.</span>
            </>
          }
          titleClass="md:text-[64px] md:leading-[74px]"
          align="center"
        />
      </div>
      <div className="md:mt-[80px]  mt-[50px]">
        <Services />
      </div>
      <FAQ />
      <CallToAction />
    </div>
  );
}
