import image1 from "@/assets/images/about-us-img-1.png";
import image2 from "@/assets/images/about-us-img-2.png";
import image3 from "@/assets/images/about-us-img-3.png";
import image4 from "@/assets/images/about-us-img-4.png";
import teamImg2 from "@/assets/images/team-image-about-us-2.png";
import teamImg3 from "@/assets/images/team-image-about-us-3.png";
import teamImg4 from "@/assets/images/team-image-about-us-4.png";
import teamImg5 from "@/assets/images/team-image-about-us-5.png";
import teamImg6 from "@/assets/images/team-image-about-us-7.png";
import teamImg1 from "@/assets/images/team-image-about-us.png";
import AboutUs from "@/components/shared/AboutUs/AboutUs";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Image from "next/image";
import React from "react";

export default function AboutUsPage() {
  // Assign images to members
  const members = [
    { name: "Paul Scholes", role: "Visual Designer", image: teamImg1 },
    { name: "Paul Scholes", role: "Visual Designer", image: teamImg2 },
    { name: "Paul Scholes", role: "Visual Designer", image: teamImg3 },
    { name: "Paul Scholes", role: "Visual Designer", image: teamImg4 },
    { name: "Paul Scholes", role: "Visual Designer", image: teamImg5 },
    { name: "Paul Scholes", role: "Visual Designer", image: teamImg2 },
    { name: "Paul Scholes", role: "Visual Designer", image: teamImg6 },
    { name: "Paul Scholes", role: "Visual Designer", image: teamImg1 },
  ];
  return (
    <div>
      <PageHeader title="About Us" subtitle="About Us" />
      <div className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
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
      <div className="container mx-auto px-4 py-12">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all border-t-4 shadow-md shadow-slate-800 border-olive-secondary  duration-300 hover:scale-105"
              >
                {/* Card Content */}
                <div
                  className="relative aspect-[3/4] bg-black/30 backdrop-blur-sm 
                 transition-colors duration-300 group-hover:bg-yellow-primary   "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-0 transition-opacity duration-300 bg-customGradient"
                  />

                  {/* Text Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 
                    group-hover:opacity-0 transition-opacity duration-300"
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>

                    {/* Text Content */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl rounded-lg p-4 text-center">
                      <h3 className="text-xl font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-300">{member.role}</p>
                    </div>
                  </div>

                  {/* Hover State with Arrow */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-black transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQ />
      <CallToAction />
    </div>
  );
}
