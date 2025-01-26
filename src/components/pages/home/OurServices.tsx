"use client"
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Image from "next/image"
import { useState } from "react";


export default function ServicesSection() {
  const [showUXImage, setShowUXImage] = useState(false)



  return (
    <section className="bg-customGradient md:mt-[140px] sm:mt-[70px] mt-[50px]">
      <div className="container md:py-[140px] sm:py-[70px] py-[50px] ">
        <SectionHeader
          subtitle="OUR SERVICES"
          subtitleClass="gradient"
          title={
            <>
              <span className="font-bold">Innovative</span> Solutions for <br />
              Modern <span className="font-bold">Challenges.</span>
            </>
          }
          titleClass="md:text-[64px] md:leading-[74px] text-white"
        />

<div className="flex justify-end">
<div className="mt-16 space-y-8 w-full sm:w-4/5 md:w-2/3">
  <div className="border-t border-white/10 pt-8 group">
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-12">
      <span className="text-white/60 font-light">01</span>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between">
          <h3
            className="text-lg sm:text-xl md:text-[32px] font-bold text-white group-hover:text-white/80 transition-colors mb-4 cursor-pointer"
            onClick={() => setShowUXImage(!showUXImage)}
          >
            UI/UX Design
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              UI/UX
            </span>
            <span className="mx-2 sm:mx-4 text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              Webflow
            </span>
            <span className="mx-2 sm:mx-4 text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              Envato
            </span>
          </div>
        </div>
        {showUXImage && (
          <div className="mt-4">
            <div className="relative w-full aspect-[3/1] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-service%20image-1VQ2ML3OIsWLbnXkTBNohAB0Ux80R3.png"
                alt="UI/UX Design Preview"
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

  <div className="border-t border-white/10 pt-8 group">
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12">
      <span className="text-white/60 font-light">02</span>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between">
          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white group-hover:text-white/80 transition-colors mb-4">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              UI/UX
            </span>
            <span className="mx-2 sm:mx-4 text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              Webflow
            </span>
            <span className="mx-2 sm:mx-4 text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              Envato
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="border-t border-white/10 pt-8 group">
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-12">
      <span className="text-white/60 font-light">03</span>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between">
          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white group-hover:text-white/80 transition-colors mb-4">
            App Development
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              UI/UX
            </span>
            <span className="mx-2 sm:mx-4 text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              Webflow
            </span>
            <span className="mx-2 sm:mx-4 text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              Envato
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="border-t border-white/10 pt-8 group">
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-12">
      <span className="text-white/60 font-light">04</span>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between">
          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white group-hover:text-white/80 transition-colors mb-4">
            Branding & Identity
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              UI/UX
            </span>
            <span className="mx-2 sm:mx-4 text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              Webflow
            </span>
            <span className="mx-2 sm:mx-4 text-white/60">•</span>
            <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
              Envato
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

