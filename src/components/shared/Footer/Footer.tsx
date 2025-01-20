import vectorImg from "@/assets/images/footer-vector.png";
import navLogo from "@/assets/images/nav-logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiMapPinAreaFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className=" bg-customGradient text-white overflow-hidden md:mt-[140px] sm:mt-[70px] mt-[50px]">
      <div className="container py-28 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Address */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="flex items-center"
            style={{ width: "196px", height: "40px" }}
          >
            <Image
              src={navLogo}
              alt="Vyazen"
              className="object-contain"
              width={1000}
              height={1000}
            />
          </Link>
          <p className="font-satoshi text-lg font-medium leading-7 my-10">
            2118 Thornridge Cir, Syracuse,
            <br />
            Connecticut 35624
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4">
            <a
              href="#"
              className="w-[55px] h-[55px] flex items-center justify-center bg-white/10 shadow-inner shadow-white/20 rounded-full hover:bg-yellow-primary hover:text-black transition"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="w-[55px] h-[55px] flex items-center justify-center bg-white/10 shadow-inner shadow-white/20 rounded-full hover:bg-yellow-primary hover:text-black transition"
            >
              <FaLinkedinIn className="text-xl" />
            </a>

            <a
              href="#"
              className="w-[55px] h-[55px] flex items-center justify-center bg-white/10 shadow-inner shadow-white/20 rounded-full hover:bg-yellow-primary hover:text-black transition"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="w-[55px] h-[55px] flex items-center justify-center bg-white/10 shadow-inner shadow-white/20 rounded-full hover:bg-yellow-primary hover:text-black transition"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Useful Links Column 1 */}
        <div>
          <h3 className="text-2xl font-semibold leading-6 mb-8">
            Useful Links
          </h3>
          <ul className="flex flex-col gap-y-4 text-base font-satoshi font-medium">
            <li>
              <a href="#about" className="hover:text-yellow-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-primary">
                Our Services
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-yellow-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links Column 2 */}
        <div>
          <h3 className="text-2xl font-semibold leading-6 mb-8">
            Useful Links
          </h3>
          <ul className="flex flex-col gap-y-4 text-base font-satoshi font-medium">
            <li>
              <a href="#about" className="hover:text-yellow-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-primary">
                Our Services
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-yellow-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-semibold leading-6 mb-8">Contact Us</h3>
          <ul className="flex flex-col gap-y-4 text-base font-satoshi font-medium">
            <li className="flex items-center">
              <span className="mr-2 text-yellow-primary">
                <PiMapPinAreaFill className="text-2xl" />
              </span>
              55 Main St W, Grimsby, Ontario
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-yellow-primary">
                <MdOutlineEmail className="text-2xl" />
              </span>
              launchsaudi@gmail.com
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-yellow-primary">
                <LuPhoneCall className="text-2xl" />
              </span>
              +880 (217) 555-0113
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative text-center border-t border-white/10 py-8 font-satoshi font-medium text-lg">
        <p className="">
          Copyright © 2025, All Rights Reserved By{" "}
          <a
            href="#"
            className="text-yellow-primary hover:text-yellow-400 underline underline-offset-4"
          >
            Vyazen LLC
          </a>
        </p>
        {/* Vector Image absolute bottom */}
        <Image
          src={vectorImg}
          alt="Vector"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className="absolute bottom-0 left-0 right-0 "
        />
      </div>
    </footer>
  );
};

export default Footer;
