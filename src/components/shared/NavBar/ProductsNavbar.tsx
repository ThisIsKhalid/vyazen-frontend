import agency from "@/assets/icons/agency.png";
import business from "@/assets/icons/business.png";
import finance from "@/assets/icons/finance.png";
import technology from "@/assets/icons/technology.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

const ProductsNavbar = () => {
  const products = [
    {
      title: "Agency Websites",
      description:
        "Empowering businesses reach their target audience with strategy.",
      icon: agency,
      link: "/our-products/agency-websites",
    },
    {
      title: "Business Websites",
      description:
        "Our UI/UX design services ensure your digital products offer seamless user.",
      icon: business,
      link: "/our-products/business-websites",
    },
    {
      title: "Technology Websites",
      description:
        "We craft innovative mobile applications that prioritize functionality, design.",
      icon: technology,
      link: "/our-products/technology-websites",
    },
    {
      title: "Finance Websites",
      description:
        "Empowering businesses reach their target audience with strategy.",
      icon: finance,
      link: "/our-products/finance-websites",
    },
  ];

  return (
    <div className="xl:w-[500px] md:w-[450px] bg-[#F8F8F8] border border-white rounded-xl p-6 ">
      {products.map((product, index) => (
        <Link
          key={index}
          href={product.link}
          className="flex items-center gap-x-5 hover:bg-yellow-primary transition-all duration-300 ease-in-out p-4 rounded-xl w-full"
        >
          <div className="flex-none w-[70px] rounded-xl">
            <Image
              src={product.icon}
              alt={product.title}
              width={1000}
              height={1000}
              className="h-full w-full "
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-3 text-black flex items-center gap-x-2">
              {product.title} <IoMdArrowForward />
            </h3>
            <p className="font-satoshi text-base text-black/50 text-wrap">
              {product.description}
            </p>
          </div>
        </Link>
      ))}

      {/* view more button */}
      <div className="flex items-center justify-center mt-6">
        <Link
          href="/our-products"
          className="border border-yellow-primary text-black font-semibold text-lg px-5 py-2 rounded-xl hover:bg-yellow-primary transition-all duration-300 ease-in-out"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ProductsNavbar;
