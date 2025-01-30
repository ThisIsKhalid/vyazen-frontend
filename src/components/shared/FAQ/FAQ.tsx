"use client";

import cn from "@/lib/cn";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";

const faqs = [
  {
    id: 1,
    question: "What kind of support do you get from the plan?",
    answer:
      "The plan provides detailed guidance and resources for successful project execution.",
  },
  {
    id: 2,
    question: "What are project milestones?",
    answer:
      "Project milestones are key points in the project timeline to measure progress.",
  },
  {
    id: 3,
    question: "Why is project management important?",
    answer:
      "Project management ensures proper planning, execution, and delivery of projects.",
  },
  {
    id: 4,
    question: "How do you handle changes in a project?",
    answer:
      "Changes in a project are handled by assessing their impact and implementing adjustments accordingly.",
  },
  {
    id: 5,
    question: "What is the role of a project manager?",
    answer:
      "A project manager oversees planning, execution, and delivery of a project to meet its goals.",
  },
  {
    id: 6,
    question: "What is a project management dashboard?",
    answer:
      "A dashboard provides a centralized view of project progress, metrics, and statuses.",
  },
  {
    id: 7,
    question: "What is the significance of project scope?",
    answer:
      "Project scope defines the boundaries, deliverables, and requirements of a project.",
  },
  {
    id: 8,
    question: "What is a project baseline?",
    answer:
      "A project baseline is the original plan against which progress is measured.",
  },
  {
    id: 9,
    question: "How do you manage project risks?",
    answer:
      "Project risks are managed by identifying, assessing, and mitigating potential threats.",
  },
  {
    id: 10,
    question: "How do you measure project success?",
    answer:
      "Project success is measured by achieving project goals within the constraints of time, cost, and quality.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpanded(expanded === id ? null : id); // Toggle the active FAQ
  };

  return (
    <section className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
      {/* Header Section */}
      <SectionHeader
        subtitle="FAQ"
        subtitleClass="white"
        title={
          <>
            <span className="font-bold">Frequently</span> asked <br />{" "}
            questions!
          </>
        }
        titleClass="lg:text-[64px] lg:leading-[74px] md:text-[48px] md:leading-[58px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={cn(
              " shadow-md rounded-3xl md:p-8 p-3 border border-black/10 h-fit transition-all duration-300 ease-in-out",
              {
                "bg-white": expanded !== faq.id,
                "bg-yellow-primary": expanded === faq.id,
              }
            )}
            data-aos="fade-up"
          >
            <div
              className="flex justify-between items-center cursor-pointer gap-1 md:gap-2"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3 className="text-base md:text-xl font-semibold">
                {faq.question}
              </h3>
              <button
                className={`transform transition-transform duration-300 md:p-2.5 p-1 rounded-full bg-[#F8F8F8] `}
              >
                {expanded === faq.id ? (
                  <FaMinus className="text-black " />
                ) : (
                  <FaPlus className="text-black" />
                )}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded === faq.id
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-8 text-black/50 text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
