"use client";

import navLogo from "@/assets/icons/VyazenLogo.svg";
import cn from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Dropdown icon
import { FiMenu, FiX } from "react-icons/fi"; // Menu and close icons
import ProductsNavbar from "./ProductsNavbar";
import ServicesNavbar from "./ServicesNavbar";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  console.log(showProducts);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="relative">
      {/* Navbar */}
      <nav className="bg-customGradient text-white border-b border-white/10">
        <section className="container  flex justify-between items-center ">
          <Link
            href="/"
            className="flex items-center"
            style={{ width: "118px", height: "24px" }}
          >
            <Image
              src={navLogo}
              alt="Vyazen"
              className="object-contain"
              width={1000}
              height={1000}
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex font-satoshi font-medium lg:gap-x-10 md:gap-x-3 items-center text-nowrap">
            <li>
              <Link
                href="/"
                className="text-base leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-base leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
              >
                About Us
              </Link>
            </li>
            <li
              className="relative group py-8"
              onMouseEnter={() => {
                setShowProducts(true);
                setShowServices(false);
              }}
              onMouseLeave={() => setShowProducts(false)}
              onClick={() => setShowProducts(!showProducts)}
            >
              <p
                className={cn(
                  "text-base leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out  flex items-center cursor-pointer",
                  {
                    "text-yellow-primary": showProducts,
                  }
                )}
              >
                Products <FaPlus className="ml-1 text-xs" />
              </p>

              {/* ProductsNavbar */}

              <div
                className={`absolute xl:w-[500px] md:w-[450px] hidden md:block z-50 top-20 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
                  showProducts
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-5 pointer-events-none"
                }`}
              >
                <ProductsNavbar />
              </div>
            </li>
            <li
              className="relative group py-8"
              onMouseEnter={() => {
                setShowServices(true);
                setShowProducts(false);
              }}
              onMouseLeave={() => setShowServices(false)}
              onClick={() => setShowServices(!showServices)}
            >
              <p
                className={cn(
                  "text-base leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out flex items-center cursor-pointer",
                  {
                    "text-yellow-primary": showServices,
                  }
                )}
              >
                Services <FaPlus className="ml-1 text-xs" />
              </p>

              {/* ServicesNavbar with Smooth Animation */}
              <div
                className={`absolute xl:w-[1040px] lg:w-[900px] md:w-[520px] hidden md:block z-50 top-20 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
                  showServices
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-5 pointer-events-none"
                }`}
              >
                <ServicesNavbar />
              </div>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="text-base leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <button className="hidden lg:flex  py-3 px-12 border border-yellow-primary rounded-full text-yellow-primary hover:bg-yellow-primary hover:text-black opacity-100 transition duration-300 text-nowrap">
            Let&apos;s Talk
          </button>

          {/* Mobile Menu Icon */}

          <button className="lg:hidden" onClick={toggleSidebar}>
            <FiMenu size={24} />
          </button>
        </section>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-customGradient text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ width: "118px", height: "24px" }}
          >
            <Image
              src={navLogo}
              alt="Vyazen"
              className="object-contain"
              width={1000}
              height={1000}
            />
          </Link>
          <button onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        </div>
        <ul className="space-y-3 px-6">
          <li>
            <Link
              href="/"
              className="text-sm md:text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm md:text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
            >
              About Us
            </a>
          </li>
          <li className="relative group">
            <a
              href="#products"
              className="text-sm md:text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out  flex items-center"
            >
              Products <FaPlus className="ml-1 text-xs" />
            </a>
          </li>
          <li className="relative group">
            <a
              href="#services"
              className="text-sm md:text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out  flex items-center"
            >
              Services <FaPlus className="ml-1 text-xs" />
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="text-sm md:text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
            >
              Blog
            </a>
          </li>
        </ul>

        <div className="px-6 absolute bottom-5 w-full">
          <button className="w-full py-2 px-8 border border-yellow-primary rounded-full text-yellow-primary hover:bg-yellow-primary hover:text-black opacity-100 transition duration-300 text-nowrap">
            Get Started Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
