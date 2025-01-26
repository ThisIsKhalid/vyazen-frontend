"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

export default function ServiceSidebar() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname.split("/").pop() || "ux-ui-design");

  const services = [
    { title: "UX/UI Design", slug: "ux-ui-design" },
    { title: "Web Development", slug: "web-development" },
    { title: "Branding & Identity", slug: "branding" },
    { title: "App Development", slug: "app-development" },
    { title: "Digital Marketing", slug: "digital-marketing" },
    { title: "Motion Graphics", slug: "motion-graphics" },
    { title: "Product Design", slug: "product-design" },
    { title: "Graphics Design", slug: "graphics-design" },
  ];

  return (
    <div className="w-[317px] lg:h-[520px] ">
      <div className="">
        {services.map((service, index) => (
          <div key={service.slug}>
            <Link href={`/our-services/${service.slug}`} legacyBehavior>
              <a
                className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer ${
                  active === service.slug
                    ? "bg-yellow-primary text-black shadow"
                    : "text-gray-700 hover:bg-gray-100 hover:shadow-md"
                }`}
                onClick={() => setActive(service.slug)}
              >
                <span className="font-satoshi font-bold pb-4  pt-1">{service.title}</span>
                <span className="font-semibold text-lg">
                  <IoMdArrowForward />
                </span>
              </a>
            </Link>
            {/* Render border only if not the last item */}
            {index < services.length - 1 && <div className="border-b"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
