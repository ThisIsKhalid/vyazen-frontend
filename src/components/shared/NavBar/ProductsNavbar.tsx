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

const ProductsNavbar = () => {
  const services = [
    {
      title: "UX/UI Design",
      description:
        "Our UI/UX design services ensure your digital products offer seamless user experiences.",
      icon: ux,
      link: "/services/ux-ui-design",
    },
    {
      title: "Branding & Identity",
      description:
        "We craft innovative mobile applications that prioritize functionality, design.",
      icon: branding,
      link: "/services/branding-identity",
    },
    {
      title: "Digital Marketing",
      description:
        "Empowering businesses reach their target audience with strategy.",
      icon: digital,
      link: "/services/digital-marketing",
    },
    {
      title: "Product Design",
      description:
        "Empowering businesses reach their target audience with strategy.",
      icon: design,
      link: "/services/product-design",
    },
    {
      title: "Web Development",
      description:
        "Our team creates visually responsive and high-performance websites.",
      icon: web,
      link: "/services/web-development",
    },
    {
      title: "App Development",
      description:
        "We craft innovative mobile applications that prioritize functionality, design.",
      icon: app,
      link: "/services/app-development",
    },
    {
      title: "Motion Graphics & Production",
      description:
        "We bring your stories to life through dynamic motion graphics.",
      icon: motion,
      link: "/services/motion-graphics-production",
    },
    {
      title: "Graphics Design",
      description:
        "Graphic design: the art of communicating ideas visually, blending creativity.",
      icon: graphics,
      link: "/services/graphics-design",
    },
  ];

  return (
    <div className="max-w-5xl bg-[#F8F8F8] border border-white rounded-xl p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="flex items-center gap-x-5 bg-transparent hover:bg-yellow-primary transition-all duration-300 ease-in-out p-4 rounded-xl"
          >
            <div className="w-[70px] rounded-xl">
              <Image
                src={service.icon}
                alt={service.title}
                width={1000}
                height={1000}
                className="h-full w-full "
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-3 text-black flex items-center gap-x-2">
                {service.title} <IoMdArrowForward />
              </h3>
              <p className="font-satoshi text-base text-black/50">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsNavbar;
