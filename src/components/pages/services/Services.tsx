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
   {/* Card 2 - Web Development */}
   <div className="bg-[#F8F8F8] max-w-[636px] h-auto sm:h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%] ">
        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 space-y-4">
          <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
            <span className="text-sm font-medium">AD</span>
          </div>
          <h3 className="text-lg sm:text-2xl md:mr-10 font-semibold">UX/UI Design</h3>
          <p className="text-black-secondary text-sm sm:text-base font-medium">
            Create robust and scalable mobile applications tailored to your
            business needs.
          </p>
          <div className="border-b"></div>
          <div>
            <Link
              href={`/our-services/app-development`}
              className="inline-flex items-center font-bold hover:underline w-fit group"
            >
              View Details
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Image
            src={uxImage}
            alt="App Development"
            width={268}
            height={380}
            className="rounded-lg object-cover w-full sm:w-auto h-auto sm:h-[380px]"
          />
        </div>
      </div>

 {/* Card 2 - Web Development */}
      <div className="bg-[#F8F8F8] max-w-[636px] h-auto sm:h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 space-y-4">
          <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
            <span className="text-sm font-medium">AD</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold">Web Development</h3>
          <p className="text-black-secondary text-sm sm:text-base font-medium">
            Create robust and scalable mobile applications tailored to your
            business needs.
          </p>
          <div className="border-b"></div>
          <div>
            <Link
              href={`/our-services/app-development`}
              className="inline-flex items-center font-bold hover:underline w-fit group"
            >
              View Details
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Image
            src={webDevImage}
            alt="App Development"
            width={268}
            height={380}
            className="rounded-lg object-cover w-full sm:w-auto h-auto sm:h-[380px]"
          />
        </div>
      </div>

      {/* Card 3 - Branding & Identity */}
      <div className="bg-[#F8F8F8] rounded-xl h-auto sm:h-[380px] shadow-lg flex flex-col  sm:flex-row items-center flex-[1_1_100%] max-w-full">
        <div className="flex flex-col lg:flex-1 px-4 sm:px-6 py-4 space-y-4">
          <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
            <span className="text-sm font-medium">BI</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold">
            Branding & Identity
          </h3>
          <p className="text-black-secondary text-sm sm:text-base font-medium">
            Build a strong brand identity that resonates with your customers and
            sets you apart.
          </p>
          <div className="border-b"></div>
          <div>
            <Link
              href={`/our-services/branding-identity`}
              className="inline-flex items-center font-bold hover:underline w-fit group"
            >
              View Details
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Image
            src={brandingImage}
            alt="Branding & Identity"
            width={636}
            height={380}
            className="rounded-lg object-cover w-full sm:w-auto h-auto sm:h-[380px]"
          />
        </div>
      </div>

      {/* Card 4 - App Development */}
      <div className="bg-[#F8F8F8] max-w-[636px] h-auto sm:h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 space-y-4">
          <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
            <span className="text-sm font-medium">AD</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold">App development</h3>
          <p className="text-black-secondary text-sm sm:text-base font-medium">
            Create robust and scalable mobile applications tailored to your
            business needs.
          </p>
          <div className="border-b"></div>
          <div>
            <Link
              href={`/our-services/app-development`}
              className="inline-flex items-center font-bold hover:underline w-fit group"
            >
              View Details
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Image
            src={appDevImage}
            alt="App Development"
            width={268}
            height={380}
            className="rounded-lg object-cover w-full sm:w-auto h-auto sm:h-[380px]"
          />
        </div>
      </div>
      {/* Card 5 - App Development */}
      <div className="bg-[#F8F8F8] max-w-[636px] h-auto sm:h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 space-y-4">
          <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
            <span className="text-sm font-medium">AD</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold">Digital Marketing</h3>
          <p className="text-black-secondary text-sm sm:text-base font-medium">
            Create robust and scalable mobile applications tailored to your
            business needs.
          </p>
          <div className="border-b"></div>
          <div>
            <Link
              href={`/our-services/app-development`}
              className="inline-flex items-center font-bold hover:underline w-fit group"
            >
              View Details
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Image
            src={digitalMarketing}
            alt="App Development"
            width={268}
            height={380}
            className="rounded-lg object-cover w-full sm:w-auto h-auto sm:h-[380px]"
          />
        </div>
      </div>
      {/* Card 6 - Branding & Identity */}
      <div className="bg-[#F8F8F8] rounded-xl h-auto sm:h-[380px] shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] max-w-full">
        <div className="flex flex-col lg:flex-1 px-4 sm:px-6 py-4 space-y-4">
          <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
            <span className="text-sm font-medium">BI</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold">
          Motion Graphics & Production
          </h3>
          <p className="text-black-secondary text-sm sm:text-base font-medium">
            Build a strong brand identity that resonates with your customers and
            sets you apart.
          </p>
          <div className="border-b"></div>
          <div>
            <Link
              href={`/our-services/branding-identity`}
              className="inline-flex items-center font-bold hover:underline w-fit group"
            >
              View Details
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Image
            src={motionGraphics}
            alt="Branding & Identity"
            width={636}
            height={380}
            className="rounded-lg object-cover w-full sm:w-auto h-auto sm:h-[380px]"
          />
        </div>
      </div>
      {/* Card 7 - App Development */}
      <div className="bg-[#F8F8F8] max-w-[636px] h-auto sm:h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 space-y-4">
          <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
            <span className="text-sm font-medium">AD</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold">Product Design</h3>
          <p className="text-black-secondary text-sm sm:text-base font-medium">
            Create robust and scalable mobile applications tailored to your
            business needs.
          </p>
          <div className="border-b"></div>
          <div>
            <Link
              href={`/our-services/app-development`}
              className="inline-flex items-center font-bold hover:underline w-fit group"
            >
              View Details
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Image
            src={productDesign}
            alt="App Development"
            width={268}
            height={380}
            className="rounded-lg object-cover w-full sm:w-auto h-auto sm:h-[380px]"
          />
        </div>
      </div>
      {/* Card 8 - App Development */}
      <div className="bg-[#F8F8F8] max-w-[636px] h-auto sm:h-[380px] rounded-xl shadow-lg flex flex-col sm:flex-row items-center flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_30%]">
        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 space-y-4">
          <div className="bg-gray-100 p-2 w-10 h-10 border-2 border-black flex items-center justify-center rounded-xl">
            <span className="text-sm font-medium">AD</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold">Graphics Design</h3>
          <p className="text-black-secondary text-sm sm:text-base font-medium">
            Create robust and scalable mobile applications tailored to your
            business needs.
          </p>
          <div className="border-b"></div>
          <div>
            <Link
              href={`/our-services/app-development`}
              className="inline-flex items-center font-bold hover:underline w-fit group"
            >
              View Details
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-primary rounded-full ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Image
            src={graphicsDesign}
            alt="App Development"
            width={268}
            height={380}
            className="rounded-lg object-cover w-full sm:w-auto h-auto sm:h-[380px]"
          />
        </div>
      </div>
    </div>
  );
}
