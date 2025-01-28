"use client";
import image from "@/assets/images/details img.png";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

import { LiaAwardSolid } from "react-icons/lia";

export default function ServiceDetails() {
    const pathname = usePathname();
    const [active, setActive] = useState(
      pathname.split("/").pop() || "ux-ui-design"
    );
  
  const services = [
    { title: "UX/UI Design", slug: "ux-ui-design" },
    { title: "Web Development", slug: "web-development" },
    { title: "Branding & Identity", slug: "branding" },
    { title: "App Development", slug: "app-development" },
    { title: "Digital Marketing", slug: "digital-marketing" },
    { title: "Motion Graphics", slug: "motion-graphics" },
    { title: "Product Design", slug: "product-design" },
    { title: "Graphics Design", slug: "graphics-design" },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="md:mt-[140px] sm:mt-[70px] mt-[50px] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[60px]">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-[357px] md:h-[520px] bg-[#F8F8F8] lg:ml-[72px] p-6 border-r rounded-[20px] shadow-md">
          <div className="w-full lg:max-w-[317px] lg:h-[520px]">
      <div className="space-y-2">
        {services.map((service, index) => (
          <div key={service.slug}>
            <Link href={`/our-services/${service.slug}`} legacyBehavior>
              <a
                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${
                  active === service.slug
                    ? "bg-yellow-primary text-black shadow"
                    : "text-gray-700 hover:bg-gray-100 hover:shadow-md"
                }`}
                onClick={() => setActive(service.slug)}
              >
                <span className="font-satoshi font-bold">{service.title}</span>
                <span className="font-semibold text-lg">
                  <IoMdArrowForward />
                </span>
              </a>
            </Link>
          
            {index < services.length - 1 && (
              <div className="border-b border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>

        {/* Main Content */}
        <main>
          <div className="max-w-6xl">
            {/* Hero Section */}
            <div className="mb-8">
              {/* Text Section */}
              <h1 className="text-xl sm:text-2xl md:text-2xl font-satoshi font-bold text-black leading-relaxed sm:w-[90%] md:max-w-[665px]">
                We believe exceptional design is at the heart of every
                successful digital experience. Our UI/UX design services focus
                on creating user-centered interfaces that are not only visually
                stunning but also intuitive and functional.
              </h1>

              {/* Image Section */}
              <div className="relative rounded-lg mt-7 sm:mt-10 overflow-hidden">
                <Image src={image} alt="Craftwork" className="w-full max-w-[879px] h-auto" />
              </div>
            </div>

            {/* Service Features */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-[44px] mt-20 font-semibold mb-6">
                Service Features:
              </h2>
              <p className="text-sm sm:text-base text-black-secondary font-satoshi font-medium leading-relaxed mb-8">
                At Vyazen, we believe exceptional design is at the heart of
                every successful digital experience. Our UI/UX design services
                focus on creating user-centered interfaces that are not only
                visually stunning but also intuitive and functional. By
                combining creativity with strategy, we craft seamless
                experiences that engage users and drive results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Reusable Service Card */}
                {Array(4)
                  .fill({
                    title: "Skilled Staff",
                    description:
                      "Our services are tailored to meet the unique needs of your business.",
                  })
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F8F8F8] px-6 py-8 rounded-lg shadow-md"
                    >
                      <div className="bg-yellow-primary w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mb-6">
                        <LiaAwardSolid className="w-8 sm:w-10 h-8 sm:h-10 text-xl" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-satoshi font-bold mb-4">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base font-satoshi  text-[#545454]">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </section>

            {/* Why Choose Us */}
<section>
  <div className="text-lg sm:text-xl md:text-4xl  max-w-lg mb-4 sm:mb-8">
    <h2>
      <span className="font-semibold">Why</span> You Should Choose Our UX/UI{" "}
      <span className="font-semibold">Service.</span>
    </h2>
  </div>
  <div className="space-y-6 ">
    {[
      "Creative Campaign Excellence",
      "Digital Advertising Excellence",
      "Influencer Outreach Services",
    ].map((title, idx) => (
      <div
        key={idx}
        className="flex flex-col sm:flex-row md:gap-10 items-center justify-center max-w-[878px]  bg-gray-100 p-6 sm:p-8 rounded-[20px] shadow-md"
      >
        <div className="w-full sm:w-1/3 md:h-52 items-center flex   sm:pr-6">
          <h3 className="text-base md:text-2xl font-bold font-satoshi">
            {title}
          </h3>
        </div>
        <div className="md:max-w-[394px] sm:w-2/3">
          <p className="text-sm md:text-base font-satoshi text-black-secondary">
            At Vyazen, we believe exceptional design is at the heart
            of every successful digital experience. Our UI/UX design
            services focus on user-centered interfaces.
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

          </div>
        </main>
      </div>
      <CallToAction />
    </div>
  );
}
