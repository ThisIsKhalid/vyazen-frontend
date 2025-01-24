import CallToAction from "@/components/shared/CallToAction/CallToAction";
import CareerCard from "@/components/shared/CareerCard/CareerCard";
import React from "react";

export default function SingleCareerPage() {
  return (
    <>
      <div className="container md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <CareerCard
          title="Product Designer"
          location="Montreal, Canada"
          arrangement="Onsite"
          salaryRange="$50,000 - $80,000/year"
          link="/career/career-a"
          tags={["UI/UX", "Design", "Product"]}
          issuedAt={new Date().toISOString()}
        />
      </div>
      <CallToAction />
    </>
  );
}
