import projectImg from "@/assets/images/project.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProductCard = () => {
  return (
    <div
      className=" bg-white rounded-[20px] shadow-lg overflow-hidden"
      data-aos="fade-up"
    >
      {/* Image Section */}
      <div className="h-[300px] md:h-[444px] relative">
        <Image
          src={projectImg}
          alt="Product"
          layout="fill"
          objectFit="cover"
          className="rounded-t-[20px]"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4">
        <div className="p-4 md:p-8">
          <h2 className="font-semibold text-2xl leading-[42px] text-black">
            Vyatech
          </h2>
          <p className="font-satoshi text-base font-medium text-black/50">
            Vyatech is a cutting-edge Webflow template designed specifically for
            financial SaaS businesses.
          </p>
        </div>
        <hr className="border border-black/10" />

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-auto p-4 md:p-8">
          <p className="font-satoshi font-bold text-[18px] leading-[42px] text-black">
            $79 USD
          </p>
          <Link
            href="/our-products/some-product"
            className="flex items-center gap-2 font-satoshi font-bold text-[18px] leading-[42px] text-black hover:text-yellow-500 transition-colors duration-300 ease-in-out"
          >
            PREVIEW
            <MdOutlineArrowOutward className="font-bold text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
