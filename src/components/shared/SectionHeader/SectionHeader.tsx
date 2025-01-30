import cn from "@/lib/cn";
import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  subtitleClass: "white" | "gradient";
  title: React.ReactNode;
  titleClass?: string;
  button?: React.ReactNode;
  align?: "left" | "center";
}

const SectionHeader = ({
  subtitle,
  title,
  button,
  titleClass,
  subtitleClass,
  align = "left",
}: SectionHeaderProps) => {
  return (
    <div
      className={cn("flex", {
        "md:flex-row flex-col items-center justify-center md:items-start md:justify-start gap-x-0 md:gap-x-3 gap-y-8 md:gap-y-0":
          align === "left",
        "flex-col gap-y-8": align === "center",
      })}
    >
      {/* Subtitle */}

      <div
        className={cn("", {
          "md:flex-none md:w-[35%] w-full text-center md:text-left":
            align === "left",
          "text-center": align === "center",
        })}
        data-aos="fade-up"
      >
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
      <div
        className={cn({
          "md:flex-1": align === "left",
          "": align === "center",
        })}
      >
        <h2
          className={cn("font-light text-2xl tracking-[-0.02em]", titleClass, {
            "md:text-left text-center": align === "left",
            "text-center": align === "center",
          })}
          data-aos="fade-up"
        >
          {title}
        </h2>
        {button && (
          <div
            className="mt-5 md:mt-10 flex items-center justify-center md:justify-start md:items-start"
            data-aos="fade-up"
          >
            {button}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
