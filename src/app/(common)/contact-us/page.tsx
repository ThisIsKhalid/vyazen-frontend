import CallToAction from "@/components/shared/CallToAction/CallToAction";
import ContactUsForm from "@/components/pages/ContactUsForm/ContactUsForm";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

export default function ContactUsPage() {
  return <div>
  <PageHeader title="Contact Us" subtitle="Contact Us" />
  <div className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
    <SectionHeader
      subtitle="GET IN TOUCH"
      subtitleClass="white"
      title={
        <>
          <span className="font-bold">Need </span> Assistance
           <br />
          Want to <span className="font-bold"> Collaborate!</span>
        </>
      }
      titleClass="md:text-[64px] md:leading-[74px]"
      align="center"
    />
  </div>
  <div className="container  md:mt-[80px] sm:mt-[70px] mt-[50px]">
  <ContactUsForm />
  </div>
  <FAQ />
  <CallToAction />
</div>;
}
