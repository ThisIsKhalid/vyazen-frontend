import ctaEmail from "@/assets/images/cta-email.png";
import ctaEqual from "@/assets/images/cta-equal.png";
import ctaWp from "@/assets/images/cta-wp.png";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <section className="container my-32">
      <div className="bg-customGradient relative text-white rounded-[32px] flex flex-col items-center justify-center p-24 ">
        {/* Background Icons */}
        <div className="absolute top-10 left-10">
          <Image src={ctaEmail} alt="CTA Email" width={55} height={55} />
        </div>
        <div className="absolute top-10 right-10">
          <Image src={ctaWp} alt="CTA WhatsApp" width={55} height={55} />
        </div>
        <div className="absolute bottom-10 right-20">
          <Image src={ctaEqual} alt="CTA Icon" width={55} height={55} />
        </div>

        {/* Content */}
        <div className="p-9 flex flex-col items-center justify-center">
          <h2 className="text-center text-[64px] leading-[71.68px] tracking-[-0.02em] font-light">
            <span className="font-bold">READY</span> TO ELEVATE <br /> YOUR{" "}
            <span className="font-bold">BRAND?</span>
          </h2>

          <p className="font-satoshi text-[18px] font-bold leading-[28px] text-center text-white/60 max-w-2xl my-10">
            Ready to take your business to the next level? At Vyazen, we’re here
            to turn your ideas into impactful digital solutions.
          </p>

          <button className=" bg-yellow-primary text-black px-[33px] py-[12px] hover:bg-yellow-400 transition text-lg font-semibold rounded-full">
            Schedule A Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
