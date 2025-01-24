"use client";

import CallToAction from "@/components/shared/CallToAction/CallToAction";
import CareerCard from "@/components/shared/CareerCard/CareerCard";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

export default function CareerPage() {
  return (
    <div>
      <PageHeader title="Career" subtitle="Career" />
      <div className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <SectionHeader
          subtitle="CAREER FOR YOU"
          subtitleClass="white"
          title={
            <>
              <span className="font-bold">Empowering </span> Careers
              <br />
              Driving<span className="font-bold"> Success.</span>
            </>
          }
          titleClass="md:text-[64px] md:leading-[74px]"
          align="center"
        />
      </div>
      <div className="container md:mt-20 mt-10 flex flex-col gap-y-10">
        <CareerCard
          title="Product Designer"
          location="Montreal, Canada"
          arrangement="Onsite"
          salaryRange="$50,000 - $80,000/year"
          link="/career/career-a"
        />
        <CareerCard
          title="Product Designer"
          location="Montreal, Canada"
          arrangement="Onsite"
          salaryRange="$50,000 - $80,000/year"
          link="/career/career-a"
        />
        <CareerCard
          title="Product Designer"
          location="Montreal, Canada"
          arrangement="Onsite"
          salaryRange="$50,000 - $80,000/year"
          link="/career/career-a"
        />
        <CareerCard
          title="Product Designer"
          location="Montreal, Canada"
          arrangement="Onsite"
          salaryRange="$50,000 - $80,000/year"
          link="/career/career-a"
        />
      </div>
      <FAQ />
      <CallToAction />
    </div>
  );
}
