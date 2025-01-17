import ctaEmail from "@/assets/images/cta-email.png";
import ctaEqual from "@/assets/images/cta-equal.png";
import ctaWp from "@/assets/images/cta-wp.png";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <section className="container md:my-32 my-16">
      <div className="bg-customGradient relative text-white rounded-[32px] flex flex-col items-center justify-center p-8 md:p-24 ">
        {/* Background Icons */}
        <div className="absolute  md:top-1/2 top-14 lg:left-32 md:left-10 left-3 -translate-y-1/2">
          <Image src={ctaEqual} alt="CTA Icon" width={55} height={55} />
        </div>
        <div className="absolute md:bottom-20 bottom-2 right-5 lg:right-32">
          <Image src={ctaEmail} alt="CTA Email" width={55} height={55} />
        </div>
        <div className="absolute md:top-20 top-14 right-3">
          <Image src={ctaWp} alt="CTA WhatsApp" width={55} height={55} />
        </div>

        {/* Content */}
        <div className="md:p-9 p-0 flex flex-col items-center justify-center">
          <h2 className="text-center text-5xl md:text-[64px] md:leading-[71.68px] tracking-[-0.02em] font-light">
            <span className="font-bold">READY</span> TO ELEVATE <br /> YOUR{" "}
            <span className="font-bold">BRAND?</span>
          </h2>

          <p className="font-satoshi text-[18px] font-bold leading-[28px] text-center text-white/60 md:max-w-2xl w-full my-10">
            Ready to take your business to the next level? At Vyazen, we’re here
            to turn your ideas into impactful digital solutions.
          </p>

          <button className=" bg-yellow-primary text-black px-[33px] py-[12px] hover:bg-yellow-400 transition text-lg font-semibold rounded-full text-nowrap">
            Schedule A Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
