"use client";
import postimg from "@/assets/images/service-swiper-image.jpg";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import {
  Box,
  Edit,
  SplineIcon as FileSpline,
  Headphones,
  LayoutGrid,
  LayoutList,
  MousePointerClick,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdLiveTv } from "react-icons/md";
import { TbLayout2 } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SingleProductPage() {
  return (
    <section>
      <PageHeader title="Product Single" subtitle="Product Details" />
      <div className="container mx-auto md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <div className="flex flex-wrap md:justify-center  lg:flex-nowrap gap-6">
          {/* Main Content */}
          <div className="lg:w-[816px] ">
            <div className="flex-1 w-full  ">
              <div className="w-full max-w-5xl mx-auto">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  spaceBetween={20}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <Image
                      src={postimg}
                      alt="Slide 1"
                      width={816}
                      height={518}
                      className="rounded-lg md:h-[518px] w-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={postimg}
                      alt="Slide 2"
                      width={816}
                      height={518}
                      className="rounded-lg md:h-[518px] w-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={postimg}
                      alt="Slide 2"
                      width={816}
                      height={518}
                      className="rounded-lg md:h-[518px] w-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={postimg}
                      alt="Slide 2"
                      width={816}
                      height={518}
                      className="rounded-lg md:h-[518px] w-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={postimg}
                      alt="Slide 2"
                      width={816}
                      height={518}
                      className="rounded-lg md:h-[518px] w-full object-cover"
                    />
                  </SwiperSlide>
                
                </Swiper>

                <style jsx global>{`
                  /* Pagination Container */
                  .swiper-pagination {
                    background: linear-gradient(
                      to right,
                      #b0b0b0,
                      #00a000
                    ); /* Gray to Green */
                    padding: 8px 20px;
                    border-radius: 20px;
                    display: inline-flex;
                    align-items: center;
                    justify-content:center;
                  }

                  /* Pagination Bullets */
                  .swiper-pagination-bullet {
                    background: rgba(
                      255,
                      255,
                      255,
                      0.6
                    ); /* Semi-transparent white */
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    opacity: 1;
                    margin: 0 5px;
                    transition: all 0.3s ease-in-out;
                  }

                  /* Active Bullet */
                  .swiper-pagination-bullet-active {
                    background: radial-gradient(circle, yellow 50%, green 70%);
                    width: 14px;
                    height: 14px;
                    border: 1px solid yellow;
                  }
                `}</style>
              </div>

              {/* Product Details Section */}
              <div className="md:max-w-screen-lg mx-auto mt-20 ">
                {/* About This Product */}
                <section className="my-[60px]">
                  <h2 className="font-semibold  text-2xl mb-8">
                    About This Product:
                  </h2>
                  <p className="text-black-secondary font-satoshi leading-relaxed">
                    Building a positive work culture in a young office starts
                    with fostering an environment of open communication,
                    flexibility, and growth. Encouraging team members to share
                    ideas freely promotes a culture of trust and collaboration,
                    essential for young professionals eager to contribute.
                  </p>
                </section>

                {/* Product Features */}
                <section className="my-[60px]">
                  <h2 className="font-semibold  text-2xl ">
                    Product Features:
                  </h2>
                  <ul>
                    {[
                      "Our sub brand logos should exist as all black or all white. The logos should never.",
                      "different typefaces, or scaled improperly. They should always maintain this integrity.",
                      "Our photography features the diversity of our customers we want them to see.",
                      "Our photography features the diversity of our customers we want them to see.",
                      "Our photography features the diversity of our customers we want them to see.",
                      "We represent our product functionality in metaphorical and beautiful Another.",
                      "Your online presence is often the first impression make web development.",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center  space-y-6">
                        <span className="w-2.5 h-2.5 bg-yellow-primary rotate-45 mr-3 mt-6 block"></span>
                        <span className="font-satoshi font-medium ">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Product Benefits */}
                <section className="my-[60px]">
                  <h2 className="font-semibold  text-2xl ">
                    Product Benefits:
                  </h2>
                  <ul>
                    {[
                      "Our sub brand logos should exist as all black or all white. The logos should never.",
                      "We represent our product functionality in metaphorical and beautiful Another.",
                      "Your online presence is often the first impression make web development.",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center  space-y-6">
                        <span className="w-2.5 h-2.5 bg-yellow-primary rotate-45 mr-3 mt-6 block"></span>
                        <span className="font-satoshi font-medium ">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Support */}
                <section className="my-[60px]">
                  <h2 className="font-semibold text-2xl ">Support:</h2>
                  <ul>
                    {[
                      "Our sub brand logos should exist as all black or all white. The logos should never.",
                      "Your online presence is often the first impression make web development.",
                    ].map((support, index) => (
                      <li key={index} className="flex items-center  space-y-6">
                        <span className="w-2.5 h-2.5 bg-yellow-primary rotate-45 mr-3 mt-6 block"></span>
                        <span className="font-satoshi font-medium ">
                          {support}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Video Documentation */}
                <section className="my-[60px]">
                  <h2 className="font-semibold text-2xl ">
                    Video Documentation:
                  </h2>
                  <p className="font-satoshi text-black-secondary my-8">
                    You don&apos;t need to worry about editing the template; we
                    have detailed video documentation and tutorials available.
                    You can easily change, modify and customize our template as
                    per your need with the help of these resources.
                  </p>
                  <p className="font-satoshi text-black-secondary font-medium">
                    Check out the video here:{" "}
                    <a
                      href="#"
                      className="font-satoshi text-black font-bold underline "
                    >
                      <span>[Video Link]</span>
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full sm:w-[90%] md:w-[75%] lg:w-[460px] h-auto lg:h-[1020px] p-6 sm:p-8 bg-[#F8F8F8] rounded-[20px] pb-10 overflow-hidden mx-auto">
            <div className="lg:sticky top-8 h-full flex flex-col justify-between space-y-6">
              <div>
                {/* Header Section */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
                    <span className="bg-yellow-primary px-6 sm:px-8 py-[6px] font-satoshi rounded-[50px] font-bold">
                      V Y A T E C H
                    </span>
                    <span className="font-bold font-satoshi px-4 sm:px-5 rounded-[50px] bg-white py-[6px]">
                      $79
                    </span>
                  </div>

                  <div>
                    <h1 className="text-xl sm:text-2xl lg:text-[32px] font-semibold my-4 sm:my-8 text-center lg:text-left">
                      Vyatech: Financial SaaS Webflow Template.
                    </h1>
                    <p className="text-black-secondary text-sm sm:text-base font-satoshi mb-6 sm:mb-10 font-medium text-center lg:text-left">
                      Vyatech is a cutting-edge Webflow template designed
                      specifically for financial SaaS businesses.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div>
                    <button className="flex items-center justify-center w-full bg-white rounded-[52px] px-6 py-3 font-bold font-satoshi mb-4 gap-4">
                      <span>Live Preview</span>
                      <MdLiveTv className="h-5 sm:h-6 lg:h-7 w-5 sm:w-6 lg:w-7" />
                    </button>

                    <button className="flex items-center justify-center w-full bg-yellow-primary rounded-[52px] px-6 py-3 font-bold font-satoshi gap-4">
                      <span>Buy For $79</span>
                      <LiaShoppingCartSolid className="h-5 sm:h-6 lg:h-7 w-5 sm:w-6 lg:w-7" />
                    </button>
                    <div className="border-b my-6"></div>

                    <button className="flex items-center justify-center w-full bg-yellow-primary rounded-[52px] px-6 py-3 font-bold font-satoshi mb-4 gap-4">
                      <span>Unlock All Access</span>
                      <TbLayout2 className="h-5 sm:h-6 lg:h-7 w-5 sm:w-6 lg:w-7" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left">
                  What Is Include:
                </h2>
                <ul className="space-y-4 font-satoshi font-medium text-sm sm:text-lg">
                  {[
                    { text: "Webflow template", Icon: Box },
                    { text: "Figma File", Icon: FileSpline },
                    { text: "14 Pages", Icon: LayoutGrid },
                    { text: "Top Support", Icon: Headphones },
                    { text: "Live Editor", Icon: Edit },
                    { text: "Responsive Design", Icon: Smartphone },
                    { text: "Interactions", Icon: MousePointerClick },
                    { text: "Content management system", Icon: LayoutList },
                  ].map(({ text, Icon }, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon className="h-5 sm:h-6 w-5 sm:w-6" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <CallToAction />
      </div>
    </section>
  );
}
