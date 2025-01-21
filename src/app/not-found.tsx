import notFoundImg from "@/assets/images/404.png";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/NavBar/NavBar";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <NavBar />
      <PageHeader title="404 Not Found" subtitle="404 Not Found" />

      <div className="container md:pt-[140px] sm:pt-[70px] pt-[50px]">
        <div className="text-center space-y-6">
          <Image
            src={notFoundImg}
            alt="404 Not Found"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto"
            aria-label="404 Image"
          />
          <h2 className="text-2xl md:text-4xl pt-3 font-bold">
            {" "}
            Page Not Found
          </h2>
          <p className="text-black-secondary text-sm sm:text-base">
            Oops! The page you&apos;re looking for doesn&apos;t seem to exist
          </p>
          <button className="bg-yellow-primary text-black font-bold px-6 sm:px-8 py-3 rounded-full">
            Get Started Here
          </button>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
}
