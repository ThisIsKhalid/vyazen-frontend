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
      <nav className="bg-customGradient text-white">
        <section className="container flex justify-between items-center">
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
          <ul className="hidden md:flex gap-x-10 items-center">
            <li>
              <Link
                href="/"
                className="text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
              >
                About Us
              </a>
            </li>
            <li className="relative group">
              <a
                href="#products"
                className="text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out  flex items-center"
              >
                Products <FaPlus className="ml-1 text-xs" />
              </a>
            </li>
            <li className="relative group">
              <a
                href="#services"
                className="text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out  flex items-center"
              >
                Services <FaPlus className="ml-1 text-xs" />
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-base font-medium leading-6 text-left hover:text-yellow-primary hover:underline underline-offset-2 decoration-yellow-primary transition-all duration-300 ease-in-out "
              >
                Blog
              </a>
            </li>
          </ul>

          <button className="w-[192px] h-[52px] py-3 px-8 border border-yellow-primary rounded-full text-yellow-primary hover:bg-yellow-primary hover:text-black opacity-100 transition duration-300 text-nowrap my-6">
            Get Started Here
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </section>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-xl font-bold">
            Vyazen
          </Link>
          <button onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        </div>
        <ul className="space-y-4 px-6">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-yellow-400">
              Products
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-yellow-400">
              Blog
            </a>
          </li>
          <li>
            <a
              href="#get-started"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 block text-center"
            >
              Get Started Here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
