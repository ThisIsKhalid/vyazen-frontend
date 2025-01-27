import vector from "@/assets/images/home-banner-vector.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-customGradient relative overflow-hidden">
      {/* Background gradient and grid overlay */}
      <div className="absolute bottom-0 w-full">
        <Image src={vector} alt="vector" className="w-full" />
      </div>

      {/* Content */}
      <div className="relative container xl:py-[140px] py-[70px] flex xl:flex-row flex-col gap-x-5 gap-y-10">
        {/* Left Content */}
        <div className="text-center xl:text-left">
          <div className="text-center xl:text-left">
            <span className="py-1.5 px-8 rounded-full font-satoshi font-bold text-base tracking-[8px] uppercase shadow-[1px_3px_1px_0px_rgba(255,255,255,0.2)] text-nowrap bg-[#FFFFFF0F] text-white">
              Digital Agency
            </span>
          </div>
          {/* Main Heading */}
          <h2 className="font-light text-5xl tracking-[-0.02em] uppercase md:text-[92px] md:leading-[103px] text-white md:my-[52px] my-10">
            <span className="font-bold">our </span>Creative digital
            <span className="font-bold"> agency.</span>
          </h2>

          {/* Welcome Text */}
          <p className="text-white/60 max-w-[732px] mx-auto xl:mx-0 font-bold font-satoshi text-sm sm:text-base lg:text-lg">
            Welcome to Vyazen, where innovation drives transformation. We
            specialize in delivering tailored solutions that empower businesses
            to achieve their full potential.
          </p>

          {/* Contact Button */}
          <div className="md:mt-[52px] mt-10">
            <button className="bg-yellow-primary text-black px-10 py-4 rounded-full hover:bg-yellow-400 transition font-bold text-base font-satoshi">
              Contact With Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">
          {/* Yellow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-primary to-transparent rounded-2xl blur-[80px]"></div>

          {/* Image Container */}
          <div className="relative w-[280px] sm:w-[360px] lg:w-[420px] h-[240px] sm:h-[300px] lg:h-[355px] rounded-3xl bg-yellow-500">
            <iframe
              width="420"
              height="355"
              src="https://www.youtube.com/embed/qWNfz8yC_eM?si=OFHkx5a3U_eIGIBP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
