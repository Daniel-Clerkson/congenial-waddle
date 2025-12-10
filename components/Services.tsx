import React from "react";
import Slider from "./Slider"; 
import Link from "next/link";

const Services: React.FC = () => {
  return (
    // Outer Container: Removed unnecessary fixed vertical padding on the top, using py-10 for overall spacing.
    <div id="Services" className="py-10 px-4 md:px-[100px]">
      
      {/* Title */}
      <h1 className="font-bold text-[28px] md:text-[46px] mb-[15px]">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Services
        </span>
      </h1>
      
      {/* Description */}
      <p className="font-normal font-Rale text-[14px] md:text-[18px] w-full md:w-[45%]">
        {/* Replaced font-Regular with font-normal for standard Tailwind practice */}
        Effortless support tailored to your business needs—whether it’s customer
        service, technical assistance, social media management, or specialized
        projects, our expert VAs are here to help you stay productive and
        efficient.
      </p>
      
      {/* CTA Button */}
      {/* NOTE: If using Next.js, this should be Link from 'next/link' */}
      <Link href="/service">
        <button className="py-2 px-6 md:py-3 md:px-12 text-white text-[16px] bg-secondary hover:bg-black hover:outline-black font-bold font-Rale outline outline-1 outline-primary rounded-[50px] mt-8 transition-all">
          Get Started
        </button>
      </Link>
      
      {/* Slider Component */}
      <Slider />
      
    </div>
  );
};

export default Services;