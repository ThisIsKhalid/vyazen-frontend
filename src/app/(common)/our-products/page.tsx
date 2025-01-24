import CallToAction from "@/components/shared/CallToAction/CallToAction";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

export default function ProductsPage() {
  return (
    <div>
      <PageHeader title="Our Projects" subtitle="Projects" />
      <div className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <SectionHeader
          subtitle="OUR PRODUCTS"
          subtitleClass="white"
          title={
            <>
              <span className="font-bold">Turning </span> Ideas into
              <br />
              Tangible <span className="font-bold"> Outcomes.</span>
            </>
          }
          titleClass="md:text-[64px] md:leading-[74px]"
          align="center"
        />

        {/* projects */}
        <div className="md:mt-20 mt-10 grid grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <FAQ />
      <CallToAction />
    </div>
  );
}
