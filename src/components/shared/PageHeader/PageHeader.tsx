import vectorPageHeader from "@/assets/images/page-vector.png";
import Image from "next/image";
import React from "react";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-customGradient h-[292px]">
      <div className="container h-full flex flex-col items-center justify-center relative">
        <h2 className="font-bold md:text-[44px] leading-[49px] tracking-[-0.02em] text-white uppercase">
          {title}
        </h2>
        <p className="font-satoshi text-base text-white mt-4">
          Home / <span className="text-yellow-primary">{subtitle}</span>
        </p>

        <Image
          src={vectorPageHeader}
          alt="Vector Page Header"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute top-0 left-0"
        />
      </div>
    </div>
  );
};

export default PageHeader;
