import React from "react";
import  aboutReli from "@/public/aboutReli.png";
import why1 from "@/public/why1.png";
import  why2 from "@/public/why2.png";
import  why3 from "@/public/why3.png";
import why4  from "@/public/why4.png";
import Image from "next/image";

interface FeatureItem {
  iconSrc: string | any;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    iconSrc: why1,
    title: "Flexible & Scalable",
    description: "No long-term commitments or forced contract. Scale up and down as your needs change.",
  },
  {
    iconSrc: why2,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. You only pay for the services you need while enjoying exclusive bonuses on us.",
  },
  {
    iconSrc: why3,
    title: "Professional and Discreet VAs",
    // Corrected typo: "District" -> "Discreet"
    description: "Our highly trained VAs prioritize confidentiality, ensuring your information stays secure - no leaks, no worries.",
  },
  {
    iconSrc: why4,
    title: "Fast & Seamless Onboarding",
    description: "Get started in just 3 minutes and get matched with the right VA in under 12 hours.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-[700px] px-4 md:px-[100px] gap-16 md:gap-[80px] py-16">
      
      {/* LEFT SECTION: Content and Features */}
      <div className="basis-1/2 w-full">
        {/* Title */}
        <h1 className="w-full font-bold text-[28px] md:text-[46px] mb-4 mt-10">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            Choose ReliAssist
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-[14px] md:text-[20px] font-normal mb-10">
          A hassle-free way to get professional, discreet and highly skilled
          virtual assistant on your terms with no hidden fees or long-term
          commitments.
        </p>
        
        {/* Feature Cards */}
        <div className="space-y-6">
          {FEATURES.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              {/* Icon Image */}
              <Image src={item.iconSrc} width={64} height={64} className="w-[60px] flex-shrink-0 mt-1" alt={item.title + " icon"} />

              {/* Text Content */}
              <div>
                <h2 className="w-full font-bold text-[14px] md:text-[18px] mb-[4px]">
                  {item.title}
                </h2>
                <p className="text-[12px] md:text-[16px] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* RIGHT SECTION: Image */}
      <div className="basis-1/2 w-full flex justify-center md:justify-end">
        <Image 
          src={aboutReli} 
          alt="Illustration related to ReliAssist services" 
          className="w-full max-w-[400px] md:max-w-full h-auto" 
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;