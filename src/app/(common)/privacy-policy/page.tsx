import PrivacyPolicy from "@/components/pages/privacyPolicy/privacyAndPolicy";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import React from "react";


export default function TermsConditions() {
  return (
    <div>
      <PageHeader title="Privacy Policy" subtitle="Privacy Policy" />

      <div className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <PrivacyPolicy/>
      </div>
      <FAQ />
      <CallToAction />
    </div>
  );
}
