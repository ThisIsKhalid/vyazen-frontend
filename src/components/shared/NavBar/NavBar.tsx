"use client";

import navLogo from "@/assets/images/nav-logo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Dropdown icon
import { FiMenu, FiX } from "react-icons/fi"; // Menu and close icons

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-customGradient text-white border-b border-white/10">
        <section className="container py-6 flex justify-between items-center">
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
          <ul className="hidden md:flex font-satoshi font-medium lg:gap-x-10 md:gap-x-3 items-center text-nowrap">
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
            <li className="relative group">
              <a
                href="#products"
                className="text-base leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out  flex items-center"
              >
                Products <FaPlus className="ml-1 text-xs" />
              </a>
            </li>
            <li className="relative group">
              <a
                href="#our-services"
                className="text-base leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out  flex items-center"
              >
                Services <FaPlus className="ml-1 text-xs" />
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-base leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
              >
                Blog
              </a>
            </li>
          </ul>

          <button className="hidden md:flex w-[192px] h-[52px] py-3 px-8 border border-yellow-primary rounded-full text-yellow-primary hover:bg-yellow-primary hover:text-black opacity-100 transition duration-300 text-nowrap">
            Get Started Here
          </button>

          {/* Mobile Menu Icon */}

          <button className="md:hidden" onClick={toggleSidebar}>
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
    </>
  );
};

export default NavBar;
