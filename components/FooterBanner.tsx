import React from "react";
import Image, { StaticImageData } from "next/image";

import grow from "@/public/grow.png"; 

// --- 1. TYPE DEFINITIONS (for clarity, though component takes no props) ---

interface FooterBannerProps {}

// --- 2. MAIN COMPONENT ---

const FooterBanner: React.FC<FooterBannerProps> = () => {
  const CTA_LINK = "https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P";
  
  return (
    // Cleaned up fixed height and applied the main dark background
    <div className="min-h-[450px] py-20 px-4 md:px-[150px] bg-[#2A0B3B]">
      
      {/* CTA Box Container: Uses a primary accent color for maximum visibility */}
      <div 
        className="
          flex items-center 
          bg-[#7B2AE5] // Bright primary purple accent background
          md:px-10 lg:px-[120px] p-6 rounded-xl 
          h-auto md:min-h-[300px] mt-8 overflow-hidden 
          shadow-2xl shadow-purple-900/50 
          relative 
        "
      >
        <div className="flex flex-col md:flex-row items-center w-full">
          
          {/* Text and Button Section (Left/Top) */}
          <div className="md:w-[60%] lg:w-[50%] mb-8 md:mb-0 relative z-10">
            <h1 className="font-bold text-white text-[28px] md:text-[32px] mb-4">
              Ready to Grow?
            </h1>
            <p className="font-normal text-white text-[16px] md:text-[18px] mb-6">
              Get matched with a skilled VA in 12 hours, cut your workload by
              50% instantly and save 80% in staff hiring.
            </p>

            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              <button 
                className="
                  py-3 px-12 text-primary bg-white 
                  text-[16px] font-bold rounded-[50px] 
                  transition-all duration-300
                  hover:bg-[#6A0DAD] hover:text-white hover:shadow-lg hover:shadow-black/20
                "
              >
                Talk To Us
              </button>
            </a>
          </div>
          
          <div className="md:w-[40%] lg:w-[50%] md:ml-10 relative">
            <Image 
              src={grow} 
              alt="Illustration of a chart growing, symbolizing business growth" 
              width={400} 
              height={300}
              className="w-full h-auto md:w-[400px] lg:w-[450px] object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;