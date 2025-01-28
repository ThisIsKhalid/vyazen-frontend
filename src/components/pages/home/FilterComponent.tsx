"use client";

import cn from "@/lib/cn";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FilterComponent = () => {
  const filterOptions = [
    {
      label: "Category",
      icon: "/category-icon.png",
      options: ["Test 1", "Test 2", "Test 3"],
    },
    {
      label: "Color Type",
      icon: "/color-icon.png",
      options: ["Test 1", "Test 2", "Test 3"],
    },
    {
      label: "Featured",
      icon: "/featured-icon.png",
      options: ["Test 1", "Test 2", "Test 3"],
    },
  ];

  const [expandedFilter, setExpandedFilter] = useState<number | null>(null);

  const toggleFilter = (index: number) => {
    setExpandedFilter(expandedFilter === index ? null : index);
  };
  return (
    <div className="space-y-4">
      {filterOptions.map((filter, index) => (
        <div
          key={index}
          className={cn(
            " py-4 rounded-2xl h-fit transition-all duration-300 ease-in-out ",
            {
              "bg-[#F8F8F8]": expandedFilter !== index,
              "bg-yellow-primary": expandedFilter === index,
            }
          )}
        >
          <div
            className="flex justify-between items-center cursor-pointer gap-1 md:gap-2 px-6 "
            onClick={() => toggleFilter(index)}
          >
            <div className="flex items-center gap-3">
              {/* Dynamic Icon (optional) */}
              <span className="font-satoshi text-lg font-medium">
                {filter.label}
              </span>
            </div>
            <button
              className={`transform transition-transform duration-300 md:p-2.5 p-1 rounded-full bg-[#F8F8F8]`}
            >
              {expandedFilter === index ? (
                <FiChevronUp className="text-black" />
              ) : (
                <FiChevronDown className="text-black" />
              )}
            </button>
          </div>

          {/* Dropdown Content */}
          <div
            className={`overflow-hidden transition-all ${
              expandedFilter === index
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4">
              {filter.options.map((option, idx) => (
                <div
                  key={idx}
                  className=" px-8 py-2 hover:bg-white cursor-pointer transition"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
