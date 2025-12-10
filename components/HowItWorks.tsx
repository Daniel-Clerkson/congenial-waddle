import React from "react";
import Image, { StaticImageData } from "next/image";

// Assuming these imports are local assets and are StaticImageData objects in a Next.js environment
import work1 from "@/public/work1.png";
import work2 from "@/public/work2.png";
import work3 from "@/public/work3.png";
import work4 from "@/public/work4.png";
import work5 from "@/public/work5.png";

// --- 1. TYPE DEFINITIONS ---

interface WorkStep {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

interface StepCardProps {
  step: WorkStep;
}

// --- 2. DATA STRUCTURE ---

const WORK_STEPS: WorkStep[] = [
  {
    id: 1,
    image: work1,
    title: "Consultation",
    description: "We start with a consultation to understand your unique needs and goals.",
  },
  {
    id: 2,
    image: work2,
    title: "VA Matching",
    description: "We’ll match you with a virtual assistant whose skills align with your requirements.",
  },
  {
    id: 3,
    image: work3,
    title: "Onboarding & Meet your Team",
    description: "Meet your ReliAssist Pro during our onboarding call. Our team will help with tech setup, workflow management tools, and more.",
  },
  {
    id: 4,
    image: work4,
    title: "Task Management",
    description: "Easily assign and monitor tasks via your personal dashboard, where you can communicate directly with your VA.",
  },
  {
    id: 5,
    image: work5,
    title: "Ongoing Support",
    description: "Our support doesn’t stop once you’re set up. We’re here to ensure your experience is smooth and successful.",
  },
];

// --- 3. SUB-COMPONENT: Step Card ---

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    // Cleaned up spacing and class names
    <div className="w-full mb-8 md:mb-0">
      {/* Next.js Image Component */}
      <Image
        src={step.image}
        alt={step.title + " icon"}
        className="mb-4 w-[60px] h-auto" // Set a consistent size for the icons
        width={60}
        height={60}
        quality={100}
      />
      {/* Title */}
      <p className="font-semibold text-lg mb-2">
        {step.title}
      </p>
      {/* Description: Replaced font-Regular with font-normal */}
      <p className="font-normal text-[16px] text-gray-700">
        {step.description}
      </p>
    </div>
  );
};


// --- 4. MAIN COMPONENT: HowItWorks ---

const HowItWorks: React.FC = () => {
  return (
    // Removed fixed height and unnecessary percentage margins/padding. Used min-h for responsiveness.
    <div className="min-h-[700px] py-16 px-4 md:px-[100px]">
      
      {/* Header Section */}
      <h1 className="font-bold text-[28px] md:text-[56px] mb-4">
        How{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          ReliAssist works
        </span>
      </h1>
      <p className="font-normal text-[14px] md:text-[18px] w-full md:w-[60%] lg:w-[45%] mb-12">
        {/* Replaced font-Regular with font-normal */}
        Effortless support tailored to your business needs—whether it’s customer
        service, technical assistance, social media management, or specialized
        projects, our expert VAs are here to help you stay productive and
        efficient.
      </p>

      {/* Steps Layout: Using CSS Grid for better control than flex-wrap in two fixed rows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12 lg:gap-x-16 mt-16">
        {WORK_STEPS.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;