import projectImg from "@/assets/images/project.png";
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ProductCard = () => {
  return (
    <div className=" bg-white rounded-[20px] shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="h-[444px] relative">
        <Image
          src={projectImg}
          alt="Product"
          layout="fill"
          objectFit="cover"
          className="rounded-t-[20px]"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-4">
        <div className="">
          <h2 className="font-satoshi font-semibold text-[20px] leading-[24px] text-black">
            Vyatech
          </h2>
          <p className="font-satoshi text-[16px] font-medium leading-[24px] text-gray-600">
            Vyatech is a cutting-edge Webflow template designed specifically for
            financial SaaS businesses.
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-auto">
          <span className="font-satoshi font-bold text-[18px] leading-[24px] text-black">
            $79 USD
          </span>
          <button className="flex items-center gap-2 font-satoshi font-medium text-[16px] text-blue-500 hover:underline">
            PREVIEW
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
