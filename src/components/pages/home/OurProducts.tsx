import category from "@/assets/icons/category.png";
import color from "@/assets/icons/color.png";
import featured from "@/assets/icons/feature.png";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Image from "next/image";
import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

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

          {/* Filters */}
          <div className="space-y-4">
            {/* Category */}
            <div className="flex items-center justify-between bg-[#F8F8F8] px-6 py-4 rounded-full ">
              <div className="flex items-center gap-3">
                <Image src={category} alt="category" width={24} height={24} />
                <span className="font-satoshi text-lg font-medium">
                  Category
                </span>
              </div>
              <FiChevronDown className="w-6 h-6 text-black" />
            </div>

            {/* Color Type */}
            <div className="flex items-center justify-between bg-[#F8F8F8] px-6 py-4 rounded-full ">
              <div className="flex items-center gap-3">
                <Image src={color} alt="color" width={24} height={24} />
                <span className="font-satoshi text-lg font-medium">
                  Color Type
                </span>
              </div>
              <FiChevronDown className="w-6 h-6 text-black" />
            </div>

            {/* Featured */}
            <div className="flex items-center justify-between bg-[#F8F8F8] px-6 py-4 rounded-full ">
              <div className="flex items-center gap-3">
                <Image src={featured} alt="featured" width={24} height={24} />
                <span className="font-satoshi text-lg font-medium">
                  Featured
                </span>
              </div>
              <FiChevronDown className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="md:flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
