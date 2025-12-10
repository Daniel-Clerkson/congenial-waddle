import Image from "next/image";
import React from "react";
import promo from "@/public/promo.png"

interface PromotionBannerProps {
  message: string;
  ctaText: string;
  ctaLink: string;
}

const PromotionBanner: React.FC<PromotionBannerProps> = ({
  message,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="relative w-full z-40">
      <div className="bg-[#6A0DAD] w-full flex items-center justify-center p-3 md:p-4 text-white">
        <p className="flex items-center text-[14px] md:text-[16px] font-sans font-medium text-center">
          <span className="text-pink-400 text-xl mr-2">
            <Image src={promo} width={64} height={64} alt="" />
          </span>
          {message}
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 font-bold hover:underline flex items-center transition-colors duration-200"
          >
            {ctaText}
            <span className="ml-1 text-xl">&#8594;</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default PromotionBanner;
