import avatar from "@/assets/images/comment avatar 2.png";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="relative bg-[#F8F8F8] rounded-[20px]" data-aos="zoom-in">
      {/* Quote Icon */}
      <div className="absolute -top-8 left-8 z-[999]">
        <div className="bg-yellow-primary text-black rounded-full p-4 shadow-md flex items-center justify-center">
          <FaQuoteLeft className="h-6 w-6" />
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center space-x-1 pt-16 px-8 ">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-[#FFC107]" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 mt-5 px-8 ">
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and.
      </p>

      {/* User Information */}
      <div className="flex items-center border-t border-black/10 mt-8 py-4 px-8">
        <Image
          src={avatar}
          width={50}
          height={50}
          alt="User Image"
          className="rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-bold text-black">Alex Johnson</h4>
          <p className="text-gray-500 text-sm">Professional Gamer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
