import React from "react";
import new_hero from "@/public/new_hero.png";
import Ichota from "@/public/Ichota.png";
import Micro from "@/public/Micro.png";
import BeyondTheory from "@/public/BeyondTheory.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4  md:px-[140px]  flex-grow">
      <div className="flex flex-col items-center w-full">
        <p className="text-center text-[10px] md:text-[14px] font-san font-normal py-2 px-5 bg-[#F9EDFE] rounded-[50px] md:py-3 md:px-4">
          Increasing your productivity at your convenience!
        </p>

        <h1 className="text-center font-bold text-[40px] leading-[45px] md:text-[60px] md:leading-[69px] font-san mt-8">
          Matched with
          <span className="ml-4 text-grad">
            VA and Onboarding
          </span>
          <br className="block" />
          Delivered in 12 Hours
        </h1>

        <p className="text-center font-normal w-full mt-8 font-san text-[16px] leading-[30px] md:text-[20px] md:w-[95%]">
          Increase productivity, lower stress, and focus on what truly matters.
          Let us handle the rest.
        </p>

        <a
          href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-2 px-6 md:py-3 md:px-12 text-white text-[16px] bg-primary hover:bg-black hover:outline-black font-bold font-san outline outline-1 outline-primary rounded-[50px] mt-8 transition-colors">
            Hire A Virtual Assistant
          </button>
        </a>

        <Image
          src={new_hero}
          alt="Illustration showing virtual assistant working with tools"
          className="mt-10 w-full max-w-[1096px] cursor-pointer"
        />

        <p className="text-center font-normal w-full md:w-[95%] mt-16 md:mt-8 font-san text-[16px] leading-[30px] md:text-[20px]">
          Trusted By
        </p>

        <div className="flex justify-center items-center gap-4 md:gap-10 mt-4 md:mt-0">
          <Image
            src={Ichota}
            alt="Ichota Logo"
            className="w-[80px] md:w-auto md:max-w-full h-auto"
          />
          <Image
            src={Micro}
            alt="Micro Logo"
            className="w-[80px] md:w-auto md:max-w-full h-auto"
          />
          <Image
            src={BeyondTheory}
            alt="Beyond Theory Logo"
            className="w-[80px] md:w-auto md:max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
