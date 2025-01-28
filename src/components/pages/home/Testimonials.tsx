"use client";

import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

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
        titleClass="lg:text-[64px] lg:leading-[74px] md:text-[48px] md:leading-[58px]"
      />

      {/* Testimonials */}
      <div className=" overflow-hidden pt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
