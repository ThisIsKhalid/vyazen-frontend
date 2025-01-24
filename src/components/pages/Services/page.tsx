import Image from "next/image";
import uxImage from "@/assets/images/ux ui design.png";
import webDevImage from "@/assets/images/web dev.png";
import brandingImage from "@/assets/images/branding identity.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="grid gap-6 md:gap-8 container sm:grid-cols-1 lg:grid-cols-2 ">
      {/* Card 1 - UX/UI Design */}
      
     <div className="bg-[#F8F8F8]  w-[636px] rounded-xl shadow-lg flex items-center">
       {/* Left Content */}
       <div className="flex flex-col flex-1 px-6 space-y-4">
        {/* Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium ">UX</span>
        </div>
        {/* Title */}
        <h3 className="text-2xl font-semibold">UX/UI Design</h3>
        {/* Description */}
        <p className="text-black-secondary text-base font-medium  w-[279px]">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        <div className="border-b "></div>
        {/* View Details Button */}
        <div>
        <Link
        href={`/our-services/ux-ui-design`}
        className="inline-flex items-center  font-bold hover:underline w-fit group "
      >
        View Details
        <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={268}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
   
    </div>

      {/* Card 2 - Web Development */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
      {/* Left Content */}
      <div className="flex flex-col flex-1 space-y-4">
        {/* Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
          <span className="text-sm font-medium">UX</span>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold">UX/UI Design</h3>
        {/* Description */}
        <p className="text-gray-600">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        {/* View Details Button */}
        <div>
          <button className="flex items-center text-yellow-500 font-medium hover:underline">
            View Details
            <span className="ml-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white rounded-full">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
    </div>

      {/* Card 3 - Branding & Identity */}
      <div className="bg-white p-6 rounded-xl shadow-lg col-span-2 flex items-center">
      {/* Left Content */}
      <div className="flex flex-col flex-1 space-y-4">
        {/* Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
          <span className="text-sm font-medium">UX</span>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold">UX/UI Design</h3>
        {/* Description */}
        <p className="text-gray-600">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        {/* View Details Button */}
        <div>
          <button className="flex items-center text-yellow-500 font-medium hover:underline">
            View Details
            <span className="ml-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white rounded-full">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
    {/* Card 4 - Web Development */}
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
      {/* Left Content */}
      <div className="flex flex-col flex-1 space-y-4">
        {/* Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
          <span className="text-sm font-medium">UX</span>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold">UX/UI Design</h3>
        {/* Description */}
        <p className="text-gray-600">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        {/* View Details Button */}
        <div>
          <button className="flex items-center text-yellow-500 font-medium hover:underline">
            View Details
            <span className="ml-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white rounded-full">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
    </div>

      {/* Card 5 - Web Development */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
      {/* Left Content */}
      <div className="flex flex-col flex-1 space-y-4">
        {/* Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
          <span className="text-sm font-medium">UX</span>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold">UX/UI Design</h3>
        {/* Description */}
        <p className="text-gray-600">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        {/* View Details Button */}
        <div>
          <button className="flex items-center text-yellow-500 font-medium hover:underline">
            View Details
            <span className="ml-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white rounded-full">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
       {/* Card 6 - Branding & Identity */}
       <div className="bg-white p-6 rounded-xl shadow-lg col-span-2 flex items-center">
      {/* Left Content */}
      <div className="flex flex-col flex-1 space-y-4">
        {/* Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
          <span className="text-sm font-medium">UX</span>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold">UX/UI Design</h3>
        {/* Description */}
        <p className="text-gray-600">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        {/* View Details Button */}
        <div>
          <button className="flex items-center text-yellow-500 font-medium hover:underline">
            View Details
            <span className="ml-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white rounded-full">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
     {/* Card 7 - Web Development */}
     <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
      {/* Left Content */}
      <div className="flex flex-col flex-1 space-y-4">
        {/* Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
          <span className="text-sm font-medium">UX</span>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold">UX/UI Design</h3>
        {/* Description */}
        <p className="text-gray-600">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        {/* View Details Button */}
        <div>
          <button className="flex items-center text-yellow-500 font-medium hover:underline">
            View Details
            <span className="ml-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white rounded-full">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
    </div>

      {/* Card 8 - Web Development */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
      {/* Left Content */}
      <div className="flex flex-col flex-1 space-y-4">
        {/* Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
          <span className="text-sm font-medium">UX</span>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold">UX/UI Design</h3>
        {/* Description */}
        <p className="text-gray-600">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        {/* View Details Button */}
        <div>
          <button className="flex items-center text-yellow-500 font-medium hover:underline">
            View Details
            <span className="ml-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white rounded-full">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
    </div>
  );
}
