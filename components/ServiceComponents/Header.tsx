import React from "react";
import service_hero from "@/public/service_hero.png";
import Ichota from "@/public/Ichota.png";
import Micro from "@/public/Micro.png";
import BeyondTheory from "@/public/BeyondTheory.png";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4  md:px-[140px]  flex-grow">
      <div className="flex flex-col items-center w-full">
        <p className="text-center text-[10px] md:text-[14px] font-san font-normal py-2 px-5 bg-[#F9EDFE] rounded-[50px] md:py-3 md:px-4">
          Increasing your productivity at your convenience!
        </p>

        <h1 className="text-center font-semibold text-[40px] leading-[45px] md:text-[60px] md:leading-[69px] font-san mt-8">
          <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            <i>Virtual Assistance </i>
          </span>
          To Meet Every Business Need
        </h1>

        <p className="text-center font-normal w-full mt-8 font-san text-[16px] leading-[30px] md:text-[20px] md:w-[95%]">
          No two businesses are the same, and we believe your support should
          reflect that. Our virtual assistants are skilled in a variety of
          areas, making it easy for you to get the help you need
        </p>

        <a
          href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-2 px-6 md:py-3 md:px-12 text-white text-[16px] bg-primary hover:bg-black hover:outline-black font-bold font-san outline outline-1 outline-primary rounded-[50px] mt-8 transition-colors">
            Send A Request
          </button>
        </a>

        <Image
          src={service_hero}
          alt="Illustration showing virtual assistant working with tools"
          className="mt-10 w-full max-w-[1096px]"
        />
      </div>
    </div>
  );
};

export default Header;
