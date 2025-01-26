import image from "@/assets/images/details img.png";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import Image from "next/image";
import ServiceSidebar from "../../../../components/pages/services/ServiceSidebar";

import { LiaAwardSolid } from "react-icons/lia";

export default function ServiceDetails() {
  return (
    <div className="container mx-auto">
      <div className="md:mt-[140px] sm:mt-[70px] mt-[50px] grid grid-cols-1 md:grid-cols-[auto_1fr]  gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-[357px]  md:h-[520px]   bg-[#F8F8F8] md:ml-[72px] p-6 border-r rounded-[20px] shadow-md">
          <ServiceSidebar />
        </div>

        {/* Main Content */}
        <main>
          <div className="max-w-6xl  px-6">
            {/*Hero section*/}
            <div className="">
              {/* Text Section */}
              <div className=" mb-6 ">
                <h1 className="text-2xl  font-bold w-[665px] text-black  ">
                  We believe exceptional design is at the heart of every
                  successful digital experience. Our UI/UX design services focus
                  on creating user-centered interfaces that are not only
                  visually stunning but also intuitive and functional.
                </h1>
              </div>

              {/* Image Section */}
              <div className="relative   rounded-lg mt-10 mb-20 overflow-hidden ">
                <Image
                  src={image} // Replace with the actual image path
                  alt="Craftwork"
                  className="w-full md:w-[879px]  h-auto"
                />
              </div>
            </div>
            {/* Service Features */}
            <section className="mb-16 w-[878px]">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Service Features:
              </h2>
              <p className="text-gray-600 mb-8 text-sm lg:text-base leading-relaxed">
                At Vyazen, we believe exceptional design is at the heart of
                every successful digital experience. Our UI/UX design services
                focus on creating user-centered interfaces that are not only
                visually stunning but also intuitive and functional. By
                combining creativity with strategy, we craft seamless
                experiences that engage users and drive results.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Quality & Reliable */}
                <div className="bg-[#F8F8F8] w-[427px] h-[275px] px-10 py-8 rounded-lg shadow-md ">
                  <div className="bg-yellow-primary w-20 h-20 rounded-full flex items-center justify-center mr-4">
                    <LiaAwardSolid className=" w-10 h-10 text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-6 mt-8 ">
                      Skilled Staff
                    </h3>
                    <p className="font-poppins text-[#545454]">
                      Our services are tailored to meet the unique needs of your
                      business.
                    </p>
                  </div>
                </div>
                {/* Licensed & Insured */}
                <div className="bg-[#F8F8F8] px-10 py-8 w-[427px] h-[275px] rounded-lg shadow-md ">
                  <div className="bg-yellow-primary w-20 h-20 rounded-full flex items-center justify-center mr-4">
                    <LiaAwardSolid className=" w-10 h-10 text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-6 mt-8 ">
                      Skilled Staff
                    </h3>
                    <p className="font-poppins text-[#545454]">
                      Our services are tailored to meet the unique needs of your
                      business.
                    </p>
                  </div>
                </div>
                {/* Skilled Staff */}
                <div className="bg-[#F8F8F8] px-10 py-8 rounded-lg w-[427px] h-[275px] shadow-md ">
                  <div className="bg-yellow-primary w-20 h-20 rounded-full flex items-center justify-center mr-4">
                    <LiaAwardSolid className=" w-10 h-10 text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-6 mt-8 ">
                      Skilled Staff
                    </h3>
                    <p className="font-poppins text-[#545454]">
                      Our services are tailored to meet the unique needs of your
                      business.
                    </p>
                  </div>
                </div>
                {/* Warranty & Maintained */}
                <div className="bg-[#F8F8F8] px-10 py-8 rounded-lg w-[427px] h-[275px] shadow-md ">
                  <div className="bg-yellow-primary w-20 h-20 rounded-full flex items-center justify-center mr-4">
                    <LiaAwardSolid className=" w-10 h-10 text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-6 mt-8 ">
                      Skilled Staff
                    </h3>
                    <p className="font-poppins text-[#545454]">
                      Our services are tailored to meet the unique needs of your
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
                Why You Should Choose Our UX/UI Service:
              </h2>
              <div className="space-y-6">
                <div className="space-y-6">
                  {/* Creative Campaign Excellence */}
                  <div className="flex items-center bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
                    <div className="w-1/2 pr-6">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        Creative Campaign Excellence
                      </h3>
                    </div>
                    <div className="w-1/2">
                      <p className="text-sm sm:text-base text-gray-600">
                        At Vyazen, we believe exceptional design is at the heart
                        of every successful digital experience. Our UI/UX design
                        services focus on user-centered interfaces.
                      </p>
                    </div>
                  </div>

                  {/* Digital Advertising Excellence */}
                  <div className="flex items-center bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
                    <div className="w-1/2 pr-6">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        Digital Advertising Excellence
                      </h3>
                    </div>
                    <div className="w-1/2">
                      <p className="text-sm sm:text-base text-gray-600">
                        At Vyazen, we believe exceptional design is at the heart
                        of every successful digital experience. Our UI/UX design
                        services focus on user-centered interfaces.
                      </p>
                    </div>
                  </div>

                  {/* Influencer Outreach Services */}
                  <div className="flex items-center bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
                    <div className="w-1/2 pr-6">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        Influencer Outreach Services
                      </h3>
                    </div>
                    <div className="w-1/2">
                      <p className="text-sm sm:text-base text-gray-600">
                        At Vyazen, we believe exceptional design is at the heart
                        of every successful digital experience. Our UI/UX design
                        services focus on user-centered interfaces.
                      </p>
                    </div>
                  </div>
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
