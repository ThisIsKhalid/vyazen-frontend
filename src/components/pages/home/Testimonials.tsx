"use client";

import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
      {/* Header Section */}
      <SectionHeader
        subtitle="TESTIMONIALS"
        subtitleClass="white"
        title={
          <>
            <span className="font-bold">Trusted</span> Partner <br /> in Digital{" "}
            <span className="font-bold">Excellence.</span>
          </>
        }
        titleClass="md:text-[64px] md:leading-[74px]"
      />

      <TestimonialCard />

      {/* Testimonials */}
      <div className="mt-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[]}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
