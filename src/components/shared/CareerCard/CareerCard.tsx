"use client";

import React from "react";

interface CareerCardProps {
  title: string;
  location: string;
  arrangement: string;
  salaryRange: string;
  onApply: () => void;
}

const CareerCard = ({
  title,
  location,
  arrangement,
  salaryRange,
  onApply,
}: CareerCardProps) => {
  return (
    <div className="bg-[#F8F8F8] shadow-lg rounded-md border border-[#FFFFFF14] px-5 md:px-10 py-3.5 md:py-9">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3">
        <h3 className="font-sora text-2xl md:text-[28px] font-semibold leading-6 md:leading-[30px] tracking-[-0.02em]">
          {title}
        </h3>

        <button
          onClick={onApply}
          className="text-black font-satoshi text-lg font-bold px-[33px] py-[12px] rounded-full bg-white hover:bg-yellow-primary shadow-md text-center w-full md:w-auto"
        >
          Apply Now
        </button>
      </div>
      <hr className="my-8 border border-black/10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="font-satoshi text-base font-medium text-black/50 mb-1">
            Location
          </p>
          <h3 className="text-lg md:text-[22px] font-semibold leading-5 md:leading-[24px] tracking-[-0.02em] text-black">
            {location}
          </h3>
        </div>
        <div>
          <p className="font-satoshi text-base font-medium text-black/50 mb-1">
            Arrangement
          </p>
          <h3 className="text-lg md:text-[22px] font-semibold leading-5 md:leading-[24px] tracking-[-0.02em] text-black">
            {arrangement}
          </h3>
        </div>
        <div>
          <p className="font-satoshi text-base font-medium text-black/50 mb-1">
            Salary Range
          </p>
          <h3 className="text-lg md:text-[22px] font-semibold leading-5 md:leading-[24px] tracking-[-0.02em] text-black">
            {salaryRange}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
