import cn from "@/lib/cn";
import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  subtitleClass: "white" | "gradient";
  title: React.ReactNode;
  titleClass?: string;
  button?: React.ReactNode;
}

const SectionHeader = ({
  subtitle,
  title,
  button,
  titleClass,
  subtitleClass,
}: SectionHeaderProps) => {
  return (
    <div
      className={`grid md:grid-cols-3 grid-cols-1 gap-x-2 gap-y-2 md:gap-y-0`}
    >
      {/* Subtitle */}

      <div className="mt-1">
        <span
          className={cn(
            "py-1.5 px-8 rounded-full font-satoshi font-bold text-base tracking-[8px] uppercase shadow-[1px_3px_1px_0px_rgba(255,255,255,0.2)] text-nowrap",
            {
              "bg-[#F8F8F8] text-black": subtitleClass === "white",
              "bg-customGradient text-white": subtitleClass === "gradient",
            }
          )}
        >
          {subtitle}
        </span>
      </div>

      {/* Title */}
      <div className="md:col-span-2">
        <h2
          className={cn(
            "font-light text-4xl leading-[46px] tracking-[-0.02em] text-left",
            titleClass
          )}
        >
          {title}
        </h2>
        {button && <div className="mt-5 md:mt-10">{button}</div>}
      </div>
    </div>
  );
};

export default SectionHeader;
