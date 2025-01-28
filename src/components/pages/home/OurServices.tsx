"use client";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Image from "next/image";
import { useState } from "react";


export default function Accordion() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveSection(index);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
  };

  const sections = [
    {
      id: 1,
      title: "UI/UX Design",
      tags: ["UI/UX", "Webflow", "Envato"],
      imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-service%20image-1VQ2ML3OIsWLbnXkTBNohAB0Ux80R3.png",
    },
    {
      id: 2,
      title: "Web Development",
      tags: ["UI/UX", "Webflow", "Envato"],
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-service%20image-1VQ2ML3OIsWLbnXkTBNohAB0Ux80R3.png",
    },
    {
      id: 3,
      title: "Digital Marketing",
      tags: ["UI/UX", "Webflow", "Envato"],
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-service%20image-1VQ2ML3OIsWLbnXkTBNohAB0Ux80R3.png",
    },
    {
      id: 4,
      title: "Graphic Design",
      tags: ["UI/UX", "Webflow", "Envato"],
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-service%20image-1VQ2ML3OIsWLbnXkTBNohAB0Ux80R3.png",
    },
  ];

  return (
    <section className="bg-customGradient md:mt-[140px] sm:mt-[70px] mt-[50px]">
      <div className="container md:py-[140px] sm:py-[70px] py-[50px]">
        <SectionHeader
          subtitle="OUR SERVICES"
          subtitleClass="gradient"
          title={
            <>
              <span className="font-bold">Innovative</span> Solutions for <br />
              Modern <span className="font-bold">Challenges.</span>
            </>
          }
          titleClass="md:text-[64px] md:leading-[74px] text-white text-2xl sm:text-4xl"
        />

        <div className="flex justify-end">
          <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-8 w-full sm:w-4/5 md:w-2/3">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="border-t border-white/10 pt-6 sm:pt-8 group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <span className="text-white/60 font-light text-sm sm:text-base">{`0${section.id}`}</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <h3
                        className={`text-base sm:text-lg md:text-[32px] font-bold ${
                          activeSection === index
                            ? "text-white"
                            : "text-[#FFFFFF66]"
                        } transition-all duration-700 ease-out mb-2 sm:mb-4 cursor-pointer`}
                      >
                        {section.title}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        {section.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`text-xs sm:text-sm cursor-pointer transition-all duration-300 ease-in-out ${
                              activeSection === index
                                ? "text-white"
                                : "text-white/60"
                            } hover:text-white`}
                          >
                            {idx !== 0 && (
                              <span className="mx-2 text-white/60">•</span>
                            )}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {activeSection === index && (
                      <div className="mt-4">
                        <div className="relative w-full aspect-[4/3] sm:aspect-[3/1] rounded-xl overflow-hidden">
                          <Image
                            src={section.imageUrl}
                            alt={`${section.title} Preview`}
                            fill
                            className="object-cover"
                            sizes="(min-width: 909px) 909px, 100vw"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
