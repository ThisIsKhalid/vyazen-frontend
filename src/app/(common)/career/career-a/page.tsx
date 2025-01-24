import CallToAction from "@/components/shared/CallToAction/CallToAction";
import CareerCard from "@/components/shared/CareerCard/CareerCard";
import React from "react";

export default function SingleCareerPage() {
  return (
    <>
      <div className="container md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <CareerCard
          title="Product Designer"
          location="Montreal, Canada"
          arrangement="Onsite"
          salaryRange="$50,000 - $80,000/year"
          link="/career/career-a"
          tags={["UI/UX", "Design", "Product"]}
          issuedAt={new Date().toISOString()}
        />
         <div className="max-w-4xl mx-auto mt-20 px-4  space-y-8">
      <section>
        <h1 className="text-[28px] font-semibold mb-4">Job Description</h1>
        <p className="text-black-secondary font-satoshi text-base mb-4">
        We&apos;re seeking a talented iOS Developer to join our team and help us build the next generation of mobile apps.
        </p>
        <p className="text-black-secondary font-satoshi text-base">
          As an iOS Developer, you will be responsible for designing, developing, testing, and deploying high-quality
          iOS applications. You will work closely with our design and product teams to bring our vision to life and
          deliver exceptional user experiences.
        </p>
        <div className="border-b mt-[50px] "></div>
      </section>

      <section>
        <h2 className="text-[28px] font-semibold mb-4">Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2 font-satoshi text-base text-black-secondary">
          <li>Design, develop, test, and deploy iOS applications.</li>
          <li>Collaborate with designers and product managers to create innovative and user-friendly apps.</li>
          <li>Write clean, efficient, and maintainable code.</li>
          <li>Stay up-to-date with the latest iOS technologies and trends.</li>
          <li>Troubleshoot and resolve technical issues.</li>
        </ul>
        <div className="border-b mt-[50px] "></div>
      </section>

      <section>
        <h2 className="text-[28px] font-semibold mb-4">Required Skills</h2>
        <ul className="list-disc list-inside space-y-2 font-satoshi text-base text-black-secondary">
          <li>Strong proficiency in Swift and Objective-C</li>
          <li>Experience with iOS development frameworks, tools, and libraries (e.g., UIKit, Cocoa Touch, Xcode)</li>
          <li>Understanding of iOS design patterns and best practices</li>
          <li>Knowledge of RESTful APIs and JSON</li>
          <li>Experience with version control systems (e.g., Git)</li>
          <li>Excellent problem-solving and debugging skills</li>
          <li>Ability to work independently and as part of a team</li>
        </ul>
        <div className="border-b mt-[50px] "></div>
      </section>

      <section>
        <h2 className="text-[28px] font-semibold mb-4">Salary</h2>
        <p className="text-black-secondary text-base font-satoshi">
          Salary will be commensurate with experience and qualifications. We offer a competitive compensation package
          that includes a base salary, benefits, and opportunities for professional growth.
        </p>
        <div className="border-b mt-[50px] "></div>
      </section>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg flex items-start gap-3">
        <div className="text-gray-400 mt-1">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-black-secondary font-satoshi">
        Please apply via our email at{" "}
          <a href="mailto:careers@zaivolt.io" className="text-black hover:underline">
          careers@Zaivolt.io
          </a>{" "}
          with your CV (make sure it has a link to your <br /> portfolio).
        </p>
      </div>
    </div>
      </div>
      <CallToAction />
    </>
  );
}
