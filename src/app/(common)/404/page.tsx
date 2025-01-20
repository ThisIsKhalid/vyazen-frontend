import PageHeader from "@/components/shared/PageHeader/PageHeader";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import React from "react";

export default function Error404() {
    return (
        <div>
        <PageHeader title="404 Not Found" subtitle="404 Not Found" />
      
        <div className="container md:py-[140px] sm:py-[70px] py-[50px]">
          <div className="text-center space-y-6">
            <img 
              src="/404.png" 
              alt="404 Not Found" 
              className="w-full max-w-md mx-auto"  
              aria-label="404 Image"
            />
            <h2 className="text-2xl md:text-4xl pt-3 font-bold">    Page Not Found
            </h2>
            <p className="text-[#00000080] text-sm sm:text-base">
              "Oops! The page you're looking for doesn't seem to exist"
            </p>
            <button 
              className="bg-yellow-primary text-black font-bold px-6 sm:px-8 py-3 rounded-full" 
            >
              Get Started Here
            
            </button>

            </div>
        </div>
      
        <CallToAction />
      </div>
      
      
    );
  }
  