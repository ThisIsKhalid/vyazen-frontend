import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
  titleClass?: string;
  button?: React.ReactNode;
  alignment?: "left" | "center"; // Optional alignment prop
  extraClasses?: string; // Optional for custom styling
}

const SectionHeader = ({ subtitle, title, button }: SectionHeaderProps) => {
  return (
    <div
      className={`grid md:grid-cols-3 grid-cols-1 gap-x-2 gap-y-2 md:gap-y-0`}
    >
      {/* Subtitle */}

      <div className="mt-1">
        <span className="py-1.5 px-8 rounded-full bg-[#F8F8F8] font-satoshi font-bold text-base tracking-[8px] uppercase shadow-[1px_3px_1px_0px_rgba(255,255,255,0.2)] text-nowrap">
          {subtitle}
        </span>
      </div>

      {/* Title */}
      <div className="md:col-span-2">
        <h2 className="font-light text-4xl leading-[46px] md:text-[44px] md:leading-[54px] tracking-[-0.02em] text-left">
          {title}
        </h2>
        {button && <div className="mt-5 md:mt-10">{button}</div>}
      </div>
    </div>
  );
};

export default SectionHeader;
