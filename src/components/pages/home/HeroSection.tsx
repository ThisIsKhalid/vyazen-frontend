import Image from "next/image";
import image from "@/assets/images/hero-section-img.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden">
      {/* Background gradient and grid overlay */}
      <div className="absolute inset-0 bg-customGradient" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
          linear-gradient(#000000 1px, transparent 1px),
          linear-gradient(90deg, #000000 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative px-6 sm:px-10 lg:px-[72px] py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[72px] items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Digital Agency Label */}
            <div className="min-h-[100px] flex items-center justify-center lg:justify-start p-4">
              <span className="py-1.5 px-8 font-satoshi rounded-full shadow-[1px_-3px_1px_0px_rgba(255,255,255,0.2)] bg-white/10 backdrop-blur-sm font-medium text-white text-sm sm:text-base tracking-[4px] sm:tracking-[8px] uppercase">
                Digital Agency
              </span>
            </div>
            {/* Main Heading */}
            <div className="my-8 sm:my-[52px] space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-[92px] font-light leading-[1.2] lg:leading-[1.1] text-white">
                <span className="font-bold text-white">OUR </span>
                <span className="font-light text-white">CREATIVE</span>
                <br />
                <span className="font-light text-white">DIGITAL </span>
                <span className="font-bold text-white">AGENCY.</span>
              </h1>
            </div>

            {/* Welcome Text */}
            <p className="mt-6 sm:mt-8 text-[#FFFFFF99] max-w-3xl font-bold font-satoshi text-sm sm:text-base lg:text-lg mx-auto lg:mx-0">
              Welcome to Vyazen, where innovation drives transformation. We
              specialize in delivering tailored solutions that empower
              businesses to achieve their full potential.
            </p>

            {/* Contact Button */}
            <div className="mt-6 sm:mt-8">
              <button className="px-6 sm:px-8 py-3 gap-[10px] bg-[#EEFF00] hover:bg-[#EEFF00]/90 rounded-[56px] text-black font-bold h-[44px] sm:h-[52px] transition-colors">
                Contact With Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            {/* Yellow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-primary to-transparent rounded-2xl blur-[80px]"></div>

            {/* Image Container */}
            <div className="relative w-[280px] sm:w-[360px] lg:w-[420px] h-[240px] sm:h-[300px] lg:h-[355px] rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-200">
              <Image
                src={image}
                alt="Digital Agency Creative Concept"
                width={420}
                height={355}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
