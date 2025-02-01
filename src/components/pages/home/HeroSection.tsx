"use client";

import vector from "@/assets/images/home-banner-vector.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const smallVideoRef = useRef<HTMLDivElement | null>(null);
  const largeVideoRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLgOrBigger, setIsLgOrBigger] = useState(false);
  const [videoWidth, setVideoWidth] = useState(720);
  const videoHeight = (videoWidth / 16) * 9;

  useEffect(() => {
    const updateSize = () => {
      const newWidth =
        window.innerWidth >= 1024 ? 720 : window.innerWidth >= 768 ? 640 : 560;
      setVideoWidth(newWidth);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    // Function to check if the screen is LG or bigger
    const checkScreenSize = () => {
      const isLgScreen = window.innerWidth >= 1024;
      setIsLgOrBigger(isLgScreen);

      // Reset styles when screen is resized to less than lg
      if (!isLgScreen && smallVideoRef.current) {
        gsap.set(smallVideoRef.current, { clearProps: "all" });
      }
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (
      !isLgOrBigger ||
      !smallVideoRef.current ||
      !largeVideoRef.current ||
      !containerRef.current
    ) {
      return;
    }

    const smallVideo = smallVideoRef.current;
    const largeVideo = largeVideoRef.current;

    gsap.set(smallVideo, { transformOrigin: "top left" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "top 10%",
        scrub: true,
      },
    });

    tl.to(smallVideo, {
      scale: () => {
        const smallRect = smallVideo.getBoundingClientRect();
        const largeRect = largeVideo.getBoundingClientRect();
        return largeRect.width / smallRect.width;
      },
      x: () => {
        const smallRect = smallVideo.getBoundingClientRect();
        const largeRect = largeVideo.getBoundingClientRect();
        return largeRect.left - smallRect.left;
      },
      y: () => {
        const smallRect = smallVideo.getBoundingClientRect();
        const largeRect = largeVideo.getBoundingClientRect();
        return largeRect.top - smallRect.top;
      },
      ease: "power2.out",
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "top top",
      onLeaveBack: () => {
        gsap.to(smallVideo, { scale: 1, x: 0, y: 0 });
      },
    });
  }, [isLgOrBigger]);

  return (
    <section>
      <div className="bg-customGradient relative">
        <div className="absolute bottom-0 w-full">
          <Image src={vector} alt="vector" className="w-full" />
        </div>

        <div className="relative container xl:py-[140px] py-[70px] flex xl:flex-row flex-col gap-x-16 gap-y-10">
          <div className="text-center xl:text-left">
            <div className="text-center xl:text-left">
              <span className="py-1.5 px-8 rounded-full font-bold text-base tracking-[8px] uppercase shadow-md text-nowrap bg-[#FFFFFF0F] text-white">
                Digital Agency
              </span>
            </div>

            <h2 className="font-light text-5xl tracking-[-0.02em] uppercase md:text-[88px] md:leading-[103px] text-white md:my-[52px] my-10">
              <span className="font-bold">our </span>Creative digital
              <span className="font-bold"> agency.</span>
            </h2>

            <p className="text-white/60 max-w-[732px] mx-auto xl:mx-0 font-bold text-sm sm:text-base lg:text-lg">
              Welcome to Vyazen, where innovation drives transformation. We
              specialize in delivering tailored solutions that empower
              businesses to achieve their full potential.
            </p>

            <div className="md:mt-[52px] mt-10">
              <Link
                href="/our-products"
                className="bg-yellow-primary text-black px-10 py-4 rounded-full hover:bg-yellow-400 transition font-bold text-base"
              >
                Explore Products
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              ref={smallVideoRef}
              className="relative w-[280px] sm:w-[360px] lg:w-[420px] aspect-video rounded-xl bg-yellow-500 overflow-hidden"
            >
              <iframe
                src="https://www.youtube.com/embed/qWNfz8yC_eM?si=OFHkx5a3U_eIGIBP"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="container md:mt-[140px] sm:mt-[70px] mt-[50px] border border-red-500 flex items-center justify-center w-full"
      >
        <div
          ref={largeVideoRef}
          style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
          className=""
        ></div>
      </div>
    </section>
  );
}
