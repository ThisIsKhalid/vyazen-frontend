import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users, Clock } from "lucide-react";
import CallToAction from "@/components/shared/CallToAction/CallToAction";

export default function ServiceDetails() {
  return (
    <div className="container mx-auto">
      <div className="md:mt-[140px] sm:mt-[70px] mt-[50px] grid grid-cols-1 md:grid-cols-[auto_1fr]  gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 h-[520px] bg-white ml-[72px] p-6 border-r rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-4">Service Categories</h3>
          <div className="space-y-2">
            <Link
              href="/our-services/ux-ui-design"
              className="flex items-center justify-between px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:shadow-md"
            >
              <span>UX/UI Design</span>
              <span className="text-black">→</span>
            </Link>
            <Link
              href="/our-services/web-development"
              className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:shadow-md"
            >
              <span>Web Development</span>
              <span>→</span>
            </Link>
            <Link
              href="/our-services/branding"
              className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:shadow-md"
            >
              <span>Branding & Identity</span>
              <span>→</span>
            </Link>
            <Link
              href="/our-services/app-development"
              className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:shadow-md"
            >
              <span>App Development</span>
              <span>→</span>
            </Link>
            <Link
              href="/our-services/digital-marketing"
              className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:shadow-md"
            >
              <span>Digital Marketing</span>
              <span>→</span>
            </Link>
            <Link
              href="/our-services/motion-graphics"
              className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:shadow-md"
            >
              <span>Motion Graphics</span>
              <span>→</span>
            </Link>
            <Link
              href="/our-services/product-design"
              className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:shadow-md"
            >
              <span>Product Design</span>
              <span>→</span>
            </Link>
            <Link
              href="/our-services/graphics-design"
              className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:shadow-md"
            >
              <span>Graphics Design</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <main>
          <div className="max-w-6xl py-12 px-6">
            {/* Hero Section */}
            <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden mb-12">
              <Image
                src="/path-to-your-image.png"
                alt="UX/UI Design Service"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-8 text-white">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">UX/UI Design Service</h1>
                <p className="max-w-xl text-sm sm:text-lg">
                  We believe exceptional design is at the heart of every successful digital experience. Our UI/UX design
                  services focus on creating not only visually stunning but also intuitive and functional solutions.
                </p>
              </div>
            </div>

            {/* Service Features */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">Service Features:</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2">Quality & Reliable</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Our services are optimized to meet the unique needs of your business.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2">Licensed & Insured</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Our services are protected to meet the unique needs of your business.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2">Skilled Staff</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Our experts are trained to meet the unique needs of your business.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2">Warranty & Maintained</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Our services are maintained to meet the unique needs of your business.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">Why You Should Choose Our UX/UI Service:</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Creative Campaign Excellence</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    We believe exceptional design is at the heart of every successful digital experience. Our
                    UI/UX design services create interfaces that not only look stunning but also provide intuitive
                    navigation and seamless user experiences.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Digital Advertising Excellence</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Our team specializes in creating digital experiences that captivate and convert. Through strategic
                    design thinking, we craft interfaces that resonate with your target audience.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Influencer Outreach Services</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Our UX/UI designs are crafted to maximize impact across platforms, ensuring your digital
                    presence stands out in a crowded market.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <CallToAction />
    </div>
  );
}
