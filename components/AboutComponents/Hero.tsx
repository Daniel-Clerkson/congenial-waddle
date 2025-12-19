import React from "react";
import Image from "next/image";
import new_hero from "@/public/about_hero.png";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-[140px] md:py-20 lg:py-24">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        
        {/* Badge - Responsive padding and text */}
        <p className="text-center text-[12px] md:text-[14px] font-san font-normal py-2 px-5 md:py-3 md:px-6 bg-[#F9EDFE] rounded-full text-[#6A0DAD]">
          Increasing your productivity at your convenience!
        </p>

        {/* Heading - Fluid text sizes and line heights */}
        <h1 className="text-center font-bold text-[32px] leading-[40px] sm:text-[48px] sm:leading-[56px] md:text-[60px] md:leading-[69px] font-san mt-6 md:mt-8 max-w-[900px]">
          Your Productivity
          <span className="block sm:inline-block sm:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#F55BC3]">
            SuperCharged
          </span>
        </h1>

        {/* Subtext - Controlled width for better readability */}
        <p className="text-center font-normal mt-6 md:mt-8 font-san text-[16px] leading-[26px] md:text-[20px] md:leading-[32px] max-w-[800px] text-gray-700">
          Drowning in tasks? We’ve got your back! Our expert virtual assistants
          handle the heavy lifting—so you can focus on growing your business
          while we take care of the rest.
        </p>

        {/* CTA Button - Larger tap target on mobile */}
        <div className="mt-8 md:mt-10">
          <a
            href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="py-3 px-8 md:py-4 md:px-14 text-white text-[16px] bg-[#6A0DAD] hover:bg-black font-bold font-san rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95">
              Send A Request
            </button>
          </a>
        </div>

        {/* Hero Image - Responsive sizing with priority loading */}
        <div className="mt-12 md:mt-16 w-full flex justify-center">
          <Image
            src={new_hero}
            alt="Illustration showing virtual assistant working with tools"
            priority // Helps with LCP SEO scores
            className="w-full h-auto max-w-[1096px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;