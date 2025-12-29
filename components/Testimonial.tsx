"use client"
import React, { useRef } from "react";
import Image from "next/image";

import arrow_left from "@/public/arrow_left.svg";
import arrow_right from "@/public/arrow_right.svg";

// --- 1. TYPE DEFINITIONS ---

interface TestimonialData {
  description: string;
  company: string;
  clientName: string; // Renamed for clarity
  title: string;
  bgColor: string;
}

// --- 2. DATA STRUCTURE ---

const TESTIMONIALS: TestimonialData[] = [
  {
    description: `Providing seamless, professional assistance to enhance customer satisfaction—handling inquiries, resolving complaints, processing orders, and delivering real-time support through live chat.`,
    company: "Ichota Limited",
    clientName: "Theodora Chiminez",
    title: "CEO, Ichota",
    bgColor: "bg-[#330C49]",
  },
  {
    description: `Enhancing your online presence with engaging content, strategic posting, audience interaction, and performance tracking—while delivering visually compelling graphics to elevate your brand.`,
    company: "BeyondTheory",
    clientName: "Stephanie Aniche",
    title: "Operations Lead",
    bgColor: "bg-[#330C49]",
  },
  {
    description: `Managing day-to-day administrative tasks can be time-consuming. ReliAssist’s administrative support services are designed to handle these essential functions, allowing you to focus on growing your business without getting bogged down by routine tasks.`,
    company: "Micrographia",
    clientName: "Obiajulu Anayo",
    title: "CEO & Founder",
    bgColor: "bg-[#330C49]",
  },
  {
    description: `The service has been good so far and looking forward to more collaborative engagements.`,
    company: "Cevis Technologies",
    clientName: "Adeyini Babajide",
    title: "Lead Consultant",
    bgColor: "bg-[#330C49]",
  },
  {
    description: `Great selection of VPA and the VA has been a great support for us.`,
    company: "Bana Daff",
    clientName: "Allin Tech",
    title: "CEO & Founder",
    bgColor: "bg-[#330C49]",
  },
  {
    description: `I love your VA selection and the assigned VA was highly satisfactory, creative and made suggestions to improve our social media.`,
    company: "Toluwa Oyeleye",
    clientName: "Zoah Consultancy",
    title: "Founder",
    bgColor: "bg-[#330C49]",
  },
];

// --- 3. MAIN COMPONENT ---

const Testimonial: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mainGradient =
    "bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]";

  const scroll = (direction: "left" | "right") => {
    // Scroll amount set slightly larger than card width for full transition
    const cardWidth = 516;

    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[600px] bg-[#2A0B3B] py-20 px-4 md:px-[100px] mt-20 md:mt-0">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 mb-10">
        {/* Title */}
        <div>
          <h1 className="font-bold text-white text-[28px] md:text-[56px] mb-4 md:mb-0">
            Hear from Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
              Happy Clients
            </span>
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition duration-300"
            aria-label="Scroll left"
          >
            <Image
              src={arrow_left}
              alt="Scroll left"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition duration-300"
            aria-label="Scroll right"
          >
            <Image
              src={arrow_right}
              alt="Scroll right"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
      </div>

      {/* Scrollable Testimonial Container */}
      <div
        ref={scrollRef}
        className="w-full overflow-hidden scrollbar-hide"
      >
        <div className="flex space-x-6 py-2 mt-10">
          {TESTIMONIALS.map((item, index) => (
            // UI Improvement: Added gradient border wrapper
            <div
              key={index}
              className={`
                    p-0.5 rounded-[20px] // Padding for the gradient effect
                    bg-gradient-to-br from-white/10 to-transparent shadow-xl
                `}
            >
              <div
                className={`
                        w-[300px] md:w-[500px] h-[350px] md:h-[400px] shrink-0 text-white 
                        px-6 md:px-10 py-10 md:py-16 rounded-[20px] shadow-inner shadow-black/30
                        flex flex-col justify-between // Center content vertically
                        bg-[#1D0033] // Darker base color
                    `}
              >
                {/* Content */}
                <p className="font-normal italic text-white text-[16px] md:text-[18px] mb-8 line-clamp-6">
                  “{item.description}”
                </p>

                {/* Client Info */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="font-bold text-lg text-[#FFCDEF] mb-1">
                    {item.clientName}
                  </p>

                  <p className="font-normal text-sm text-gray-300">
                    {item.title}
                  </p>

                  <p
                    className="text-transparent bg-clip-text text-sm"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(106,13,173,1), rgba(245,1,195,1))",
                    }}
                  >
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
