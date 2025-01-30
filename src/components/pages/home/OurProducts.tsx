import ProductCard from "@/components/shared/ProductCard/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

import React from "react";
import { FiSearch } from "react-icons/fi";
import FilterComponent from "./FilterComponent";

const OurProducts = () => {
  return (
    <section className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
      <SectionHeader
        subtitle="OUR PRODUCTS"
        subtitleClass="white"
        title={
          <>
            <span className="font-bold">Turning</span> Ideas into <br />
            Tangible <span className="font-bold">Outcomes</span>
          </>
        }
        titleClass="lg:text-[64px] lg:leading-[74px] md:text-[48px] md:leading-[58px]"
      />

      {/* content */}
      <div className="flex flex-col md:flex-row md:mt-20 mt-10 gap-14">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Templates"
              className="w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#F8F8F8] rounded-full placeholder:font-satoshi text-lg font-medium px-6 py-4"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="bg-yellow-primary w-10 h-10 rounded-full flex items-center justify-center">
                <FiSearch className="text-black w-5 h-5" />
              </div>
            </button>
          </div>

          {/*  Filters */}
          <FilterComponent />
        </div>

        {/* Product Cards Section */}
        <div
          className="md:flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6"
          data-aos="fade-up"
        >
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
