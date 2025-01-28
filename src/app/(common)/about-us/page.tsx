import image1 from "@/assets/images/about-us-img-1.png";
import image2 from "@/assets/images/about-us-img-2.png";
import image3 from "@/assets/images/about-us-img-3.png";
import image4 from "@/assets/images/about-us-img-4.png";
import AboutUs from "@/components/shared/AboutUs/AboutUs";
import TeamGrid from "@/components/shared/AboutUs/TeamGrid";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Image from "next/image";
import React from "react";

export default function AboutUsPage() {

  return (
    <div>
      <PageHeader title="About Us" subtitle="About Us" />
      <div className="container md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <SectionHeader
          subtitle="ABOUT US"
          subtitleClass="white"
          title={
            <>
              <span className="font-bold">Building</span> Digital <br />
              <span className="font-bold">Futures</span> Together
            </>
          }
          titleClass="lg:text-[64px] lg:leading-[74px] md:text-[48px] md:leading-[58px]"
          align="center"
        />
      </div>
      {/*Images section */}
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image 1 */}
          <div className="relative overflow-hidden rounded-lg flex-1">
            <Image
              src={image1}
              alt="Open office workspace"
              layout="responsive"
              width={300} // Adjust these dimensions as needed
              height={200}
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Image 2 */}
          <div className="relative flex items-center overflow-hidden rounded-lg flex-1">
            <Image
              src={image2}
              alt="Modern seating area"
              layout="responsive"
              width={300} // Adjust these dimensions as needed
              height={200}
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Image 3 */}
          <div className="relative overflow-hidden rounded-lg flex-1">
            <Image
              src={image3}
              alt="Casual meeting space"
              layout="responsive"
              width={300} // Adjust these dimensions as needed
              height={200}
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Image 4 */}
          <div className="relative flex items-center overflow-hidden rounded-lg flex-1">
            <Image
              src={image4}
              alt="Modern architecture"
              layout="responsive"
              width={300} // Adjust these dimensions as needed
              height={200}
              className="object-cover grayscale  hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <AboutUs />
      {/*Team Member section */}
      <div className="min-h-screen w-full  bg-customGradient text-white p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12  md:flex">
            <div>
              <span className="py-1.5 px-8 rounded-full font-satoshi  font-bold text-sm md:text-base md:tracking-[8px] uppercase shadow-[1px_-2px_1px_0px_rgba(255,255,255,0.2)] border-2 border-olive-secondary  md:text-nowrap">
                TEAM MEMBERS
              </span>
            </div>
            <div className="md:mx-auto 0">
              <h1 className="text-2xl my-8 md:my-0 md:text-5xl  font-light text-white">
                <span className=" font-extrabold">Meet the </span>
                Experts
                <br />
                Behind <span className=" font-extrabold">Vyazen.</span>
              </h1>
            </div>
          </div>

         {/* Team Grid */}
    <TeamGrid/>

        </div>
      </div>
      <FAQ />
      <CallToAction />
    </div>
  );
}
