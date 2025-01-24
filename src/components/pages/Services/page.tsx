import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import uxImage from "@/assets/images/ux-ui-design.png";
import brandingImage from "@/assets/images/branding-identity.png";
import webDevImage from "@/assets/images/web-dev.png";
import appDevImage from "@/assets/images/app-dev.png";
import digitalMarketing from "@/assets/images/digital-marketing.png";
import motionGraphics from "@/assets/images/motion-grapics.png";
import productDesign from "@/assets/images/product-design.png";
import graphicsDesign from "@/assets/images/ux-ui-design.png";

export default function Services() {
  return (
    <div className="max-w-[1296px] mx-auto flex flex-wrap gap-6 md:gap-8 justify-center">
    {/* Card 1 - UX/UI Design */}
    <div className="bg-[#F8F8F8] max-w-[636px] h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
      <div className="flex flex-col flex-1 px-6 space-y-4">
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium">UX</span>
        </div>
        <h3 className="text-2xl font-semibold">UX/UI Design</h3>
        <p className="text-black-secondary text-base font-medium">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        <div className="border-b"></div>
        <div>
          <Link
            href={`/our-services/ux-ui-design`}
            className="inline-flex items-center font-bold hover:underline w-fit group"
          >
            View Details
            <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <Image
          src={uxImage}
          alt="UX/UI Design"
          width={268}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  
    {/* Card 2 - Digital Marketing */}
    <div className="bg-[#F8F8F8] max-w-[636px] h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
      <div className="flex flex-col flex-1 px-6 space-y-4">
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium">DM</span>
        </div>
        <h3 className="text-2xl font-semibold">Digital Marketing</h3>
        <p className="text-black-secondary text-base font-medium">
          Unlock the power of digital marketing to grow your business and connect with your audience.
        </p>
        <div className="border-b"></div>
        <div>
          <Link
            href={`/our-services/digital-marketing`}
            className="inline-flex items-center font-bold hover:underline w-fit group"
          >
            View Details
            <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <Image
          src={webDevImage}
          alt="Digital Marketing"
          width={268}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  
    {/* Card 3 - Branding & Identity */}
    <div className="bg-[#F8F8F8] rounded-xl h-[380px] shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] max-w-full">
      <div className="flex flex-col flex-1 px-6 space-y-4">
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium">BI</span>
        </div>
        <h3 className="text-2xl font-semibold">Branding & Identity</h3>
        <p className="text-black-secondary text-base font-medium">
          Build a strong brand identity that resonates with your customers and sets you apart.
        </p>
        <div className="border-b"></div>
        <div>
          <Link
            href={`/our-services/branding-identity`}
            className="inline-flex items-center font-bold hover:underline w-fit group"
          >
            View Details
            <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <Image
          src={brandingImage}
          alt="Branding & Identity"
          width={636}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
    </div>

     {/* Card 4 - UX/UI Design */}
     <div className="bg-[#F8F8F8] max-w-[636px] h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
      <div className="flex flex-col flex-1 px-6 space-y-4">
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium">UX</span>
        </div>
        <h3 className="text-2xl font-semibold">UX/UI Design</h3>
        <p className="text-black-secondary text-base font-medium">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        <div className="border-b"></div>
        <div>
          <Link
            href={`/our-services/ux-ui-design`}
            className="inline-flex items-center font-bold hover:underline w-fit group"
          >
            View Details
            <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <Image
          src={appDevImage}
          alt="UX/UI Design"
          width={268}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  
    {/* Card 5 - Digital Marketing */}
    <div className="bg-[#F8F8F8] max-w-[636px] h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
      <div className="flex flex-col flex-1 px-6 space-y-4">
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium">DM</span>
        </div>
        <h3 className="text-2xl font-semibold">Digital Marketing</h3>
        <p className="text-black-secondary text-base font-medium">
          Unlock the power of digital marketing to grow your business and connect with your audience.
        </p>
        <div className="border-b"></div>
        <div>
          <Link
            href={`/our-services/digital-marketing`}
            className="inline-flex items-center font-bold hover:underline w-fit group"
          >
            View Details
            <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <Image
          src={digitalMarketing}
          alt="Digital Marketing"
          width={268}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  
    {/* Card 6 - Branding & Identity */}
    <div className="bg-[#F8F8F8] rounded-xl h-[380px] shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] max-w-full">
      <div className="flex flex-col flex-1 px-6 space-y-4">
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium">BI</span>
        </div>
        <h3 className="text-2xl font-semibold">Branding & Identity</h3>
        <p className="text-black-secondary text-base font-medium">
          Build a strong brand identity that resonates with your customers and sets you apart.
        </p>
        <div className="border-b"></div>
        <div>
          <Link
            href={`/our-services/branding-identity`}
            className="inline-flex items-center font-bold hover:underline w-fit group"
          >
            View Details
            <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <Image
          src={motionGraphics}
          alt="Branding & Identity"
          width={636}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
    {/* Card 7 - UX/UI Design */}
    <div className="bg-[#F8F8F8] max-w-[636px] h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
      <div className="flex flex-col flex-1 px-6 space-y-4">
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium">UX</span>
        </div>
        <h3 className="text-2xl font-semibold">UX/UI Design</h3>
        <p className="text-black-secondary text-base font-medium">
          Our UI/UX design services ensure your digital products offer seamless user experience.
        </p>
        <div className="border-b"></div>
        <div>
          <Link
            href={`/our-services/ux-ui-design`}
            className="inline-flex items-center font-bold hover:underline w-fit group"
          >
            View Details
            <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <Image
          src={productDesign}
          alt="UX/UI Design"
          width={268}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  
    {/* Card 8 - Digital Marketing */}
    <div className="bg-[#F8F8F8] max-w-[636px] h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
      <div className="flex flex-col flex-1 px-6 space-y-4">
        <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
          <span className="text-sm font-medium">DM</span>
        </div>
        <h3 className="text-2xl font-semibold">Digital Marketing</h3>
        <p className="text-black-secondary text-base font-medium">
          Unlock the power of digital marketing to grow your business and connect with your audience.
        </p>
        <div className="border-b"></div>
        <div>
          <Link
            href={`/our-services/digital-marketing`}
            className="inline-flex items-center font-bold hover:underline w-fit group"
          >
            View Details
            <ArrowRight className="w-9 h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <Image
          src={graphicsDesign}
          alt="Digital Marketing"
          width={268}
          height={380}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  
  </div>
  
  );
}
