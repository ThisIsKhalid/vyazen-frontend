// Add "use client" to make this a Client Component
"use client";

import Image from "next/image";
import teamImg2 from "@/assets/images/team-image-about-us-2.png";
import teamImg3 from "@/assets/images/team-image-about-us-3.png";
import teamImg4 from "@/assets/images/team-image-about-us-4.png";
import teamImg5 from "@/assets/images/team-image-about-us-5.png";
import teamImg6 from "@/assets/images/team-image-about-us-7.png";
import teamImg1 from "@/assets/images/team-image-about-us.png";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

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
const TeamGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {members.map((member, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-2xl transition-all border-t-4 shadow-md shadow-slate-800 border-olive-secondary duration-300 hover:scale-105"
      >
        {/* Card Content */}
        <div className="relative aspect-[3/4] bg-black/30 backdrop-blur-sm transition-colors duration-300 group-hover:bg-yellow-400">
          <Image
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-50 transition-opacity duration-300"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>

            {/* Text Content */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl rounded-lg p-4 text-center">
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          </div>

          {/* Hover State with Arrow Icon */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold">{member.name}</h3>
            <p className="text-white text-sm">{member.role}</p>

            {/* Circular Arrow Button */}
            <div className="mt-4 md:w-[88px] md:h-[88px] bg-black/80  rounded-full flex items-center justify-center shadow-md hover:bg-black/90 transition">
              <HiOutlineArrowUpRight className="text-yellow-primary font-light w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default TeamGrid;
