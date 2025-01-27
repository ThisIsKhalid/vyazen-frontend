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
      link: "/products/agency-websites",
    },
    {
      title: "Business Websites",
      description:
        "Our UI/UX design services ensure your digital products offer seamless user.",
      icon: business,
      link: "/products/business-websites",
    },
    {
      title: "Technology Websites",
      description:
        "We craft innovative mobile applications that prioritize functionality, design.",
      icon: technology,
      link: "/products/technology-websites",
    },
    {
      title: "Finance Websites",
      description:
        "Empowering businesses reach their target audience with strategy.",
      icon: finance,
      link: "/products/finance-websites",
    },
  ];

  return (
    <div className="max-w-md bg-[#F8F8F8] border border-white rounded-xl p-6 ">
      <div className="grid grid-cols-1">
        {products.map((product, index) => (
          <Link
            key={index}
            href={product.link}
            className="flex items-center gap-x-5 bg-transparent hover:bg-yellow-primary transition-all duration-300 ease-in-out p-4 rounded-xl"
          >
            <div className="w-[70px] rounded-xl">
              <Image
                src={product.icon}
                alt={product.title}
                width={1000}
                height={1000}
                className="h-full w-full "
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-3 text-black flex items-center gap-x-2">
                {product.title} <IoMdArrowForward />
              </h3>
              <p className="font-satoshi text-base text-black/50">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsNavbar;
