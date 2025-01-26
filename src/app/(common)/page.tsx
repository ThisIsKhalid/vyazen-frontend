import AgencyBanner from "@/components/pages/home/AgencyBannerSection";
import HeroSection from "@/components/pages/home/HeroSection";
import OurProcess from "@/components/pages/home/OurProcess";
import OurProducts from "@/components/pages/home/OurProducts";
import OurServices from "@/components/pages/home/OurServices";
import Testimonials from "@/components/pages/home/Testimonials";
import AboutUs from "@/components/shared/AboutUs/AboutUs";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import FAQ from "@/components/shared/FAQ/FAQ";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <AgencyBanner/>
      <AboutUs />
      <OurServices />
      <OurProducts />
      <OurProcess />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default HomePage;
