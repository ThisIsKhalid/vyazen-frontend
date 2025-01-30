import React from "react";
import { FaSearch } from "react-icons/fa";

const InfoCard = () => {
  return (
    <div
      className=" bg-white/5 text-white rounded-3xl px-8 py-10 shadow-md"
      data-aos="zoom-in"
    >
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div className="flex items-center justify-center bg-yellow-primary text-black rounded-full w-20 h-20">
          <FaSearch className="h-9 w-9" />
        </div>
        {/* Step Number */}
        <div className=" bg-white/10 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold border border-white/10">
          01
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-6">
        <h3 className="text-[28px] font-semibold leading-[42px] tracking-[-0.02em] text-left">
          Discovery & Planning.
        </h3>

        <p className="font-satoshi text-[16px] font-medium leading-[24px] text-left text-gray-300 mt-4">
          We begin by understanding your goals, target audience, & unique
          challenges to lay a solid foundation.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
