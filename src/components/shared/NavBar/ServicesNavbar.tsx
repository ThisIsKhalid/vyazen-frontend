import app from "@/assets/icons/app.png";
import branding from "@/assets/icons/branding.png";
import design from "@/assets/icons/design.png";
import digital from "@/assets/icons/digital.png";
import graphics from "@/assets/icons/graphics.png";
import motion from "@/assets/icons/motion.png";
import ux from "@/assets/icons/ux.png";
import web from "@/assets/icons/web.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

const ServicesNavbar = () => {
  const services = [
    {
      title: "UX/UI Design",
      description:
        "Our UI/UX design services ensure your digital products offer seamless user experiences.",
      icon: ux,
      link: "/our-services/ux-ui-design",
    },
    {
      title: "Branding & Identity",
      description:
        "We craft innovative mobile applications that prioritize functionality, design.",
      icon: branding,
      link: "/our-services/branding-identity",
    },
    {
      title: "Digital Marketing",
      description:
        "Empowering businesses reach their target audience with strategy.",
      icon: digital,
      link: "/our-services/digital-marketing",
    },
    {
      title: "Product Design",
      description:
        "Empowering businesses reach their target audience with strategy.",
      icon: design,
      link: "/our-services/product-design",
    },
    {
      title: "Web Development",
      description:
        "Our team creates visually responsive and high-performance websites.",
      icon: web,
      link: "/our-services/web-development",
    },
    {
      title: "App Development",
      description:
        "We craft innovative mobile applications that prioritize functionality, design.",
      icon: app,
      link: "/our-services/app-development",
    },
    {
      title: "Motion Graphics & Production",
      description:
        "We bring your stories to life through dynamic motion graphics.",
      icon: motion,
      link: "/our-services/motion-graphics-production",
    },
    {
      title: "Graphics Design",
      description:
        "Graphic design: the art of communicating ideas visually, blending creativity.",
      icon: graphics,
      link: "/our-services/graphics-design",
    },
  ];

  return (
    <div className="xl:w-[1040px] md:w-[520px] bg-[#F8F8F8] border border-white rounded-xl p-6 ">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="flex items-center gap-x-5 hover:bg-yellow-primary transition-all duration-300 ease-in-out p-4 rounded-xl"
          >
            <div className="flex-none w-[70px] rounded-xl">
              <Image
                src={service.icon}
                alt={service.title}
                width={1000}
                height={1000}
                className="h-full w-full "
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-3 text-black flex items-center gap-x-2">
                {service.title} <IoMdArrowForward />
              </h3>
              <p className="font-satoshi text-base text-black/50 text-wrap">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* view more button */}
      <div className="flex items-center justify-center mt-6">
        <Link
          href="/our-services"
          className="border border-yellow-primary text-black font-semibold text-lg px-5 py-2 rounded-xl hover:bg-yellow-primary transition-all duration-300 ease-in-out"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ServicesNavbar;
